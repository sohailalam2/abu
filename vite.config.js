/* eslint-disable no-magic-numbers, camelcase */
import { join, resolve } from 'path';
import { readdirSync, writeFileSync } from 'fs';
import { defineConfig, loadEnv } from 'vite';

import pkg from './package.json';

const packageName = pkg.name.split('/')[1];

function getFileName(fmt, n) {
  const extension = fmt === 'es' ? 'mjs' : 'js';

  if (n.length) {
    return `${n}/index.${extension}`;
  }

  return `index.${extension}`;
}

function generateEntryMap(rootDir = join(__dirname, 'src'), isRecurse = false) {
  const excludes = ['__tests__'];
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  const dirs = readdirSync(rootDir).filter(f => !f.endsWith('.ts') && !excludes.includes(f));

  const indexOfSrc = rootDir.indexOf('/src/');
  const key = indexOfSrc > 0 ? rootDir.substring(indexOfSrc + 5) : rootDir;

  const entries = dirs
    .map(dir => generateEntryMap(join(rootDir, dir), true))
    .reduce((acc, obj) => Object.assign(acc, obj), {
      [key]: resolve(rootDir, `${rootDir}/index.ts`),
      '': 'src/index.ts',
    });

  if (!isRecurse) {
    // eslint-disable-next-line security/detect-object-injection
    delete entries[rootDir];
  }

  return entries;
}

function updatePackageJsonExportsIfNeededAndStopIfUpdated(generatedEntryMap) {
  const packageExports = pkg.exports;

  let hasUpdates = false;

  const exportsMap = Object.keys(generatedEntryMap)
    .map(key => {
      let exportKey = '.';

      if (key.length > 0) {
        exportKey += `/${key}`;
      }

      // eslint-disable-next-line security/detect-object-injection
      if (!hasUpdates && !packageExports[exportKey]) {
        hasUpdates = true;
      }

      return {
        [exportKey]: {
          import: key.length > 0 ? `./dist/${key}/index.mjs` : `./dist/index.mjs`,
          require: key.length > 0 ? `./dist/${key}/index.js` : `./dist/index.js`,
        },
      };
    })
    .reduce((acc, obj) => Object.assign(acc, obj), {});

  if (hasUpdates) {
    pkg.exports = exportsMap;
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    writeFileSync(join(__dirname, 'package.json'), JSON.stringify(pkg, null, 2));

    // eslint-disable-next-line no-console
    console.log(`
     \n\n\n
     ---------------------------------------------------------------------------
     !!! IMPORTANT !!!

     package.json "exports" have been updated... commit the changes and continue
     ---------------------------------------------------------------------------
     \n\n\n
    `);
    process.exit(0);
  }
}

const entryMap = generateEntryMap();

updatePackageJsonExportsIfNeededAndStopIfUpdated(entryMap);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isProduction = env.NODE_ENV === 'production';

  return {
    build: {
      lib: {
        entry: entryMap,
        fileName: getFileName,
        name: packageName,
        formats: ['es', 'cjs'],
      },
      sourcemap: !isProduction,
      minify: 'terser',
      terserOptions: { keep_classnames: true },
    },
    define: {
      'import.meta.vitest': 'undefined',
      __LIB_NAME__: JSON.stringify(env.npm_package_name),
      __LIB_VERSION__: JSON.stringify(env.npm_package_version),
      __ENVIRONMENT__: JSON.stringify(env.NODE_ENV),
    },
    resolve: { alias: { '@': resolve(__dirname, 'src') }, mainFields: ['browser', 'module', 'jsnext:main', 'jsnext'] },
    server: { watch: { usePolling: true } },
    test: {
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'json', 'html'],
      },
      includeSource: ['src/**/*.{js,ts}'],
    },
  };
});

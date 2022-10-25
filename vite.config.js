import { defineConfig, loadEnv } from 'vite';
import { join, resolve } from 'path';

import pkg from './package.json';
import { readdirSync } from 'fs';

// eslint-disable-next-line no-magic-numbers
const name = pkg.name.split('/')[1];

const entryMap = readdirSync(join(__dirname, 'src'))
  .filter(dir => !dir.includes('.'))
  .concat([name])
  .map(dir => {
    if (dir === name) {
      return { '': 'src/index.ts' };
    }

    return { [dir]: resolve(__dirname, `src/${dir}/index.ts`) };
  })
  .reduce((acc, obj) => Object.assign(acc, obj), {});

function getFileName(fmt, n) {
  const extension = fmt === 'es' ? 'mjs' : 'js';

  if (n.length) {
    return `${n}/index.${extension}`;
  }

  return `index.${extension}`;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isProduction = env.NODE_ENV === 'production';

  return {
    build: {
      lib: {
        entry: entryMap,
        fileName: getFileName,
        name,
        formats: ['es', 'cjs'],
      },
      sourcemap: !isProduction,
    },
    define: {
      'import.meta.vitest': 'undefined',
      __LIB_NAME__: JSON.stringify(env.npm_package_name),
      __LIB_VERSION__: JSON.stringify(env.npm_package_version),
      __ENVIRONMENT__: JSON.stringify(env.NODE_ENV),
    },
    resolve: { alias: { '@': resolve(__dirname, 'src') } },
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

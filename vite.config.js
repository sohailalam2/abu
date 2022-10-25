import { defineConfig } from 'vite';
import { join, resolve } from 'path';

import pkg from './package.json';
import { readdirSync } from 'fs';

// eslint-disable-next-line no-magic-numbers
const name = pkg.name.split('/')[1];
const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

const entryMap = readdirSync(join(__dirname, 'src'))
  .filter(dir => !dir.includes('.'))
  .concat([name])
  .map(dir => ({ [dir]: resolve(__dirname, dir === name ? 'src/index.ts' : `src/${dir}/index.ts`) }))
  .reduce((acc, obj) => Object.assign(acc, obj), {});

export default defineConfig({
  build: {
    lib: {
      entry: entryMap,
      fileName: (fmt, n) => `${n}/index.${fmt}.js`,
      formats: ['es', 'cjs'],
    },
    sourcemap: !isProduction,
  },
  define: { 'import.meta.vitest': 'undefined' },
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
  server: { watch: { usePolling: true } },
  test: {
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
    includeSource: ['src/**/*.{js,ts}'],
  },
});

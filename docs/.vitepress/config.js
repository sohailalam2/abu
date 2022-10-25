import { defineConfig } from 'vitepress';

import { readdirSync, lstatSync } from 'fs';
import { join } from 'path';
import { name as title } from '../../package.json';

const base = `/${title.split('/')[1]}/`;
const srcDir = join(__dirname, '../../src');
const outDir = join(__dirname, '../../dist/docs');

export default defineConfig({
  lang: 'en-US',
  title,
  description: 'Your helpful sidekick for all typescript projects :)',
  appearance: true,
  ignoreDeadLinks: true,
  lastUpdated: false,
  base,
  srcDir,
  outDir,
  head: [['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]],
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
  },
  themeConfig: {
    logo: '../logo.png',
    nav: readDirAndConvertName(srcDir),
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2020-${new Date().getFullYear()} <a href="https://github.com/sohailalam2">Sohail Alam</a>`,
    },
  },
  vite: {
    server: { watch: { usePolling: true } },
  },
});

// Dynamically generate the menu
// each nested directory must have an index file
function readDirAndConvertName(dirPath) {
  const objects = readdirSync(dirPath).filter(name => name !== '.vitepress');
  let nav = [];

  for (const name of objects) {
    const childDirPath = join(dirPath, name);

    if (lstatSync(childDirPath).isDirectory()) {
      const text = name
        .trim()
        .split('-')
        .map(word => word.trim().charAt(0).toUpperCase() + word.substring(1))
        .reduce((acc, word) => `${acc} ${word}`.trim(), '');
      const link = `${name}/`;

      let children = readDirAndConvertName(join(dirPath, name));

      if (children.length) {
        children = children.map(child => {
          child.link = `${link}${child.link}`;

          return child;
        });
        children.unshift({ text: 'Introduction', link });
        nav.push({ text, items: children });
      } else {
        nav.push({ text, link });
      }
    }
  }

  return nav;
}

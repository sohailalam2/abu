import { defineConfig } from 'vitepress';
import { join } from 'path';

import createNavigation from './navbar';
import { name as title, description } from '../../package.json';

const base = `/${title.split('/')[1]}`;
const srcDir = join(__dirname, '../../docs');
const outDir = join(__dirname, '../../dist/docs');
const { nav, sidebar } = createNavigation(srcDir);

import { head, socialLinks } from './seo.json';

export default defineConfig({
  title,
  description,
  base,
  srcDir,
  outDir,
  head,
  lang: 'en-US',
  appearance: 'light',
  ignoreDeadLinks: true,
  lastUpdated: false,
  cleanUrls: 'without-subfolders',
  markdown: {
    theme: {
      light: 'slack-ochin',
      dark: 'slack-dark',
    },
    lineNumbers: true,
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    nav,
    sidebar,
    socialLinks,
    logo: '../logo.png',
    outline: [2, 3],
    docFooter: {
      prev: null,
      next: null,
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2020-${new Date().getFullYear()} <a href="https://github.com/sohailalam2">Sohail Alam</a>`,
    },
  },
  vite: {
    server: { watch: { usePolling: true } },
  },
});

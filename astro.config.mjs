// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://headlesslife.com',
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: {
      themes: { light: 'min-light', dark: 'min-dark' },
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

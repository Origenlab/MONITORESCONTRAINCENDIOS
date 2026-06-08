import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://monitorescontraincendios.com',
  integrations: [sitemap()],
  compressHTML: true,
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});

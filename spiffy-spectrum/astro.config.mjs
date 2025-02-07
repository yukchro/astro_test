import { defineConfig } from 'astro/config';
import installedIntegration from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://yukchro.github.io',
  base: '/',
  integrations: [
    installedIntegration(),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "src/scss/functions/_index.scss" as *;'
        }
      }
    }
  }
});
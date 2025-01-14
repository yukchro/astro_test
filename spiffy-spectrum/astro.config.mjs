import { defineConfig } from 'astro/config';
import installedIntegration from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://yukchro.github.io',
  base: '/astro_test/spiffy-spectrum/',
  integrations: [
    installedIntegration(),
  ]
});
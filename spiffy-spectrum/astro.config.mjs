import { defineConfig } from 'astro/config';
import installedIntegration from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [
    installedIntegration(),
  ]
});
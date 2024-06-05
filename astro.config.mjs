import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cookieconsent from '@jop-software/astro-cookieconsent';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    cookieconsent({
      guiOptions: {
        consentModal: {
          layout: 'cloud',
          position: 'bottom center',
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
    }),
  ],
  trailingSlash: 'never',
});

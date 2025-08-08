// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://pascopainters.com',
  integrations: [
    // Enable sitemap generation
    {
      name: 'sitemap',
      hooks: {
        'astro:config:setup': ({ config }) => {
          config.site = 'https://pascopainters.com';
        },
      },
    },
  ],
  // Enable sitemap generation
  experimental: {
    assets: true,
  },
  // Build configuration
  build: {
    assets: '_astro',
  },
  // Vite configuration for optimization
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro'],
          },
        },
      },
    },
    css: {
      devSourcemap: true,
    },
  },
});

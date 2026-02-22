import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-public-assets',
      apply: 'build',
      enforce: 'post',
      generateBundle() {
        // Copy entries and images from public to docs
        try {
          mkdirSync(resolve(__dirname, 'docs/entries'), { recursive: true });
          mkdirSync(resolve(__dirname, 'docs/images'), { recursive: true });
          
          // Copy all JSON files from public/entries to docs/entries
          const { readdirSync } = require('fs');
          const entries = readdirSync(resolve(__dirname, 'public/entries'));
          entries.forEach(file => {
            copyFileSync(
              resolve(__dirname, `public/entries/${file}`),
              resolve(__dirname, `docs/entries/${file}`)
            );
          });
          
          // Copy all images from public/images to docs/images
          const images = readdirSync(resolve(__dirname, 'public/images'));
          images.forEach(file => {
            copyFileSync(
              resolve(__dirname, `public/images/${file}`),
              resolve(__dirname, `docs/images/${file}`)
            );
          });
          
          console.log('✓ Copied public assets to docs folder');
        } catch (err) {
          console.warn('Could not copy public assets:', err.message);
        }
      },
    },
  ],
  base: '/template-morpheus/',
  build: {
    outDir: 'docs',
  },
  server: {
    middlewareMode: false,
  },
});

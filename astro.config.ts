import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';

export default defineConfig({
  adapter: cloudflare(),
  output: 'server',
  vite: {
    ssr: {
      external: ['node:async_hooks'],
    },
  },
});

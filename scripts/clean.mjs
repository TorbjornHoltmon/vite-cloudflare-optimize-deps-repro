import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

await Promise.all([
  rm(new URL('../node_modules/.vite/', import.meta.url), { recursive: true, force: true }),
  rm(new URL('../.wrangler/', import.meta.url), { recursive: true, force: true }),
  rm(new URL('../.astro/', import.meta.url), { recursive: true, force: true }),
]);

console.log(`Cleared Vite and Wrangler caches in ${root}`);

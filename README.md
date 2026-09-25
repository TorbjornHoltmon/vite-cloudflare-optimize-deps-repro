# Astro + Cloudflare dependency optimization issues repro

`pnpm dev` => Navigate to http://localhost:4321/

Middleware establishes an `AsyncLocalStorage` request context before an Astro
action causes `dedent` to be optimized. The action then reads the context again.

Run `pnpm clean` to start a fresh repro. It deletes the Vite, Wrangler, and
Astro caches.

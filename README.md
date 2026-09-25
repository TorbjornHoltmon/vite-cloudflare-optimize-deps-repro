# Astro + Cloudflare dependency optimization issues repro

`pnpm dev` => Navigate to http://localhost:4321/

Middleware establishes an `AsyncLocalStorage` request context before an Astro
action causes `dedent` to be optimized. The action then reads the context again.

Navigate to `/dynamic` to reproduce the same issue through a dynamic import.
The page dynamically imports a module that uses `dedent` and then reads the
request context.

Navigate to `/object` instead to reproduce the same issue with a plain exported
object. Middleware stores a request ID on the object, but the action sees
`undefined` after dependency optimization re-evaluates the module.

Run `pnpm clean` to start a fresh repro. It deletes the Vite, Wrangler, and
Astro caches. Visit `/`, `/dynamic`, or `/object` as the first request after
cleaning.

import { handle } from '@astrojs/cloudflare/handler';

export default {
  fetch(request, env, context) {
    return handle(request, env, context);
  },
} satisfies ExportedHandler;

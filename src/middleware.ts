import { defineMiddleware } from 'astro:middleware';
import { moduleContext } from './module-context';
import { runWithRequestID } from './request-context';

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname === '/object') {
    moduleContext.requestId = crypto.randomUUID();

    return next();
  }

  return runWithRequestID(() => {
    return next();
  });
});

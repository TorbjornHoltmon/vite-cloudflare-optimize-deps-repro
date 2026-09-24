import { defineMiddleware } from 'astro:middleware';
import { runWithRequestContext } from './request-context';

export const onRequest = defineMiddleware((_context, next) => {
  return runWithRequestContext(next);
});

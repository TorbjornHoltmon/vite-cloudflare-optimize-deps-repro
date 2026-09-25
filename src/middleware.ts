import { defineMiddleware } from 'astro:middleware';
import { getRequestID, runWithRequestID } from './request-context';

export const onRequest = defineMiddleware((context, next) => {
  return runWithRequestID(() => {
    return next();
  });
});

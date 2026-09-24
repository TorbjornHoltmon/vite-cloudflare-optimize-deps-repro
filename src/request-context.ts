import { AsyncLocalStorage } from 'node:async_hooks';

export interface RequestContext {
  requestId: string;
}

const requestContext = new AsyncLocalStorage<RequestContext>();

export function runWithRequestContext<T>(callback: () => T): T {
  return requestContext.run({ requestId: crypto.randomUUID() }, callback);
}

export function getRequestContext(): RequestContext {
  const context = requestContext.getStore();

  if (!context) {
    throw new Error('AsyncLocalStorage request context was lost');
  }

  return context;
}

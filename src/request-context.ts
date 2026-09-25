import { AsyncLocalStorage } from 'node:async_hooks';

interface RequestContext {
  requestId: string;
}

const requestContext = new AsyncLocalStorage<RequestContext>();

export function runWithRequestID<T>(callback: () => T): T {
  return requestContext.run({ requestId: crypto.randomUUID() }, callback);
}

export function getRequestID(): string {
  const context = requestContext.getStore();

  if (!context) {
    throw new Error('AsyncLocalStorage request context was lost');
  }

  return context.requestId;
}

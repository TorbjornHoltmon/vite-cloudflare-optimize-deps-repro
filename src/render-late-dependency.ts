import dedent from 'dedent';
import { getRequestContext } from './request-context';

export function renderLateDependency() {
  const { requestId } = getRequestContext();

  return {
    requestId,
    message: dedent`
      AsyncLocalStorage survived the optimize-deps reload.
      Request ID: ${requestId}
    `,
  };
}

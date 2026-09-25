import dedent from 'dedent';
import { getRequestID } from './request-context';

export function triggerIssue() {
  const after = getRequestID();

  return dedent`
After optimization: ${after}
`;
}

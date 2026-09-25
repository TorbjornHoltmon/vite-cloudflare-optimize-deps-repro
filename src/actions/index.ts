import { defineAction } from 'astro:actions';
import dedent from 'dedent';
import { getRequestID } from '../request-context';

export const server = {
  dedent: defineAction({
    handler: async (_input, context) => {
      const after = getRequestID();

      return dedent`
        Before optimization: ${context.locals.beforeRequestId}
        After optimization: ${after}
      `;
    },
  }),
};

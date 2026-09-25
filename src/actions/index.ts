import { defineAction } from 'astro:actions';
import dedent from 'dedent';
import { moduleContext } from '../module-context';
import { getRequestID } from '../request-context';

export const server = {
  dedent: defineAction({
    handler: async (_input, context) => {
      const after = getRequestID();

      return dedent`
        After optimization: ${after}
      `;
    },
  }),
  object: defineAction({
    handler: async (_input, context) => {
      return dedent`
        After optimization: ${moduleContext.requestId}
      `;
    },
  }),
};

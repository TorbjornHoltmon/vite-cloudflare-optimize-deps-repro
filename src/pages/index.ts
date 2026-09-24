import type { APIRoute } from 'astro';
import { getRequestContext } from '../request-context';

export const GET: APIRoute = async () => {
  try {
    const before = getRequestContext().requestId;
    const { renderLateDependency } = await import('../render-late-dependency');
    const rendered = renderLateDependency();
    const after = getRequestContext().requestId;

    return Response.json({
      ok: before === after && after === rendered.requestId,
      before,
      after,
      rendered,
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    );
  }
};

import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as { prompt?: string } | null;
  const prompt = body?.prompt?.trim() || 'Hello from WealthyExpress Hub';

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta: `Echo: ${prompt}` })}\n\n`));
      controller.enqueue(encoder.encode('event: done\ndata: [DONE]\n\n'));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}

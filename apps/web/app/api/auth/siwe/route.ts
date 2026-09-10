import { NextRequest, NextResponse } from 'next/server';
import { issueSessionCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as
    | { address?: string; signature?: string; message?: string }
    | null;

  if (!body?.address || !body.signature || !body.message) {
    return NextResponse.json({ error: 'Missing SIWE payload.' }, { status: 400 });
  }

  const token = Buffer.from(`${body.address}:${Date.now()}`).toString('base64url');
  await issueSessionCookie(token);

  return NextResponse.json({
    ok: true,
    address: body.address,
    token,
  });
}

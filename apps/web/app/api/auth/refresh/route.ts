import { NextResponse } from 'next/server';
import { getSessionToken, issueSessionCookie } from '@/lib/auth';

export async function POST() {
  const token = await getSessionToken();

  if (!token) {
    return NextResponse.json({ error: 'No session available.' }, { status: 401 });
  }

  await issueSessionCookie(token);
  return NextResponse.json({ ok: true });
}

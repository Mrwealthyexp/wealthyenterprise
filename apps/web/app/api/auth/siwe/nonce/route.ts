import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { DEFAULT_NONCE_TTL_SECONDS } from '@/lib/constants';

export async function GET() {
  return NextResponse.json({
    nonce: randomUUID(),
    expiresIn: DEFAULT_NONCE_TTL_SECONDS,
  });
}

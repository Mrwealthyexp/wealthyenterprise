import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    agents: [
      { id: 'planner', status: 'idle' },
      { id: 'researcher', status: 'idle' },
    ],
  });
}

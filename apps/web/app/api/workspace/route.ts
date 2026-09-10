import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    workspace: {
      id: 'demo-workspace',
      name: 'WealthyExpress Demo Workspace',
      members: 1,
    },
  });
}

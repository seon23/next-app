import { NextResponse } from 'next/server';

export const GET = () => {
  return NextResponse.json({ id: 1, name: 'Hong' });
};

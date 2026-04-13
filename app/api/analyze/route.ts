import { NextResponse } from 'next/server';
import { trpc } from '@trpc/client';

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return new Response('No file uploaded', { status: 400 });
  }

  try {
    const result = await trpc.atsAnalysis.analyzeFile.useMutation({
      body: {
        file,
      },
    });

    if (result.error) {
      console.error(result.error);
      return new Response('Failed to analyze file', { status: 500 });
    }

    return NextResponse.json(result.data, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('An error occurred while analyzing the file', { status: 500 });
  }
}

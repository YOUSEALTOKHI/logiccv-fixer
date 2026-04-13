import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    return NextResponse.json({ 
      score: 85, 
      suggestions: ["LogicCV: System is stable.", "Ready for PDF parsing."] 
    });
  } catch (error) {
    return NextResponse.json({ error: "Analysis failed" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { jobTitle, experience, skills, education } = await request.json();

    // Simulate AI processing (in real app, use OpenAI or similar)
    const aiResponse = {
      summary: `محترف ${jobTitle} ذو خبرة ${experience} في ${skills}. حاصل على ${education}.`,
      skills: skills.split(',').map((skill: string) => skill.trim()),
      experience: `خبرة ${experience} في تطوير التطبيقات باستخدام ${skills}.`,
      atsScore: 87,
      suggestions: [
        'أضف كلمات مفتاحية محددة للوظيفة',
        'استخدم أرقام لقياس الإنجازات',
        'ركز على النتائج لا المهام'
      ]
    };

    return NextResponse.json(aiResponse);
  } catch (error) {
    return NextResponse.json({ error: 'خطأ في معالجة الطلب' }, { status: 500 });
  }
}
'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BarChart3, Sparkles, Users, ShieldCheck, FileBadge2, Zap, CheckCircle, Lightbulb, Target, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FeaturesPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    const savedLang = (localStorage.getItem('language') as 'en' | 'ar') || 'en';
    setTheme(savedTheme);
    setLanguage(savedLang);
  }, []);

  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'Powerful Features',
      subtitle: 'Everything you need to create a winning resume',
      allFeatures: 'All Features',
    },
    ar: {
      title: 'المميزات القوية',
      subtitle: 'كل ما تحتاجه لإنشاء سيرة ذاتية رابحة',
      allFeatures: 'جميع المميزات',
    },
  };

  const t = content[language];

  const features = language === 'en'
    ? [
        {
          icon: BarChart3,
          title: 'ATS Analysis',
          desc: 'Get a real ATS-style score and actionable keyword insights. Understand exactly what ATS systems detect and why.',
          color: 'blue',
        },
        {
          icon: Sparkles,
          title: 'AI Rewrite',
          desc: 'Instantly improve bullet points, summary, and overall clarity. Our AI suggests better ways to express your achievements.',
          color: 'purple',
        },
        {
          icon: Users,
          title: 'Role Matching',
          desc: 'Align your resume with specific jobs and hiring expectations. Get targeted optimization for each position.',
          color: 'green',
        },
        {
          icon: ShieldCheck,
          title: 'Recruiter-Ready',
          desc: 'Professional formatting and language that stands out. Impress recruiters with polished content.',
          color: 'red',
        },
        {
          icon: FileBadge2,
          title: 'Cover Letter',
          desc: 'Generate matching cover letters for each target job. Save time with AI-powered letter generation.',
          color: 'yellow',
        },
        {
          icon: Zap,
          title: 'Fast Results',
          desc: 'Go from draft to optimized CV in minutes, not days. Smart recommendations save you hours of work.',
          color: 'indigo',
        },
        {
          icon: Lightbulb,
          title: 'Smart Suggestions',
          desc: 'Context-aware recommendations based on industry trends. Get insights into what employers want to see.',
          color: 'orange',
        },
        {
          icon: Target,
          title: 'Keyword Optimization',
          desc: 'Maximize keyword matching for your target positions. Strategic keyword placement increases your visibility.',
          color: 'cyan',
        },
        {
          icon: Clock,
          title: 'Version History',
          desc: 'Track changes and revert to previous versions anytime. Keep all your resume iterations organized.',
          color: 'pink',
        },
      ]
    : [
        {
          icon: BarChart3,
          title: 'تحليل ATS',
          desc: 'احصل على درجة حقيقية بأسلوب ATS وتوصيات قابلة للتنفيذ. افهم بالضبط ما تكتشفه أنظمة ATS.',
          color: 'blue',
        },
        {
          icon: Sparkles,
          title: 'إعادة الكتابة بالذكاء الاصطناعي',
          desc: 'تحسين النقاط والملخص والوضوح على الفور. يقترح ذكاؤنا الاصطناعي طرقاً أفضل للتعبير عن إنجازاتك.',
          color: 'purple',
        },
        {
          icon: Users,
          title: 'مطابقة الأدوار',
          desc: 'محاذاة سيرتك الذاتية مع وظائف محددة. احصل على تحسين موجه لكل منصب.',
          color: 'green',
        },
        {
          icon: ShieldCheck,
          title: 'جاهز للمجندين',
          desc: 'تنسيق مهني ولغة تتميز. أثر على المجندين بمحتوى مصقول.',
          color: 'red',
        },
        {
          icon: FileBadge2,
          title: 'خطاب التغطية',
          desc: 'توليد خطابات تغطية متطابقة لكل وظيفة. وفر الوقت مع توليد الرسائل بقوة الذكاء الاصطناعي.',
          color: 'yellow',
        },
        {
          icon: Zap,
          title: 'النتائج السريعة',
          desc: 'من المسودة إلى السيرة الذاتية المحسّنة في دقائق. توفر التوصيات الذكية ساعات من العمل.',
          color: 'indigo',
        },
      ];

  const bgClass = theme === 'dark' ? 'bg-slate-900' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const sectionBg = theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50';

  const getColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'text-blue-600 dark:text-blue-400',
      purple: 'text-purple-600 dark:text-purple-400',
      green: 'text-green-600 dark:text-green-400',
      red: 'text-red-600 dark:text-red-400',
      yellow: 'text-yellow-600 dark:text-yellow-400',
      indigo: 'text-indigo-600 dark:text-indigo-400',
      orange: 'text-orange-600 dark:text-orange-400',
      cyan: 'text-cyan-600 dark:text-cyan-400',
      pink: 'text-pink-600 dark:text-pink-400',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className={`${bgClass} ${textClass} min-h-screen ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <Navbar />

      {/* Hero Section */}
      <section className={`pt-32 pb-16 px-4 ${theme === 'dark' ? 'bg-gradient-to-b from-slate-800 to-slate-900' : 'bg-gradient-to-b from-blue-50 to-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  className={`p-8 rounded-xl border transition hover:shadow-lg ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 hover:border-blue-500'
                      : 'bg-white border-gray-200 hover:border-blue-500'
                  }`}
                >
                  <Icon className={`${getColorClass(feature.color)} mb-4`} size={32} />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 px-4 ${sectionBg}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              {language === 'en' ? 'Ready to Elevate Your Resume?' : 'هل أنت مستعد لتحسين سيرتك الذاتية؟'}
            </h2>
            <a
              href="/signup"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              {language === 'en' ? 'Get Started Free' : 'ابدأ مجاناً'}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer theme={theme} language={language} />
    </div>
  );
}

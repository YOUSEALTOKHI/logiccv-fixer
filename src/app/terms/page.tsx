'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function TermsPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    const savedLang = (localStorage.getItem('language') as 'en' | 'ar') || 'en';
    setTheme(savedTheme);
    setLanguage(savedLang);
  }, []);

  const isArabic = language === 'ar';

  const bgClass = theme === 'dark' ? 'bg-slate-900' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const contentClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: January 2026',
      intro: 'These Terms of Service ("Terms") constitute a legally binding agreement made between you and CVLogic ("we," "us," "our," and "Company"), concerning your access to and use of the CVLogic website.',
      sections: [
        {
          title: '1. Agreement to Terms',
          content: 'By accessing and using this website, you accept and agree to be bound by and comply with these Terms and our Privacy Policy.',
        },
        {
          title: '2. Use License',
          content: 'Permission is granted to temporarily download one copy of the materials (information or software) on CVLogic website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website.',
        },
        {
          title: '3. Disclaimer',
          content: 'The materials on CVLogic website are provided on an \'as is\' basis. CVLogic makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
        },
        {
          title: '4. Limitations',
          content: 'In no event shall CVLogic or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CVLogic\'s website.',
        },
        {
          title: '5. Accuracy of Materials',
          content: 'The materials appearing on CVLogic website could include technical, typographical, or photographic errors. CVLogic does not warrant that any of the materials on the website are accurate, complete, or current.',
        },
      ],
    },
    ar: {
      title: 'شروط الخدمة',
      lastUpdated: 'آخر تحديث: يناير 2026',
      intro: 'تشكل شروط الخدمة ("الشروط") اتفاقاً ملزماً قانونياً يتم إبرامه بينك وبين CVLogic ("نحن"، "لنا"، "خاصتنا"، و"الشركة")، بخصوص وصولك وفقاً لاستخدام موقع CVLogic.',
      sections: [
        {
          title: '1. الاتفاق على الشروط',
          content: 'بالوصول والاستخدام موقع هذا، فإنك تقبل وتوافق على الالتزام بهذه الشروط وسياسة الخصوصية الخاصة بنا.',
        },
        {
          title: '2. ترخيص الاستخدام',
          content: 'يتم منح الإذن لتنزيل مؤقت لنسخة واحدة من المواد (المعلومات أو البرامج) على موقع CVLogic لأغراض عرض شخصي وغير تجاري مؤقت فقط. هذا منح ترخيص وليس نقل الملكية.',
        },
        {
          title: '3. إخلاء المسؤولية',
          content: 'المواد على موقع CVLogic يتم توفيرها على أساس "كما هي". لا تقدم CVLogic أي ضمانات صريحة أو ضمنية، وتخلي مسؤوليتها النطاق من جميع الضمانات الأخرى.',
        },
        {
          title: '4. الحدود',
          content: 'في أي حال من الأحوال، لا تكون CVLogic أو موردوها مسؤولين عن أي أضرار تنشأ عن الاستخدام أو عدم القدرة على استخدام المواد على موقع CVLogic.',
        },
        {
          title: '5. دقة المواد',
          content: 'قد تحتوي المواد الموجودة على موقع CVLogic على أخطاء تقنية أو إملائية أو فوتوغرافية. لا تضمن CVLogic بأن أي من المواد على الموقع دقيقة أو كاملة أو حالية.',
        },
      ],
    },
  };

  const t = content[language];

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
            className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
          >
            {t.lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mb-12 p-6 rounded-lg ${theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50'}`}
          >
            <p className={contentClass}>
              {t.intro}
            </p>
          </motion.div>

          <div className="space-y-8">
            {t.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className={contentClass}>
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer theme={theme} language={language} />
    </div>
  );
}

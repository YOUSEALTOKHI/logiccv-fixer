'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function PrivacyPage() {
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
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: January 2026',
      intro: 'CVLogic ("we", "us", "our", or "Company") operates the CVLogic website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.',
      sections: [
        {
          title: '1. Information Collection and Use',
          content: 'We collect several different types of information for various purposes to provide and improve our Service to you.',
        },
        {
          title: '2. Data Security',
          content: 'The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.',
        },
        {
          title: '3. Changes to This Privacy Policy',
          content: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.',
        },
        {
          title: '4. Contact Us',
          content: 'If you have any questions about this Privacy Policy, please contact us at support@cvlogic.com',
        },
      ],
    },
    ar: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: يناير 2026',
      intro: 'CVLogic ("نحن"، "لنا"، "خاصتنا"، أو "الشركة") تدير موقع CVLogic. تخبرك هذه الصفحة بسياساتنا بشأن جمع واستخدام والإفصاح عن البيانات الشخصية عند استخدامك لخدمتنا والخيارات المتاحة لك المرتبطة بتلك البيانات.',
      sections: [
        {
          title: '1. جمع واستخدام المعلومات',
          content: 'نجمع عدة أنواع مختلفة من المعلومات لأغراض مختلفة لتوفير وتحسين خدمتنا لك.',
        },
        {
          title: '2. أمان البيانات',
          content: 'أمان بيانات مهم لنا ولكن تذكر أنه لا توجد طريقة نقل عبر الإنترنت أو طريقة تخزين إلكترونية آمنة بنسبة 100٪. بينما نسعى جاهدين لاستخدام وسائل تجارية مقبولة لحماية بيانات المستخدم الشخصية، لا يمكننا ضمان أمانها المطلق.',
        },
        {
          title: '3. التغييرات على سياسة الخصوصية هذه',
          content: 'قد نحدّث سياسة الخصوصية الخاصة بنا من وقت إلى آخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة وتحديث تاريخ "آخر تحديث" في أعلى سياسة الخصوصية هذه.',
        },
        {
          title: '4. اتصل بنا',
          content: 'إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على support@cvlogic.com',
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

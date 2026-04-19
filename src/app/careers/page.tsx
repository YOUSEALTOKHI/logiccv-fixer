'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Users, Briefcase, Award, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CareersPage() {
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
      title: 'Join Our Team',
      subtitle: 'Help us revolutionize resume optimization',
      openPositions: 'Open Positions',
      noPositions: 'No open positions at the moment. Check back soon!',
      aboutTitle: 'Why Work with Us?',
      about1: 'Innovative Culture: We\'re building the future of career development',
      about2: 'Impact: Your work directly helps job seekers worldwide',
      about3: 'Growth: Learn new skills and advance your career',
      about4: 'Benefits: Competitive salary, health insurance, and more',
    },
    ar: {
      title: 'انضم إلى فريقنا',
      subtitle: 'ساعدنا في إحداث ثورة في تحسين السيرة الذاتية',
      openPositions: 'الوظائف المفتوحة',
      noPositions: 'لا توجد وظائف مفتوحة في الوقت الحالي. تحقق قريباً!',
      aboutTitle: 'لماذا تعمل معنا؟',
      about1: 'ثقافة ابتكار: نحن نبني مستقبل تطوير المسار الوظيفي',
      about2: 'التأثير: عملك يساعد الباحثين عن عمل في جميع أنحاء العالم مباشرة',
      about3: 'النمو: تعلم مهارات جديدة وتقدم في مسارك الوظيفي',
      about4: 'الفوائد: راتب تنافسي والتأمين الصحي وأكثر',
    },
  };

  const t = content[language];

  const bgClass = theme === 'dark' ? 'bg-slate-900' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const sectionBg = theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50';

  const benefits = [
    { icon: Briefcase, text: t.about1 },
    { icon: Award, text: t.about2 },
    { icon: Users, text: t.about3 },
    { icon: Zap, text: t.about4 },
  ];

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

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-12 text-center">{t.aboutTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`p-6 rounded-lg text-center ${sectionBg}`}
                >
                  <Icon className="text-blue-600 dark:text-blue-400 mx-auto mb-4" size={32} />
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {benefit.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className={`py-16 px-4 ${sectionBg}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-8">{t.openPositions}</h2>
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            {t.noPositions}
          </p>
        </div>
      </section>

      <Footer theme={theme} language={language} />
    </div>
  );
}

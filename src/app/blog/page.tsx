'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BlogPage() {
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
      title: 'Blog',
      subtitle: 'Tips, tricks, and insights for career success',
      comingSoon: 'Our blog is coming soon! Check back for career tips and resume advice.',
    },
    ar: {
      title: 'المدونة',
      subtitle: 'نصائح وحيل ورؤى لنجاح المسار الوظيفي',
      comingSoon: 'ستبدأ مدونتنا قريباً! تحقق من النصائح الوظيفية وإرشادات إعداد السيرة الذاتية.',
    },
  };

  const t = content[language];

  const bgClass = theme === 'dark' ? 'bg-slate-900' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const sectionBg = theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50';

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

      {/* Coming Soon */}
      <section className={`py-24 px-4 ${sectionBg}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`inline-block p-8 rounded-lg ${theme === 'dark' ? 'bg-slate-700' : 'bg-blue-50'}`}>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.comingSoon}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer theme={theme} language={language} />
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BarChart3, Users, Shield, Zap, Award, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AboutPage() {
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
      title: 'About CVLogic',
      subtitle: 'Empowering careers through intelligent resume optimization',
      mission: 'Our Mission',
      missionText: 'To democratize access to professional resume writing by combining cutting-edge AI technology with human expertise, helping job seekers worldwide land their dream jobs.',
      story: 'Our Story',
      storyText: 'Founded in 2024, CVLogic was born from a simple observation: too many qualified candidates were being filtered out by ATS systems before their resumes ever reached human eyes. Our team of career experts, AI engineers, and designers came together to create a solution that levels the playing field.',
      values: 'Our Values',
      team: 'Our Team',
      teamText: 'A diverse team of career coaches, AI specialists, and UX designers dedicated to your success.',
      stats: [
        { value: '100K+', label: 'Resumes Optimized' },
        { value: '95%', label: 'ATS Pass Rate' },
        { value: '50+', label: 'Countries Served' },
        { value: '4.9/5', label: 'User Rating' },
      ],
    },
    ar: {
      title: 'عن CVLogic',
      subtitle: 'تمكين المسارات الوظيفية من خلال تحسين السيرة الذاتية الذكي',
      mission: 'مهمتنا',
      missionText: 'ديمقراطية الوصول إلى كتابة السيرة الذاتية المهنية من خلال دمج تقنية الذكاء الاصطناعي المتقدمة مع الخبرة البشرية، مما يساعد الباحثين عن عمل في جميع أنحاء العالم في الحصول على وظائفهم المنشودة.',
      story: 'قصتنا',
      storyText: 'تأسست CVLogic في عام 2024 من ملاحظة بسيطة: عدد كبير جداً من المرشحين المؤهلين يتم استبعادهم بواسطة أنظمة ATS قبل أن تصل سيرهم الذاتية إلى أعين البشر. اجتمع فريقنا من خبراء المسارات الوظيفية ومهندسي الذكاء الاصطناعي والمصممين معاً لإنشاء حل يوازن الأمور.',
      values: 'قيمنا',
      team: 'فريقنا',
      teamText: 'فريق متنوع من مدربي المسارات الوظيفية ومتخصصي الذكاء الاصطناعي ومصممي تجربة المستخدم مكرسة لنجاحك.',
      stats: [
        { value: '100K+', label: 'سيرة ذاتية محسّنة' },
        { value: '95%', label: 'معدل النجاح في ATS' },
        { value: '50+', label: 'دول مخدومة' },
        { value: '4.9/5', label: 'تقييم المستخدمين' },
      ],
    },
  };

  const t = content[language];
  const bgClass = theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900';
  const sectionBg = theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50';

  const values = language === 'en' 
    ? [
        {
          icon: BarChart3,
          title: 'Precision',
          desc: 'AI-powered analysis for optimal ATS compatibility',
        },
        {
          icon: Users,
          title: 'Accessibility',
          desc: 'Professional tools available to everyone',
        },
        {
          icon: Shield,
          title: 'Security',
          desc: 'Your data is encrypted and never shared',
        },
        {
          icon: Zap,
          title: 'Support',
          desc: 'Dedicated team ready to help you succeed',
        },
      ]
    : [
        {
          icon: BarChart3,
          title: 'الدقة',
          desc: 'تحليل مدعوم بالذكاء الاصطناعي لأفضل توافق ATS',
        },
        {
          icon: Users,
          title: 'الإمكانية',
          desc: 'أدوات احترافية متاحة للجميع',
        },
        {
          icon: Shield,
          title: 'الأمان',
          desc: 'بيانات مشفرة وآمنة',
        },
        {
          icon: Zap,
          title: 'الدعم',
          desc: 'فريق مخصص جاهز لمساعدتك على النجاح',
        },
      ];

  return (
    <div className={`${bgClass} min-h-screen ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
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

      {/* Stats Section */}
      <section className={`py-16 px-4 ${sectionBg}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </p>
                <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{t.mission}</h2>
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.missionText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`py-16 px-4 ${sectionBg}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{t.story}</h2>
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.storyText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold mb-12 text-center"
          >
            {t.values}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-slate-800' : 'bg-blue-50'}`}
                >
                  <Icon className="text-blue-600 dark:text-blue-400 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-16 px-4 ${sectionBg}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{t.team}</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.teamText}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer theme={theme} language={language} />
    </div>
  );
}

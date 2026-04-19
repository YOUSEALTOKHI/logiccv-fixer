'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AffiliatePage() {
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
      title: 'Affiliate Program',
      subtitle: 'Earn money by referring CVLogic to others',
      earnTitle: 'How You Earn',
      earn1: 'Up to 30% commission on every successful referral',
      earn2: 'Recurring commissions for subscriber retention',
      earn3: 'Monthly payouts for earnings over $50',
      earn4: 'Dedicated affiliate support team',
      benefitsTitle: 'Program Benefits',
      getStarted: 'Get Started Today',
      description: 'Join our growing community of affiliate partners and start earning passive income. We provide all the tools you need to promote CVLogic effectively.',
    },
    ar: {
      title: 'برنامج التسويق بالعمولة',
      subtitle: 'اكسب المال بالإحالة إلى CVLogic',
      earnTitle: 'كيف تكسب',
      earn1: 'حتى 30% عمولة على كل إحالة ناجحة',
      earn2: 'عمولات متكررة لاحتفاظ المشتركين',
      earn3: 'مدفوعات شهرية للأرباح أكثر من 50 دولار',
      earn4: 'فريق دعم تابع مخصص',
      benefitsTitle: 'فوائد البرنامج',
      getStarted: 'ابدأ اليوم',
      description: 'انضم إلى مجتمعنا المتنامي من شركاء التسويق بالعمولة وابدأ في كسب دخل سلبي. نوفر جميع الأدوات التي تحتاجها للترويج لـ CVLogic بفعالية.',
    },
  };

  const t = content[language];

  const bgClass = theme === 'dark' ? 'bg-slate-900' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const sectionBg = theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50';

  const earnings = [
    { icon: TrendingUp, text: t.earn1 },
    { icon: Users, text: t.earn2 },
    { icon: DollarSign, text: t.earn3 },
    { icon: Award, text: t.earn4 },
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

      {/* Description Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          >
            {t.description}
          </motion.p>
        </div>

        {/* Earnings Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-12 text-center">{t.earnTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earnings.map((earning, i) => {
              const Icon = earning.icon;
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
                    {earning.text}
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
            <h2 className="text-3xl font-extrabold mb-8">{t.benefitsTitle}</h2>
            <Link
              href="/dashboard"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              {t.getStarted}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer theme={theme} language={language} />
    </div>
  );
}

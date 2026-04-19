'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function RefundPage() {
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
      title: 'Refund Policy',
      lastUpdated: 'Last updated: January 2026',
      intro: 'At CVLogic, we want you to be completely satisfied with your purchase. If you\'re not happy with your subscription plan, we offer a hassle-free 30-day money-back guarantee.',
      sections: [
        {
          title: '30-Day Money-Back Guarantee',
          content: 'If you\'re not satisfied with your CVLogic subscription for any reason within 30 days of purchase, simply contact our support team at support@cvlogic.com to request a full refund. No questions asked.',
        },
        {
          title: 'How to Request a Refund',
          content: 'To request a refund, email support@cvlogic.com with your account information and reason for the refund request. Our support team will verify your request and process your refund within 5-7 business days.',
        },
        {
          title: 'Refund Timeline',
          content: 'Refunds are processed within 5-7 business days after approval. Your refund will be credited back to your original payment method. Depending on your bank or credit card company, it may take an additional 5-10 business days for the refund to appear in your account.',
        },
        {
          title: 'Eligibility',
          content: 'The 30-day money-back guarantee applies to all subscription plans (Starter, Pro, and Career+). This guarantee applies only to the initial purchase and does not cover promotional or discounted plans purchased through third-party retailers.',
        },
        {
          title: 'Exceptions',
          content: 'Refunds may not be available for plans purchased using promotional codes or third-party discounts. If you have questions about your specific purchase, please contact support@cvlogic.com.',
        },
      ],
    },
    ar: {
      title: 'سياسة الاسترجاع',
      lastUpdated: 'آخر تحديث: يناير 2026',
      intro: 'في CVLogic، نريد أن تكون راضياً تماماً عن عملية شرائك. إذا لم تكن سعيداً بخطة اشتراكك، نقدم ضمان استرجاع الأموال لمدة 30 يوماً بدون متاعب.',
      sections: [
        {
          title: 'ضمان استرجاع الأموال لمدة 30 يوماً',
          content: 'إذا لم تكن راضياً عن اشتراك CVLogic لأي سبب كان خلال 30 يوماً من الشراء، فما عليك سوى الاتصال بفريق الدعم لدينا في support@cvlogic.com لطلب استرجاع كامل. بدون أسئلة.',
        },
        {
          title: 'كيفية طلب استرجاع',
          content: 'لطلب استرجاع، أرسل بريداً إلى support@cvlogic.com مع معلومات حسابك وسبب طلب الاسترجاع. سيتحقق فريق الدعم من طلبك وسيعالج استرجاعك خلال 5-7 أيام عمل.',
        },
        {
          title: 'جدول الاسترجاع',
          content: 'يتم معالجة المبالغ المسترجعة خلال 5-7 أيام عمل بعد الموافقة. سيتم إرجاع استرجاعك إلى طريقة الدفع الأصلية الخاصة بك. وفقاً لبنكك أو شركة بطاقة الائتمان، قد يستغرق وقتاً إضافياً بـ 5-10 أيام عمل لظهور الاسترجاع في حسابك.',
        },
        {
          title: 'الأهلية',
          content: 'ينطبق ضمان استرجاع الأموال لمدة 30 يوماً على جميع خطط الاشتراك (Starter و Pro و Career+). ينطبق هذا الضمان فقط على الشراء الأولي ولا يغطي الخطط الترويجية أو الخطط المخفضة المشتراة من خلال بائعي تجزئة خارجيين.',
        },
        {
          title: 'الاستثناءات',
          content: 'قد لا تكون المبالغ المسترجعة متاحة للخطط التي تم شراؤها باستخدام رموز ترويجية أو خصومات من طرف ثالث. إذا كانت لديك أسئلة حول عملية الشراء المحددة، يرجى الاتصال بـ support@cvlogic.com.',
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

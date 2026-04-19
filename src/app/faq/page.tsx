'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FAQPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    const savedLang = (localStorage.getItem('language') as 'en' | 'ar') || 'en';
    setTheme(savedTheme);
    setLanguage(savedLang);
  }, []);

  const isArabic = language === 'ar';

  const faqs = language === 'en'
    ? [
        {
          question: 'What is ATS and why does it matter?',
          answer: 'ATS (Applicant Tracking System) is software used by recruiters to scan resumes. Most companies use it to filter out applicants. Our tool helps you optimize your resume to pass ATS screening.',
        },
        {
          question: 'How does the AI rewrite feature work?',
          answer: 'Our AI analyzes your resume content and suggests improvements to make your achievements more impactful. It maintains your authentic voice while enhancing clarity and impact.',
        },
        {
          question: 'Can I try CVLogic for free?',
          answer: 'Yes! Our Starter plan offers a basic ATS analysis and recommendations. You can upgrade to Pro or Career+ anytime for enhanced features.',
        },
        {
          question: 'Is my data secure?',
          answer: 'Absolutely. We use enterprise-grade encryption and comply with GDPR. Your resume data is never shared with third parties or used for training.',
        },
        {
          question: 'How long does optimization take?',
          answer: 'Most optimizations are completed within minutes. You can apply AI suggestions instantly and download your optimized resume right away.',
        },
        {
          question: 'What file formats do you support?',
          answer: 'We support PDF, DOC, and DOCX formats up to 10MB in size. Simply upload and start optimizing.',
        },
        {
          question: 'Can I generate cover letters too?',
          answer: 'Yes! With our Pro and Career+ plans, you can generate tailored cover letters for specific job positions automatically.',
        },
        {
          question: 'Do you offer refunds?',
          answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, contact our support team for a full refund.',
        },
      ]
    : [
        {
          question: 'ما هو نظام ATS ولماذا هو مهم؟',
          answer: 'ATS (نظام تتبع المتقدمين) هو برنامج يستخدمه المجندون لمسح السير الذاتية. تستخدمه معظم الشركات لتصفية المتقدمين. تساعدك أداتنا على تحسين سيرتك الذاتية لتجاوز فحص ATS.',
        },
        {
          question: 'كيف تعمل ميزة إعادة الكتابة بالذكاء الاصطناعي؟',
          answer: 'يحلل ذكاؤنا الاصطناعي محتوى سيرتك الذاتية ويقترح تحسينات لجعل إنجازاتك أكثر تأثيراً. يحافظ على صوتك الأصلي مع تعزيز الوضوح والتأثير.',
        },
        {
          question: 'هل يمكنني تجربة CVLogic مجاناً؟',
          answer: 'نعم! خطتنا الأساسية توفر تحليل ATS أساسي وتوصيات. يمكنك الترقية إلى Pro أو Career+ في أي وقت للحصول على ميزات محسّنة.',
        },
        {
          question: 'هل بيانات بآمان؟',
          answer: 'بالتأكيد. نستخدم تشفير على مستوى المؤسسات والامتثال لـ GDPR. لا يتم مشاركة بيانات سيرتك الذاتية مع أطراف ثالثة أو استخدامها للتدريب.',
        },
        {
          question: 'كم من الوقت يستغرق التحسين؟',
          answer: 'يتم إكمال معظم التحسينات في غضون دقائق. يمكنك تطبيق الاقتراحات على الفور وتنزيل سيرتك المحسّنة على الفور.',
        },
      ];

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
            {language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            {language === 'en' ? 'Find answers to common questions about CVLogic' : 'ابحث عن إجابات الأسئلة الشائعة حول CVLogic'}
          </motion.p>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className={`border rounded-lg overflow-hidden transition ${
                  theme === 'dark'
                    ? 'border-slate-700'
                    : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`w-full px-6 py-4 text-left font-semibold flex items-center justify-between transition ${
                    theme === 'dark'
                      ? 'bg-slate-800 hover:bg-slate-700'
                      : 'bg-gray-50 hover:bg-gray-100'
                  } ${openIndex === i ? (theme === 'dark' ? 'bg-slate-700' : 'bg-gray-100') : ''}`}
                >
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className={`transition ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`px-6 py-4 ${theme === 'dark' ? 'bg-slate-700/50 text-gray-300' : 'bg-white text-gray-700'}`}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-extrabold mb-6">
              {language === 'en' ? "Still have questions? We're here to help!" : 'هل لديك أسئلة أخرى؟ نحن هنا للمساعدة!'}
            </h2>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              {language === 'en' ? 'Contact Us' : 'تواصل معنا'}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer theme={theme} language={language} />
    </div>
  );
}

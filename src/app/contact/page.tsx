'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    const savedLang = (localStorage.getItem('language') as 'en' | 'ar') || 'en';
    setTheme(savedTheme);
    setLanguage(savedLang);
  }, []);

  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'We\'d love to hear from you. Send us a message!',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sent: 'Message sent successfully!',
      getInTouchTitle: 'Get in Touch',
      email_label: 'Email',
      phone_label: 'Phone',
      address_label: 'Address',
      email_value: 'support@cvlogic.com',
      phone_value: '+1 (555) 123-4567',
      address_value: '123 Career Street, San Francisco, CA 94105',
    },
    ar: {
      title: 'تواصل معنا',
      subtitle: 'نود أن نسمع منك. أرسل لنا رسالة!',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      sent: 'تم إرسال الرسالة بنجاح!',
      getInTouchTitle: 'تواصل معنا',
      email_label: 'البريد الإلكتروني',
      phone_label: 'الهاتف',
      address_label: 'العنوان',
      email_value: 'support@cvlogic.com',
      phone_value: '+1 (555) 123-4567',
      address_value: '123 Career Street, San Francisco, CA 94105',
    },
  };

  const t = content[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const bgClass = theme === 'dark' ? 'bg-slate-900' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const sectionBg = theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50';
  const inputBg = theme === 'dark' ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-slate-900';

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

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold mb-8">{t.getInTouchTitle}</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t.email_label}</h3>
                  <a href="mailto:support@cvlogic.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    {t.email_value}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t.phone_label}</h3>
                  <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 hover:underline">
                    {t.phone_value}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t.address_label}</h3>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {t.address_value}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition ${inputBg}`}
                  placeholder={t.name}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition ${inputBg}`}
                  placeholder={t.email}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t.subject}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition ${inputBg}`}
                  placeholder={t.subject}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition resize-none ${inputBg}`}
                  placeholder={t.message}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                {t.send}
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-4 rounded-lg text-center font-medium ${
                    theme === 'dark'
                      ? 'bg-green-900/20 text-green-400'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {t.sent}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      <Footer theme={theme} language={language} />
    </div>
  );
}

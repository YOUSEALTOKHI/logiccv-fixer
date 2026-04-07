'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Globe, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10" />
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 neon-text"
          >
            صناعة المستقبل الوظيفي
            <br />
            <span className="text-neon-blue">بالذكاء الاصطناعي</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            منصة CVLogic العالمية لبناء السير الذاتية الاحترافية التي تتفوق على أنظمة ATS
            مع دعم كامل للعربية والإنجليزية
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-neon-blue hover:bg-neon-blue/80 text-black font-semibold py-3 px-8 rounded-lg neon-glow transition-all">
              ابدأ الآن مجاناً
              <ArrowRight className="inline ml-2" size={20} />
            </button>
            <button className="border border-neon-blue text-neon-blue hover:bg-neon-blue/10 py-3 px-8 rounded-lg transition-all">
              شاهد العرض التوضيحي
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">لماذا CVLogic؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-dark-800 p-6 rounded-lg border border-neon-blue/20"
            >
              <Zap className="text-neon-blue mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">فحص ATS متقدم</h3>
              <p className="text-gray-300">تحليل دقيق للسيرة الذاتية وتحسينها لتتجاوز أنظمة ATS بمعدل نجاح 95%</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dark-800 p-6 rounded-lg border border-neon-purple/20"
            >
              <Globe className="text-neon-purple mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">دعم اللغات الذكي</h3>
              <p className="text-gray-300">دعم كامل للعربية والإنجليزية مع RTL/LTR تلقائي وترجمة احترافية</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-dark-800 p-6 rounded-lg border border-neon-cyan/20"
            >
              <Shield className="text-neon-cyan mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">أمان وخصوصية</h3>
              <p className="text-gray-300">تشفير متقدم وبيانات محمية GDPR مع خوارزميات AI آمنة</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">خطط الأسعار</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-dark-800 p-8 rounded-lg border border-gray-700 hover:border-neon-blue/50 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-4">مجاني</h3>
              <p className="text-4xl font-bold mb-6">$0</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={20} /> فحص ATS لمرة واحدة</li>
                <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={20} /> تصدير PDF أساسي</li>
                <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={20} /> دعم العربية والإنجليزية</li>
              </ul>
              <button className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-lg transition-all">
                ابدأ مجاناً
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dark-800 p-8 rounded-lg border-2 border-neon-blue neon-glow relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neon-blue text-black px-4 py-1 rounded-full text-sm font-semibold">
                الأكثر شعبية
              </div>
              <h3 className="text-2xl font-semibold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6">$9.99<span className="text-lg">/شهر</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={20} /> فحص ATS غير محدود</li>
                <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={20} /> تحسين الجمل بالAI</li>
                <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={20} /> تصدير متعدد التنسيقات</li>
                <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={20} /> دعم 24/7</li>
              </ul>
              <button className="w-full bg-neon-blue text-black font-semibold py-3 rounded-lg hover:bg-neon-blue/80 transition-all">
                اشترك الآن
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-dark-800 p-8 rounded-lg border border-gray-700 hover:border-neon-purple/50 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-4">Premium</h3>
              <p className="text-4xl font-bold mb-6">$19.99<span className="text-lg">/شهر</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={20} /> جميع ميزات Pro</li>
                <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={20} /> استشارة شخصية</li>
                <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={20} /> تحليل السوق الوظيفي</li>
                <li className="flex items-center"><CheckCircle className="text-green-400 mr-2" size={20} /> API للمطورين</li>
              </ul>
              <button className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white py-3 rounded-lg transition-all">
                اشترك الآن
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold neon-text">10,000+</div>
              <p className="text-gray-300 mt-2">سيرة ذاتية محسنة</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold neon-text">95%</div>
              <p className="text-gray-300 mt-2">نجاح في تجاوز ATS</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold neon-text">50+</div>
              <p className="text-gray-300 mt-2">لغة مدعومة</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold neon-text">24/7</div>
              <p className="text-gray-300 mt-2">دعم فني</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-800 border-t border-neon-blue/20 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="text-neon-blue" size={24} />
                <span className="text-xl font-bold neon-text">CVLogic</span>
              </div>
              <p className="text-gray-300">
                منصة الذكاء الاصطناعي الأولى لصناعة السير الذاتية الاحترافية
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">المنتجات</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-neon-blue transition-colors">AI Resume Writer</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">ATS Checker</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Cover Letter Generator</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">الدعم</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-neon-blue transition-colors">المساعدة</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">الأسئلة الشائعة</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 CVLogic. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

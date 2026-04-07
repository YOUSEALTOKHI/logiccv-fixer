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
    </div>
  );
}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}

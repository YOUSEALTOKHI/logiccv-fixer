import { motion } from 'framer-motion';
import { Home, FileText, ShoppingCart, Users, Settings, Upload, Zap } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-dark-900 flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-dark-800 border-r border-neon-blue/20 p-6"
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold neon-text">CVLogic</h1>
        </div>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-3 text-neon-blue hover:bg-neon-blue/10 p-3 rounded-lg transition-all">
            <Home size={20} />
            <span>الرئيسية</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-neon-blue hover:bg-neon-blue/10 p-3 rounded-lg transition-all">
            <FileText size={20} />
            <span>سيرتك الذاتية</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-neon-blue hover:bg-neon-blue/10 p-3 rounded-lg transition-all">
            <ShoppingCart size={20} />
            <span>الطلبات</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-neon-blue hover:bg-neon-blue/10 p-3 rounded-lg transition-all">
            <Users size={20} />
            <span>الإفليت</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-neon-blue hover:bg-neon-blue/10 p-3 rounded-lg transition-all">
            <Settings size={20} />
            <span>الإعدادات</span>
          </a>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 neon-text">مرحباً بك في لوحة التحكم</h2>

          {/* Upload CV Section */}
          <div className="bg-dark-800 border border-neon-blue/20 rounded-lg p-8 mb-8">
            <div className="text-center">
              <Upload className="mx-auto text-neon-blue mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-4">ارفع سيرتك الذاتية لبدء الفحص</h3>
              <p className="text-gray-300 mb-6">قم برفع ملف PDF أو Word لتحليل ATS وتحسينه بالذكاء الاصطناعي</p>
              <div className="border-2 border-dashed border-neon-blue/50 rounded-lg p-8 hover:border-neon-blue transition-all cursor-pointer">
                <p className="text-neon-blue">اضغط هنا لاختيار الملف أو اسحبه هنا</p>
                <p className="text-sm text-gray-400 mt-2">يدعم PDF, DOC, DOCX (حتى 10MB)</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dark-800 border border-neon-blue/20 rounded-lg p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">نقاط ATS</p>
                  <p className="text-2xl font-bold text-neon-blue">87/100</p>
                </div>
                <Zap className="text-neon-blue" size={32} />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-dark-800 border border-neon-purple/20 rounded-lg p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">السير المحسنة</p>
                  <p className="text-2xl font-bold text-neon-purple">12</p>
                </div>
                <FileText className="text-neon-purple" size={32} />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">الإفليت المكتسب</p>
                  <p className="text-2xl font-bold text-neon-cyan">$45</p>
                </div>
                <Users className="text-neon-cyan" size={32} />
              </div>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <div className="bg-dark-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">النشاط الأخير</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-dark-700 rounded-lg">
                <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm">تم تحسين السيرة الذاتية للوظيفة "مهندس برمجيات"</p>
                  <p className="text-xs text-gray-400">منذ 2 ساعات</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-dark-700 rounded-lg">
                <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm">تم فحص ATS بنجاح - نقاط: 92/100</p>
                  <p className="text-xs text-gray-400">منذ يوم واحد</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
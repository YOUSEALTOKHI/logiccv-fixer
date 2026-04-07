'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, User, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-neon-blue/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="text-neon-blue" size={24} />
            <span className="text-xl font-bold neon-text">CVLogic</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-neon-blue transition-colors">
              الرئيسية
            </Link>
            <Link href="/dashboard" className="text-gray-300 hover:text-neon-blue transition-colors">
              لوحة التحكم
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-neon-blue transition-colors">
              الأسعار
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-neon-blue transition-colors">
              اتصل بنا
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-neon-blue transition-colors">
              <LogIn size={20} />
            </button>
            <button className="bg-neon-blue hover:bg-neon-blue/80 text-black px-4 py-2 rounded-lg font-semibold transition-all">
              ابدأ مجاناً
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
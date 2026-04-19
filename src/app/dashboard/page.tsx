'use client';

import { motion } from 'framer-motion';
import { FileUp, BarChart3, Settings, LogOut, Home, FileText, ShoppingCart, Users, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { trpc } from '@/utils/trpc';

export default function Dashboard() {
  // const { t, i18n } = useTranslation();
  const isArabic = false; // Temporarily disable i18n
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dragActive, setDragActive] = useState(false);

  // tRPC hooks
  const healthQuery = trpc.health.useQuery();
  const cvListQuery = trpc.cv.list.useQuery();

  const t = (key: string) => {
    if (key === 'dashboard.title') return 'Welcome to Dashboard';
    if (key === 'dashboard.sidebar.home') return 'Home';
    if (key === 'dashboard.sidebar.myCVs') return 'My CVs';
    if (key === 'dashboard.sidebar.orders') return 'Orders';
    if (key === 'dashboard.sidebar.affiliate') return 'Affiliate';
    if (key === 'common.settings') return 'Settings';
    if (key === 'common.logout') return 'Logout';
    if (key === 'dashboard.uploadCV.title') return 'Upload Your Resume';
    if (key === 'dashboard.uploadCV.subtitle') return 'Upload PDF or Word document for ATS analysis';
    if (key === 'dashboard.uploadCV.dropZone') return 'Click to select file or drag & drop';
    if (key === 'dashboard.uploadCV.supportedFormats') return 'Supported: PDF, DOC, DOCX (up to 10MB)';
    if (key === 'dashboard.stats.atsScore') return 'ATS Score';
    if (key === 'dashboard.stats.optimizedResumes') return 'Optimized Resumes';
    if (key === 'dashboard.stats.affiliateEarnings') return 'Affiliate Earnings';
    return key;
  };

  const menuItems = [
    { icon: Home, label: t('dashboard.sidebar.home'), href: '/dashboard' },
    { icon: FileText, label: t('dashboard.sidebar.myCVs'), href: '/dashboard/cvs' },
    { icon: ShoppingCart, label: t('dashboard.sidebar.orders'), href: '/dashboard/orders' },
    { icon: Users, label: t('dashboard.sidebar.affiliate'), href: '/dashboard/affiliate' },
    { icon: Settings, label: t('common.settings'), href: '/dashboard/settings' },
  ];

  const stats = [
    { label: t('dashboard.stats.atsScore'), value: healthQuery.isSuccess ? '87/100' : 'Loading...', color: 'light-blue' },
    { label: t('dashboard.stats.optimizedResumes'), value: cvListQuery.data ? cvListQuery.data.cvs.length.toString() : '0', color: 'success-green' },
    { label: t('dashboard.stats.affiliateEarnings'), value: '$450', color: 'royal-blue' },
  ];

  return (
    <div className={isArabic ? 'rtl' : 'ltr'} dir={isArabic ? 'rtl' : 'ltr'} className="flex min-h-screen bg-light-gray">
      {/* Sidebar */}
      <motion.aside
        initial={sidebarOpen ? { x: 0 } : { x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className="fixed md:static w-64 h-screen bg-white border-r border-[#E5E7EB] p-6 shadow-lg md:shadow-none z-40"
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <BarChart3 className="text-[#3B82F6]" size={28} />
            <span className="text-xl font-bold font-heading text-[#1E40AF]">CVLogic</span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-dark-gray hover:text-royal-blue"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-3">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#1F2937] hover:bg-[#F9FAFB] hover:text-[#3B82F6] transition"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border-2 border-[#E5E7EB] rounded-lg text-[#1F2937] hover:border-[#3B82F6] hover:text-[#3B82F6] transition">
            <LogOut size={18} />
            <span>{t('common.logout')}</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold font-heading text-[#1F2937]">
              {t('dashboard.title')}
            </h1>
            <p className="text-[#6B7280] mt-1">
              Manage your career optimization tools
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {}}
              className="px-3 py-2 rounded-lg bg-white border border-[#E5E7EB] text-[#1F2937] hover:border-[#3B82F6] transition"
            >{isArabic ? 'EN' : 'العربية'}</button>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-lg bg-white border border-[#E5E7EB] text-[#1F2937] hover:border-[#3B82F6]"
            >
              <Menu size={24} />
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          {stats.map((stat, i) => (
            <div key={i} className="card">
              <p className="text-[#6B7280] text-sm mb-2">{stat.label}</p>
              <p className={`text-3xl font-bold text-[#3B82F6]`}>
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Upload CV Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="card mb-8"
        >
          <h2 className="text-2xl font-bold font-heading text-[#1F2937] mb-4">
            {t('dashboard.uploadCV.title')}
          </h2>
          <p className="text-[#6B7280] mb-6">
            {t('dashboard.uploadCV.subtitle')}
          </p>

          <div
            onDragOver={() => setDragActive(true)}
            onDragLeave={() => setDragActive(false)}
            onDrop={() => setDragActive(false)}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
              dragActive
                ? 'border-[#3B82F6] bg-blue-50'
                : 'border-[#E5E7EB] hover:border-[#3B82F6]'
            }`}
          >
            <FileUp className="mx-auto text-[#3B82F6] mb-4" size={48} />
            <p className="text-[#1F2937] font-semibold mb-2">
              {t('dashboard.uploadCV.dropZone')}
            </p>
            <p className="text-[#6B7280] text-sm">
              {t('dashboard.uploadCV.supportedFormats')}
            </p>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="card">
            <h3 className="text-lg font-bold font-heading text-[#1F2937] mb-3">
              Recent CVs
            </h3>
            <p className="text-[#6B7280]">
              No CVs uploaded yet. Start by uploading your resume above.
            </p>
          </div>

          <div className="card">
            <h3 className="text-lg font-bold font-heading text-[#1F2937] mb-3">
              Quick Stats
            </h3>
            <div className="space-y-2 text-[#6B7280]">
              <p>✓ Account active since today</p>
              <p>✓ Free tier subscription</p>
              <p>✓ Ready to upgrade</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

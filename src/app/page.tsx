import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
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

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, BarChart3, Users, Sparkles, ShieldCheck, FileBadge2 } from 'lucide-react';

const features = [
  { icon: BarChart3, title: 'ATS Analysis', desc: 'Get a real ATS-style score and actionable keyword insights.' },
  { icon: Sparkles, title: 'AI Rewrite', desc: 'Instantly improve bullet points, summary, and overall clarity.' },
  { icon: Users, title: 'Role Matching', desc: 'Align your resume with specific jobs and hiring expectations.' },
  { icon: ShieldCheck, title: 'Recruiter-Ready', desc: 'Professional formatting and language that stands out.' },
  { icon: FileBadge2, title: 'Cover Letter', desc: 'Generate matching cover letters for each target job.' },
  { icon: Zap, title: 'Fast Results', desc: 'Go from draft to optimized CV in minutes, not days.' },
];

const plans = [
  {
    name: 'Starter',
    price: '$29',
    desc: 'For one-time optimization',
    highlight: false,
    items: ['ATS score report', 'Keyword gap analysis', 'Basic recommendations'],
  },
  {
    name: 'Pro',
    price: '$79',
    desc: 'Best for active job seekers',
    highlight: true,
    items: ['Unlimited CV revisions', 'AI rewrite assistant', 'Job-target optimization', 'Priority support'],
  },
  {
    name: 'Career+',
    price: '$129',
    desc: 'Complete career toolkit',
    highlight: false,
    items: ['Everything in Pro', 'Cover letter generator', 'LinkedIn summary optimizer', 'Advanced coaching notes'],
  },
];

export default function HomePage() {
  const isArabic = false;

  return (
    <div className={isArabic ? 'rtl' : 'ltr'} dir={isArabic ? 'rtl' : 'ltr'}>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.35 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[#E5E7EB]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="text-[#2563EB]" size={24} />
            <span className="text-2xl font-extrabold tracking-tight text-[#1E3A8A]">CVLogic</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#374151]">
            <a href="#features" className="hover:text-[#1E40AF]">Features</a>
            <a href="#pricing" className="hover:text-[#1E40AF]">Pricing</a>
            <a href="#how" className="hover:text-[#1E40AF]">How it works</a>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="hidden sm:inline-flex text-[#1F2937] hover:text-[#1E40AF] text-sm font-medium">
              Dashboard
            </Link>
            <Link
              href="/dashboard"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.nav>

      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#EFF6FF] via-white to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3 py-1 text-xs text-[#1D4ED8] font-semibold mb-6">
              <Sparkles size={14} />
              AI-Powered Resume Builder
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-tight mb-6">
              Build a Job-Winning Resume in Minutes
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8 max-w-xl">
              Create, optimize, and tailor your resume with ATS-focused AI guidance to increase interviews and land better opportunities faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/dashboard"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
              >
                Start Building <ArrowRight size={18} />
              </Link>
              <a
                href="#pricing"
                className="border border-[#93C5FD] text-[#1D4ED8] hover:bg-[#EFF6FF] px-7 py-3 rounded-xl font-semibold text-center"
              >
                See Pricing
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[#64748B]">
              <span className="flex items-center gap-2"><CheckCircle className="text-[#10B981]" size={16} /> ATS-ready templates</span>
              <span className="flex items-center gap-2"><CheckCircle className="text-[#10B981]" size={16} /> AI writing assistant</span>
              <span className="flex items-center gap-2"><CheckCircle className="text-[#10B981]" size={16} /> One-click export</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-white border border-[#E2E8F0] rounded-2xl shadow-xl p-6"
          >
            <div className="rounded-xl border border-[#DBEAFE] bg-[#F8FAFC] p-5 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[#0F172A]">Resume Score</h3>
                <span className="text-[#2563EB] font-bold">92/100</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
                <div className="h-2 w-[92%] bg-[#2563EB]" />
              </div>
            </div>
            <div className="space-y-3">
              {['Keyword match improved', 'Summary optimized', 'Formatting ATS-safe', 'Impact verbs enhanced'].map((line) => (
                <div key={line} className="flex items-center justify-between rounded-lg border border-[#E5E7EB] px-4 py-3">
                  <span className="text-[#334155] text-sm">{line}</span>
                  <CheckCircle className="text-[#10B981]" size={16} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-extrabold text-[#0F172A] mb-4">Everything you need to stand out</h2>
            <p className="text-[#64748B]">A complete resume workflow designed for real hiring pipelines and ATS systems.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#E5E7EB] p-6 hover:shadow-md transition bg-white">
                <f.icon className="text-[#2563EB] mb-4" size={24} />
                <h3 className="font-bold text-[#0F172A] mb-2">{f.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            ['Upload or Start', 'Import your current CV or start from a clean template.'],
            ['Optimize with AI', 'Improve bullets, metrics, and keywords for target roles.'],
            ['Export & Apply', 'Download and apply confidently with an ATS-optimized resume.'],
          ].map(([title, desc], i) => (
            <div key={title} className="rounded-2xl bg-white border border-[#E5E7EB] p-6">
              <div className="w-8 h-8 rounded-full bg-[#DBEAFE] text-[#1D4ED8] font-bold flex items-center justify-center mb-4">{i + 1}</div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">{title}</h3>
              <p className="text-sm text-[#64748B]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-extrabold text-[#0F172A] mb-4">Simple pricing for every stage</h2>
            <p className="text-[#64748B]">Choose your plan and start building a stronger career profile today.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border p-7 ${p.highlight ? 'border-[#2563EB] bg-[#EFF6FF] shadow-md' : 'border-[#E5E7EB] bg-white'}`}
              >
                {p.highlight && (
                  <span className="inline-block mb-4 text-xs px-3 py-1 rounded-full bg-[#2563EB] text-white font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#0F172A]">{p.name}</h3>
                <div className="text-4xl font-extrabold text-[#1D4ED8] mt-2">{p.price}</div>
                <p className="text-sm text-[#64748B] mt-2 mb-5">{p.desc}</p>
                <ul className="space-y-3 mb-7">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#334155]">
                      <CheckCircle className="text-[#10B981]" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold ${p.highlight ? 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]' : 'bg-[#F1F5F9] text-[#1D4ED8] hover:bg-[#E2E8F0]'}`}>
                  Choose {p.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0F172A]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Ready to boost your interview rate?</h2>
          <p className="text-[#CBD5E1] mb-7">Build your resume with AI and start applying with confidence today.</p>
          <Link href="/dashboard" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold">
            Open Dashboard <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <footer className="bg-[#020617] text-[#94A3B8] py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 CVLogic. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

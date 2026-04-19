import Link from 'next/link';

const features = [
  {
    title: 'ATS Score in Seconds',
    description:
      'Upload your resume and get an instant ATS-style score with practical, job-focused guidance.',
  },
  {
    title: 'Smart Improvement Suggestions',
    description:
      'LogicCV highlights weak bullets, missing keywords, and formatting problems so you know exactly what to fix.',
  },
  {
    title: 'Built for Real Hiring Pipelines',
    description:
      'Designed around modern screening behavior to help your CV pass filters and reach recruiters faster.',
  },
];

const steps = [
  {
    title: '1) Add Resume Content',
    description:
      'Paste your CV text into the dashboard in a clean, distraction-free editor.',
  },
  {
    title: '2) Run AI Analysis',
    description:
      'LogicCV evaluates structure, clarity, and relevance, then returns a clear score and feedback.',
  },
  {
    title: '3) Apply and Improve',
    description:
      'Use targeted recommendations to iterate quickly and submit stronger applications.',
  },
];

const pricing = [
  {
    plan: 'Starter',
    price: '$0',
    subtitle: 'For quick checks',
    bullets: ['Basic scoring', 'Core suggestions', 'Limited usage'],
    highlighted: false,
  },
  {
    plan: 'Pro',
    price: '$19/mo',
    subtitle: 'For active job seekers',
    bullets: ['Advanced analysis', 'Priority processing', 'Deeper optimization insights'],
    highlighted: true,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-violet-950/40 px-8 py-14 shadow-2xl">
          <p className="mb-4 inline-flex rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
            LogicCV • AI Resume Optimizer
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Build a CV that passes ATS and gets interview calls faster.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-300 md:text-lg">
            LogicCV helps you analyze your resume, identify weak points, and apply high-impact fixes with a modern, guided workflow.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
            >
              Start Free Analysis
            </Link>
            <a
              href="#features"
              className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto grid max-w-6xl gap-5 px-6 pb-16 md:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h2 className="text-lg font-semibold">{feature.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">
          <h3 className="text-2xl font-bold">How LogicCV Works</h3>
          <p className="mt-2 max-w-2xl text-zinc-300">
            From raw resume text to interview-ready polish in three clear steps.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-sm font-semibold text-violet-300">{step.title}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">
          <h3 className="text-2xl font-bold">Pricing</h3>
          <p className="mt-2 text-zinc-300">
            Start free, then upgrade when you want deeper resume optimization.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {pricing.map((item) => (
              <div
                key={item.plan}
                className={`rounded-2xl border p-5 ${
                  item.highlighted
                    ? 'border-violet-500/40 bg-violet-500/10'
                    : 'border-zinc-800 bg-zinc-950'
                }`}
              >
                <p className={`text-sm ${item.highlighted ? 'text-violet-300' : 'text-zinc-400'}`}>
                  {item.plan}
                </p>
                <p className="mt-2 text-3xl font-bold">{item.price}</p>
                <p className="mt-2 text-sm text-zinc-300">{item.subtitle}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-200">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-violet-500/30 bg-violet-500/10 p-8 text-center">
          <h3 className="text-2xl font-bold">Ready to improve your resume with LogicCV?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-200">
            Get your score, fix critical issues, and submit with confidence.
          </p>
          <Link
            href="/dashboard"
            className="mt-6 inline-flex rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            Open Dashboard
          </Link>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-6 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} LogicCV. All rights reserved.
      </footer>
    </main>
  );
}

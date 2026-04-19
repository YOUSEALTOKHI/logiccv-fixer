'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

type AnalyzeResponse = {
  score: number;
  suggestions: string[];
  error?: string;
};

export default function DashboardPage() {
  const [resumeText, setResumeText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalyzeResponse | null>(null);
  const [error, setError] = useState('');

  const handleAnalyze = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!resumeText.trim()) {
      setError('Please paste your resume text before analyzing.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resumeText }),
      });

      const data = (await response.json()) as AnalyzeResponse;

      if (!response.ok || data.error) {
        setError(data.error || 'Analysis failed. Please try again.');
      } else {
        setResult(data);
      }
    } catch {
      setError('Something went wrong while calling the analysis API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 md:px-6">
        <aside className="hidden w-64 shrink-0 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 md:block">
          <h2 className="text-lg font-semibold">LogicCV</h2>
          <p className="mt-1 text-xs text-zinc-400">Dashboard</p>
          <nav className="mt-6 space-y-2 text-sm">
            <a className="block rounded-lg bg-violet-500/20 px-3 py-2 text-violet-200" href="#">
              Analyze Resume
            </a>
            <Link className="block rounded-lg px-3 py-2 text-zinc-300 hover:bg-zinc-800" href="/">
              Landing Page
            </Link>
          </nav>
        </aside>

        <section className="flex-1">
          <header className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <h1 className="text-2xl font-bold">Resume Analyzer</h1>
            <p className="mt-2 text-sm text-zinc-300">
              Paste your resume content, run analysis, and review ATS-focused suggestions.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            <form onSubmit={handleAnalyze} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 lg:col-span-2">
              <label htmlFor="resumeText" className="mb-2 block text-sm font-medium text-zinc-200">
                Resume Content
              </label>
              <textarea
                id="resumeText"
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your CV/resume text here..."
                className="h-72 w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-sm text-zinc-100 outline-none ring-violet-500/40 placeholder:text-zinc-500 focus:ring"
              />
              {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}
              <button
                type="submit"
                disabled={loading}
                className="mt-4 rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Analyzing...' : 'Analyze Resume'}
              </button>
            </form>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <h2 className="text-lg font-semibold">Analysis Result</h2>
              {!result && !loading && (
                <p className="mt-3 text-sm text-zinc-400">Your score and suggestions will appear here.</p>
              )}
              {loading && <p className="mt-3 text-sm text-zinc-300">Running analysis...</p>}
              {result && (
                <div className="mt-4">
                  <div className="rounded-xl border border-violet-500/40 bg-violet-500/10 p-4">
                    <p className="text-xs text-violet-300">ATS Score</p>
                    <p className="mt-1 text-3xl font-bold">{result.score}</p>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold">Suggestions</h3>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                      {result.suggestions?.map((item, index) => (
                        <li key={`${item}-${index}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

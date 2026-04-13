import { useState } from 'react';
import { useTranslation } from 'next-translate-next';
import { trpc } from '@trpc/client';

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const isArabic = false; // Temporarily disable i18n
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadState({ ...uploadState, file });
  };

  const handleSubmit = async () => {
    if (!uploadState.file) {
      alert(t('error:select-file'));
      return;
    }

    try {
      const result = await trpc.atsAnalysis.analyzeFile.useMutation({
        body: {
          file,
        },
      });

      if (result.error) {
        console.error(result.error);
        alert(t('error:analyze-failed'));
        return;
      }

      setUploadState({ ...uploadState, score: result.data.score, suggestions: result.data.suggestions });
    } catch (error) {
      console.error(error);
      alert(t('error:analyze-failed'));
    }
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* Top Header */}
      <header className="sticky top-0 z-10 bg-black backdrop-blur-md shadow-lg px-4 py-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">{t('dashboard')}</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden text-dark-gray hover:text-royal-blue"
        >
          {sidebarOpen ? 'Close' : 'Open'}
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`hidden md:block bg-zinc-950 shadow-lg p-4 w-64 fixed left-0 top-0 z-10`}>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block text-white hover:text-royal-blue">Home</a>
          </li>
          <li>
            <a href="#" className="block text-white hover:text-royal-blue">CVs</a>
          </li>
          <li>
            <a href="#" className="block text-white hover:text-royal-blue">Orders</a>
          </li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-4">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 bg-no-repeat bg-cover h-screen flex justify-center items-center text-white font-bold text-6xl">
          <h1 className="text-8xl">Welcome to our Premium SaaS Product</h1>
        </div>

        {/* Drag & Drop Zone or Feature Card Section */}
        <div className="bg-gray-900 p-4 rounded-xl shadow-lg mt-8">
          <h2 className="text-white font-bold text-xl">Drag & Drop Your Content Here</h2>
          {/* Add your drag & drop functionality here */}
        </div>

        {/* Footer */}
        <footer className="bg-black backdrop-blur-md shadow-lg px-4 py-2 flex justify-between items-center fixed bottom-0 z-10">
          <p className="text-white text-sm">&copy; 2023 Your Company</p>
          <a href="#" className="text-white hover:text-royal-blue">Affiliate Program</a>
          <a href="#" className="text-white hover:text-royal-blue">Pricing</a>
          <a href="#" className="text-white hover:text-royal-blue">Contact</a>
        </footer>

        {/* TRPC Hooks */}
        {uploadState.file && (
          <div className="bg-gray-900 p-4 rounded-xl shadow-lg mt-8">
            <h2 className="text-white font-bold text-xl">Analysis Result</h2>
            <div className="flex items-center justify-between">
              <p className="text-white text-xl">{uploadState.score}</p>
              <button
                onClick={() => setUploadState({ ...uploadState, score: null, suggestions: [] })}
                className="bg-gray-900 text-white hover:bg-royal-blue p-2 rounded-md"
              >
                Clear Result
              </button>
            </div>
            <ul className="mt-4">
              {uploadState.suggestions.map((suggestion, index) => (
                <li key={index} className="text-gray-500 text-sm">{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </main>

      {/* TRPC Hooks */}
      {healthQuery.data && (
        <div className="bg-gray-900 p-4 rounded-xl shadow-lg mt-8">
          <h2 className="text-white font-bold text-xl">Health Check</h2>
          <p>{healthQuery.data}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

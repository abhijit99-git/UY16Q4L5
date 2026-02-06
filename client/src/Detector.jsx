
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Detector = () => {
  const [url, setUrl] = useState("https://secure-bank-login-update.com/verify");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Analysis failed:", error);
      // Fallback for demo if server is not running
      setResult({
        score: 45,
        riskLevel: 'Critical',
        details: [
          { type: 'danger', message: 'Backend Connection Failed - Demo Mode' },
          { type: 'warning', message: 'Using simulation data' }
        ],
        geo: 'Unknown',
        registrar: 'Unknown'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      {/* Top Navigation Bar */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-primary p-1.5 rounded-lg">
              <span className="material-symbols-outlined text-white text-2xl">shield_lock</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Safe Surf <span className="text-primary">AI</span>
            </h1>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <a className="text-sm font-medium text-primary border-b-2 border-primary py-5" href="#">Analyzer</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-slate-300 dark:border-slate-600">
              <img
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDerxYx_WhsaRNi79jWKEqc8w5S59ULlcEStyVSeq97Gggs8-VhhZsSQO9SFYUIhG-Pz2R7GF0PJW1dqqBaJJaBjhv2Mq1RIhtzyDKK-QTWmlMP8WdIT834KPQYQi3eaoKb22s7LdsZHuOejKwt0zH4VDw4MLXUicCwsDkYWfnVa8Ligo0jod25pTRTUi36sRkSkG5p6v5F52iFPVIUnxqfyAgXy2ygjNZbyTil0w2u6LsG-jfxPECYavhIqmJaYYonuezM49E8XMh7"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Hero Search Section */}
        <section className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            URL Threat Intelligence
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mb-10 text-lg">
            Deep-scan any website for phishing signatures, malicious JS execution, and SSL vulnerabilities in real-time.
          </p>
          <div className="w-full max-w-3xl relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-xl blur opacity-25 group-focus-within:opacity-50 transition duration-1000"></div>
            <div className="relative flex items-center bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 p-2 rounded-xl shadow-2xl">
              <span className="material-symbols-outlined ml-4 text-slate-400">link</span>
              <input
                className="flex-1 bg-transparent border-none focus:ring-0 text-lg px-4 text-slate-900 dark:text-white"
                placeholder="https://suspicious-site-verify.net/login"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button
                onClick={handleAnalyze}
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-all neon-glow-primary disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? (
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                ) : (
                  <span className="material-symbols-outlined">bolt</span>
                )}
                {loading ? 'Scanning...' : 'Analyze'}
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-6 text-xs font-medium text-slate-500 uppercase tracking-widest">
            <span>Fast Scan</span>
            <span className="text-slate-700 dark:text-slate-600">•</span>
            <span>AI Sandbox</span>
            <span className="text-slate-700 dark:text-slate-600">•</span>
            <span>OSINT Check</span>
          </div>
        </section>

        {/* Results Dashboard */}
        {result && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in">
            {/* Left Panel: Score Gauge */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tighter ${result.score < 50 ? 'bg-danger/10 text-danger' : result.score < 80 ? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'}`}>
                    {result.riskLevel} Risk
                  </span>
                </div>
                <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-8">Overall Safety Score</h3>

                {/* SVG Gauge */}
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-slate-100 dark:text-slate-800" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
                    <circle
                      className={`${result.score < 50 ? 'text-danger' : result.score < 80 ? 'text-warning' : 'text-success'} circular-progress`}
                      cx="96" cy="96"
                      fill="transparent"
                      r="88"
                      stroke="currentColor"
                      strokeDasharray="552.92"
                      strokeDashoffset={552.92 - (552.92 * result.score) / 100}
                      strokeWidth="12"
                      style={{ filter: "drop-shadow(0 0 8px rgba(currentColor, 0.5))" }}
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-slate-900 dark:text-white">{result.score}</span>
                    <span className="text-slate-500 text-sm">/ 100</span>
                  </div>
                </div>
                <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {result.score < 50 ? "Multiple phishing heuristics triggered." : "This site appears safe to browse."}
                </p>
              </div>

              {/* Domain Info Card */}
              <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">info</span>
                    Target Info
                  </h4>
                  <span className="text-xs text-slate-500">Scan ID: #{Math.floor(Math.random() * 100000)}</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-500">Registrar</span>
                    <span className="text-sm font-mono text-slate-900 dark:text-slate-300">{result.registrar}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-500">Country</span>
                    <span className="text-sm font-mono text-slate-900 dark:text-slate-300">{result.geo}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: Detailed Analysis Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Analysis Details */}
              <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 md:col-span-2 relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-warning">javascript</span>
                    Analysis Findings
                  </h3>
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded font-bold uppercase">{result.details.length} Items</span>
                </div>
                <div className="space-y-4">
                  {result.details.map((item, index) => (
                    <div key={index} className={`flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-4 ${item.type === 'danger' ? 'border-danger' : item.type === 'warning' ? 'border-warning' : 'border-success'}`}>
                      <span className={`material-symbols-outlined ${item.type === 'danger' ? 'text-danger' : item.type === 'warning' ? 'text-warning' : 'text-success'}`}>
                        {item.type === 'danger' ? 'cancel' : item.type === 'warning' ? 'warning' : 'check_circle'}
                      </span>
                      <div>
                        <p className="text-sm font-bold">{item.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Location (Implicit OSINT) */}
              <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 md:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Server Origin Geolocation</h3>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {result.geo}
                  </div>
                </div>
                <div className="h-48 w-full bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden grayscale opacity-80 group relative">
                  {/* Simulated Map Background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPmQ9OgMDNcNrMkHsmXCw44yPF5Q1i3Kze5NOYFUgUIWKb-g_QDQ5njSREkWo9EdY4c9XKLAFEzBKEdxnyI-4Kw-p15g7AuPKtl8mq5miHX4JODypZy-B44_79X9BPHcj_J486rprIQADID3DobEacWgNRnCyP3CCeb67W-GAAfnE7IU1nzKxnDJ1Y1EKhKSKpa5gvEDLNxgFNIW25-P7HNxJT-0qKdXRae38_7vHFvU3iAIT-Fl8y4DwQvmk92Kx7gY4erXRRiB3D')" }}
                  >
                  </div>
                  <div className="absolute inset-0 bg-background-dark/30"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-danger/40 rounded-full animate-ping"></div>
                      <div className="relative bg-danger h-4 w-4 rounded-full border-2 border-white shadow-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Scanning Overlay (Simulated context) */}
      <div className="fixed bottom-8 right-8 flex items-center gap-3 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-2xl">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
        </div>
        <div className="text-xs">
          <p className="font-bold">Real-time Protection Active</p>
          <p className="text-slate-500">Monitoring 12 suspicious threads...</p>
        </div>
      </div>
    </div>
  );
};

export default Detector;

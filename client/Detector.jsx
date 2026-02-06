import React from "react";

const Detector = () => {
  return (
    <>
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-background-dark/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <span className="material-symbols-outlined text-white text-xl">
                shield_locked
              </span>
            </div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              PhishShield <span className="text-primary">AI</span>
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Search */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            URL Threat Intelligence
          </h2>
          <p className="text-slate-500 mb-8">
            Scan websites for phishing and malicious behavior in real time.
          </p>

          <div className="max-w-3xl mx-auto flex items-center bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl p-2 shadow-xl">
            <span className="material-symbols-outlined ml-4 text-slate-400">
              link
            </span>
            <input
              className="flex-1 bg-transparent px-4 text-lg outline-none text-slate-900 dark:text-white"
              defaultValue="https://secure-bank-login-update.com/verify"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-lg neon-glow-primary flex items-center gap-2">
              <span className="material-symbols-outlined">bolt</span>
              Analyze
            </button>
          </div>
        </section>

        {/* Dashboard */}
        <div className="grid lg:grid-cols-12 gap-6">

          {/* Risk Score */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-danger text-xs font-bold uppercase">
                High Risk
              </span>

              <div className="relative w-40 h-40 mx-auto my-6">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    className="text-slate-200 dark:text-slate-700"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray="439.6"
                    strokeDashoffset="110"
                    className="text-danger circular-progress"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold">82</span>
                  <span className="text-sm text-slate-500">Critical</span>
                </div>
              </div>

              <p className="text-sm text-slate-500">
                Multiple phishing indicators detected.
              </p>
            </div>
          </div>

          {/* Analysis Cards */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">

            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-2">SSL Certificate</h3>
              <span className="text-success text-sm font-bold">SECURE</span>
              <p className="text-sm text-slate-500 mt-2">
                Valid HTTPS encryption detected.
              </p>
            </div>

            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-2">Domain Reputation</h3>
              <span className="text-danger text-sm font-bold">SUSPICIOUS</span>
              <p className="text-sm text-slate-500 mt-2">
                Matches known phishing domain patterns.
              </p>
            </div>

            <div className="md:col-span-2 bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4">JavaScript Behavior</h3>

              <ul className="space-y-3 text-sm">
                <li className="text-danger">⚠ Form data exfiltration detected</li>
                <li className="text-warning">⚠ Obfuscated script found</li>
                <li className="text-success">✓ Safe CDN resources</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <footer className="mt-12 p-6 rounded-xl bg-primary/10 border border-primary/20 flex justify-between items-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Automated abuse report available
          </p>
          <button className="bg-primary text-white px-6 py-2 rounded-lg shadow-lg">
            Initiate Takedown
          </button>
        </footer>
      </main>
    </>
  );
};

export default Detector;

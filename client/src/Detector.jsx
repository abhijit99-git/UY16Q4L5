
import { Link } from 'react-router-dom';

const Detector = () => {
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
                defaultValue="https://secure-bank-login-update.com/verify"
              />
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-all neon-glow-primary">
                <span className="material-symbols-outlined">bolt</span>
                Analyze
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel: Score Gauge */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="px-2 py-1 rounded bg-danger/10 text-danger text-[10px] font-bold uppercase tracking-tighter">High Risk</span>
              </div>
              <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-8">Overall Risk Score</h3>

              {/* SVG Gauge */}
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-slate-100 dark:text-slate-800" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
                  <circle
                    className="text-danger circular-progress"
                    cx="96" cy="96"
                    fill="transparent"
                    r="88"
                    stroke="currentColor"
                    strokeDasharray="552.92"
                    strokeDashoffset="110.58"
                    strokeWidth="12"
                    style={{ filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.5))" }}
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold text-slate-900 dark:text-white">82</span>
                  <span className="text-slate-500 text-sm">Critical</span>
                </div>
              </div>
              <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Multiple phishing heuristics triggered. Site is impersonating a financial institution.
              </p>
            </div>

            {/* Domain Info Card */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">info</span>
                  Target Info
                </h4>
                <span className="text-xs text-slate-500">Scan ID: #88219</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-500">IP Address</span>
                  <span className="text-sm font-mono text-slate-900 dark:text-slate-300">192.168.4.12</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-500">Registrar</span>
                  <span className="text-sm font-mono text-slate-900 dark:text-slate-300">Namesilo, LLC</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-500">Age</span>
                  <span className="text-sm font-mono text-danger font-bold">2 Days</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-500">Country</span>
                  <span className="text-sm font-mono text-slate-900 dark:text-slate-300">Russia (RU)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Detailed Analysis Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SSL Status Card */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:border-success/50 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-success/10 p-2 rounded-lg text-success">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <span className="bg-success/20 text-success text-[10px] px-2 py-1 rounded font-bold">SECURE</span>
              </div>
              <h3 className="text-lg font-bold mb-2">SSL Certificate</h3>
              <p className="text-sm text-slate-500 mb-4">Valid encryption detected, though authenticity of issuer is under review.</p>
              <div className="text-xs space-y-1 text-slate-400">
                <p>Issuer: Let's Encrypt</p>
                <p>Expiry: 89 days remaining</p>
              </div>
            </div>

            {/* Domain Reputation Card */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:border-danger/50 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-danger/10 p-2 rounded-lg text-danger">
                  <span className="material-symbols-outlined">report</span>
                </div>
                <span className="bg-danger/20 text-danger text-[10px] px-2 py-1 rounded font-bold uppercase">Suspicious</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Domain Reputation</h3>
              <p className="text-sm text-slate-500 mb-4">This domain matches known phishing patterns for major banking institutions.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-semibold">BLACKLISTED</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-semibold">TYPOSQUATTING</span>
              </div>
            </div>

            {/* JavaScript Behavior Card */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 md:col-span-2 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-warning">javascript</span>
                  Script Behavior Analysis
                </h3>
                <span className="text-xs bg-warning/10 text-warning px-2 py-1 rounded font-bold uppercase">2 Threats Detected</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-4 border-danger">
                  <span className="material-symbols-outlined text-danger">cancel</span>
                  <div>
                    <p className="text-sm font-bold">Form Hijacking Detected</p>
                    <p className="text-xs text-slate-500 mt-1">Script at <code className="bg-slate-200 dark:bg-slate-700 px-1 rounded">/js/track.js</code> is exfiltrating input data to a non-origin server.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-4 border-warning">
                  <span className="material-symbols-outlined text-warning">warning</span>
                  <div>
                    <p className="text-sm font-bold">Obfuscated Code</p>
                    <p className="text-xs text-slate-500 mt-1">High levels of entropy detected in inline scripts, likely hiding malicious payload delivery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-4 border-success">
                  <span className="material-symbols-outlined text-success">check_circle</span>
                  <div>
                    <p className="text-sm font-bold">Resource Integrity</p>
                    <p className="text-xs text-slate-500 mt-1">External libraries are loaded via CDN with valid SRI hashes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Location (Implicit OSINT) */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 md:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Server Origin Geolocation</h3>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Moscow, Russian Federation
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

        {/* Action Footer */}
        <footer className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">terminal</span>
            </div>
            <div>
              <h4 className="font-bold">Automated Takedown Request</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Our AI can draft and send abuse reports to the hosting provider automatically.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-lg border border-slate-300 dark:border-slate-600 font-bold text-sm hover:bg-white dark:hover:bg-slate-800 transition-colors">
              Download PDF Report
            </button>
            <button className="px-6 py-2 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
              Initiate Takedown
            </button>
          </div>
        </footer>
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

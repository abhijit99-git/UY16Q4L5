import React from "react";

export default function App() {
  return (
    <div className="dark font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen overflow-x-hidden grid-pattern">

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg glow-effect">
              <span className="material-symbols-outlined text-white text-2xl">
                shield_locked
              </span>
            </div>
            <h2 className="text-xl font-bold uppercase">PhishGuard</h2>
          </div>

          <nav className="hidden md:flex gap-10">
            <a href="#" className="hover:text-primary">Home</a>
            <a href="#" className="hover:text-primary">Analyze</a>
            <a href="#" className="hover:text-primary">Dashboard</a>
            <a href="#" className="hover:text-primary">Extension</a>
          </nav>

          <div className="flex gap-4">
            <button className="hidden sm:block">Log In</button>
            <button className="bg-primary text-white px-6 py-2.5 rounded-lg glow-effect">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="h-2 w-2 bg-primary rounded-full"></span>
              <span className="text-xs font-bold text-primary uppercase">
                AI Protection Active
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Detect Phishing. <span className="text-primary">Stay Safe.</span> Browse Confidently.
            </h1>

            <p className="text-lg text-slate-500 max-w-lg">
              Identify malicious URLs and fake resources in milliseconds using our AI-driven security engine.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-primary text-white px-8 py-4 rounded-xl flex items-center gap-2 glow-effect">
                <span className="material-symbols-outlined">search</span>
                Analyze Website
              </button>

              <button className="bg-slate-200 dark:bg-white/5 px-8 py-4 rounded-xl flex items-center gap-2">
                <span className="material-symbols-outlined">dashboard</span>
                View Dashboard
              </button>
            </div>

            <div className="flex gap-12 pt-8 border-t border-slate-200 dark:border-white/5">
              {[
                ["1.2M+", "Threats Stopped"],
                ["99.9%", "Accuracy Rate"],
                ["40ms", "Avg Response"]
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold">{value}</div>
                  <div className="text-xs uppercase text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>

            <div className="relative max-w-md w-full aspect-square bg-gradient-to-br from-primary/20 to-transparent border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col items-center justify-center">
              <div className="bg-background-dark/80 p-12 rounded-full border border-primary/40 shadow-2xl relative">
                <span
                  className="material-symbols-outlined text-primary text-[120px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  security
                </span>
                <div className="absolute inset-0 border border-primary/20 rounded-full scale-125"></div>
                <div className="absolute inset-0 border border-primary/10 rounded-full scale-150"></div>
              </div>

              <div className="mt-12 w-full space-y-3">
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/2"></div>
                </div>
                <div className="flex justify-between text-xs font-mono text-primary/60">
                  <span>SCANNING_NETWORK...</span>
                  <span>88%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Security Features</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Multi-layered analysis to stop phishing before it harms you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["radar", "Real-time Scanning", "Instant URL analysis"],
              ["link", "Link Expansion", "Reveal hidden destinations"],
              ["query_stats", "Risk Scoring", "0–100 threat score"]
            ].map(([icon, title, desc]) => (
              <div key={title} className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/10">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                  <span className="material-symbols-outlined">{icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="bg-primary rounded-[2rem] p-12 lg:p-20 text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to secure your browsing?
            </h2>
            <p className="mb-8 text-white/80">
              Join thousands using our phishing protection daily.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-primary px-10 py-4 rounded-xl flex items-center gap-2">
                <span className="material-symbols-outlined">download</span>
                Add to Chrome
              </button>
              <button className="border border-white/20 px-10 py-4 rounded-xl">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-slate-500">
          © 2024 PhishGuard Security. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

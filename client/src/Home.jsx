import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden grid-pattern bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">

      {/* Header / Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg glow-effect">
                <span className="material-symbols-outlined text-white text-2xl">
                  shield_locked
                </span>
              </div>
              <h2 className="text-xl font-bold tracking-tight uppercase">
                Safe Surf AI
              </h2>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/analyze" className="text-sm font-medium hover:text-primary transition-colors">
              Analyze
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden sm:block text-sm font-semibold px-4 py-2 hover:text-primary transition-colors">
              Log In
            </Link>
            <a href="/dist.zip" download className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:brightness-110 transition-all glow-effect">
              Download Extension
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                AI Protection Active
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Detect Phishing. <span className="text-primary">Stay Safe.</span>{" "}
              Browse Confidently.
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              Identify malicious URLs and fake resources in milliseconds using
              our AI-driven security engine. Your first line of defense against
              social engineering.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/analyze" className="flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-95 transition-all glow-effect">
                <span className="material-symbols-outlined">search</span>
                Analyze Website
              </Link>

              <button className="flex items-center gap-2 bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 font-bold px-8 py-4 rounded-xl hover:bg-slate-300 dark:hover:bg-white/10 transition-all">
                <span className="material-symbols-outlined">dashboard</span>
                View Dashboard
              </button>
            </div>

            {/* Trust Stats */}
            <div className="flex gap-12 mt-4 pt-8 border-t border-slate-200 dark:border-white/5">
              {[
                ["1.2M+", "Threats Stopped"],
                ["99.9%", "Accuracy Rate"],
                ["40ms", "Avg. Response"],
              ].map(([value, label]) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-bold">{value}</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />

            <div className="relative w-full aspect-square max-w-md bg-gradient-to-br from-primary/20 to-transparent border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col items-center justify-center">
              <div className="relative bg-background-dark/80 p-12 rounded-full border border-primary/40 shadow-2xl">
                <span
                  className="material-symbols-outlined text-primary text-[120px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  security
                </span>
                <div className="absolute inset-0 border border-primary/20 rounded-full scale-125" />
                <div className="absolute inset-0 border border-primary/10 rounded-full scale-[1.5]" />
              </div>

              <div className="mt-12 w-full space-y-3">
                <div className="h-2 w-3/4 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/2" />
                </div>
                <div className="flex justify-between text-xs font-mono text-primary/60">
                  <span>SCANNING_NETWORK...</span>
                  <span>88%</span>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-200 dark:border-white/10 flex items-center gap-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-green-500 text-sm">
                  check_circle
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">
                  Status
                </span>
                <span className="text-xs font-bold block">URL Verified</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-white/5 py-12 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1.5 rounded-md">
                <span className="material-symbols-outlined text-white text-xl">shield_locked</span>
              </div>
              <span className="font-bold text-lg">Safe Surf AI</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">Protecting digital frontiers with enterprise-grade AI threat detection available for everyone.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">URL Scanner</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Browser Extension</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">API for Devs</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">Documentation</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Threat Database</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Security Blog</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200 dark:border-white/5 flex justify-between items-center">
          <p className="text-xs text-slate-500">© 2024 Safe Surf AI Security. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">security</span></a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;

const Login = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display selection:bg-primary/30">

      {/* HEADER */}
      <header className="w-full border-b border-gray-200 dark:border-[#223649] px-6 lg:px-10 py-4 flex items-center justify-between bg-white dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-white text-2xl">
              shield_lock
            </span>
          </div>
          <h2 className="text-gray-900 dark:text-white text-xl font-bold">
            PhishGuard <span className="text-primary">AI</span>
          </h2>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Platform", "Features", "Threat Labs"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white text-sm font-medium"
            >
              {item}
            </a>
          ))}
          <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">
              support_agent
            </span>
            Support
          </button>
        </nav>
      </header>

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center p-6 grid-bg relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

        <div className="w-full max-w-[480px] z-10">
          <div className="bg-white dark:bg-[#182634] border border-gray-200 dark:border-[#314d68] rounded-xl shadow-2xl p-8 lg:p-10">

            {/* TITLE */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <span className="material-symbols-outlined text-3xl">
                  fingerprint
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Secure Login
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Verify your credentials to access the dashboard
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-6">
              {/* EMAIL */}
              <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <div className="relative mt-2">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    mail
                  </span>
                  <input
                    type="email"
                    value="analyst@cyber-defense.ai"
                    readOnly
                    className="w-full bg-gray-50 dark:bg-[#101922] border-2 border-success/50 rounded-lg pl-12 pr-12 py-4 text-gray-900 dark:text-white neon-border-success"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-success">
                    check_circle
                  </span>
                </div>
                <p className="text-xs text-success mt-1">
                  Authorized identity detected
                </p>
              </div>

              {/* PASSWORD */}
              <div>
                <div className="flex justify-between">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                  <a className="text-xs text-primary font-semibold" href="#">
                    Forgot password?
                  </a>
                </div>
                <div className="relative mt-2">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    lock
                  </span>
                  <input
                    type="password"
                    value="password123"
                    readOnly
                    className="w-full bg-gray-50 dark:bg-[#101922] border-2 border-error/50 rounded-lg pl-12 pr-12 py-4 text-gray-900 dark:text-white neon-border-error"
                  />
                </div>
                <p className="text-xs text-error mt-1">
                  Incorrect password. 2 attempts remaining.
                </p>
              </div>

              {/* REMEMBER */}
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Keep me logged in for 30 days
                </span>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 pulse-glow"
              >
                <span className="material-symbols-outlined">login</span>
                Sign In to Dashboard
              </button>
            </form>
          </div>

          <p className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
            New to PhishGuard?
            <a href="#" className="text-primary font-bold ml-1">
              Create an enterprise account
            </a>
          </p>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="px-10 py-6 border-t border-gray-200 dark:border-[#223649] bg-white dark:bg-background-dark text-center">
        <p className="text-xs text-gray-500">
          © 2024 PhishGuard AI Security Inc. All connections are monitored.
        </p>
      </footer>
    </div>
  );
};

export default Login;

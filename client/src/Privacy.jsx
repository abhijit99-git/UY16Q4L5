import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display flex flex-col">
            <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="bg-primary p-2 rounded-lg glow-effect">
                            <span className="material-symbols-outlined text-white text-2xl">shield_locked</span>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight uppercase">Safe Surf AI</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-10">
                        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
                        <Link to="/analyze" className="text-sm font-medium hover:text-primary transition-colors">Analyze</Link>
                    </nav>
                </div>
            </header>
            <main className="flex-grow max-w-7xl mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    At Safe Surf AI, we prioritize your privacy. We do not store your browsing history.
                    All URL analysis is performed anonymously to provide you with a secure browsing experience.
                </p>
            </main>
        </div>
    );
};

export default Privacy;

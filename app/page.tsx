import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-zinc-900 dark:bg-black dark:text-zinc-50 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[25%] -right-[10%] w-[50%] h-[50%] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 flex flex-col items-center max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50/50 px-3 py-1 text-xs font-medium dark:border-zinc-800 dark:bg-zinc-900/50 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          PWA Optimized
        </div>

        {/* Hero Section */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Next.js 16 <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">PWA Boilerplate</span>
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          The ultimate starting point for building professional Progressive Web Apps. 
          Blazing fast, installable, and works offline by default.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="h-12 px-8 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2">
            Get Started
          </button>
          <button className="h-12 px-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all">
            Documentation
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          <div className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm">
            <div className="text-2xl mb-3">📱</div>
            <h3 className="font-bold mb-2 text-zinc-900 dark:text-zinc-100">Installable</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Native installation on iOS & Android with custom manifest and maskable icons.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm">
            <div className="text-2xl mb-3">📶</div>
            <h3 className="font-bold mb-2 text-zinc-900 dark:text-zinc-100">Offline Ready</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Reliable performance even without internet thanks to the Workbox-powered SW.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="font-bold mb-2 text-zinc-900 dark:text-zinc-100">High Performance</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Optimized with React 19 and Next.js 16 App Router for the best UX possible.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-zinc-100 dark:border-zinc-900 w-full flex justify-center text-sm text-zinc-500">
        <p>Built with ❤️ by <span className="font-semibold text-zinc-900 dark:text-zinc-100">Tecnonets</span></p>
      </footer>
    </div>
  );
}

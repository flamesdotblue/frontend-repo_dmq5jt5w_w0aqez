import { Leaf, LogIn } from "lucide-react";

export default function Navbar({ onLogin }) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white grid place-items-center shadow-sm">
            <Leaf className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-neutral-900">RE2USE</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
          <a href="#listings" className="hover:text-neutral-900">Browse</a>
          <a href="#how" className="hover:text-neutral-900">How it works</a>
          <a href="#impact" className="hover:text-neutral-900">Impact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onLogin}
            className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <LogIn className="h-4 w-4" />
            Log in / Register
          </button>
        </div>
      </div>
    </header>
  );
}

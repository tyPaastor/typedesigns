"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative mt-10 mb-16 md:mb-8">
      <div className="flex items-center">
        {/* Logo (left) */}
        <Link href="/">
          <img src="/assets/images/logo.svg" style={{ height: 30 }} alt="Typedesigns logo" />
        </Link>

        {/* Desktop nav (right) */}
        <nav className="ml-auto hidden md:flex items-center gap-6">
          <Link href="/information" className="text-sm md:text-lg hover:underline">
            Information
          </Link>
          <Link
            href="/job-request"
            className="inline-flex items-center text-sm md:text-lg rounded-full
                     bg-white text-black px-3 py-1.5 md:px-4 md:py-2 font-medium
                     transition hover:bg-white/90 focus:outline-none
                     focus-visible:ring-2 focus-visible:ring-white
                     focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Job Request
          </Link>
        </nav>

        {/* Mobile hamburger (right) */}
        <button
          className="ml-auto md:hidden inline-flex items-center justify-center"
          aria-label="Menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute right-0 top-full mt-3 w-56 z-50
                    rounded-2xl backdrop-blur-md backdrop-saturate-150
                    ring-1 ring-white/10 shadow-lg p-2 text-center
                    transition ${open ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"}`}
      >
        <Link href="/information" className="block px-3 py-2 text-sm hover:underline" onClick={() => setOpen(false)}>
          Information
        </Link>
        <Link
          href="/job-request"
          className="mt-1 block px-3 py-2 text-sm rounded-full bg-white text-black text-center font-medium"
          onClick={() => setOpen(false)}
        >
          Job Request
        </Link>
      </div>

    </header>
  );
};

export default Header;

"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-navy/10 bg-[#FAF9F5] backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <img src="/logo.png" alt="Driven by EJ Logo" className="h-full w-full object-contain" />
          </div>
          <div className="text-xl font-bold tracking-tight">
            <span className="text-[#0E2A3A]">DRIVEN</span> <span className="text-[#D4A437]">BY EJ</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/cars" className="text-navy hover:text-gold transition-colors">
            Cars
          </Link>
          <Link href="/payment-plan" className="text-navy hover:text-gold transition-colors">
            Payment Plan
          </Link>
          <Link href="/about" className="text-navy hover:text-gold transition-colors">
            About
          </Link>

          <Link href="/testimonials" className="text-navy hover:text-gold transition-colors">
            Testimonials
          </Link>
          <a
            href="https://wa.me/2348127230704"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-white hover:bg-gold-dark transition-colors shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-navy"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-navy/10 bg-cream">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <Link href="/cars" className="text-navy hover:text-gold transition-colors py-2">
              Cars
            </Link>
            <Link href="/payment-plan" className="text-navy hover:text-gold transition-colors py-2">
              Payment Plan
            </Link>
            <Link href="/about" className="text-navy hover:text-gold transition-colors py-2">
              About
            </Link>
            <Link href="/testimonials" className="text-navy hover:text-gold transition-colors py-2">
              Testimonials
            </Link>

            <a
              href="https://wa.me/2348127230704"
              className="rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-white hover:bg-gold-dark transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

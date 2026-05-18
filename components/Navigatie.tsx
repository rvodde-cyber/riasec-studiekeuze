"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brand } from "@/lib/brand";

const links = [
  { href: "/", label: "Welkom" },
  { href: "/uitleg", label: "Hoe werkt het" },
  { href: "/test", label: "Vragenlijst" },
  { href: "/resultaat", label: "Jouw code" },
  { href: "/verkennen", label: "Verkennen" },
  { href: "/over", label: "Over" },
];

export default function Navigatie() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-border nav-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3"
        aria-label="Hoofdnavigatie"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-xl font-semibold text-ink md:text-2xl"
        >
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-primary"
            aria-hidden
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 7v3l2 2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span>{brand.name}</span>
            <span className="hidden font-sans text-xs font-normal text-ink/60 sm:block">
              {brand.tagline}
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="btn-press inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary/15 text-primary"
                      : "text-ink/80 hover:bg-surface hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-border bg-[rgba(var(--bg-rgb),0.98)] md:hidden overflow-hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-3 text-base ${
                      pathname === l.href
                        ? "bg-primary/15 text-primary font-medium"
                        : "text-ink"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

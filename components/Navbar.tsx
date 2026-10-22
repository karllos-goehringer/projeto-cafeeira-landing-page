"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Principais Recursos", href: "#recursos" },
    { name: "Porquê a Sysgrano?", href: "#porque" },
    { name: "Parcerias", href: "#parcerias" },
    { name: "Download", href: "#download" },
    { name: "Manual de Uso", href: "#manual" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#89a87c] shadow-md transition-all">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-2 group">
          <Image
            src="/assets/logo_sem_nome_4x4.png"
            alt="Logo do Sysgrano"
            width={40}
            height={40}
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className="text-3xl font-extrabold tracking-tight">
            <span className="text-[#36471F]">Sys</span>
            <span className="text-[#562E15]">grano</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-[17px] font-medium text-[#3E3B37] hover:text-[#36471F] hover:underline underline-offset-4 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-[#3E3B37] hover:text-[#36471F] hover:bg-black/5 focus:outline-none transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#89a87c] border-t border-black/10 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-[#3E3B37] hover:text-[#36471F] hover:bg-black/5"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

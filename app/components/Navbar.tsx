"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation"; // ⭐ ADDED

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions & Industries", href: "/solutions" },
  { label: "Insights & Innovations", href: "/insights" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
  { label: "Legal", href: "/legal" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // ⭐ ADDED

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50" aria-label="Primary navigation">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/images/logo/mayfair-logo.png"
            alt="MayfairTech.ai"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center justify-end gap-4 text-sm lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`
                  rounded-full px-3 py-1 font-bold transition
                  ${pathname === item.href ? "bg-[#081b3e] text-[#6fee51]" : "text-[#081b3e]"}
                  hover:bg-[#081b3e] hover:text-[#6fee51]
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button - Mobile */}
        <button
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#081b3e] transition hover:bg-gray-100 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col border-t border-gray-100 bg-white px-6 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={closeMenu}
                className={`
                  block rounded-lg px-4 py-3 font-bold transition
                  ${pathname === item.href ? "bg-[#081b3e] text-[#6fee51]" : "text-[#081b3e]"}
                  hover:bg-[#081b3e] hover:text-[#6fee51]
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoMain from '../../public/images/home/log-CyS-LepalaisRoyal.png'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 z-40 flex flex-col items-center justify-center gap-8
        bg-neutral-950/98 backdrop-blur-sm transition-all duration-500 ease-in-out 
        ${openMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

        <Link href="/" onClick={() => setOpenMenu(false)} className="font-serif text-[clamp(28px,7vw,42px)] font-normal tracking-wide text-white/90 hover:text-white transition-colors duration-200 px-6 py-3 leading-tight">
        Home
        </Link>
        <Link href="/about" onClick={() => setOpenMenu(false)} className="font-serif text-[clamp(28px,7vw,42px)] font-normal tracking-wide text-white/90 hover:text-white transition-colors duration-200 px-6 py-3 leading-tight">
        About Us
        </Link>
        <Link href="/watches" onClick={() => setOpenMenu(false)} className="font-serif text-[clamp(28px,7vw,42px)] font-normal tracking-wide text-white/90 hover:text-white transition-colors duration-200 px-6 py-3 leading-tight">
        Watches
        </Link>
        <Link href="#" onClick={() => setOpenMenu(false)} className="font-serif text-[clamp(28px,7vw,42px)] font-normal tracking-wide text-white/90 hover:text-white transition-colors duration-200 px-6 py-3 leading-tight">
        Jewels
        </Link>
        <Link href="#" onClick={() => setOpenMenu(false)} className="font-serif text-[clamp(28px,7vw,42px)] font-normal tracking-wide text-white/90 hover:text-white transition-colors duration-200 px-6 py-3 leading-tight">
        Fashion
        </Link>

      </div>

      {/* Main Nav */}
      <nav className={` fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-15 lg:px-30 transition-all duration-500
        ${scrolled
          ? 'h-20 bg-neutral-950/95 backdrop-blur-md shadow-[0_1px_0_rgba(180,140,60,0.2)]'
          : 'h-28 bg-transparent'}
      `}>
        {/* Logo */}
        <div className="shrink-0">
          <Link href="/">
            <Image
              src={logoMain}
              alt="Le Palais Royal - Cuervo y Sobrinos"
              className={`object-contain transition-all duration-500 ${scrolled ? 'h-15' : 'h-25'} w-auto`}
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[['/', 'Home'], ['/about', 'About Us'], ['/watches', 'Watches'], ['#', 'Jewels'], ['#', 'Fashion']].map(([href, label]) => (
            <Link
              key={label}
              href={href}
              className="text-xs tracking-[0.18em] uppercase text-stone-300 hover:text-amber-400 transition-colors duration-300 relative group"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col justify-center items-center gap-1.25 w-8 h-8 cursor-pointer z-50"
          onClick={() => setOpenMenu(!openMenu)}
          aria-label="Open menu"
        >
          <span className={`block w-6 h-px bg-stone-200 transition-all duration-300 ${openMenu ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-px bg-stone-200 transition-all duration-300 ${openMenu ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-stone-200 transition-all duration-300 ${openMenu ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </nav>
    </>
  );
}
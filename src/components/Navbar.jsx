import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import profileImage from '../assets/shaz.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-outline-variant/20 bg-secondary-container/15 backdrop-blur-xl animate-[nexwebSlideDown_.65s_ease-out_both]">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:px-10">
        <Link to="/" onClick={closeMenu} className="group flex shrink-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f42b62] to-[#c9184a] text-xl font-extrabold text-white shadow-[0_10px_30px_rgba(225,29,72,.28)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
            N
          </div>
          <div className="leading-none">
            <div className="font-headline-sm text-headline-sm font-extrabold tracking-tight text-white">NEXWEB</div>
            <div className="mt-1 text-[9px] font-semibold tracking-[0.28em] text-gray-500">DIGITAL AGENCY</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={{ animationDelay: `${index * 70}ms` }}
              className={({ isActive }) => `group relative px-4 py-3 text-sm font-semibold transition-all duration-300 animate-[nexwebFadeUp_.6s_ease-out_both] ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  <span className={`absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-[#e11d48] transition-transform duration-300 origin-center ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="group hidden items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffb3b6] sm:inline-flex"
          >
            <span>Book a Call</span>
            <span className="text-base transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
          </Link>

         <div className="hidden h-11 w-11 overflow-hidden rounded-full border-2 border-[#e11d48]/50 bg-white/[0.02] shadow-[0_0_20px_rgba(225,29,72,.25)] md:flex">
  <img
    src={profileImage}
    alt="Profile"
    className="h-full w-full object-cover"
  />
</div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-all hover:bg-white/5 md:hidden"
          >
            <span className="material-symbols-outlined text-[25px]">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-white/10 bg-[#090a0d] transition-all duration-500 md:hidden ${mobileMenuOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="mx-auto flex max-w-[1440px] flex-col px-5 py-4 sm:px-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' }}
              className={({ isActive }) => `border-b border-white/5 py-4 text-base font-semibold transition-all duration-300 ${isActive ? 'translate-x-2 text-[#ffb3b6]' : 'text-gray-300 hover:translate-x-2 hover:text-white'} ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" onClick={closeMenu} className="mt-4 rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-black transition hover:bg-[#ffb3b6]">
            Book a Call ↗
          </Link>
        </nav>
      </div>
    </header>
  );
}

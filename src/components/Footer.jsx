import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary-container/15 border-t border-outline-variant/30 text-on-surface-variant">
      <div className="max-w-[1360px] mx-auto px-gutter py-space-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-lg">
        <div className="lg:col-span-2 space-y-space-md">
          <div className="flex items-center gap-space-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f42b62] to-[#c9184a] text-xl font-extrabold text-white shadow-[0_10px_30px_rgba(225,29,72,.28)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
            N
          </div>
            <div className="font-headline-sm text-headline-sm font-extrabold tracking-tight text-white">NEXSHA</div>
            <div className="mt-1 text-[9px] font-semibold tracking-[0.28em] text-gray-500">DIGITAL AGENCY</div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">Pioneering tier-one digital experiences, creative engineering, and high-performance brand platforms for market disruptors.</p>
          <div className="flex items-center gap-space-sm pt-space-xs">
            <a href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[18px]">terminal</span></a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[18px]">public</span></a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-[18px]">alternate_email</span></a>
          </div>
        </div>
        <div>
          <h4 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider mb-space-md">Quick Links</h4>
          <ul className="space-y-space-xs">
            <li className="font-body-sm text-body-sm"><Link to="/" className="hover:text-on-surface transition-colors">Home</Link></li>
            <li className="font-body-sm text-body-sm"><Link to="/about" className="hover:text-on-surface transition-colors">About Us</Link></li>
            <li className="font-body-sm text-body-sm"><Link to="/portfolio" className="hover:text-on-surface transition-colors">Case Studies</Link></li>
            <li className="font-body-sm text-body-sm"><Link to="/blog" className="hover:text-on-surface transition-colors">Insights</Link></li>
            <li className="font-body-sm text-body-sm"><Link to="/contact" className="hover:text-on-surface transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider mb-space-md">Services</h4>
          <ul className="space-y-space-xs">
            <li className="font-body-sm text-body-sm"><a href="#" className="hover:text-on-surface transition-colors">Creative Technology</a></li>
            <li className="font-body-sm text-body-sm"><a href="#" className="hover:text-on-surface transition-colors">Web Architecture</a></li>
            <li className="font-body-sm text-body-sm"><a href="#" className="hover:text-on-surface transition-colors">Brand Strategy</a></li>
            <li className="font-body-sm text-body-sm"><a href="#" className="hover:text-on-surface transition-colors">Design Systems</a></li>
            <li className="font-body-sm text-body-sm"><a href="#" className="hover:text-on-surface transition-colors">Product Engineering</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider mb-space-md">Headquarters</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">One Silicon Horizon Tower<br/>450 Obsidian Plaza, Suite 1200<br/>San Francisco, CA 94105</p>
          <p className="font-body-sm text-body-sm text-primary pt-space-xs">hello@nexsha.agency</p>
        </div>
      </div>
      <div className="max-w-[1360px] mx-auto px-gutter py-space-md border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
        <p>© 2025 NEXSHA Studio Inc. All rights reserved.</p>
        <div className="flex items-center gap-space-md">
          <a href="#" className="hover:text-on-surface transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-on-surface transition-colors">Terms of Engagement</a>
          <a href="#" className="hover:text-on-surface transition-colors">Security Overview</a>
        </div>
      </div>
    </footer>
  );
}
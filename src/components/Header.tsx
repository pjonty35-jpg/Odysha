import React, { useState } from 'react';
import { Globe, Bell, Bookmark, ChevronDown, Menu, X } from 'lucide-react';
import { KonarkMandalaLogo } from './OdishaMotifs';
import { ASSET_IMAGES } from '../data/landingData';

interface HeaderProps {
  currentPage?: 'home' | 'explore';
  onNavigate?: (page: 'home' | 'explore') => void;
  onOpenPlan: () => void;
  onSelectCategory?: (id: string) => void;
  savedCount?: number;
  onOpenSaved?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage = 'home',
  onNavigate,
  onOpenPlan,
  savedCount = 0,
  onOpenSaved,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    {
      name: 'Explore',
      id: 'explore',
      onClick: () => onNavigate?.('explore'),
      isActive: currentPage === 'explore',
    },
    {
      name: 'Plan Journey',
      id: 'plan',
      onClick: onOpenPlan,
      isActive: false,
    },
    {
      name: 'Map',
      id: 'map',
      onClick: () => {
        if (currentPage !== 'home') onNavigate?.('home');
        setTimeout(() => {
          document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      },
      isActive: false,
    },
    {
      name: 'Community',
      id: 'community',
      onClick: () => {
        if (currentPage !== 'home') onNavigate?.('home');
        setTimeout(() => {
          document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      },
      isActive: false,
    },
    {
      name: 'About',
      id: 'about',
      onClick: () => {
        if (currentPage !== 'home') onNavigate?.('home');
        setTimeout(() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      },
      isActive: false,
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#fcfbf9]/95 backdrop-blur-md border-b border-[#ebdcc8]/80 transition-all select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Tagline */}
          <button
            onClick={() => onNavigate?.('home')}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 text-left cursor-pointer focus:outline-none"
          >
            <KonarkMandalaLogo className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:rotate-45" />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-wider font-bold text-[#1a2638] leading-none">
                ODYSHA
              </span>
              <span className="text-[9px] sm:text-[10px] text-gray-600 font-medium tracking-tight mt-0.5 sm:mt-1 hidden xs:inline">
                Local knowledge. Better journeys.
              </span>
            </div>
          </button>

          {/* Desktop & Wide Tablet Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.onClick}
                className={`text-sm font-medium transition-all py-1.5 relative cursor-pointer focus:outline-none ${
                  link.isActive
                    ? 'text-[#9a3412] font-semibold'
                    : 'text-gray-700 hover:text-[#9a3412]'
                }`}
              >
                <span>{link.name}</span>
                {/* Active indicator bar matching screenshot */}
                {link.isActive ? (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9a3412] rounded-full" />
                ) : (
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#9a3412]/50 transition-all group-hover:w-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Right Header Actions (Language, Bell, Bookmark, User profile) */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none px-2 py-1.5 rounded-lg hover:bg-gray-100/60 cursor-pointer"
              >
                <Globe className="w-4 h-4 text-gray-600 shrink-0" />
                <span>{language}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500 shrink-0" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-[#eee7dc] py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {['EN (English)', 'OD (ଓଡ଼ିଆ)', 'HI (हिन्दी)'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang.split(' ')[0]);
                        setLangDropdownOpen(false);
                      }}
                      className="w-full text-left px-3.5 py-2 text-xs text-gray-700 hover:bg-[#faf6f0] hover:text-[#b84a2d] font-medium cursor-pointer"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notification Bell with '0' badge */}
            <button
              onClick={() => alert('You are up to date! No new unread notifications.')}
              className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/60 rounded-full transition-colors cursor-pointer"
              title="Notifications"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#dc2626] text-white text-[9px] font-bold flex items-center justify-center rounded-full leading-none">
                0
              </span>
            </button>

            {/* Saved / Bookmarks Button */}
            <button
              onClick={onOpenSaved}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/60 rounded-full transition-colors cursor-pointer relative"
              title="Saved places"
              aria-label="Saved places"
            >
              <Bookmark className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              {savedCount > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#9a3412] text-white text-[9px] font-bold flex items-center justify-center rounded-full leading-none">
                  {savedCount}
                </span>
              )}
            </button>

            {/* User Profile Pill */}
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-full hover:bg-gray-100/70 border border-[#e2d8ca] transition-all cursor-pointer bg-white/80"
              >
                <img
                  src={ASSET_IMAGES.userAvatar}
                  alt="Jonty"
                  className="w-7 h-7 rounded-full object-cover border border-amber-200 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs sm:text-sm font-semibold text-gray-800">Jonty</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500 shrink-0" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#eee7dc] py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-xs font-bold text-gray-900">Jonty</p>
                    <p className="text-[11px] text-gray-500">pjonty35@gmail.com</p>
                  </div>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onOpenPlan();
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-[#faf6f0] hover:text-[#9a3412] font-medium"
                  >
                    My Planned Journeys
                  </button>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onOpenSaved?.();
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-[#faf6f0] hover:text-[#9a3412] font-medium"
                  >
                    Saved Places ({savedCount})
                  </button>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-[#faf6f0] hover:text-[#9a3412] font-medium"
                  >
                    Profile Settings
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Mobile / Tablet Header Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenSaved}
              className="p-2 text-gray-700 hover:text-gray-900 rounded-lg relative"
              aria-label="Saved Places"
            >
              <Bookmark className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#9a3412] text-white text-[9px] font-bold flex items-center justify-center rounded-full leading-none">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Ornate Lace Motif Frieze Border running across the bottom of the header */}
      <div
        className="w-full h-[6px] sm:h-[8px] bg-repeat-x bg-contain opacity-75 pointer-events-none"
        style={{
          backgroundImage: `url(${ASSET_IMAGES.headerLace})`,
          backgroundSize: 'auto 100%',
        }}
      />

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fcfbf9] border-b border-[#eee7dc] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  link.onClick();
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left block text-base font-medium px-3 py-2.5 rounded-lg transition-colors ${
                  link.isActive
                    ? 'bg-[#faf3e7] text-[#9a3412] font-semibold'
                    : 'text-gray-800 hover:text-[#9a3412] hover:bg-[#faf6f0]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#eee7dc] flex flex-col gap-3">
            {/* User quick card in mobile drawer */}
            <div className="flex items-center gap-3 p-2 bg-white rounded-xl border border-gray-200">
              <img
                src={ASSET_IMAGES.userAvatar}
                alt="Jonty"
                className="w-8 h-8 rounded-full object-cover border border-amber-200"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-gray-900">Jonty</p>
                <p className="text-[10px] text-gray-500 truncate">pjonty35@gmail.com</p>
              </div>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Active
              </span>
            </div>

            {/* Language Selector inside mobile drawer */}
            <div className="flex items-center justify-between px-3 py-2 bg-white rounded-xl border border-gray-200">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
                <Globe className="w-4 h-4 text-gray-600" />
                <span>Language:</span>
              </div>
              <div className="flex gap-1.5">
                {['EN', 'OD', 'HI'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2.5 py-1 text-xs rounded-md font-semibold transition-colors ${
                      language === lang
                        ? 'bg-[#182639] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

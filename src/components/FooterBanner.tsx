import React from 'react';
import { ASSET_IMAGES } from '../data/landingData';

export const FooterBanner: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#faf5eb] border-t border-[#ebdcc7] py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Background artwork: High performance optimized footer artwork banner */}
      <div className="absolute inset-0 pointer-events-none opacity-90 flex items-center justify-center overflow-hidden">
        <picture className="w-full h-full block">
          <source type="image/webp" srcSet={ASSET_IMAGES.footerPattachitraWebp} />
          <img
            src={ASSET_IMAGES.footerPattachitra}
            alt="Odisha Cultural Art Motif"
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </picture>
      </div>

      {/* Center Text Content - Apple Water Glass Design */}
      <div
        className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center justify-center bg-white/88 sm:bg-white/35 backdrop-blur-none sm:backdrop-blur-md px-6 sm:px-8 py-5 sm:py-6 rounded-2xl sm:rounded-3xl border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-black/5 overflow-hidden transform-gpu"
      >
        {/* Subtle glass top specular highlight sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-transparent pointer-events-none" />

        {/* Main Tagline */}
        <h3 className="relative font-serif text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[#142232] tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
          Made by travellers. For travellers.
        </h3>

        {/* Subtitle */}
        <p className="relative text-xs sm:text-sm text-[#243346] font-medium mt-1.5 sm:mt-2 max-w-md">
          Together, let’s make every journey in Odisha better.
        </p>

        {/* Bottom Ornamental Sun / Floral Icon */}
        <div className="relative mt-3 sm:mt-4 text-[#b84a2d] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-7 sm:h-7">
            <circle cx="16" cy="16" r="12" stroke="#b84a2d" strokeWidth="1.2" strokeDasharray="2 2" />
            <circle cx="16" cy="16" r="7" stroke="#b84a2d" strokeWidth="1.5" fill="rgba(255, 255, 255, 0.4)" />
            <circle cx="16" cy="16" r="2.5" fill="#b84a2d" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <line
                key={i}
                x1={16 + 8 * Math.cos((angle * Math.PI) / 180)}
                y1={16 + 8 * Math.sin((angle * Math.PI) / 180)}
                x2={16 + 12 * Math.cos((angle * Math.PI) / 180)}
                y2={16 + 12 * Math.sin((angle * Math.PI) / 180)}
                stroke="#b84a2d"
                strokeWidth="1.2"
              />
            ))}
          </svg>
        </div>

        {/* Copyright notice */}
        <div className="relative mt-4 pt-3 border-t border-white/50 w-full text-[10px] sm:text-[11px] text-gray-700 font-medium">
          © {new Date().getFullYear()} ODYSHA. Local knowledge & curated journeys.
        </div>
      </div>
    </footer>
  );
};

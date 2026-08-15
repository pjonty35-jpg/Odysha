import React from 'react';
import { ASSET_IMAGES } from '../data/landingData';

// Brand Logo: Ornate Mandala / Konark Sun Wheel
export const KonarkMandalaLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer scalloped petals */}
    <circle cx="50" cy="50" r="46" stroke="#b84a2d" strokeWidth="1.5" strokeDasharray="3 2" />
    <circle cx="50" cy="50" r="41" stroke="#b84a2d" strokeWidth="1.5" />
    
    {/* 8 Main Rays / Spokes of Konark Wheel */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 50 50)`}>
        <path d="M50 9 L50 24" stroke="#b84a2d" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="18" r="2.5" fill="#b84a2d" />
        <path d="M47 24 C47 28 53 28 53 24" stroke="#b84a2d" strokeWidth="1.5" />
        <path d="M45 32 L50 26 L55 32" stroke="#b84a2d" strokeWidth="1.5" fill="none" />
      </g>
    ))}
    
    {/* Inner decorative band */}
    <circle cx="50" cy="50" r="26" stroke="#b84a2d" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="21" stroke="#b84a2d" strokeWidth="1" strokeDasharray="2 2" />
    
    {/* Central Core & Floral Hub */}
    <circle cx="50" cy="50" r="14" fill="#fcf8f2" stroke="#b84a2d" strokeWidth="2" />
    <circle cx="50" cy="50" r="7" fill="#b84a2d" />
    <circle cx="50" cy="50" r="3" fill="#ffffff" />
    
    {/* Decorative 8 miniature beads inside inner ring */}
    {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
      <circle
        key={`dot-${i}`}
        cx={50 + 23.5 * Math.cos((angle * Math.PI) / 180)}
        cy={50 + 23.5 * Math.sin((angle * Math.PI) / 180)}
        r="1.2"
        fill="#b84a2d"
      />
    ))}
  </svg>
);

// Category Icons matching the exact style from the reference
export const CategoryIcon: React.FC<{ type: string; className?: string }> = ({ type, className = 'w-9 h-9' }) => {
  switch (type) {
    case 'beaches':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sun with rays in terracotta/amber */}
          <circle cx="34" cy="14" r="5" stroke="#ea580c" strokeWidth="2" strokeDasharray="0 0" fill="#fff7ed" />
          <path d="M34 6 V4 M34 24 V22 M26 14 H24 M44 14 H42 M28 8 L27 7 M41 21 L40 20 M28 20 L27 21 M41 7 L40 8" stroke="#ea580c" strokeWidth="1.75" strokeLinecap="round" />
          {/* Gentle waves in turquoise/deep blue */}
          <path d="M4 32 C10 26 16 34 22 28 C28 22 34 30 44 26" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M6 38 C12 32 18 40 24 34 C30 28 36 36 44 32" stroke="#0369a1" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M10 44 C15 40 20 46 26 41 C32 36 38 42 42 39" stroke="#38bdf8" strokeWidth="1.75" strokeLinecap="round" opacity="0.8" />
        </svg>
      );

    case 'nature':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sprouting twin leaves in olive / forest green */}
          <path d="M14 38 C14 38 15 26 26 21 C26 21 27 34 14 38 Z" stroke="#15803d" strokeWidth="2.2" fill="#f0fdf4" strokeLinejoin="round" />
          <path d="M15 37 L23 23" stroke="#15803d" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M26 25 C26 25 35 15 42 16 C42 16 41 28 30 31" stroke="#16a34a" strokeWidth="2.2" fill="#dcfce7" strokeLinejoin="round" />
          <path d="M28 24 L38 18" stroke="#16a34a" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M20 28 C18 20 22 10 32 7 C32 7 35 18 22 26" stroke="#15803d" strokeWidth="2" strokeLinejoin="round" />
          <path d="M10 42 C14 38 20 34 26 30" stroke="#15803d" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 'heritage':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ornate Kalinga Rekha Deula Temple Shikhara outline */}
          <path d="M24 5 L24 2" stroke="#b84a2d" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="5" r="2.5" fill="#b84a2d" />
          <path d="M20 9 C20 7 28 7 28 9" stroke="#b84a2d" strokeWidth="2" strokeLinecap="round" />
          {/* Tiered curvilinear tower */}
          <path d="M21 9 L17 22 L14 33 L10 43 H38 L34 33 L31 22 L27 9 Z" stroke="#b84a2d" strokeWidth="2" fill="#fff7ed" strokeLinejoin="round" />
          {/* Horizontal stone bands */}
          <path d="M19 15 H29 M17 22 H31 M15 28 H33 M14 34 H34 M11 40 H37" stroke="#b84a2d" strokeWidth="1.5" />
          {/* Center archway */}
          <path d="M21 43 V36 C21 34 27 34 27 36 V43" stroke="#b84a2d" strokeWidth="2" fill="#b84a2d" fillOpacity="0.2" />
        </svg>
      );

    case 'spiritual':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sanctum dome with sacred kalasha and flag */}
          <path d="M24 3 V7" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 4 L30 6 L24 8 Z" fill="#d97706" />
          <circle cx="24" cy="8.5" r="2" fill="#d97706" />
          {/* Bell shaped curved dome */}
          <path d="M24 10 C18 13 14 18 14 26 C14 31 16 34 16 42 H32 C32 34 34 31 34 26 C34 18 30 13 24 10 Z" stroke="#d97706" strokeWidth="2" fill="#fffbeb" strokeLinejoin="round" />
          <path d="M15 24 H33 M15 32 H33" stroke="#d97706" strokeWidth="1.5" />
          {/* Inner prayer flame / deepam */}
          <path d="M24 34 C22 36 22 39 24 41 C26 39 26 36 24 34 Z" fill="#ea580c" />
          <path d="M12 42 H36" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'food':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Steaming Aroma waves */}
          <path d="M20 7 C19 10 21 12 20 15" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 5 C23 9 25 11 24 15" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
          <path d="M28 7 C27 10 29 12 28 15" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
          {/* Clay Handi / Food bowl */}
          <path d="M12 18 H36" stroke="#c2410c" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M13 18 C13 18 10 27 15 35 C19 40 29 40 33 35 C38 27 35 18 35 18" stroke="#c2410c" strokeWidth="2.2" fill="#fff7ed" strokeLinejoin="round" />
          {/* Base and decorative rim */}
          <path d="M17 38 H31" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 26 C19 29 29 29 34 26" stroke="#c2410c" strokeWidth="1.5" strokeDasharray="3 2" />
        </svg>
      );

    case 'arts':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 4-lobed traditional floral applique / Pattachitra motif */}
          <g transform="translate(24, 24)">
            {[0, 90, 180, 270].map((rot, i) => (
              <g key={i} transform={`rotate(${rot})`}>
                <path d="M0 -3 C-7 -10 -9 -18 0 -18 C9 -18 7 -10 0 -3 Z" fill="#fef2f2" stroke="#b91c1c" strokeWidth="1.75" />
                <circle cx="0" cy="-11" r="2.2" fill="#b91c1c" />
                <path d="M0 -3 L0 -14" stroke="#b91c1c" strokeWidth="1.2" />
              </g>
            ))}
            <circle cx="0" cy="0" r="4.5" fill="#fef2f2" stroke="#b91c1c" strokeWidth="2" />
            <circle cx="0" cy="0" r="2" fill="#b91c1c" />
          </g>
        </svg>
      );

    case 'wildlife':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Graceful Standing Deer / Antelope line silhouette */}
          <path d="M34 8 L32 14 M36 7 L34 11 M38 9 L35 12" stroke="#4d7c0f" strokeWidth="1.75" strokeLinecap="round" />
          {/* Head & Neck */}
          <path d="M32 14 C33 16 35 17 38 17 C39 19 37 21 34 21 L31 23 L28 29" stroke="#4d7c0f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Body & Tail */}
          <path d="M28 29 C25 28 19 28 14 30 C12 30 10 32 11 34 C12 34 13 32 15 32" stroke="#4d7c0f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="#f7fee7" />
          {/* Front legs */}
          <path d="M28 29 L29 42 M26 31 L25 41" stroke="#4d7c0f" strokeWidth="2" strokeLinecap="round" />
          {/* Back legs */}
          <path d="M15 32 C15 35 13 38 13 42 M17 33 L18 41" stroke="#4d7c0f" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'hiddenGems':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Map pin in warm terracotta with delicate heart center */}
          <path d="M24 6 C17 6 12 11 12 18 C12 27 24 42 24 42 C24 42 36 27 36 18 C36 11 31 6 24 6 Z" stroke="#ea580c" strokeWidth="2.2" fill="#fff7ed" strokeLinejoin="round" />
          {/* Heart inside pin */}
          <path d="M24 16 C23 14 20 13 18.5 15 C16.5 17.5 19 21.5 24 24.5 C29 21.5 31.5 17.5 29.5 15 C28 13 25 14 24 16 Z" fill="#ea580c" />
        </svg>
      );

    default:
      return null;
  }
};

// Intricate Golden Brass Temple Frieze Divider (below Hero)
export const TempleFriezeDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-full overflow-hidden bg-[#d9a04a] text-[#804d16] py-1 border-y border-[#c08632] ${className}`}>
    <div className="flex items-center justify-around space-x-4 opacity-90 select-none animate-pulse-slow">
      {Array.from({ length: 28 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-2 shrink-0">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Concentric wheel rosette */}
            <circle cx="16" cy="16" r="14" stroke="#683908" strokeWidth="1.5" fill="#e8b560" />
            <circle cx="16" cy="16" r="9" stroke="#683908" strokeWidth="1" />
            <circle cx="16" cy="16" r="4" fill="#683908" />
            <circle cx="16" cy="16" r="1.5" fill="#fdf0d5" />
            {/* 8 spokes */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, idx) => (
              <line
                key={idx}
                x1={16 + 4 * Math.cos((ang * Math.PI) / 180)}
                y1={16 + 4 * Math.sin((ang * Math.PI) / 180)}
                x2={16 + 9 * Math.cos((ang * Math.PI) / 180)}
                y2={16 + 9 * Math.sin((ang * Math.PI) / 180)}
                stroke="#683908"
                strokeWidth="1.2"
              />
            ))}
          </svg>
          <div className="w-1.5 h-1.5 rounded-full bg-[#683908]" />
        </div>
      ))}
    </div>
  </div>
);

// General Traditional Odisha Divider & Section Flourish using authentic artwork
export interface OdishaDividerProps {
  variant?: 'mandala' | 'temple' | 'all';
  icon?: 'temple' | 'diamond' | 'mandala' | 'all'; // Backwards compatibility with previous props
  className?: string;
  maxHeight?: string;
}

export const SectionFlourish: React.FC<OdishaDividerProps> = ({
  variant,
  icon = 'mandala',
  className = 'my-2.5 sm:my-3',
  maxHeight = 'max-h-5 sm:max-h-7 md:max-h-8',
}) => {
  const chosenVariant = variant || (icon === 'temple' ? 'temple' : icon === 'all' ? 'all' : 'mandala');
  
  const dividerSrc =
    chosenVariant === 'temple'
      ? ASSET_IMAGES.dividerTemple
      : chosenVariant === 'all'
      ? ASSET_IMAGES.dividerAll
      : ASSET_IMAGES.dividerMandala;

  return (
    <div className={`flex items-center justify-center w-full select-none pointer-events-none ${className}`}>
      <img
        src={dividerSrc}
        alt="Odisha Traditional Heritage Divider Motif"
        className={`w-auto h-auto max-w-[260px] xs:max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[580px] object-contain ${maxHeight} drop-shadow-2xs opacity-90 transition-opacity`}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// General canonical export for Odisha Divider
export const OdishaDivider = SectionFlourish;

// Very Subtle Pattachitra Art & Parchment Grain Background Layer
export const PattachitraGrainBackground: React.FC = () => (
  <div
    className="fixed inset-0 pointer-events-none z-0 select-none overflow-hidden"
    aria-hidden="true"
  >
    {/* SVG Pattern: Seamless repeating Pattachitra motifs & subtle canvas grain */}
    <svg className="w-full h-full opacity-[0.08]">
      <defs>
        {/* Subtle cloth / palm leaf paper grain filter */}
        <filter id="pattachitra-grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 0.45 0"
          />
        </filter>

        {/* Traditional Pattachitra motif tile pattern (160px x 160px) */}
        <pattern
          id="pattachitra-pattern"
          width="160"
          height="160"
          patternUnits="userSpaceOnUse"
        >
          {/* Central 8-petaled Pattachitra Lotus Rosette (Padma) */}
          <g transform="translate(80, 80)">
            <circle cx="0" cy="0" r="16" fill="none" stroke="#7c2d12" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="7" fill="none" stroke="#7c2d12" strokeWidth="1" />
            <circle cx="0" cy="0" r="2.5" fill="#7c2d12" />
            
            {/* Petals */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
              <g key={idx} transform={`rotate(${angle})`}>
                <path
                  d="M0 -7 C-3.5 -11 -4 -16 0 -22 C4 -16 3.5 -11 0 -7 Z"
                  fill="none"
                  stroke="#7c2d12"
                  strokeWidth="1.1"
                />
                <circle cx="0" cy="-14" r="1" fill="#7c2d12" />
                <path
                  d="M0 -22 L0 -26"
                  stroke="#7c2d12"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
                <circle cx="0" cy="-27" r="0.8" fill="#7c2d12" />
              </g>
            ))}

            {/* Corner tendril floral vines (Lata) */}
            <path
              d="M18 18 C28 22 36 32 46 46 M18 -18 C28 -22 36 -32 46 -46 M-18 18 C-28 22 -36 32 -46 46 M-18 -18 C-28 -22 -36 -32 -46 -46"
              fill="none"
              stroke="#7c2d12"
              strokeWidth="0.9"
              strokeDasharray="2 1.5"
            />
          </g>

          {/* Corner quarter-rosettes to form seamless grid crossings */}
          <g transform="translate(0, 0)">
            <circle cx="0" cy="0" r="14" fill="none" stroke="#7c2d12" strokeWidth="1" strokeDasharray="1.5 1.5" />
            <circle cx="0" cy="0" r="6" fill="none" stroke="#7c2d12" strokeWidth="1" />
            <path d="M0 6 C4 10 10 12 16 16" fill="none" stroke="#7c2d12" strokeWidth="0.8" />
            <path d="M6 0 C10 4 12 10 16 16" fill="none" stroke="#7c2d12" strokeWidth="0.8" />
          </g>

          <g transform="translate(160, 0)">
            <circle cx="0" cy="0" r="14" fill="none" stroke="#7c2d12" strokeWidth="1" strokeDasharray="1.5 1.5" />
            <circle cx="0" cy="0" r="6" fill="none" stroke="#7c2d12" strokeWidth="1" />
            <path d="M0 6 C-4 10 -10 12 -16 16" fill="none" stroke="#7c2d12" strokeWidth="0.8" />
            <path d="M-6 0 C-10 4 -12 10 -16 16" fill="none" stroke="#7c2d12" strokeWidth="0.8" />
          </g>

          <g transform="translate(0, 160)">
            <circle cx="0" cy="0" r="14" fill="none" stroke="#7c2d12" strokeWidth="1" strokeDasharray="1.5 1.5" />
            <circle cx="0" cy="0" r="6" fill="none" stroke="#7c2d12" strokeWidth="1" />
            <path d="M0 -6 C4 -10 10 -12 16 -16" fill="none" stroke="#7c2d12" strokeWidth="0.8" />
            <path d="M6 0 C10 -4 12 -10 16 -16" fill="none" stroke="#7c2d12" strokeWidth="0.8" />
          </g>

          <g transform="translate(160, 160)">
            <circle cx="0" cy="0" r="14" fill="none" stroke="#7c2d12" strokeWidth="1" strokeDasharray="1.5 1.5" />
            <circle cx="0" cy="0" r="6" fill="none" stroke="#7c2d12" strokeWidth="1" />
            <path d="M0 -6 C-4 -10 -10 -12 -16 -16" fill="none" stroke="#7c2d12" strokeWidth="0.8" />
            <path d="M-6 0 C-10 -4 -12 -10 -16 -16" fill="none" stroke="#7c2d12" strokeWidth="0.8" />
          </g>

          {/* Traditional decorative Pattachitra paisley leaf / motif in empty quadrants */}
          <path
            d="M32 80 C32 68 44 60 52 68 C56 72 52 82 42 84 C36 85 32 80 32 80 Z"
            fill="none"
            stroke="#7c2d12"
            strokeWidth="0.9"
          />
          <circle cx="44" cy="73" r="1" fill="#7c2d12" />

          <path
            d="M128 80 C128 68 116 60 108 68 C104 72 108 82 118 84 C124 85 128 80 128 80 Z"
            fill="none"
            stroke="#7c2d12"
            strokeWidth="0.9"
          />
          <circle cx="116" cy="73" r="1" fill="#7c2d12" />

          <path
            d="M80 32 C68 32 60 44 68 52 C72 56 82 52 84 42 C85 36 80 32 80 32 Z"
            fill="none"
            stroke="#7c2d12"
            strokeWidth="0.9"
          />
          <circle cx="73" cy="44" r="1" fill="#7c2d12" />

          <path
            d="M80 128 C68 128 60 116 68 108 C72 104 82 108 84 118 C85 124 80 128 80 128 Z"
            fill="none"
            stroke="#7c2d12"
            strokeWidth="0.9"
          />
          <circle cx="73" cy="116" r="1" fill="#7c2d12" />
        </pattern>
      </defs>

      {/* Repeating Pattern Rect */}
      <rect width="100%" height="100%" fill="url(#pattachitra-pattern)" />

      {/* Grain / texture overlay */}
      <rect width="100%" height="100%" filter="url(#pattachitra-grain)" opacity="0.35" />
    </svg>
  </div>
);

import React, { useState } from 'react';
import { X, MapPin, Calendar, Compass, Star, CheckCircle, Sparkles, Send, ShieldCheck, Clock, Bookmark } from 'lucide-react';
import { DestinationItem, CategoryItem } from '../types';
import { ExplorePlaceItem } from '../data/exploreData';
import { CategoryIcon } from './OdishaMotifs';

interface ExplorePlaceModalProps {
  place: ExplorePlaceItem | null;
  onClose: () => void;
  onPlanTrip: (name: string) => void;
  isSaved?: boolean;
  onToggleBookmark?: (id: string) => void;
}

export const ExplorePlaceModal: React.FC<ExplorePlaceModalProps> = ({
  place,
  onClose,
  onPlanTrip,
  isSaved = false,
  onToggleBookmark,
}) => {
  if (!place) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div className="bg-[#fdfcf9] rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#ece4d6] relative my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-56 xs:h-64 sm:h-72 w-full">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          
          <div className="absolute top-4 left-4 z-10">
            <span className={`text-xs font-bold px-3 py-1 rounded-md shadow-xs ${place.badgeColor}`}>
              {place.badgeType}
            </span>
          </div>

          <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-medium text-amber-200">
              <span>{place.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {place.district}
              </span>
            </div>
            <div className="flex items-center justify-between mt-1 sm:mt-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">{place.name}</h2>
              <span className="flex items-center gap-1 text-amber-300 font-bold bg-black/40 px-2 sm:px-2.5 py-1 rounded-lg text-xs sm:text-sm">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-300" />
                {place.rating} ({place.reviewCount})
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 xs:p-5 sm:p-7 md:p-8 space-y-4 sm:space-y-6">
          <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
            {place.description}
          </p>

          {/* Local Tip Box matching screenshot style */}
          <div className={`p-4 rounded-2xl border flex items-start gap-3 ${place.tipBgClass} ${place.tipBorderClass}`}>
            <span className="text-xl">{place.tipIcon}</span>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider">Local Insider Tip</div>
              <p className="text-xs sm:text-sm font-medium mt-0.5">{place.tipText}</p>
            </div>
          </div>

          {/* Practical Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded-xl border border-gray-200">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500 uppercase">
                <Calendar className="w-3.5 h-3.5 text-[#9a3412]" /> Best Season
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-1">{place.bestTime}</p>
            </div>

            <div className="bg-white p-3 rounded-xl border border-gray-200">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500 uppercase">
                <Clock className="w-3.5 h-3.5 text-[#9a3412]" /> Duration
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-1">{place.duration}</p>
            </div>

            <div className="bg-white p-3 rounded-xl border border-gray-200">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500 uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9a3412]" /> Trust Rating
              </div>
              <p className="text-xs sm:text-sm font-semibold text-emerald-800 mt-1">{place.verificationType}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            {onToggleBookmark && (
              <button
                type="button"
                onClick={() => onToggleBookmark(place.id)}
                className={`w-full sm:w-auto px-4 py-3 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                  isSaved
                    ? 'bg-[#faf3e7] text-[#9a3412] border-[#ebdcc8]'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#9a3412] text-[#9a3412]' : ''}`} />
                <span>{isSaved ? 'Saved in My Bookmarks' : 'Bookmark Place'}</span>
              </button>
            )}

            <button
              onClick={() => {
                onClose();
                onPlanTrip(place.name);
              }}
              className="w-full sm:flex-1 bg-[#182639] hover:bg-[#0e1724] text-white py-3 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Plan Trip to {place.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DestinationModalProps {
  destination: DestinationItem | null;
  onClose: () => void;
  onPlanTrip: (name: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onPlanTrip,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div className="bg-[#fdfcf9] rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#ece4d6] relative my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-56 xs:h-64 sm:h-72 w-full">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
          <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 text-white">
            <span className="bg-[#b84a2d] text-white text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {destination.category}
            </span>
            <div className="flex items-center justify-between mt-1.5 sm:mt-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">{destination.name}</h2>
              <span className="flex items-center gap-1 text-amber-300 font-bold bg-black/40 px-2 sm:px-2.5 py-1 rounded-lg text-xs sm:text-sm">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-300" />
                {destination.rating} / 5.0
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 xs:p-5 sm:p-7 md:p-8 space-y-4 sm:space-y-6">
          <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
            {destination.description}
          </p>

          {/* Highlights */}
          <div>
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 mb-2.5 sm:mb-3">
              <Compass className="w-4 h-4 text-[#b84a2d]" /> Key Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {destination.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 bg-[#f7f2ea] p-2.5 rounded-xl border border-[#ebdcc7]">
                  <CheckCircle className="w-4 h-4 text-[#b84a2d] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
            <div className="bg-white p-3 sm:p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-gray-500 uppercase">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b84a2d]" /> Best Time to Visit
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-1">{destination.bestTimeToVisit}</p>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-gray-500 uppercase">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b84a2d]" /> Nearest Transit Hub
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-1">{destination.nearestHub}</p>
            </div>
          </div>

          {/* Local Tip */}
          <div className="bg-[#fff9ee] border-l-4 border-[#b84a2d] p-3 sm:p-4 rounded-r-xl">
            <div className="text-[11px] sm:text-xs font-bold text-[#b84a2d] uppercase">Verified Local Tip</div>
            <p className="text-xs sm:text-sm text-gray-800 mt-1 italic font-medium">
              "{destination.localTip}"
            </p>
          </div>

          {/* Plan Trip CTA */}
          <button
            onClick={() => {
              onClose();
              onPlanTrip(destination.name);
            }}
            className="w-full bg-[#182639] hover:bg-[#0e1724] text-white py-3 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Customize Journey to {destination.name}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

interface CategoryModalProps {
  category: CategoryItem | null;
  onClose: () => void;
  onPlanTrip: (category: string) => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({
  category,
  onClose,
  onPlanTrip,
}) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div className="bg-[#fdfcf9] rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-[#ece4d6] relative my-auto">
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 text-gray-500 hover:text-gray-900 p-2 rounded-full cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 sm:gap-4 mb-4 pr-6">
          {category.image ? (
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden border border-[#ebdcc7] shadow-2xs shrink-0 bg-[#faf7f2] flex items-center justify-center p-1.5">
              <img src={category.image} alt={category.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
          ) : (
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#f7f2ea] flex items-center justify-center border border-[#ebdcc7]">
              <CategoryIcon type={category.iconType} className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>
          )}
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">{category.name}</h3>
            <p className="text-xs text-[#b84a2d] font-semibold">{category.tagline}</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-5 sm:mb-6">
          {category.description}
        </p>

        <div className="mb-5 sm:mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2.5 sm:mb-3">
            Must-Visit {category.name} Experiences:
          </h4>
          <div className="space-y-2">
            {category.popularSpots.map((spot, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 bg-white p-2.5 rounded-lg border border-gray-200">
                <MapPin className="w-3.5 h-3.5 text-[#b84a2d] shrink-0" />
                <span className="font-medium">{spot}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            onClose();
            onPlanTrip(category.name);
          }}
          className="w-full bg-[#182639] hover:bg-[#0e1724] text-white py-3 rounded-xl font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
        >
          Plan a {category.name} Journey
        </button>
      </div>
    </div>
  );
};

interface PlanJourneyModalProps {
  initialDestination?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const PlanJourneyModal: React.FC<PlanJourneyModalProps> = ({
  initialDestination = '',
  isOpen,
  onClose,
}) => {
  const [destination, setDestination] = useState(initialDestination || 'Puri & Konark');
  const [days, setDays] = useState('4 Days / 3 Nights');
  const [travelType, setTravelType] = useState('Heritage & Culture');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div className="bg-[#fdfcf9] rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-[#ece4d6] relative my-auto">
        <button
          onClick={() => {
            setSubmitted(false);
            onClose();
          }}
          className="absolute top-3.5 right-3.5 text-gray-500 hover:text-gray-900 p-2 rounded-full cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-5 sm:mb-6 pr-6">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#b84a2d]">
                Custom Travel Curator
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#14202e] mt-0.5 sm:mt-1">
                Plan Your Personalized Journey
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Built by local experts around your time, interests, and style.
              </p>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Focus Destination / Region</label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Puri, Chilika, Simlipal, Koraput..."
                  className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#b84a2d]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Duration</label>
                <select
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#b84a2d]"
                >
                  <option>Weekend Getaway (2-3 Days)</option>
                  <option>4 Days / 3 Nights</option>
                  <option>Grand Odisha Odyssey (7-10 Days)</option>
                  <option>Custom Explorer (14+ Days)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Travel Style</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Heritage & Culture',
                    'Nature & Lagoons',
                    'Spiritual Pilgrimage',
                    'Tribal & Hidden Gems',
                  ].map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setTravelType(style)}
                      className={`p-2 rounded-lg text-[11px] sm:text-xs font-medium border text-left transition-colors cursor-pointer ${
                        travelType === style
                          ? 'bg-[#182639] text-white border-[#182639]'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-[#fbf7f0]'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="w-full mt-3 sm:mt-4 bg-[#b84a2d] hover:bg-[#9e3a20] text-white py-3 rounded-xl font-semibold text-xs sm:text-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" /> Generate My Curated Itinerary
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 sm:py-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">Your Journey Plan is Ready!</h3>
            <p className="text-xs text-gray-600 mt-1.5 sm:mt-2 max-w-sm mx-auto">
              We've created a custom verified travel roadmap for <strong>{destination}</strong> ({days}, {travelType}).
            </p>
            <div className="mt-5 sm:mt-6 bg-[#f7f2ea] p-3.5 sm:p-4 rounded-2xl border border-[#ebdcc7] text-left text-xs space-y-2">
              <div className="font-bold text-gray-900">Day 1: Arrival & Local Living Experience</div>
              <div className="font-bold text-gray-900">Day 2: Morning Heritage Walks & Artisan Trail</div>
              <div className="font-bold text-gray-900">Day 3: Sunset Waterways & Authentic Temple Food</div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-5 sm:mt-6 w-full bg-[#182639] text-white py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm cursor-pointer"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

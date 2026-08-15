import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Star,
  Bookmark,
  ShieldCheck,
  LayoutGrid,
  List,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  TreePine,
  Landmark,
  Flame,
  Waves,
  PawPrint,
  Palette,
  Utensils,
  Gem,
  X,
  Compass,
} from 'lucide-react';
import { EXPLORE_PLACES, ExplorePlaceItem } from '../data/exploreData';
import { ASSET_IMAGES } from '../data/landingData';
import { OdishaDivider } from './OdishaMotifs';

interface ExploreOdishaPageProps {
  onSelectPlace: (place: ExplorePlaceItem) => void;
  onPlanJourney: (initialDestination: string) => void;
  savedPlaceIds: string[];
  onToggleBookmark: (placeId: string) => void;
}

export const ExploreOdishaPage: React.FC<ExploreOdishaPageProps> = ({
  onSelectPlace,
  onPlanJourney,
  savedPlaceIds,
  onToggleBookmark,
}) => {
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Odisha');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['hidden']);
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedPopularity, setSelectedPopularity] = useState('all');
  const [sortBy, setSortBy] = useState<'recommended' | 'rating' | 'reviews' | 'priceAsc'>('recommended');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activePage, setActivePage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Active Dropdowns state for the top bar
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleCategoryToggle = (catKey: string) => {
    setSelectedCategories((prev) =>
      prev.includes(catKey) ? prev.filter((c) => c !== catKey) : [...prev, catKey]
    );
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All Odisha');
    setSelectedCategories([]);
    setSelectedBudget('all');
    setSelectedDuration('all');
    setSelectedPopularity('all');
    setSortBy('recommended');
  };

  // Districts in Odisha
  const districts = [
    'All Odisha',
    'Puri',
    'Bhubaneswar / Khordha',
    'Koraput',
    'Gajapati',
    'Mayurbhanj',
    'Ganjam',
    'Cuttack',
    'Sambalpur',
    'Balasore',
    'Kalahandi',
  ];

  // Category Filter items matching screenshot exactly
  const categoryFilters = [
    { id: 'nature', label: 'Nature', count: 120, icon: TreePine, color: 'text-emerald-700' },
    { id: 'heritage', label: 'Heritage', count: 98, icon: Landmark, color: 'text-amber-800' },
    { id: 'spiritual', label: 'Spiritual', count: 76, icon: Flame, color: 'text-amber-600' },
    { id: 'beaches', label: 'Beaches', count: 52, icon: Waves, color: 'text-blue-600' },
    { id: 'wildlife', label: 'Wildlife', count: 38, icon: PawPrint, color: 'text-green-800' },
    { id: 'arts', label: 'Arts & Crafts', count: 45, icon: Palette, color: 'text-rose-700' },
    { id: 'food', label: 'Food', count: 61, icon: Utensils, color: 'text-red-600' },
    { id: 'hidden', label: 'Hidden Gems', count: 86, icon: Gem, color: 'text-[#9a3412]' },
  ];

  // Filtered & Sorted Places
  const filteredPlaces = useMemo(() => {
    return EXPLORE_PLACES.filter((place) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          place.name.toLowerCase().includes(q) ||
          place.category.toLowerCase().includes(q) ||
          place.district.toLowerCase().includes(q) ||
          place.tipText.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // 2. Region / District
      if (selectedRegion !== 'All Odisha') {
        const reg = selectedRegion.toLowerCase();
        if (!place.district.toLowerCase().includes(reg)) return false;
      }

      // 3. Category Filter
      if (selectedCategories.length > 0) {
        const matchesAnyCat = selectedCategories.some((catKey) => {
          if (catKey === 'hidden') return place.badgeType === 'Hidden Gem';
          return place.categoryType === catKey;
        });
        if (!matchesAnyCat) return false;
      }

      // 4. Budget Filter
      if (selectedBudget !== 'all') {
        if (selectedBudget === 'low' && place.priceLevel !== 'Low') return false;
        if (selectedBudget === 'moderate' && place.priceLevel !== 'Moderate') return false;
        if (selectedBudget === 'high' && place.priceLevel !== 'High') return false;
        if (selectedBudget === 'luxury' && place.priceLevel !== 'Luxury') return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
      if (sortBy === 'priceAsc') {
        const order = { Low: 1, Moderate: 2, High: 3, Luxury: 4 };
        return (order[a.priceLevel] || 1) - (order[b.priceLevel] || 1);
      }
      return 0; // Default recommended order
    });
  }, [searchQuery, selectedRegion, selectedCategories, selectedBudget, sortBy]);

  return (
    <div className="relative min-h-screen bg-[#faf8f4] text-gray-800 pb-20 selection:bg-[#b84a2d]/20 selection:text-[#b84a2d]">
      
      {/* Top Hero Section with Page Title, Search Bar & Vintage Temple Sketch Watermark */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-6 overflow-hidden">
        
        {/* Right side etched vintage temple architectural watermark */}
        <div className="absolute right-0 top-0 w-64 sm:w-80 md:w-96 h-48 pointer-events-none opacity-25 md:opacity-35 select-none -z-0">
          <img
            src={ASSET_IMAGES.templeSketch}
            alt="Kalinga Temple Architectural Motif"
            className="w-full h-full object-contain object-right-top mix-blend-multiply filter contrast-125"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Left Title & Subtitle */}
          <div className="max-w-xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-[#142232] tracking-tight leading-tight">
              Explore Odisha
            </h1>
            <p className="mt-1 text-sm sm:text-base text-gray-600 font-normal">
              From iconic destinations to places locals love.
            </p>
            {/* Authentic Odisha Motif Divider */}
            <div className="mt-2.5 flex items-center">
              <img
                src={ASSET_IMAGES.dividerMandala}
                alt="Divider Motif"
                className="h-4 sm:h-5 max-w-[180px] sm:max-w-[220px] object-contain opacity-85"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Center-Right Large Rounded Search Pill */}
          <div className="w-full md:max-w-xl">
            <div className="relative bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-[#e5ddcf] px-4 sm:px-5 py-3 flex items-center gap-3 transition-all focus-within:shadow-[0_4px_20px_rgba(0,0,0,0.1)] focus-within:border-[#9a3412]/50">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations, experiences, food, districts..."
                className="w-full bg-transparent border-none text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-gray-400 hover:text-gray-600 rounded-full cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setMobileFilterOpen(true)}
                className="p-1.5 text-gray-600 hover:text-gray-900 rounded-full transition-colors shrink-0 cursor-pointer lg:hidden"
                title="Open Filters"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Top Filter Dropdown Pills Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 pb-3 border-b border-[#ebdcc8]/70">
          
          {/* Left Dropdown Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full lg:w-auto">
            
            {/* 1. Region Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('region')}
                className={`flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl border transition-colors whitespace-nowrap cursor-pointer ${
                  selectedRegion !== 'All Odisha'
                    ? 'bg-[#182639] text-white border-[#182639]'
                    : 'bg-white text-gray-700 border-[#e5ddcf] hover:bg-gray-50'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{selectedRegion === 'All Odisha' ? 'Region' : selectedRegion}</span>
                <ChevronDown className="w-3.5 h-3.5 shrink-0 text-gray-400" />
              </button>
              {activeDropdown === 'region' && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#eee7dc] py-2 z-50 animate-in fade-in zoom-in-95 duration-150 max-h-64 overflow-y-auto">
                  {districts.map((dist) => (
                    <button
                      key={dist}
                      onClick={() => {
                        setSelectedRegion(dist);
                        setActiveDropdown(null);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors ${
                        selectedRegion === dist
                          ? 'bg-[#faf3e7] text-[#9a3412] font-semibold'
                          : 'text-gray-700 hover:bg-[#faf6f0]'
                      }`}
                    >
                      {dist}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('category')}
                className={`flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl border transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategories.length > 0
                    ? 'bg-[#182639] text-white border-[#182639]'
                    : 'bg-white text-gray-700 border-[#e5ddcf] hover:bg-gray-50'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5 shrink-0" />
                <span>
                  {selectedCategories.length > 0
                    ? `Category (${selectedCategories.length})`
                    : 'Category'}
                </span>
                <ChevronDown className="w-3.5 h-3.5 shrink-0 text-gray-400" />
              </button>
              {activeDropdown === 'category' && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#eee7dc] p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="space-y-1">
                    {categoryFilters.map((cat) => {
                      const isChecked = selectedCategories.includes(cat.id);
                      return (
                        <button
                          key={cat.id}
                          onClick={() => handleCategoryToggle(cat.id)}
                          className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 hover:bg-[#faf6f0]"
                        >
                          <span className="flex items-center gap-2">
                            <cat.icon className={`w-3.5 h-3.5 ${cat.color}`} />
                            {cat.label}
                          </span>
                          <span className="text-[10px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                            {cat.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Budget Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('budget')}
                className={`flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl border transition-colors whitespace-nowrap cursor-pointer ${
                  selectedBudget !== 'all'
                    ? 'bg-[#182639] text-white border-[#182639]'
                    : 'bg-white text-gray-700 border-[#e5ddcf] hover:bg-gray-50'
                }`}
              >
                <span>₹ Budget</span>
                <ChevronDown className="w-3.5 h-3.5 shrink-0 text-gray-400" />
              </button>
              {activeDropdown === 'budget' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#eee7dc] py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {[
                    { id: 'all', label: 'All Budgets' },
                    { id: 'low', label: '₹ Low' },
                    { id: 'moderate', label: '₹₹ Moderate' },
                    { id: 'high', label: '₹₹₹ High' },
                    { id: 'luxury', label: '₹₹₹₹ Luxury' },
                  ].map((b) => (
                    <button
                      key={b.id}
                      onClick={() => {
                        setSelectedBudget(b.id);
                        setActiveDropdown(null);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors ${
                        selectedBudget === b.id
                          ? 'bg-[#faf3e7] text-[#9a3412] font-semibold'
                          : 'text-gray-700 hover:bg-[#faf6f0]'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Duration Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('duration')}
                className={`flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl border transition-colors whitespace-nowrap cursor-pointer ${
                  selectedDuration !== 'all'
                    ? 'bg-[#182639] text-white border-[#182639]'
                    : 'bg-white text-gray-700 border-[#e5ddcf] hover:bg-gray-50'
                }`}
              >
                <span>⏱ Duration</span>
                <ChevronDown className="w-3.5 h-3.5 shrink-0 text-gray-400" />
              </button>
              {activeDropdown === 'duration' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#eee7dc] py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {[
                    { id: 'all', label: 'All Durations' },
                    { id: 'half', label: 'Half Day (2-4 hrs)' },
                    { id: 'full', label: 'Full Day' },
                    { id: 'weekend', label: 'Weekend / 2-3 Days' },
                  ].map((d) => (
                    <button
                      key={d.id}
                      onClick={() => {
                        setSelectedDuration(d.id);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf6f0]"
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 5. Accessibility Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('accessibility')}
                className="flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl border bg-white text-gray-700 border-[#e5ddcf] hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>♿ Accessibility</span>
                <ChevronDown className="w-3.5 h-3.5 shrink-0 text-gray-400" />
              </button>
              {activeDropdown === 'accessibility' && (
                <div className="absolute left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-[#eee7dc] py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {[
                    'Wheelchair Accessible',
                    'Family Friendly',
                    'Senior Citizen Easy Path',
                    'Pet Friendly',
                  ].map((acc) => (
                    <button
                      key={acc}
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf6f0]"
                    >
                      {acc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 6. Popularity Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('popularity')}
                className={`flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl border transition-colors whitespace-nowrap cursor-pointer ${
                  selectedPopularity !== 'all'
                    ? 'bg-[#182639] text-white border-[#182639]'
                    : 'bg-white text-gray-700 border-[#e5ddcf] hover:bg-gray-50'
                }`}
              >
                <span>🔥 Popularity</span>
                <ChevronDown className="w-3.5 h-3.5 shrink-0 text-gray-400" />
              </button>
              {activeDropdown === 'popularity' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#eee7dc] py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {[
                    { id: 'all', label: 'All Places' },
                    { id: 'popular', label: 'Most Popular' },
                    { id: 'hidden', label: 'Hidden Gems Only' },
                    { id: 'trending', label: 'Trending This Month' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelectedPopularity(p.id);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf6f0]"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Right Sort By Dropdown */}
          <div className="relative ml-auto">
            <button
              onClick={() => toggleDropdown('sort')}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl border bg-white text-gray-700 border-[#e5ddcf] hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              <span className="text-gray-500">Sort by:</span>
              <span className="font-semibold text-gray-900">
                {sortBy === 'recommended'
                  ? 'Recommended'
                  : sortBy === 'rating'
                  ? 'Highest Rated'
                  : sortBy === 'reviews'
                  ? 'Most Reviewed'
                  : 'Price: Low to High'}
              </span>
              <ChevronDown className="w-3.5 h-3.5 shrink-0 text-gray-400" />
            </button>
            {activeDropdown === 'sort' && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-[#eee7dc] py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                {[
                  { id: 'recommended', label: 'Recommended' },
                  { id: 'rating', label: 'Highest Rated' },
                  { id: 'reviews', label: 'Most Reviewed' },
                  { id: 'priceAsc', label: 'Price: Low to High' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSortBy(s.id as any);
                      setActiveDropdown(null);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors ${
                      sortBy === s.id
                        ? 'bg-[#faf3e7] text-[#9a3412] font-semibold'
                        : 'text-gray-700 hover:bg-[#faf6f0]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Main Content: Left Sidebar Filters + Right Destination Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT SIDEBAR FILTERS CARD ================= */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24">
            <div className="bg-white rounded-2xl border border-[#e5ddcf] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#f0e7db]">
                <h3 className="font-bold text-gray-900 text-base tracking-tight">Filters</h3>
                <button
                  onClick={handleClearFilters}
                  className="text-xs font-semibold text-[#9a3412] hover:underline cursor-pointer"
                >
                  Clear all
                </button>
              </div>

              {/* 1. Region / District */}
              <div className="space-y-2">
                <label className="flex items-center gap-1.5 text-xs font-bold text-gray-800 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-gray-500" />
                  <span>Region / District</span>
                </label>
                <div className="relative">
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full bg-[#fcfbf9] border border-[#e2d8ca] rounded-xl px-3.5 py-2.5 text-xs font-medium text-gray-800 appearance-none focus:outline-none focus:border-[#9a3412] cursor-pointer"
                  >
                    {districts.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* 2. Categories Checkboxes */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-gray-800 uppercase tracking-wider">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" />
                    <span>Categories</span>
                  </span>
                  <button
                    onClick={() => {
                      if (selectedCategories.length === categoryFilters.length) {
                        setSelectedCategories([]);
                      } else {
                        setSelectedCategories(categoryFilters.map((c) => c.id));
                      }
                    }}
                    className="text-[11px] text-gray-600 hover:text-gray-900 font-medium"
                  >
                    See all
                  </button>
                </div>

                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {categoryFilters.map((cat) => {
                    const isChecked = selectedCategories.includes(cat.id);
                    return (
                      <label
                        key={cat.id}
                        className="flex items-center justify-between text-xs text-gray-700 hover:text-gray-900 cursor-pointer group select-none py-0.5"
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCategoryToggle(cat.id)}
                            className="w-4 h-4 rounded border-[#d1c7b7] text-[#9a3412] focus:ring-[#9a3412] cursor-pointer accent-[#9a3412]"
                          />
                          <cat.icon className={`w-3.5 h-3.5 ${cat.color} shrink-0`} />
                          <span className={`${isChecked ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                            {cat.label}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-600 font-medium">
                          {cat.count}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 3. Budget Pill Multi-tier */}
              <div className="space-y-2.5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-gray-800 uppercase tracking-wider">
                  <span>₹ Budget</span>
                </label>
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-3 gap-1.5">
                    {['all', 'low', 'moderate'].map((b) => (
                      <button
                        key={b}
                        onClick={() => setSelectedBudget(b)}
                        className={`text-[11px] font-semibold py-1.5 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                          selectedBudget === b
                            ? 'bg-[#182639] text-white border-[#182639] shadow-xs'
                            : 'bg-white text-gray-700 border-[#e2d8ca] hover:bg-gray-50'
                        }`}
                      >
                        {b === 'all' ? 'All' : b === 'low' ? '₹ Low' : '₹₹ Moderate'}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {['high', 'luxury'].map((b) => (
                      <button
                        key={b}
                        onClick={() => setSelectedBudget(b)}
                        className={`text-[11px] font-semibold py-1.5 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                          selectedBudget === b
                            ? 'bg-[#182639] text-white border-[#182639] shadow-xs'
                            : 'bg-white text-gray-700 border-[#e2d8ca] hover:bg-gray-50'
                        }`}
                      >
                        {b === 'high' ? '₹₹₹ High' : '₹₹₹₹ Luxury'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Apply Filters Button */}
              <button
                onClick={() => {
                  // Trigger smooth scroll to cards
                  document.getElementById('places-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-[#112239] hover:bg-[#0b1727] text-white text-xs sm:text-sm font-semibold py-2.5 sm:py-3 rounded-xl shadow-xs transition-all active:scale-98 cursor-pointer mt-2"
              >
                Apply Filters
              </button>

            </div>
          </aside>

          {/* ================= RIGHT PLACES LIST / GRID ================= */}
          <main id="places-grid" className="lg:col-span-9 space-y-5">
            
            {/* Results Counter & Grid / List View Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 text-sm sm:text-base tracking-tight">
                  {filteredPlaces.length === 8 ? '248 places found' : `${filteredPlaces.length} places found`}
                </span>
                {selectedCategories.length > 0 && (
                  <span className="text-xs text-gray-600 hidden sm:inline">
                    (Filtered by {selectedCategories.join(', ')})
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#e5ddcf]">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-[#182639] text-white'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  title="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-[#182639] text-white'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  title="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Empty State */}
            {filteredPlaces.length === 0 && (
              <div className="bg-white rounded-2xl border border-[#e5ddcf] p-12 text-center max-w-lg mx-auto my-8">
                <Compass className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h4 className="text-base font-bold text-gray-900">No matching destinations found</h4>
                <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                  Try adjusting your filters or search keywords to discover more of Odisha.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 inline-flex items-center gap-2 bg-[#182639] text-white text-xs font-semibold px-4 py-2 rounded-xl"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset all filters
                </button>
              </div>
            )}

            {/* Destination Cards Grid (4 Columns on wide screens) */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
                {filteredPlaces.map((place) => {
                  const isSaved = savedPlaceIds.includes(place.id);

                  return (
                    <div
                      key={place.id}
                      onClick={() => onSelectPlace(place)}
                      className="group bg-white rounded-2xl border border-[#e6ddd0] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-0.5"
                    >
                      {/* Card Image Container */}
                      <div className="relative h-44 sm:h-40 w-full overflow-hidden bg-gray-100 shrink-0">
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />

                        {/* Top Left Badge: Hidden Gem (Dark Green) / Popular (Navy) / Community Pick (Terracotta) */}
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-md tracking-tight shadow-xs ${place.badgeColor}`}
                          >
                            {place.badgeType}
                          </span>
                        </div>

                        {/* Top Right Bookmark Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleBookmark(place.id);
                          }}
                          className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-white backdrop-blur-xs transition-colors border border-white/20 cursor-pointer"
                          title={isSaved ? 'Remove bookmark' : 'Save place'}
                        >
                          <Bookmark
                            className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#f59e0b] text-[#f59e0b]' : 'text-white'}`}
                          />
                        </button>
                      </div>

                      {/* Card Body */}
                      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Title */}
                          <h3 className="font-serif text-base sm:text-[1.05rem] font-bold text-[#142232] group-hover:text-[#9a3412] transition-colors leading-snug line-clamp-1">
                            {place.name}
                          </h3>

                          {/* Category */}
                          <div className="flex items-center gap-1 text-[11px] font-medium text-gray-600 mt-1">
                            <span>{place.category}</span>
                          </div>

                          {/* District */}
                          <div className="flex items-center gap-1 text-[11px] text-gray-600 mt-0.5">
                            <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                            <span className="truncate">{place.district}</span>
                          </div>

                          {/* Rating & Price */}
                          <div className="flex items-center justify-between mt-2 pt-1">
                            <div className="flex items-center gap-1 text-xs">
                              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                              <span className="font-bold text-gray-900">{place.rating}</span>
                              <span className="text-gray-500 text-[11px]">({place.reviewCount})</span>
                            </div>
                            <span
                              className={`text-xs font-bold ${
                                place.priceLevel === 'Low' ? 'text-emerald-700' : 'text-amber-700'
                              }`}
                            >
                              {place.priceDisplay}
                            </span>
                          </div>

                          {/* Local Tip Tinted Box */}
                          <div
                            className={`mt-2.5 p-2 rounded-xl text-[11px] leading-tight flex items-start gap-1.5 border ${place.tipBgClass} ${place.tipBorderClass}`}
                          >
                            <span className="shrink-0 text-xs">{place.tipIcon}</span>
                            <p className="line-clamp-2 font-medium">{place.tipText}</p>
                          </div>
                        </div>

                        {/* Footer Verification Badge & Freshness Indicator */}
                        <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-600 font-medium">
                          <div className="flex items-center gap-1">
                            <ShieldCheck
                              className={`w-3.5 h-3.5 shrink-0 ${
                                place.verificationType === 'Officially verified'
                                  ? 'text-blue-600'
                                  : 'text-emerald-600'
                              }`}
                            />
                            <span
                              className={
                                place.verificationType === 'Officially verified'
                                  ? 'text-blue-700 font-semibold'
                                  : 'text-emerald-800 font-semibold'
                              }
                            >
                              {place.verificationType}
                            </span>
                          </div>
                          <span className="text-gray-600">{place.updatedTime}</span>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* List View Mode */
              <div className="space-y-4">
                {filteredPlaces.map((place) => {
                  const isSaved = savedPlaceIds.includes(place.id);

                  return (
                    <div
                      key={place.id}
                      onClick={() => onSelectPlace(place)}
                      className="group bg-white rounded-2xl border border-[#e6ddd0] p-4 flex flex-col sm:flex-row gap-4 shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="relative h-44 sm:h-36 sm:w-52 rounded-xl overflow-hidden shrink-0">
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span
                          className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-md ${place.badgeColor}`}
                        >
                          {place.badgeType}
                        </span>
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#9a3412]">
                                {place.name}
                              </h3>
                              <p className="text-xs text-gray-600 mt-0.5">
                                {place.category} • {place.district}
                              </p>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onToggleBookmark(place.id);
                              }}
                              className="p-1.5 text-gray-400 hover:text-amber-500 rounded-lg"
                            >
                              <Bookmark
                                className={`w-4 h-4 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`}
                              />
                            </button>
                          </div>

                          <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                            {place.description}
                          </p>

                          <div
                            className={`mt-2.5 p-2 rounded-xl text-xs flex items-center gap-2 border ${place.tipBgClass} ${place.tipBorderClass} w-fit`}
                          >
                            <span>{place.tipIcon}</span>
                            <span className="font-medium">{place.tipText}</span>
                          </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1 font-bold text-gray-900">
                              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                              {place.rating} ({place.reviewCount})
                            </span>
                            <span className="text-emerald-700 font-bold">{place.priceDisplay}</span>
                          </div>

                          <div className="flex items-center gap-1 text-[11px] text-emerald-800 font-medium">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{place.verificationType}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ================= PAGINATION BAR ================= */}
            <div className="mt-10 pt-6 flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-1.5">
                <button
                  disabled={activePage === 1}
                  onClick={() => setActivePage((p) => Math.max(1, p - 1))}
                  className="p-2 rounded-lg border border-[#e2d8ca] bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  title="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => setActivePage(num)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activePage === num
                        ? 'bg-[#9a3412] text-white shadow-xs'
                        : 'bg-white border border-[#e2d8ca] text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {num}
                  </button>
                ))}

                <span className="text-gray-400 text-xs px-1">...</span>

                <button
                  onClick={() => setActivePage(16)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activePage === 16
                      ? 'bg-[#9a3412] text-white'
                      : 'bg-white border border-[#e2d8ca] text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  16
                </button>

                <button
                  disabled={activePage === 16}
                  onClick={() => setActivePage((p) => Math.min(16, p + 1))}
                  className="p-2 rounded-lg border border-[#e2d8ca] bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  title="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Centered Traditional Divider Motif below pagination */}
              <div className="flex items-center justify-center pt-2">
                <img
                  src={ASSET_IMAGES.dividerMandala}
                  alt="Traditional Divider"
                  className="h-4 sm:h-5 max-w-[200px] object-contain opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </main>

        </div>
      </div>

      {/* Bottom Corner Architectural and Pattachitra Artwork Accents matching screenshot */}
      <div className="relative w-full max-w-7xl mx-auto px-4 mt-8 pointer-events-none select-none flex items-end justify-between overflow-hidden">
        {/* Bottom Left Skyline Sketch */}
        <div className="w-48 sm:w-64 h-24 opacity-30">
          <img
            src={ASSET_IMAGES.bottomLeftSketch}
            alt="Temple Skyline"
            className="w-full h-full object-contain object-left-bottom mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Bottom Right Traditional Pattachitra Scroll Corner Border */}
        <div className="w-56 sm:w-72 h-36 opacity-90 -mr-4 -mb-4">
          <img
            src={ASSET_IMAGES.cornerPattachitra}
            alt="Traditional Pattachitra Artwork Accent"
            className="w-full h-full object-contain object-right-bottom drop-shadow-md"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Mobile Filters Sliding Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-5 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 text-base">Filters</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1.5 text-gray-500 hover:text-gray-900 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Region */}
              <div className="mt-4 space-y-2">
                <label className="text-xs font-bold text-gray-700 uppercase">Region / District</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full bg-[#fcfbf9] border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium"
                >
                  {districts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Categories */}
              <div className="mt-5 space-y-2">
                <label className="text-xs font-bold text-gray-700 uppercase">Categories</label>
                <div className="space-y-2">
                  {categoryFilters.map((cat) => (
                    <label key={cat.id} className="flex items-center justify-between text-xs text-gray-700">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat.id)}
                          onChange={() => handleCategoryToggle(cat.id)}
                          className="w-4 h-4 rounded text-[#9a3412] accent-[#9a3412]"
                        />
                        <span>{cat.label}</span>
                      </div>
                      <span className="text-[10px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                        {cat.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="mt-5 space-y-2">
                <label className="text-xs font-bold text-gray-700 uppercase">Budget</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {['all', 'low', 'moderate', 'high', 'luxury'].map((b) => (
                    <button
                      key={b}
                      onClick={() => setSelectedBudget(b)}
                      className={`text-xs py-1.5 px-2 rounded-lg border font-medium ${
                        selectedBudget === b
                          ? 'bg-[#182639] text-white'
                          : 'bg-gray-50 text-gray-700 border-gray-200'
                      }`}
                    >
                      {b.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 mt-6 space-y-2">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full bg-[#182639] text-white py-3 rounded-xl font-semibold text-xs shadow-xs"
              >
                Show {filteredPlaces.length} Places
              </button>
              <button
                onClick={handleClearFilters}
                className="w-full py-2 text-xs font-semibold text-gray-500 hover:text-gray-900"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

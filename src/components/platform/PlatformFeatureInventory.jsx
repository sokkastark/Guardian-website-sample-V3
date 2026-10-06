import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  CheckCircle2, 
  Search, 
  FileText, 
  SlidersHorizontal,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { productFeatureCategories, totalFeaturesCount, totalCategoriesCount } from '../../data/productFeatures';

export default function PlatformFeatureInventory() {
  const [activeCategoryId, setActiveCategoryId] = useState(productFeatureCategories[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const tabsListId = useId();

  const activeCategory = productFeatureCategories.find(c => c.id === activeCategoryId) || productFeatureCategories[0];

  // Optional live search filter across all 241 features
  const isSearching = searchQuery.trim().length > 0;
  
  const searchResults = isSearching
    ? productFeatureCategories.flatMap(category =>
        category.features
          .filter(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
          .map(feature => ({ feature, categoryName: category.name, categoryId: category.id, page: category.page }))
      )
    : [];

  return (
    <section 
      id="platform-capabilities"
      className="py-20 sm:py-28 bg-[#fdfcff] border-b border-[#e1e1e5] relative overflow-hidden"
      aria-label="Guardian Platform Complete Feature Inventory"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[650px] h-[450px] bg-[#7b3fc7]/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-[#ff7a57]/5 blur-[140px] rounded-full" />
        <div className="absolute inset-0 ambient-grid opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecf9] text-[#7b3fc7] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#7b3fc7]/20 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#ff7a57]" />
            <span>GUARDIAN PLATFORM CAPABILITIES // COMPLETE FEATURE DIRECTORY</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c1636] tracking-tight leading-[1.14] mb-4">
            Explore the capabilities behind the Guardian platform.
          </h2>
          
          <p className="text-base sm:text-lg text-[#524b6b] leading-relaxed">
            A comprehensive, granular directory of Guardian’s enterprise capabilities—spanning 
            {' '}<span className="font-semibold text-[#7b3fc7]">{totalCategoriesCount} core modules</span> and{' '}
            <span className="font-semibold text-[#1c1636]">approved platform capabilities</span> engineered for Value-Based Care excellence.
          </p>
        </div>

        {/* Search & Quick Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 bg-white rounded-2xl border border-[#e1e1e5] shadow-xs">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#7b3fc7] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search platform capabilities (e.g., CCLF, HCC, Telemedicine, MIPS, ADT)..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm text-[#1c1636] placeholder-[#8d889e] bg-transparent focus:outline-none"
              aria-label="Filter features"
            />
            {isSearching && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#727272] hover:text-[#1c1636] px-1.5 py-0.5 rounded bg-[#f2ecf9]"
                aria-label="Clear search query"
              >
                Clear
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-[#faf8fd] rounded-xl text-xs font-mono text-[#7b3fc7] shrink-0 border border-[#ede7f6]">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{isSearching ? `${searchResults.length} matches found` : `Platform Capability Directory`}</span>
          </div>
        </div>

        {/* Search Results Mode */}
        {isSearching ? (
          <div className="bg-white rounded-2xl border border-[#e1e1e5] p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#f0edf7]">
              <h3 className="text-base font-bold text-[#1c1636]">
                Search Results for &ldquo;{searchQuery}&rdquo; ({searchResults.length})
              </h3>
              <span className="text-xs text-[#727272]">Click a category to view full group</span>
            </div>

            {searchResults.length === 0 ? (
              <div className="text-center py-12 text-[#727272] text-sm">
                No matching features found. Try another keyword or browse categories below.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {searchResults.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#faf8fd] border border-[#ede7f6] flex items-start gap-3 hover:border-[#7b3fc7]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#ff7a57] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-[#1c1636] block leading-snug">
                        {item.feature}
                      </span>
                      <span className="text-[11px] font-mono text-[#7b3fc7] mt-1 block">
                        Category: {item.categoryName} • {item.page}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Normal Interactive Category Tabs & Feature Grid */
          <div>
            {/* Category Navigation Pills */}
            <div 
              id={tabsListId}
              role="tablist"
              aria-label="Platform Feature Categories"
              className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin focus:outline-none"
            >
              {productFeatureCategories.map((category) => {
                const isActive = category.id === activeCategoryId;
                return (
                  <button
                    key={category.id}
                    role="tab"
                    id={`tab-${category.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${category.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveCategoryId(category.id)}
                    className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3fc7] ${
                      isActive
                        ? 'bg-[#7b3fc7] text-white shadow-[0_4px_16px_rgba(123,63,199,0.35)] scale-[1.02]'
                        : 'bg-white text-[#524b6b] hover:text-[#1c1636] hover:bg-[#f2ecf9] border border-[#e1e1e5]'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#f0edf7] text-[#7b3fc7]'
                    }`}>
                      {category.features.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                id={`panel-${activeCategory.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeCategory.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="bg-white rounded-3xl border border-[#e1e1e5] p-6 sm:p-8 lg:p-10 shadow-sm"
              >
                {/* Active Category Header Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#f0edf7] gap-4">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#7b3fc7]" />
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1c1636]">
                        {activeCategory.name}
                      </h3>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#7b3fc7]/10 text-[#7b3fc7] border border-[#7b3fc7]/20 font-semibold">
                        {activeCategory.badge}
                      </span>
                    </div>
                    <p className="text-sm text-[#524b6b] max-w-3xl leading-relaxed">
                      {activeCategory.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
                    <span className="text-xs font-mono font-semibold text-[#7b3fc7] bg-[#f2ecf9] px-3 py-1.5 rounded-xl border border-[#7b3fc7]/20">
                      {activeCategory.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-white bg-[#1c1636] px-3 py-1.5 rounded-xl">
                      {activeCategory.features.length} Features
                    </span>
                  </div>
                </div>

                {/* Granular Individual Features: Responsive 1 / 2 / 3 / 4 Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                  {activeCategory.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#faf9fc] border border-[#ede7f6] hover:border-[#7b3fc7]/40 hover:bg-white hover:shadow-xs transition-all duration-200 flex items-start gap-2.5 group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ff7a57] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm font-medium text-[#2d2844] group-hover:text-[#1c1636] leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer Note */}
                <div className="mt-8 pt-6 border-t border-[#f0edf7] flex flex-col sm:flex-row items-center justify-between text-xs text-[#727272] gap-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#7b3fc7]" />
                    <span>Comprehensive platform capability set engineered for enterprise healthcare organizations and risk-bearing entities.</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#7b3fc7]">
                    Category {productFeatureCategories.findIndex(c => c.id === activeCategory.id) + 1} of {totalCategoriesCount}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
}

import { useState, useMemo } from 'react';
import { Search, CalendarDays } from 'lucide-react';
import { events, eventCategories } from '../data/eventsData';
import EventCard from '../components/EventCard';
import AnimatedSection, { staggerItemVariants } from '../components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const filteredEvents = useMemo(() => {
    let result = [...events];

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.location.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== 'الكل') {
      result = result.filter((e) => e.category === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedCategory]);

  const hasFilters = searchQuery || selectedCategory !== 'الكل';

  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection direction="down" className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-[#7b2145] bg-opacity-10 rounded-full mb-4">
            <CalendarDays size={32} className="text-[#7b2145]" />
          </div>
          <h2 className="section-title">الفعاليات القادمة</h2>
          <p className="section-subtitle mb-8">
            تابعي أحدث الفعاليات وورش العمل وانضمي إلى مجتمع نون
          </p>
        </AnimatedSection>

        {/* Search & Filter Bar */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            {/* Search Input */}
            <div className="relative mb-6">
              <Search
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="ابحثي عن فعالية، موقع، أو موضوع..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Category Pills */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">
                نوع الفعالية:
              </p>
              <div className="flex flex-wrap gap-2">
                {eventCategories.map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={
                      selectedCategory === cat
                        ? 'filter-pill-active'
                        : 'filter-pill'
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    layout
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 text-sm">
            عرض{' '}
            <span className="font-bold text-[#7b2145]">
              {filteredEvents.length}
            </span>{' '}
            فعالية
          </p>
          {hasFilters && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('الكل');
              }}
              className="text-sm text-[#7b2145] hover:underline font-medium"
            >
              مسح الفلاتر
            </button>
          )}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={staggerItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  layout
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <EventCard {...event} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-6xl mb-4">📅</div>
            <p className="text-xl text-gray-500 font-medium">
              لم يتم العثور على فعاليات مطابقة
            </p>
            <p className="text-gray-400 mt-2">
              جربي تغيير كلمة البحث أو التصنيف
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

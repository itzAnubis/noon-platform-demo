import { useState, useMemo } from 'react';
import { Search, CalendarDays } from 'lucide-react';
import { events, eventCategories } from '../data/eventsData';
import EventCard from '../components/EventCard';

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
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-[#C2185B] bg-opacity-10 rounded-full mb-4">
            <CalendarDays size={32} className="text-[#C2185B]" />
          </div>
          <h2 className="section-title">الفعاليات القادمة</h2>
          <p className="section-subtitle mb-8">
            تابعي أحدث الفعاليات وورش العمل وانضمي إلى مجتمع نون
          </p>
        </div>

        {/* Search & Filter Bar */}
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
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={
                    selectedCategory === cat
                      ? 'filter-pill-active'
                      : 'filter-pill'
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 text-sm">
            عرض{' '}
            <span className="font-bold text-[#C2185B]">
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
              className="text-sm text-[#C2185B] hover:underline font-medium"
            >
              مسح الفلاتر
            </button>
          )}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📅</div>
            <p className="text-xl text-gray-500 font-medium">
              لم يتم العثور على فعاليات مطابقة
            </p>
            <p className="text-gray-400 mt-2">
              جربي تغيير كلمة البحث أو التصنيف
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

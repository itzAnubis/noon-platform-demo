import { useState, useMemo } from 'react';
import { Search, GraduationCap, Tag } from 'lucide-react';
import { courses, courseLevels, allCourseTags } from '../data/coursesData';
import CourseCard from '../components/CourseCard';

export default function Training() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('الكل');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
      );
    }

    // Level filter
    if (selectedLevel !== 'الكل') {
      result = result.filter((c) => c.level === selectedLevel);
    }

    // Tags filter (match any)
    if (selectedTags.length > 0) {
      result = result.filter((c) =>
        c.tags.some((tag) => selectedTags.includes(tag))
      );
    }

    return result;
  }, [searchQuery, selectedLevel, selectedTags]);

  const hasFilters =
    searchQuery || selectedLevel !== 'الكل' || selectedTags.length > 0;

  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="section-title">ورش ودورات تدريبية</h2>
          <p className="section-subtitle mb-8">
            طوّري مهاراتك مع متخصصين وافتحي أبواباً جديدة للنجاح
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
              placeholder="ابحثي عن دورة، مدرب، أو موضوع..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Level Filter Pills */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap size={16} className="text-[#C2185B]" />
              <p className="text-sm font-semibold text-gray-700">المستوى:</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {courseLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={
                    selectedLevel === level
                      ? 'filter-pill-active'
                      : 'filter-pill'
                  }
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Pills */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Tag size={16} className="text-[#D4AF37]" />
              <p className="text-sm font-semibold text-gray-700">المواضيع:</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {allCourseTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={
                    selectedTags.includes(tag) ? 'tag-pill-active' : 'tag-pill'
                  }
                >
                  {tag}
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
              {filteredCourses.length}
            </span>{' '}
            دورة
          </p>
          {hasFilters && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLevel('الكل');
                setSelectedTags([]);
              }}
              className="text-sm text-[#C2185B] hover:underline font-medium"
            >
              مسح الفلاتر
            </button>
          )}
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-xl text-gray-500 font-medium">
              لم يتم العثور على دورات مطابقة
            </p>
            <p className="text-gray-400 mt-2">
              جربي تغيير كلمة البحث أو الفلاتر
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

import { useState, useMemo } from 'react';
import { Search, Briefcase, Tag } from 'lucide-react';
import { jobs, jobTypes, allJobTags } from '../data/jobsData';
import JobCard from '../components/JobCard';

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('الكل');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.company.toLowerCase().includes(q) ||
          j.requirements.some((r) => r.toLowerCase().includes(q))
      );
    }

    // Type filter
    if (selectedType !== 'الكل') {
      result = result.filter((j) => j.type === selectedType);
    }

    // Tags filter (match any)
    if (selectedTags.length > 0) {
      result = result.filter((j) =>
        j.tags.some((tag) => selectedTags.includes(tag))
      );
    }

    return result;
  }, [searchQuery, selectedType, selectedTags]);

  const hasFilters =
    searchQuery || selectedType !== 'الكل' || selectedTags.length > 0;

  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="section-title">فرص عمل عن بُعد</h2>
          <p className="section-subtitle mb-8">
            ابدئي من منزلك واستقلي مالياً - فرص عمل مرنة تناسب احتياجاتك
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
              placeholder="ابحثي عن وظيفة، شركة، أو مهارة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Type Filter Pills */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase size={16} className="text-[#C2185B]" />
              <p className="text-sm font-semibold text-gray-700">نوع العمل:</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {jobTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={
                    selectedType === type ? 'filter-pill-active' : 'filter-pill'
                  }
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Pills */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Tag size={16} className="text-[#D4AF37]" />
              <p className="text-sm font-semibold text-gray-700">المجالات:</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {allJobTags.map((tag) => (
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
              {filteredJobs.length}
            </span>{' '}
            وظيفة
          </p>
          {hasFilters && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('الكل');
                setSelectedTags([]);
              }}
              className="text-sm text-[#C2185B] hover:underline font-medium"
            >
              مسح الفلاتر
            </button>
          )}
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">💼</div>
            <p className="text-xl text-gray-500 font-medium">
              لم يتم العثور على وظائف مطابقة
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

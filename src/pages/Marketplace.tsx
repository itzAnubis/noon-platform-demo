import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { products, categories } from '../data/productsData';
import ProductCard from '../components/ProductCard';
import AnimatedSection, { staggerItemVariants } from '../components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating' | 'reviews';

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [sortBy, setSortBy] = useState<SortOption>('default');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.seller.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== 'الكل') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection direction="down" className="text-center mb-10">
          <h2 className="section-title">سوق نُ الإلكتروني</h2>
          <p className="section-subtitle mb-8">
            منتجات يدويّة وحرفيّة من إبداع نساء مصريات
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
                placeholder="ابحثي عن منتج أو بائعة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Category Pills */}
            <div className="mb-5">
              <p className="text-sm font-semibold text-gray-700 mb-3">التصنيفات:</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={
                      selectedCategory === cat ? 'filter-pill-active' : 'filter-pill'
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

            {/* Sort */}
            <div className="flex items-center gap-3">
              <SlidersHorizontal size={18} className="text-[#7b2145]" />
              <span className="text-sm font-semibold text-gray-700">ترتيب حسب:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="sort-select"
              >
                <option value="default">الافتراضي</option>
                <option value="price-asc">السعر: من الأقل</option>
                <option value="price-desc">السعر: من الأعلى</option>
                <option value="rating">التقييم</option>
                <option value="reviews">الأكثر مراجعة</option>
              </select>
            </div>
          </div>
        </AnimatedSection>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 text-sm">
            عرض <span className="font-bold text-[#7b2145]">{filteredProducts.length}</span> منتج
          </p>
          {(searchQuery || selectedCategory !== 'الكل') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('الكل');
                setSortBy('default');
              }}
              className="text-sm text-[#7b2145] hover:underline font-medium"
            >
              مسح الفلاتر
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={staggerItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  layout
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <ProductCard {...product} />
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
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-gray-500 font-medium">
              لم يتم العثور على منتجات مطابقة
            </p>
            <p className="text-gray-400 mt-2">جربي تغيير كلمة البحث أو التصنيف</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop',
    name: 'حقيبة يد مطرزة يدويّة',
    price: 450,
    seller: 'ليلى السيد',
    rating: 5,
    reviews: 42,
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=500&fit=crop',
    name: 'مفرش طاولة مطرز بالخيوط الذهبية',
    price: 320,
    seller: 'فاطمة محمود',
    rating: 5,
    reviews: 28,
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1599599810694-a5d9a4bc9a06?w=500&h=500&fit=crop',
    name: 'مربّى طماطم بالأعشاب الطبيعية',
    price: 85,
    seller: 'أم علي',
    rating: 4,
    reviews: 156,
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1578926078328-123291f3a5e5?w=500&h=500&fit=crop',
    name: 'إناء خزفي مصنوع يدويّاً',
    price: 280,
    seller: 'نور عبدالله',
    rating: 5,
    reviews: 35,
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1580129497303-c53440c684d5?w=500&h=500&fit=crop',
    name: 'قطعة كروشيه مفرش أريكة',
    price: 195,
    seller: 'سارة إبراهيم',
    rating: 4,
    reviews: 51,
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1578926078319-b7073f4f11ca?w=500&h=500&fit=crop',
    name: 'مستحضرات العناية بالبشرة الطبيعية',
    price: 150,
    seller: 'منال عصام',
    rating: 5,
    reviews: 89,
  },
];

export default function Marketplace() {
  return (
    <section id="marketplace" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">سوق نُ الإلكتروني</h2>
          <p className="section-subtitle">
            منتجات يدويّة وحرفيّة من إبداع نساء مصريات
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-secondary">عرض جميع المنتجات</button>
        </div>
      </div>
    </section>
  );
}

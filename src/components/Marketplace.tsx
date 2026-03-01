import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    image:
      "/images/hand_bag.png",
    name: 'حقيبة يد مطرزة يدويّة',
    price: 450,
    seller: 'ليلى السيد',
    rating: 5,
    reviews: 42,
  },
  {
    id: 2,
    image:
      "/images/table_cloth.png",
    name: 'مفرش طاولة مطرز بالخيوط الذهبية',
    price: 320,
    seller: 'فاطمة محمود',
    rating: 5,
    reviews: 28,
  },
  {
    id: 3,
    image:
      "/images/jam.png",
    name: 'مربّى طماطم بالأعشاب الطبيعية',
    price: 85,
    seller: 'أم علي',
    rating: 4,
    reviews: 156,
  },
  {
    id: 4,
    image:
      '/images/pot.png',
    name: 'إناء خزفي مصنوع يدويّاً',
    price: 280,
    seller: 'نور عبدالله',
    rating: 5,
    reviews: 35,
  },
  {
    id: 5,
    image:
      '/images/sofa_cloth.png',
    name: 'قطعة كروشيه مفرش أريكة',
    price: 195,
    seller: 'سارة إبراهيم',
    rating: 4,
    reviews: 51,
  },
  {
    id: 6,
    image:
      '/images/soap.png',
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

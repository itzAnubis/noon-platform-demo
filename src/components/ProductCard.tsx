import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  seller: string;
  rating: number;
  reviews: number;
}

export default function ProductCard({
  image,
  name,
  price,
  seller,
  rating,
  reviews,
}: ProductCardProps) {
  return (
    <div className="card-base">
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-[#D4AF37] text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
          جديد
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {name}
        </h3>

        <p className="text-sm text-gray-600 mb-3">من: {seller}</p>

        <div className="flex items-center gap-1 mb-3">
          <span className="text-sm text-gray-600">({reviews})</span>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < rating
                  ? 'fill-[#D4AF37] text-[#D4AF37]'
                  : 'text-gray-300'
              }
            />
          ))}
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-[#C2185B]">
            {price.toLocaleString('ar-EG')} ج.م
          </span>
        </div>

        <button className="btn-primary w-full flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          <span>أضف للسلة</span>
        </button>
      </div>
    </div>
  );
}

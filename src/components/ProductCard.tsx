import { ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  seller: string;
  rating: number;
  reviews: number;
  category?: string;
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
    <motion.div 
      className="card-base"
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
    >
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <motion.div 
          className="absolute top-3 right-3 bg-[#c3a248] text-gray-800 px-3 py-1 rounded-full text-sm font-semibold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 400 }}
        >
          جديد
        </motion.div>
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
                  ? 'fill-[#c3a248] text-[#c3a248]'
                  : 'text-gray-300'
              }
            />
          ))}
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-[#7b2145]">
            {price.toLocaleString('ar-EG')} ج.م
          </span>
        </div>

        <motion.button 
          className="btn-primary w-full flex items-center justify-center gap-2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <ShoppingCart size={18} />
          <span>أضف للسلة</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

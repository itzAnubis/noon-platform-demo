import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  image: string;
  name: string;
  age: number;
  city: string;
  story: string;
  achievement: string;
}

export default function TestimonialCard({
  image,
  name,
  age,
  city,
  story,
  achievement,
}: TestimonialCardProps) {
  return (
    <motion.div 
      className="card-base p-6 bg-gradient-to-br from-pink-50 to-orange-50"
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Quote size={32} className="text-[#c3a248] mb-4" />
      </motion.div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#7b2145]">{name}</h3>
          <p className="text-gray-600 text-sm">
            {age} سنة • {city}
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#c3a248] transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4 text-sm">{story}</p>

      <div className="bg-white bg-opacity-70 rounded-lg p-3">
        <p className="text-sm font-semibold text-[#7b2145]">
          <span className="text-[#c3a248]">✨ الإنجاز: </span>
          {achievement}
        </p>
      </div>
    </motion.div>
  );
}

import { Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CourseCardProps {
  id: number;
  image: string;
  title: string;
  instructor: string;
  duration: string;
  level: string;
  description: string;
  participants: number;
  tags?: string[];
}

export default function CourseCard({
  id,
  image,
  title,
  instructor,
  duration,
  level,
  description,
  participants,
}: CourseCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'مبتدئ':
        return 'bg-green-100 text-green-800';
      case 'متوسط':
        return 'bg-yellow-100 text-yellow-800';
      case 'متقدم':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link to={`/training/${id}`} className="block">
      <motion.div 
        className="card-base overflow-hidden transition-all duration-300"
        whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      >
        <div className="relative h-40 overflow-hidden bg-gray-200">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-[#7b2145] flex-1">{title}</h3>
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Award size={20} className="text-[#c3a248] flex-shrink-0" />
            </motion.div>
          </div>

          <p className="text-sm text-gray-600 mb-3">المدرب: {instructor}</p>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

          <div className="space-y-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#c3a248]" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-[#c3a248]" />
              <span>{participants} مشاركة حالياً</span>
            </div>
          </div>

          <div className="mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(level)}`}>
              {level}
            </span>
          </div>

          <motion.span 
            className="btn-primary w-full block text-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            سجلي في الدورة
          </motion.span>
        </div>
      </motion.div>
    </Link>
  );
}

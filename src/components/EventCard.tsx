import { Calendar, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
}

export default function EventCard({
  title,
  description,
  date,
  time,
  location,
  image,
  category,
}: EventCardProps) {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const getDay = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.getDate();
  };

  const getMonth = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('ar-EG', { month: 'short' });
  };

  return (
    <motion.div 
      className="card-base group transition-all duration-300"
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Date badge */}
        <div className="absolute top-3 left-3 bg-white rounded-xl shadow-lg p-2 text-center min-w-[60px]">
          <span className="block text-2xl font-bold text-[#7b2145] leading-none">
            {getDay(date)}
          </span>
          <span className="block text-xs font-semibold text-gray-600 mt-1">
            {getMonth(date)}
          </span>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 right-3 bg-[#7b2145] text-white px-3 py-1 rounded-full text-xs font-semibold">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#7b2145] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-[#c3a248] flex-shrink-0" />
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-[#c3a248] flex-shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#c3a248] flex-shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        <motion.button 
          className="btn-primary w-full mt-4 text-sm"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          سجّلي الآن
        </motion.button>
      </div>
    </motion.div>
  );
}

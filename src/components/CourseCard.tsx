import { Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <div className="card-base overflow-hidden hover:-translate-y-1 transition-transform duration-300">
        <div className="relative h-40 overflow-hidden bg-gray-200">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-[#C2185B] flex-1">{title}</h3>
            <Award size={20} className="text-[#D4AF37] flex-shrink-0" />
          </div>

          <p className="text-sm text-gray-600 mb-3">المدرب: {instructor}</p>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

          <div className="space-y-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#D4AF37]" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-[#D4AF37]" />
              <span>{participants} مشاركة حالياً</span>
            </div>
          </div>

          <div className="mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(level)}`}>
              {level}
            </span>
          </div>

          <span className="btn-primary w-full block text-center">سجلي في الدورة</span>
        </div>
      </div>
    </Link>
  );
}

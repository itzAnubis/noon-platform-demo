import { Briefcase, MapPin, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

interface JobCardProps {
  title: string;
  company: string;
  type: string;
  salary: string;
  location: string;
  requirements: string[];
  tags?: string[];
}

export default function JobCard({
  title,
  company,
  type,
  salary,
  location,
  requirements,
}: JobCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'دوام كامل':
        return 'bg-blue-100 text-blue-800';
      case 'دوام جزئي':
        return 'bg-green-100 text-green-800';
      case 'عمل حر':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div 
      className="card-base p-6"
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
    >
      <div className="mb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#7b2145] mb-1">{title}</h3>
            <p className="text-gray-600 font-medium">{company}</p>
          </div>
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Briefcase size={28} className="text-[#c3a248] flex-shrink-0 mr-3" />
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(type)}`}>
            {type}
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-4 text-gray-600">
        <div className="flex items-center gap-2">
          <DollarSign size={16} className="text-[#c3a248]" />
          <span>{salary}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-[#c3a248]" />
          <span>عمل عن بُعد - {location}</span>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-2">المتطلبات:</p>
        <ul className="text-sm text-gray-600 space-y-1">
          {requirements.map((req, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#c3a248] mt-1">•</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <motion.button 
        className="btn-primary w-full"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        قدمي الآن
      </motion.button>
    </motion.div>
  );
}

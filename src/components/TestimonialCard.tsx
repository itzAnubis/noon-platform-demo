import { Quote } from 'lucide-react';

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
    <div className="card-base p-6 bg-gradient-to-br from-pink-50 to-orange-50">
      <Quote size={32} className="text-[#D4AF37] mb-4" />

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#C2185B]">{name}</h3>
          <p className="text-gray-600 text-sm">
            {age} سنة • {city}
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]"
          />
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4 text-sm">{story}</p>

      <div className="bg-white bg-opacity-70 rounded-lg p-3">
        <p className="text-sm font-semibold text-[#C2185B]">
          <span className="text-[#D4AF37]">✨ الإنجاز: </span>
          {achievement}
        </p>
      </div>
    </div>
  );
}

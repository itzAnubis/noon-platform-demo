import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="text-center max-w-lg mx-auto">
        <div className="text-8xl font-bold text-[#7b2145] mb-4 opacity-20">
          404
        </div>
        <h1 className="text-3xl font-bold text-[#7b2145] mb-4">
          الصفحة غير موجودة
        </h1>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          عذراً، الصفحة التي تبحثين عنها غير موجودة أو تم نقلها.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#7b2145] text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-800 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Home size={18} />
          <span>العودة للرئيسية</span>
        </Link>
      </div>
    </section>
  );
}

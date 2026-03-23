import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 bg-cover bg-center bg-no-repeat"
      style={{
        // Make sure the image is in your /public folder or imported
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url('/images/home_background.jpeg')`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#C2185B] leading-tight">
          نُمكّن، نُدعم، نُبادر
        </h2>
        {/* ... the rest of your content stays exactly the same ... */}
        
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700">
          منصتكِ لبداية جديدة
        </h3>

        <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
          منصة متكاملة لتمكين المرأة المصرية اقتصادياً واجتماعياً. نوفر لكِ سوقاً للبيع، فرص عمل عن بُعد، دورات تدريبية، والدعم النفسي والمجتمعي. سوياً، نبني مستقبلاً أفضل.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <Link
            to="/marketplace"
            className="bg-[#C2185B] text-white px-8 py-3 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-[#a0144c] transition-colors"
          >
            <span>تصفحي السوق</span>
            <ArrowLeft size={20} />
          </Link>
          <Link
            to="/training"
            className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-[#D4AF37] hover:text-white transition-all"
          >
            <span>انضمي إلينا</span>
            <ArrowLeft size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
              500+
            </div>
            <p className="text-gray-800 font-medium text-sm md:text-base">امرأة تم تمكينها</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
              1000+
            </div>
            <p className="text-gray-800 font-medium text-sm md:text-base">منتج للبيع</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
              100+
            </div>
            <p className="text-gray-800 font-medium text-sm md:text-base">فرصة عمل</p>
          </div>
        </div>
      </div>
    </section>
  );
}
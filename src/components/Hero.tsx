import { ArrowLeft } from 'lucide-react';

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50 flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#C2185B] leading-tight">
          نُمكّن، نُدعم، نُبادر
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700">
          منصتكِ لبداية جديدة
        </h3>

        <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
          منصة متكاملة لتمكين المرأة المصرية اقتصادياً واجتماعياً. نوفر لكِ سوقاً للبيع، فرص عمل عن بُعد، دورات تدريبية، والدعم النفسي والمجتمعي. سوياً، نبني مستقبلاً أفضل.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <button
            onClick={() => handleScroll('marketplace')}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <span>تصفحي السوق</span>
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll('stories')}
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            <span>انضمي إلينا</span>
            <ArrowLeft size={20} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
              500+
            </div>
            <p className="text-gray-600 text-sm md:text-base">امرأة تم تمكينها</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
              1000+
            </div>
            <p className="text-gray-600 text-sm md:text-base">منتج للبيع</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
              100+
            </div>
            <p className="text-gray-600 text-sm md:text-base">فرصة عمل</p>
          </div>
        </div>
      </div>
    </section>
  );
}

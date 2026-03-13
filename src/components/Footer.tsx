import { Instagram, Facebook, MessageCircle, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'عن المنصة', href: '#' },
    { label: 'الشروط والأحكام', href: '#' },
    { label: 'سياسة الخصوصية', href: '#' },
    { label: 'اتصلي بنا', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/noon_pharos' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61582801259788' },
    // { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/201211508497' },
  ];

  return (
    <footer className="bg-[#C2185B] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <img 
                src="/images/logo.png" 
                alt="نون Logo" 
                className="h-28 w-auto object-contain" 
              />
            </div>
            <p className="text-pink-100">
              منصة متكاملة لتمكين المرأة المصرية اقتصادياً واجتماعياً
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-pink-100 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">تواصلي معنا</h4>
            <div className="flex flex-col gap-3 text-pink-100">
              <p>
                البريد:{' '}
                <a href="mailto:noonpharos@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                  noonpharos@gmail.com
                </a>
              </p>
              <p>
                الهاتف:{' '}
                <a href="tel:+201001234567" className="hover:text-[#D4AF37] transition-colors" dir="ltr">
                  +20 100 123 4567
                </a>
              </p>
              <p>القاهرة، مصر</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">تابعينا</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-[#D4AF37] hover:text-[#C2185B] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-pink-400 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-pink-100 text-sm">
            © 2026 نون - جميع الحقوق محفوظة
          </p>
          <button
            onClick={handleScrollTop}
            className="p-2 bg-[#D4AF37] text-[#C2185B] rounded-full hover:bg-white transition-all duration-300"
            aria-label="العودة للأعلى"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}

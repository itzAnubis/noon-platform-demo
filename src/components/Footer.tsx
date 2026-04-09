import { Instagram, Facebook, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'الرئيسية', to: '/' },
    { label: 'سوق نُ', to: '/marketplace' },
    { label: 'فرص عمل', to: '/jobs' },
    { label: 'التدريب', to: '/training' },
    { label: 'الفعاليات', to: '/events' },
    { label: 'فريق العمل', to: '/team' },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/noon_pharos' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61582801259788' },
  ];

  return (
    <footer className="bg-[#7b2145] text-white">
      <AnimatedSection direction="up" amount={0.1}>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="mb-4">
                <img 
                  src="/NooN-LoGo3.png" 
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
                  <motion.li 
                    key={idx}
                    whileHover={{ x: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link
                      to={link.to}
                      className="text-pink-100 hover:text-[#c3a248] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">تواصلي معنا</h4>
              <div className="flex flex-col gap-3 text-pink-100">
                <p>
                  البريد:{' '}
                  <a href="mailto:noonpharos@gmail.com" className="hover:text-[#c3a248] transition-colors">
                    noonpharos@gmail.com
                  </a>
                </p>
                <p>
                  الهاتف:{' '}
                  <a href="tel:+201001234567" className="hover:text-[#c3a248] transition-colors" dir="ltr">
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
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-[#c3a248] hover:text-[#7b2145] transition-all duration-300"
                      aria-label={social.label}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-pink-400 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-pink-100 text-sm">
              © 2026 نون - جميع الحقوق محفوظة
            </p>
            <motion.button
              onClick={handleScrollTop}
              className="p-2 bg-[#c3a248] text-[#7b2145] rounded-full hover:bg-white transition-all duration-300"
              aria-label="العودة للأعلى"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
}

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'الرئيسية', href: '#home' },
    { id: 'marketplace', label: 'سوق نُ', href: '#marketplace' },
    { id: 'jobs', label: 'فرص عمل', href: '#jobs' },
    { id: 'training', label: 'التدريب', href: '#training' },
    { id: 'stories', label: 'بصمتها حكاية', href: '#stories' },
    { id: 'support', label: 'الدعم', href: '#support' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? (
                <X size={24} className="text-[#C2185B]" />
              ) : (
                <Menu size={24} className="text-[#C2185B]" />
              )}
            </button>
          </div>

          <div className="flex-1 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-[#C2185B]">نُ</span>
              <span className="text-gray-800 mr-2">نون</span>
            </h1>
          </div>

          <div className="flex-1"></div>
        </div>

        <div
          className={`md:flex justify-center gap-8 mt-4 md:mt-0 ${
            isOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.href)}
              className="block py-2 px-3 text-gray-700 hover:text-[#C2185B] font-medium transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

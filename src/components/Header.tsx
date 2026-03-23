import { Menu, X, LogIn } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'الرئيسية', to: '/' },
    { id: 'marketplace', label: 'سوق نُ', to: '/marketplace' },
    { id: 'jobs', label: 'فرص عمل', to: '/jobs' },
    { id: 'training', label: 'التدريب', to: '/training' },
    { id: 'events', label: 'الفعاليات', to: '/events' },
    { id: 'team', label: 'فريق العمل', to: '/team' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 flex items-center gap-3">
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

            {/* Login button — visible on desktop */}
            <Link
              to="/login"
              className="hidden md:flex items-center gap-2 px-4 py-2 border-2 border-[#C2185B] text-[#C2185B] rounded-lg font-semibold text-sm hover:bg-[#C2185B] hover:text-white transition-all duration-300"
            >
              <LogIn size={16} />
              <span>تسجيل الدخول</span>
            </Link>
          </div>

          <div className="flex-1 text-center">
            <Link to="/" className="inline-block">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="h-28 w-auto object-contain" 
              />
            </Link>
          </div>

          <div className="flex-1"></div>
        </div>

        <div
          className={`md:flex justify-center gap-8 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden md:flex'
            }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 font-medium transition-colors duration-300 ${isActive
                  ? 'text-[#C2185B] border-b-2 border-[#C2185B]'
                  : 'text-gray-700 hover:text-[#C2185B]'
                }`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Mobile login link */}
          {isOpen && (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 font-medium text-[#C2185B] md:hidden"
            >
              تسجيل الدخول
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

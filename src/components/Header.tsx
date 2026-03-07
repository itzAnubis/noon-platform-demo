import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'الرئيسية', to: '/' },
    { id: 'marketplace', label: 'سوق نُ', to: '/marketplace' },
    { id: 'jobs', label: 'فرص عمل', to: '/jobs' },
    { id: 'training', label: 'التدريب', to: '/training' },
    { id: 'team', label: 'فريق العمل', to: '/team' },
  ];

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
            <Link to="/">
              <h1 className="text-3xl font-bold">
                <span className="text-[#C2185B]">نُ</span>
                <span className="text-gray-800 mr-2">نون</span>
              </h1>
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
        </div>
      </nav>
    </header>
  );
}

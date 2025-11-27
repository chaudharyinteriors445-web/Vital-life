import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'product', label: 'Product' },
    { id: 'order', label: 'Order Now' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white sticky top-0 z-50 jute-texture" style={{ boxShadow: '0 4px 12px rgba(74, 55, 40, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <div className="text-2xl font-bold" style={{ color: '#4a3728' }}>
              VITAL
            </div>
            <div className="text-2xl font-bold ml-1" style={{ color: '#d4a574' }}>
              LIFE
            </div>
            <div className="ml-3 text-xs uppercase tracking-widest font-semibold" style={{ color: '#8b6f47' }}>
              Organic Foods
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-sm uppercase tracking-wide font-semibold transition-all ${
                  currentPage === item.id
                    ? 'text-white px-4 py-2 rounded-lg'
                    : 'text-gray-700 hover:text-white'
                }`}
                style={{
                  backgroundColor: currentPage === item.id ? '#8b6f47' : 'transparent',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            style={{ color: '#4a3728' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t jute-texture">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm uppercase tracking-wide font-semibold transition-colors ${
                  currentPage === item.id
                    ? 'text-white'
                    : 'text-gray-700 hover:text-white'
                }`}
                style={{
                  backgroundColor: currentPage === item.id ? '#8b6f47' : '#f5ede0',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

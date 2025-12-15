import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Projets', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'À propos', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="fixed top-8 left-48 right-48 z-[100]">
      <header className={`bg-white/50 backdrop-blur-md rounded-3xl shadow-lg transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''}`}>
        <div className="px-6">
          <div className="flex items-center justify-between py-3">
            <Link to="/" className="text-lg font-bold transition-colors duration-300 text-gray-anthracite font-poppins hover:text-orange-deep">
              Fortuné Aïounou
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden space-x-6 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`font-inter text-sm font-medium transition-colors duration-200 ${isActive(item.href) ? 'text-orange-deep' : 'text-gray-anthracite hover:text-orange-deep'}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="p-2 md:hidden text-gray-anthracite" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="py-3 border-t md:hidden border-green-light">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 font-inter text-sm transition-colors duration-200 ${isActive(item.href) ? 'text-orange-deep' : 'text-blue-gray hover:text-orange-deep'}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

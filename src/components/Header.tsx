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
    <div className="fixed top-4 left-4 right-4 md:top-8 md:left-48 md:right-48 z-[100]">
      <header className={`bg-white/20 backdrop-blur-md rounded-3xl shadow-lg transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''}`}>
        <div className="px-4 md:px-6">
          <div className="flex items-center justify-between py-3">
            <Link to="/" className="text-base font-bold transition-colors duration-300 md:text-lg text-gray-anthracite font-poppins hover:text-orange-deep">
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
            <button className="p-2 transition-colors md:hidden text-gray-anthracite hover:text-orange-deep" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="py-3 border-t border-gray-200 md:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-2 font-inter text-sm font-medium transition-colors duration-200 rounded-lg ${isActive(item.href) ? 'text-orange-deep bg-orange-50' : 'text-gray-anthracite hover:text-orange-deep hover:bg-gray-50'}`}
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

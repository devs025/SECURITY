import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/', current: location.pathname === '/' },
    { name: 'Nos Services', href: '/services', current: location.pathname === '/services' },
    { name: 'Secteurs', href: '/secteurs', current: location.pathname === '/secteurs' },
    { name: 'À Propos', href: '/a-propos', current: location.pathname === '/a-propos' },
    { name: 'Candidature', href: '/candidature', current: location.pathname === '/candidature' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  return (
    <header className="dark-header">
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-brand-primary" />
          <span className="dark-logo">SECURITÉ H</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="dark-nav hidden md:flex">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`dark-nav-link ${item.current ? 'active' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white hover:text-brand-primary transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-t border-border-subtle md:hidden">
          <nav className="py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-6 py-3 text-lg ${
                  item.current 
                    ? 'text-brand-active bg-brand-hover' 
                    : 'text-text-muted hover:text-text-primary hover:bg-bg-overlay'
                } transition-all`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
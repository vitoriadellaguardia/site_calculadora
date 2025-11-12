import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white hover:text-blue-200 transition-colors">
            🧮 CalcHub
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">
              Início
            </Link>
            <Link to="/scientific" className="text-white/80 hover:text-white transition-colors">
              Científica
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
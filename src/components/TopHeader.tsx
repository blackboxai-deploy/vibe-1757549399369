'use client';

import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import SideDrawerMenu from './SideDrawerMenu';

export default function TopHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#1B5E20' }}
            >
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <h1 className="text-xl font-bold" style={{ color: '#1B5E20' }}>
              MaiSaúde
            </h1>
          </div>

          {/* Hamburger Menu Button */}
          <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </header>

      {/* Side Drawer Menu */}
      <SideDrawerMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
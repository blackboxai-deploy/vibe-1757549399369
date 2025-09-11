'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface SideDrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideDrawerMenu({ isOpen, onClose }: SideDrawerMenuProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation and focus management
  useEffect(() => {
    if (isOpen) {
      // Focus first menu item when drawer opens
      const firstFocusableElement = drawerRef.current?.querySelector(
        'a, button'
      ) as HTMLElement;
      firstFocusableElement?.focus();

      // Trap focus within drawer
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
        
        if (e.key === 'Tab') {
          const focusableElements = drawerRef.current?.querySelectorAll(
            'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
          ) as NodeListOf<HTMLElement>;
          
          if (focusableElements) {
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent body scroll

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }

    return () => {
      // Cleanup when component unmounts or isOpen becomes false
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`drawer-overlay ${isOpen ? 'open' : ''}`}
        onClick={handleOverlayClick}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`drawer ${isOpen ? 'open' : ''}`}
        id="side-drawer-menu"
        role="navigation"
        aria-label="Menu principal"
        aria-hidden={!isOpen}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#1B5E20' }}
              >
                <span className="text-white font-bold">M</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold" style={{ color: '#1B5E20' }}>
                  MaiSaúde
                </h2>
                <p className="text-sm text-gray-600">Dieta Cetogênica</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 focus-visible transition-colors"
              aria-label="Fechar menu"
            >
              <span className="text-gray-500 text-xl leading-none">&times;</span>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-4">
            <li>
              <Link 
                href="/" 
                onClick={onClose}
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-green-50 transition-colors focus-visible"
              >
                <span className="mr-3 text-xl">🏠</span>
                <span className="font-medium">Tela de Início</span>
              </Link>
            </li>
            <li>
              <a 
                href="https://instagram.com/maisaude" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-green-50 transition-colors focus-visible"
              >
                <span className="mr-3 text-xl">📷</span>
                <span className="font-medium">Nosso Instagram</span>
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre a dieta cetogênica." 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-green-50 transition-colors focus-visible"
              >
                <span className="mr-3 text-xl">💬</span>
                <span className="font-medium">WhatsApp de Suporte</span>
              </a>
            </li>
            <li>
              <a 
                href="https://maisaude.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-green-50 transition-colors focus-visible"
              >
                <span className="mr-3 text-xl">🌐</span>
                <span className="font-medium">Nosso Site</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            © 2024 MaiSaúde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </>
  );
}
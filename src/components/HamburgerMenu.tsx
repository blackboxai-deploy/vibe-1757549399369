'use client';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function HamburgerMenu({ isOpen, onClick }: HamburgerMenuProps) {
  return (
    <button
      className={`hamburger focus-visible ${isOpen ? 'active' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={isOpen}
      aria-controls="side-drawer-menu"
      type="button"
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </button>
  );
}
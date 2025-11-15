import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; }> = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-base font-medium text-brand-graphite hover:text-brand-orange transition-colors duration-300"
  >
    {children}
  </a>
);

const Header: React.FC = () => {

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (!href) return;
    
    const targetId = href.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-brand-blue">
              Agência Will<span className="text-brand-orange">.</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex items-baseline space-x-8">
              <NavLink href="#servicos" onClick={handleNavClick}>Serviços</NavLink>
              <NavLink href="#portfolio" onClick={handleNavClick}>Portfólio</NavLink>
              <NavLink href="#sobre" onClick={handleNavClick}>Sobre</NavLink>
              <NavLink href="#contato" onClick={handleNavClick}>Contato</NavLink>
            </nav>
            <a 
              href="https://wa.me/553498734908?text=Ol%C3%A1%2C+gostaria+de+um+diagn%C3%B3stico+gratuito+da+minha+presen%C3%A7a+digital."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange transition-transform duration-300 hover:scale-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar Pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
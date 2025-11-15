import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-base text-slate-400">
          &copy; {new Date().getFullYear()} Agência Will. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
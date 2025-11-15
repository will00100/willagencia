import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const CTA: React.FC = () => {
  return (
    <section id="contato" className="bg-brand-blue scroll-mt-16">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Pronto para sua empresa ser a Referência no Google Maps?
        </h2>
        <p className="mt-4 text-lg leading-6 text-slate-200">
          Fale comigo agora. Solicite um diagnóstico gratuito do seu Perfil do Google Meu Negócio e descubra seu potencial perdido.
        </p>
        <a
          href="https://wa.me/553498734908?text=Ol%C3%A1%2C+gostaria+de+um+diagn%C3%B3stico+gratuito+do+meu+Perfil+do+Google+Meu+Neg%C3%B3cio."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 w-full inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-full shadow-lg text-base font-semibold text-white bg-brand-orange hover:bg-orange-600 sm:w-auto transition-transform duration-300 hover:scale-105"
        >
          <WhatsAppIcon className="h-6 w-6 mr-3" />
          Analisar Meu Google Meu Negócio Agora
        </a>
      </div>
    </section>
  );
};

export default CTA;
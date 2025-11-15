import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-brand-blue">
          Especialista em Google Meu Negócio: Domine as Buscas Locais
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-brand-graphite">
          A Agência Will coloca sua empresa no topo do Google Maps e cria a Landing Page profissional que transforma seus visitantes em clientes.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/553498734908?text=Ol%C3%A1%2C+vi+seu+site+e+quero+ser+encontrado+no+Google.+Pode+me+ajudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-brand-orange hover:bg-orange-600 transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            Quero Ser Encontrado no Google
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
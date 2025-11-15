import React from 'react';
import { MapPinIcon } from './icons/MapPinIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

const portfolioItems = [
  {
    name: "Vinhático Jardinagem",
    description: "Empresa de jardinagem e paisagismo que agora lidera as buscas por serviços na região.",
    link: "https://share.google/RIadbDa1WiXwUM68M"
  },
  {
    name: "Lar do Livro Espírita",
    description: "Livraria especializada com grande visibilidade online para seu público específico.",
    link: "https://share.google/vvNxoIrCg3uvh3yNc"
  },
  {
    name: "Autoescola Sinal Verde",
    description: "Autoescola com forte presença no Google Maps, atraindo novos alunos diariamente.",
    link: "https://share.google/YGwy3EaQRUjvaToN9"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="bg-white py-20 sm:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue">
            Resultados Reais: Clientes no Topo do Google
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-graphite">
            Confira alguns dos negócios locais que já estão se destacando nas buscas do Google Maps após o nosso trabalho de otimização.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-brand-light-gray rounded-xl shadow-lg border border-slate-200 flex flex-col p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="flex-shrink-0">
                <MapPinIcon className="h-10 w-10 text-brand-orange" />
              </div>
              <div className="flex-grow mt-4">
                <h3 className="text-xl font-bold text-brand-blue">{item.name}</h3>
                <p className="mt-2 text-brand-graphite">{item.description}</p>
              </div>
              <div className="mt-6">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-orange-600 transition-colors"
                >
                  Ver no Google Maps
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
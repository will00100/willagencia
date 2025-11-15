import React from 'react';
import { WarningIcon } from './icons/WarningIcon';

const Problem: React.FC = () => {
  const painPoints = [
    "Você está frustrado porque seu perfil do Google Meu Negócio não traz clientes?",
    "Quando alguém procura seu serviço no Google Maps, você nem aparece?",
    "Você até tem um perfil, mas ele está incompleto, sem fotos ou com avaliações ruins?",
    "Você precisa de um site, mas não sabe por onde começar?"
  ];

  return (
    <section id="problema" className="bg-brand-light-gray py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue">
            Seus clientes procuram no Google, mas encontram seu concorrente.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-slate-200">
              <div className="flex-shrink-0">
                <WarningIcon className="h-8 w-8 text-brand-orange" />
              </div>
              <p className="text-brand-graphite text-lg">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
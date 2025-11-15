import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="bg-brand-light-gray py-20 sm:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="flex justify-center md:col-span-1">
            <img 
              src="https://placehold.co/256x256/0D2C4F/F4F7F9/png?text=Will&font=inter"
              alt="Will - Especialista em Presença Digital" 
              className="h-48 w-48 sm:h-64 sm:w-64 rounded-full object-cover shadow-2xl border-4 border-white"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue">
              Por que confiar na Agência Will?
            </h2>
            <div className="mt-6 space-y-4 text-lg text-brand-graphite">
              <p>
                "Meu nome é Will, e eu não sou só um 'cara do marketing'. Eu sou um empreendedor que já esteve na linha de frente de um negócio local [como a Play Celulares]."
              </p>
              <p>
                "Eu sei exatamente a dor de ver o concorrente lotado enquanto sua loja está vazia. Eu aprendi na prática como usar o Google Meu Negócio para virar o jogo. Minha agência não vende promessas complicadas; nós entregamos clientes."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
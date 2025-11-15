import React from 'react';

const TargetAudience: React.FC = () => {
  const audiences = [
    "Lojas e Comércios Locais (Ex: Lojas de celular, roupas, autopeças)",
    "Prestadores de Serviço (Ex: Eletricistas, encanadores, jardineiros, chaveiros)",
    "Negócios de Alimentação (Restaurantes, padarias, deliverys)",
    "Profissionais Liberais (Advogados, contadores, dentistas)"
  ];

  return (
    <section id="para-quem-e" className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue">
            Esta solução é <span className="text-brand-orange">perfeita</span> para:
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {audiences.map((audience, index) => {
            const parts = audience.match(/(.*?)\s\((.*)\)/);
            const title = parts ? parts[1] : audience;
            const example = parts ? `(${parts[2]})` : '';

            return (
              <div key={index} className="p-8 bg-brand-light-gray rounded-xl shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <p className="text-lg font-semibold text-brand-graphite">{title}</p>
                {example && <p className="text-sm text-slate-500 mt-2">{example}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

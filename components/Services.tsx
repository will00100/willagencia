import React from 'react';
import { CheckIcon } from './icons/CheckIcon';
import { MapPinIcon } from './icons/MapPinIcon';
import { LaptopIcon } from './icons/LaptopIcon';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  expectedResult: string;
  isPrimary?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, expectedResult, isPrimary = false }) => {
  const cardClasses = isPrimary
    ? 'bg-brand-blue text-white border-blue-900'
    : 'bg-white text-brand-graphite border-slate-200';
  const titleClasses = isPrimary ? 'text-white' : 'text-brand-blue';
  const descriptionClasses = isPrimary ? 'text-slate-200' : 'text-brand-graphite';
  const checkIconClasses = isPrimary ? 'text-brand-orange' : 'text-green-500';
  const resultClasses = isPrimary ? 'bg-blue-900/50' : 'bg-brand-light-gray';

  return (
    <div className={`rounded-2xl p-8 shadow-2xl border ${cardClasses} flex flex-col h-full`}>
      <div className="flex items-center gap-4">
        {icon}
        <h3 className={`text-2xl font-bold ${titleClasses}`}>{title}</h3>
      </div>
      <p className={`mt-4 text-base ${descriptionClasses}`}>{description}</p>
      
      <ul className="mt-6 space-y-3 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon className={`flex-shrink-0 h-6 w-6 ${checkIconClasses}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className={`mt-8 p-4 rounded-lg ${resultClasses}`}>
        <p className="font-semibold"><strong>Resultado Esperado:</strong> {expectedResult}</p>
      </div>
    </div>
  );
};


const Services: React.FC = () => {
  const gmbFeatures = [
    "Configuração e Otimização completa do Perfil do Zero.",
    "Cadastro estratégico de palavras-chave, serviços e produtos.",
    "Otimização de Fotos (Geotagging) para provar sua localização.",
    "Estratégia para conseguir e responder avaliações (Reviews 5 estrelas).",
    "Plano de Posts (Google Posts) para manter seu perfil sempre ativo.",
  ];

  const siteFeatures = [
    "Design profissional e totalmente responsivo (perfeito no celular e computador).",
    "Textos persuasivos (Copywriting) focados no seu público.",
    "Todos os botões direcionados para o seu WhatsApp para facilitar o contato imediato.",
    "Otimizada para carregar rapidamente e ser encontrada pelo Google (SEO On-Page).",
  ];

  return (
    <section id="servicos" className="bg-brand-light-gray py-20 sm:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ServiceCard
            icon={<MapPinIcon className="h-10 w-10 text-brand-orange" />}
            title="Otimização Completa do Google Meu Negócio"
            description="O Google Meu Negócio (agora chamado 'Perfil de Empresa no Google') é a ferramenta de vendas mais poderosa para negócios locais. Não basta 'ter' um perfil, é preciso otimizar seu cadastro para que o Google entenda que você é a melhor resposta para o cliente."
            features={gmbFeatures}
            expectedResult="Mais ligações, mais pedidos de rota no Maps e mais clientes entrando pela porta."
            isPrimary={true}
          />
          <ServiceCard
            icon={<LaptopIcon className="h-10 w-10 text-brand-orange" />}
            title="Landing Page de Alta Conversão"
            description="Após encontrar sua empresa no Google, o cliente precisa de uma página que o convença a entrar em contato. Criamos uma Landing Page focada em um único objetivo: transformar visitantes em conversas no seu WhatsApp."
            features={siteFeatures}
            expectedResult="Um fluxo constante de novos clientes chegando diretamente do Google para o seu WhatsApp, prontos para comprar."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
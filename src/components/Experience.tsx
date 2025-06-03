
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: 'Gerente',
      company: 'Confecções Gomez',
      location: 'Nova Mamoré/RO',
      period: '2024',
      responsibilities: [
        'Atendimento ao cliente e vendas de roupas',
        'Organização e controle de estoque',
        'Apoio na limpeza e organização da loja',
        'Abrir e fechar Caixa'
      ]
    },
    {
      position: 'Setor Fiscal - Vendedor - Caixa',
      company: 'Casa das Bombas',
      location: 'Nova Mamoré/RO',
      period: '2024',
      responsibilities: [
        'Atendimento e vendas de produtos de linha branca',
        'Organização de estoque e emissão de notas fiscais de entrada e saída',
        'Responsável pelo terminal de vendas'
      ]
    },
    {
      position: 'Repositor - Encarregado',
      company: 'Irmãos Gonçalves Indústria LTDA',
      location: 'Porto Velho/RO',
      period: '2023-2024',
      responsibilities: [
        'Início como repositor, promovido para auxiliar de organização e conferente',
        'Treinador de novos colaboradores',
        'Auxílio na montagem de novas lojas da empresa na região'
      ]
    },
    {
      position: 'Auxiliar em Serviços Gerais',
      company: 'Fazenda Bom Futuro',
      location: 'Nova Mamoré/RO',
      period: '2020-2022',
      responsibilities: [
        'Conservação de ambientes e cuidados com animais',
        'Apoio em atividades agrícolas diversas'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/20 backdrop-blur-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text-calm">
            Experiência Profissional
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-soft rounded-2xl shadow-2xl p-8 card-hover-calm border border-blue-500/20 soft-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center soft-glow floating-gentle">
                        <Briefcase className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-300">
                          {exp.position}
                        </h3>
                        <p className="text-purple-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-blue-400" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-blue-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <h4 className="font-semibold text-blue-300 mb-3">
                      Principais Responsabilidades:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 soft-glow"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-soft rounded-2xl p-8 text-white text-center soft-glow fade-in-slow">
            <h3 className="text-2xl font-bold mb-4">Principais Conquistas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="hover:scale-110 transition-transform duration-500">
                <div className="text-3xl font-bold mb-2 gradient-text-calm">4+</div>
                <div className="text-blue-100">Anos de Experiência</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-500">
                <div className="text-3xl font-bold mb-2 gradient-text-calm">3</div>
                <div className="text-blue-100">Promoções Internas</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-500">
                <div className="text-3xl font-bold mb-2 gradient-text-calm">100%</div>
                <div className="text-blue-100">Dedicação e Comprometimento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;


import React from 'react';
import { User, Clock, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Idade', value: '20 anos' },
    { icon: Heart, label: 'Estado Civil', value: 'Solteiro' },
    { icon: Clock, label: 'Disponibilidade', value: 'Início Imediato' },
    { icon: TrendingUp, label: 'Foco', value: 'Desenvolvimento Contínuo' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/30 backdrop-blur-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text-calm">
            Objetivo Profissional
          </h2>

          <div className="mb-12 slide-in-calm">
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              Atuar na área de informática, suporte técnico ou vendas, contribuindo com minhas 
              experiências em atendimento, organização, infraestrutura e tecnologia para agregar 
              valor à equipe e crescer profissionalmente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-soft p-6 rounded-xl card-hover-calm text-center border border-blue-500/20 soft-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center soft-glow floating-gentle">
                  <info.icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-blue-300 mb-2">{info.label}</h3>
                <p className="text-gray-400">{info.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center fade-in-slow">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">Características Principais</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Facilidade de Adaptação',
                'Interesse em Tecnologia',
                'Foco em Resultados',
                'Experiência em Atendimento',
                'Organização',
                'Trabalho em Equipe'
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-500 hover:scale-105 ripple-effect"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

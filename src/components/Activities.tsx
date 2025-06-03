
import React from 'react';
import { Users, Wrench, Waves } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      title: 'Garçom',
      icon: Users,
      description: 'Atendimento ao cliente, organização de mesas e apoio em eventos.',
      skills: ['Atendimento ao Cliente', 'Organização', 'Trabalho sob Pressão']
    },
    {
      title: 'Piscineiro',
      icon: Waves,
      description: 'Manutenção e limpeza de piscinas, controle de produtos químicos.',
      skills: ['Manutenção Técnica', 'Controle de Qualidade', 'Responsabilidade']
    },
    {
      title: 'Ajudante em Serviços Gerais',
      icon: Wrench,
      description: 'Apoio em limpeza, carga e descarga, pequenas manutenções.',
      skills: ['Versatilidade', 'Trabalho em Equipe', 'Resolução de Problemas']
    }
  ];

  return (
    <section id="activities" className="py-20 bg-gray-900/30 backdrop-blur-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text-calm">
            Atividades Complementares
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-soft rounded-2xl p-8 card-hover-calm text-center border border-blue-500/20 soft-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center soft-glow floating-gentle">
                  <activity.icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-blue-300 mb-4">
                  {activity.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {activity.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-300 text-sm">
                    Habilidades Desenvolvidas:
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {activity.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-500 hover:scale-105 ripple-effect"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center fade-in-slow">
            <div className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-soft rounded-2xl p-8 text-white soft-glow">
              <h3 className="text-2xl font-bold mb-4">Idiomas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center hover:scale-110 transition-transform duration-500">
                  <h4 className="text-xl font-semibold mb-2 gradient-text-calm">Português</h4>
                  <p className="text-blue-100">Nativo - Fluente</p>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-500">
                  <h4 className="text-xl font-semibold mb-2 gradient-text-calm">Espanhol</h4>
                  <p className="text-blue-100">Intermediário - Turístico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;

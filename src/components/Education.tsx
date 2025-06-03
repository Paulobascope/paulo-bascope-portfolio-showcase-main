
import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800/20 backdrop-blur-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text-calm">
            Formação Acadêmica
          </h2>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-soft rounded-2xl shadow-2xl p-8 card-hover-calm border border-blue-500/20 soft-glow">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 soft-glow floating-gentle">
                <GraduationCap className="text-white" size={32} />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-blue-300 mb-2">
                  Técnico em Informática
                </h3>
                
                <div className="flex flex-col md:flex-row gap-4 mb-4 text-gray-400">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin size={16} className="text-blue-400" />
                    <span>Instituto Federal - Campus Guajará-Mirim</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Calendar size={16} className="text-blue-400" />
                    <span>Concluído em 2022</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Formação técnica completa em informática, com foco em suporte técnico, 
                  infraestrutura de TI, desenvolvimento de sistemas e atendimento ao cliente. 
                  Modalidade presencial que proporcionou experiência prática e teórica sólida 
                  na área de tecnologia.
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-blue-300 mb-3">Principais Competências Desenvolvidas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Suporte Técnico',
                      'Infraestrutura de TI',
                      'Sistemas Operacionais',
                      'Redes de Computadores',
                      'Hardware e Software',
                      'Atendimento Técnico'
                    ].map((competency, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-500 hover:scale-105 ripple-effect"
                      >
                        {competency}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

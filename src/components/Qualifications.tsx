
import React from 'react';
import { Award, Calendar, Monitor } from 'lucide-react';

const Qualifications = () => {
  const courses = [
    {
      title: 'Técnicas Bancárias',
      institution: 'Via Online Treinamentos',
      modality: 'Presencial',
      completion: '04/2022',
      description: 'Capacitação em procedimentos bancários e atendimento financeiro.'
    },
    {
      title: 'Digitação',
      institution: 'Cursos Online SP',
      modality: 'EAD',
      completion: '06/2022',
      description: 'Desenvolvimento de habilidades em digitação rápida e precisa.'
    },
    {
      title: 'Excel',
      institution: 'Cursos Online SP',
      modality: 'EAD',
      completion: '07/2022',
      description: 'Domínio de planilhas eletrônicas e análise de dados.'
    },
    {
      title: 'Espanhol Turístico',
      institution: 'Instituto Federal do Paraná',
      modality: 'EAD',
      completion: '04/2023',
      description: 'Comunicação em espanhol aplicada ao turismo e atendimento.'
    }
  ];

  return (
    <section id="qualifications" className="py-20 bg-gray-900/30 backdrop-blur-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text-calm">
            Qualificações e Cursos Complementares
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-soft rounded-2xl p-6 card-hover-calm border border-blue-500/20 soft-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 soft-glow floating-gentle">
                    <Award className="text-white" size={20} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-300 mb-2">
                      {course.title}
                    </h3>
                    
                    <p className="text-purple-400 font-semibold mb-2">
                      {course.institution}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Monitor size={14} className="text-blue-400" />
                        <span>{course.modality}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-blue-400" />
                        <span>Concluído em {course.completion}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center fade-in-slow">
            <div className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-soft rounded-2xl p-8 text-white soft-glow">
              <h3 className="text-2xl font-bold mb-4">Competências Técnicas</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Microsoft Excel',
                  'Digitação Avançada',
                  'Procedimentos Bancários',
                  'Comunicação Multilíngue'
                ].map((skill, index) => (
                  <div key={index} className="text-center hover:scale-110 transition-transform duration-500">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full mx-auto mb-2 floating-gentle" style={{ animationDelay: `${index * 0.5}s` }}></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;

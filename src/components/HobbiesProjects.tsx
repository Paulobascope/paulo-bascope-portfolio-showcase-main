
import React, { useState } from 'react';
import { Code, TrendingUp, Github, ExternalLink, X } from 'lucide-react';

const HobbiesProjects = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const programmingProjects = [
    {
  title: "Sistema Web de Bater Ponto Online",
  description: "Aplicação web desenvolvida para marcação de ponto digital com funcionalidades básicas de registro de entrada/saída. Utiliza armazenamento local do navegador e é hospedado via GitHub Pages para acesso online facilitado.",
  technologies: ["HTML", "CSS", "JavaScript"],
  githubLink: "https://paulobascope.github.io/baterpontomain/"
},
   {
  title: " 'Não Pode'S!'",
  description: "Portifolio de apresentaçao para uma loja online, desenvolvido com HTML, CSS e JavaScript. Foca na interatividade com o usuário por meio de botões de escolha e feedback visual. Idealizado como forma divertida de explorar transições.",
  technologies: ["HTML", "CSS", "JavaScript"],
  githubLink: "https://paulobascope.github.io/naopods/"
},
    {
      title: "Website Pessoal Responsivo (este portfólio!)",
      description: "Criação de um portfólio utilizando HTML5 para estrutura semântica, CSS3 para design responsivo e interatividade, e JavaScript para animações e controle de exibição de conteúdo. Foco na usabilidade e experiência do usuário.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
      githubLink: "#"
    }
  ];

  const marketingProjects = [
    {
      title: "Marketing com Redes Sociais",
      description: "Criação de conteúdo para redes sociais (Instagram, Facebook) com foco em engajamento e divulgação de produtos/serviços de pequenos negócios. Análise de métricas básicas para otimização de postagens.",
      examples: [
        "Desenvolvimento de um calendário editorial para a loja X, resultando em aumento de 15% no alcance orgânico.",
        "Criação de posts promocionais para o lançamento de produto Y, com foco em stories e reels."
      ]
    },
    {
      title: "Estratégias de Vendas Online",
      description: "Estudo e aplicação de técnicas de persuasão e funil de vendas para plataformas de e-commerce. Otimização de descrições de produtos e chamadas para ação.",
      examples: [
        "Acompanhamento de tendências de mercado para identificar oportunidades de venda de produtos de linha branca na Casa das Bombas.",
        "Criação de ofertas combinadas para aumentar o valor do ticket médio."
      ]
    }
  ];

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section id="hobbies" className="py-20 bg-gray-800/30 backdrop-blur-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text-calm">
            Hobbies e Projetos Pessoais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Programação Card */}
            <div 
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-soft p-8 rounded-xl border border-blue-500/20 cursor-pointer card-hover-calm soft-glow group"
              onClick={() => openModal('programming')}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center floating-gentle">
                  <Code className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-blue-300 mb-4">Programação</h3>
                <p className="text-gray-400 mb-6">Projetos de desenvolvimento e sistemas</p>
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-500">
                  Clique para ver projetos →
                </div>
              </div>
            </div>

            {/* Marketing Card */}
            <div 
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-soft p-8 rounded-xl border border-purple-500/20 cursor-pointer card-hover-calm soft-glow group"
              onClick={() => openModal('marketing')}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center floating-gentle">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-purple-300 mb-4">Marketing</h3>
                <p className="text-gray-400 mb-6">Estratégias e campanhas digitais</p>
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-500">
                  Clique para ver projetos →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-blue-500/20" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-700/50 flex justify-between items-center">
              <h3 className="text-2xl font-bold gradient-text-calm">
                {activeModal === 'programming' ? 'Projetos de Programação' : 'Projetos de Marketing'}
              </h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {activeModal === 'programming' && (
                <div className="space-y-8">
                  {programmingProjects.map((project, index) => (
                    <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-blue-500/10">
                      <h4 className="text-xl font-semibold text-blue-300 mb-4">{project.title}</h4>
                      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-400 mb-2">Tecnologias:</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <a 
                          href={project.githubLink}
                          className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        >
                          <Github size={16} />
                          Ver no GitHub
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeModal === 'marketing' && (
                <div className="space-y-8">
                  {marketingProjects.map((project, index) => (
                    <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/10">
                      <h4 className="text-xl font-semibold text-purple-300 mb-4">{project.title}</h4>
                      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                      
                      {project.examples && (
                        <div>
                          <h5 className="text-sm font-semibold text-gray-400 mb-3">Exemplos:</h5>
                          <ul className="space-y-2">
                            {project.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex} className="text-gray-300 pl-4 border-l-2 border-purple-500/30">
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HobbiesProjects;

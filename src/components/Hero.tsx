
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 fade-in-slow">
            <div className="w-48 h-48 mx-auto rounded-full soft-glow p-1 floating-gentle">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                <img
                  src="perfil.jpg.jpeg"
                  alt="Paulo Bascope"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-in-calm">
            <span className="gradient-text-calm text-shadow-soft">Paulo Bascope</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-8 fade-in-slow">
            Técnico em Informática
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed fade-in-slow">
            Especialista em suporte técnico, vendas e atendimento ao cliente, 
            com experiência em gestão e organização. Pronto para contribuir 
            com soluções tecnológicas inovadoras.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-slow">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-700 soft-glow ripple-effect"
            >
              Conheça Meu Trabalho
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-gray-900 hover:shadow-xl hover:shadow-blue-400/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-700 ripple-effect"
            >
              Entre em Contato
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:text-blue-400 transition-colors duration-500 text-gray-400"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

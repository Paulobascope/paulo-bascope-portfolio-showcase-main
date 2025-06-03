
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve!",
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text-neon">
            Entre em Contato
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 slide-in-left">
              <div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-6">
                  Vamos Conversar!
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Estou sempre aberto a novas oportunidades e projetos interessantes. 
                  Se você tem uma vaga ou projeto que se alinha com minhas habilidades, 
                  adoraria conversar!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center glow-effect">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-300">Email</h4>
                    <p className="text-gray-400">paulo.bascope.2005@email.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center glow-effect">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-300">Telefone</h4>
                    <p className="text-gray-400">(69) 99907-7267</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center glow-effect">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-300">Localização</h4>
                    <p className="text-gray-400">Ariquemes, Rondônia - Brasil</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-6 text-white glow-effect">
                <h4 className="text-lg font-semibold mb-3">Disponibilidade</h4>
                <ul className="space-y-2 text-cyan-100">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-300 rounded-full"></span>
                    Início imediato
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-300 rounded-full"></span>
                    Disponível para mudança
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-300 rounded-full"></span>
                    Horário flexível
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-300 rounded-full"></span>
                    Trabalho presencial ou remoto
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 border border-cyan-500/20 slide-in-right">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">
                Envie uma Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cyan-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cyan-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400"
                    placeholder="Conte-me sobre a oportunidade ou projeto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2 glow-effect"
                >
                  <Send size={20} />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-cyan-500/20 text-center text-gray-400">
        <p>&copy; 2024 Paulo Bascope. Todos os direitos reservados.</p>
      </footer>
    </section>
  );
};

export default Contact;

import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Lightbulb, Target, Heart, Zap } from 'lucide-react';

const DigitalArchitect = () => {
  const architectValues = [
    { icon: Code, title: 'Créer', description: 'Comme un architecte conçoit des bâtiments, je conçois des solutions digitales durables.', color: 'text-orange-deep' },
    { icon: Palette, title: 'Concevoir', description: 'Chaque détail compte : de l\'expérience utilisateur à la performance technique.', color: 'text-blue-intense' },
    { icon: Target, title: 'Optimiser', description: 'Mes solutions sont pensées pour grandir avec votre business.', color: 'text-orange-light' }
  ];

  const inspiration = [
    'Un architecte ne construit pas juste des murs, il crée des espaces de vie',
    'Comme lui, je ne code pas juste des fonctionnalités, je bâtis des expériences',
    'Chaque ligne de code, chaque pixel a sa raison d\'être dans l\'ensemble'
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white-soft to-green-light">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Photo */}
          <div className="animate-slide-up">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-orange-deep/20 to-blue-intense/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-xl">
                <div className="relative overflow-hidden rounded-xl">
                  <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fortuné Aïounou" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
                    <p className="font-poppins font-semibold text-gray-anthracite text-sm">Fortuné Aïounou</p>
                    <p className="font-inter text-blue-gray text-xs">Architecte Digital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 mb-5">
              <Lightbulb className="text-orange-deep" size={28} />
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-gray-anthracite">
                L'<span className="text-orange-deep">Architecte Digital</span> que je suis
              </h2>
            </div>
            
            <p className="font-inter text-blue-gray leading-relaxed mb-6">
              <strong className="text-gray-anthracite">Je suis Architecte Digital :</strong> j'assemble branding, design, 
              développement web & mobile et IA pour construire un écosystème digital cohérent et performant.
            </p>
            
            <div className="bg-gradient-to-r from-orange-deep/10 to-blue-intense/10 rounded-xl p-4 border border-orange-deep/20 mb-6">
              <p className="font-inter text-gray-anthracite font-semibold text-center text-sm">
                👉 <span className="text-orange-deep">Résultat :</span> une marque forte, des outils modernes et zéro prise de tête.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 mb-6">
              {architectValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-orange-deep/10 hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="w-10 h-10 bg-orange-deep/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className={value.color} size={20} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-base text-gray-anthracite mb-1">{value.title}</h3>
                      <p className="font-inter text-blue-gray text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Inspiration */}
            <div className="bg-gradient-to-br from-orange-deep/5 to-blue-intense/5 rounded-xl p-4 border border-orange-deep/10 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="text-orange-deep" size={18} />
                <h3 className="font-poppins font-semibold text-base text-gray-anthracite">Ce qui m'inspire</h3>
              </div>
              <div className="space-y-2">
                {inspiration.map((quote, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Zap className="text-orange-light flex-shrink-0 mt-0.5" size={14} />
                    <p className="font-inter text-blue-gray italic text-xs leading-relaxed">{quote}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/about" className="group btn-primary inline-flex items-center gap-2">
                <Heart size={18} className="group-hover:animate-bounce" />
                Découvrir mon parcours
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalArchitect;

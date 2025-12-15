import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Lightbulb, Target, Heart, Zap } from 'lucide-react';

const DigitalArchitect = () => {
  const architectValues = [
    {
      icon: Code,
      title: 'Créer',
      description: 'Comme un architecte conçoit des bâtiments, je conçois des solutions digitales durables et évolutives.',
      color: 'text-orange-deep'
    },
    {
      icon: Palette,
      title: 'Concevoir',
      description: 'Chaque détail compte : de l\'expérience utilisateur à la performance technique.',
      color: 'text-blue-intense'
    },
    {
      icon: Target,
      title: 'Optimiser',
      description: 'Mes solutions sont pensées pour grandir avec votre business et s\'adapter à vos évolutions.',
      color: 'text-orange-light'
    }
  ];

  const inspiration = [
    'Un architecte ne construit pas juste des murs, il crée des espaces de vie',
    'Comme lui, je ne code pas juste des fonctionnalités, je bâtis des expériences',
    'Chaque ligne de code, chaque pixel a sa raison d\'être dans l\'ensemble',
    'Le résultat ? Des solutions qui durent et qui évoluent avec vous'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white-soft to-green-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo et présentation */}
          <div className="animate-slide-up">
            <div className="relative group">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-deep/20 to-blue-intense/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-light/30 to-blue-intense/30 rounded-xl blur-md group-hover:blur-lg transition-all duration-500"></div>
              
              {/* Main photo container */}
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <div className="relative overflow-hidden rounded-xl">
                  {/* Remplacez cette URL par votre vraie photo */}
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Fortuné Aïounou - Architecte Digital"
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-anthracite/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-poppins font-semibold text-gray-anthracite text-sm">
                      Fortuné Aïounou
                    </p>
                    <p className="font-inter text-blue-gray text-xs">
                      Architecte Digital
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 opacity-30">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-orange-deep rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="text-orange-deep" size={32} />
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite">
                L'<span className="text-orange-deep">Architecte Digital</span> que je suis
              </h2>
            </div>
            
            <p className="font-inter text-lg text-blue-gray leading-relaxed mb-8">
              <strong className="text-gray-anthracite">Je suis Architecte Digital :</strong> j'assemble branding, design, 
              développement web & mobile et IA pour construire un écosystème digital cohérent, simple et performant.
            </p>
            
            <div className="bg-gradient-to-r from-orange-deep/10 to-blue-intense/10 rounded-xl p-6 border border-orange-deep/20 mb-8">
              <p className="font-inter text-lg text-gray-anthracite font-semibold text-center">
                👉 <span className="text-orange-deep">Résultat :</span> une marque forte, des outils modernes et zéro prise de tête.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6 mb-8">
              {architectValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="flex items-start gap-4 p-4 bg-white/80 rounded-xl border border-orange-deep/10 hover:shadow-lg transition-all duration-300 animate-fade-in-delay-1"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-12 h-12 bg-orange-deep/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className={value.color} size={24} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-lg text-gray-anthracite mb-2">
                        {value.title}
                      </h3>
                      <p className="font-inter text-blue-gray leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Inspiration */}
            <div className="bg-gradient-to-br from-orange-deep/5 to-blue-intense/5 rounded-xl p-6 border border-orange-deep/10 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-orange-deep" size={20} />
                <h3 className="font-poppins font-semibold text-lg text-gray-anthracite">
                  Ce qui m'inspire
                </h3>
              </div>
              
              <div className="space-y-3">
                {inspiration.map((quote, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-fade-in-delay-2"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <Zap className="text-orange-light flex-shrink-0 mt-1" size={16} />
                    <p className="font-inter text-blue-gray italic text-sm leading-relaxed">
                      {quote}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                to="/about"
                className="group bg-orange-deep hover:bg-orange-light text-white-soft px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-fit"
              >
                <Heart size={20} className="group-hover:animate-bounce" />
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
import React from 'react';
import { Heart, Code, Palette, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-8">
              Je m'appelle{' '}
              <span className="text-orange-deep">Fortuné Aïounou</span>
            </h2>
            
            <div className="space-y-6 font-inter text-lg text-blue-gray leading-relaxed">
              <p className="animate-fade-in-delay-1">
                Développeur full-stack & designer graphique basé au Bénin.
                J'aide des entreprises, des indépendants et des startups à concrétiser leurs idées
                grâce à des solutions digitales solides, belles et stratégiques.
              </p>
              
              <div className="bg-green-light p-6 rounded-lg border-l-4 border-orange-deep animate-fade-in-delay-2">
                <p className="flex items-start gap-3">
                  <Target className="text-orange-deep mt-1 flex-shrink-0" size={20} />
                  <strong>Ma force :</strong> allier une compréhension profonde des enjeux métiers,
                  une maîtrise technique robuste, et une sensibilité graphique affirmée.
                </p>
              </div>
              
              <p className="animate-fade-in-delay-3">
                Formé en systèmes informatiques, passionné par le web et les outils utiles.
              </p>
              
              <p className="text-brown-dark font-semibold animate-fade-in-delay-4">
                → Chaque projet est pour moi une opportunité de construire quelque chose qui compte.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 animate-bounce-in" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-12 bg-orange-deep/10 rounded-lg flex items-center justify-center mx-auto mb-3 hover:scale-110 hover:bg-orange-deep/20 transition-all duration-300">
                  <Code className="text-orange-deep" size={24} />
                </div>
                <h3 className="font-poppins font-semibold text-gray-anthracite mb-2">Créer</h3>
                <p className="font-inter text-sm text-blue-gray">Des solutions innovantes</p>
              </div>
              
              <div className="text-center p-4 animate-bounce-in" style={{ animationDelay: '0.7s' }}>
                <div className="w-12 h-12 bg-blue-intense/10 rounded-lg flex items-center justify-center mx-auto mb-3 hover:scale-110 hover:bg-blue-intense/20 transition-all duration-300">
                  <Palette className="text-blue-intense" size={24} />
                </div>
                <h3 className="font-poppins font-semibold text-gray-anthracite mb-2">Développer</h3>
                <p className="font-inter text-sm text-blue-gray">Avec excellence technique</p>
              </div>
              
              <div className="text-center p-4 animate-bounce-in" style={{ animationDelay: '0.9s' }}>
                <div className="w-12 h-12 bg-orange-light/10 rounded-lg flex items-center justify-center mx-auto mb-3 hover:scale-110 hover:bg-orange-light/20 transition-all duration-300">
                  <Heart className="text-orange-light" size={24} />
                </div>
                <h3 className="font-poppins font-semibold text-gray-anthracite mb-2">Impacter</h3>
                <p className="font-inter text-sm text-blue-gray">Durablement et positivement</p>
              </div>
            </div>
          </div>

          {/* Photo Section */}
          <div className="relative animate-slide-up-delay">
            <div className="relative group">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-deep/20 to-blue-intense/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-light/30 to-blue-intense/30 rounded-xl blur-md group-hover:blur-lg transition-all duration-500"></div>
              
              {/* Main photo container */}
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <div className="relative overflow-hidden rounded-xl">
                  {/* Placeholder for your photo - Replace this URL with your actual photo */}
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Fortuné Aïounou - Développeur Full-Stack & Designer"
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
                      Full-Stack Developer & Designer
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative dots */}
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
            
            {/* Quote bubble */}
            <div className="mt-8 bg-gradient-to-br from-orange-deep/5 to-blue-intense/5 rounded-xl p-6 border border-orange-deep/10 animate-fade-in-delay-5">
              <p className="font-inter text-blue-gray italic leading-relaxed">
                "Créer des solutions digitales élégantes et fonctionnelles, c'est ma passion. 
                Chaque ligne de code, chaque pixel compte pour transformer vos idées en réalité."
              </p>
              <p className="font-poppins font-semibold text-orange-deep mt-3">
                - Fortuné Aïounou
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
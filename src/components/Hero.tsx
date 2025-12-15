import React, { useEffect, useState } from 'react';
import { ArrowRight, Folder, MessageCircle, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-green-light via-white-soft to-green-light flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-light/10 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-intense/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-deep/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-deep/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Sparkle icon animation */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="text-orange-deep animate-spin-slow" size={40} />
              <div className="absolute inset-0 animate-ping">
                <Sparkles className="text-orange-light/50" size={40} />
              </div>
            </div>
          </div>

          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-gray-anthracite mb-8 leading-tight">
            <span className="inline-block animate-fade-in-up">Développeur web & mobile,</span>{' '}
            <span className="text-orange-deep inline-block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              designer UI/UX
            </span>{' '}
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              et ingénieur IA
            </span>{' '}
            <span className="text-blue-intense inline-block animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              au service de vos projets.
            </span>
          </h1>
          
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <p className="font-inter text-lg md:text-xl text-blue-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-gray-anthracite">Arrêtez de perdre du temps avec des outils qui ne marchent pas.</span>
            </p>
            
            <p className="font-inter text-lg md:text-xl text-blue-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              Je crée des sites web, applications et solutions intelligentes qui fonctionnent vraiment : 
              <span className="text-orange-deep font-semibold"> simples, beaux, rapides, visibles sur Google</span> et 
              conçus pour vous faire <span className="text-blue-intense font-semibold">gagner du temps et des clients.</span>
            </p>
          </div>

          {/* Crédibilité */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-12 animate-fade-in-up border border-orange-deep/10" style={{ animationDelay: '1.3s' }}>
            <div className="grid md:grid-cols-3 gap-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-2 h-2 bg-orange-deep rounded-full"></div>
                <span className="font-inter text-sm text-blue-gray">
                  <span className="font-semibold text-gray-anthracite">+5 ans d'expérience</span> en développement & design
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-2 h-2 bg-blue-intense rounded-full"></div>
                <span className="font-inter text-sm text-blue-gray">
                  <span className="font-semibold text-gray-anthracite">Spécialiste</span> solutions PME et startups
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-2 h-2 bg-orange-light rounded-full"></div>
                <span className="font-inter text-sm text-blue-gray">
                  <span className="font-semibold text-gray-anthracite">Projets livrés</span> au Bénin et international
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '2s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-orange-deep hover:bg-orange-light text-white-soft px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105"
            >
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              🚀 Construisons votre solution
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-transparent hover:bg-blue-intense text-blue-intense hover:text-white-soft border-2 border-blue-intense px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-2 hover:scale-105"
            >
              <MessageCircle size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              Me contacter
            </button>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="relative">
            <div className="w-6 h-10 border-2 border-blue-gray rounded-full flex justify-center hover:border-orange-deep transition-colors duration-300 cursor-pointer">
              <div className="w-1 h-3 bg-blue-gray rounded-full mt-2 animate-bounce hover:bg-orange-deep transition-colors duration-300"></div>
            </div>
            <div className="absolute -inset-2 border border-blue-gray/30 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
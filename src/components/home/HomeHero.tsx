import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles, Star, CheckCircle, Play, Code, Smartphone, Palette, Lightbulb } from 'lucide-react';

const HomeHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonialAvatars = [
    {
      name: 'Marie A.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      company: 'AgriMarket'
    },
    {
      name: 'Dr. Koffi M.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      company: 'Université'
    },
    {
      name: 'Jean-Baptiste K.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      company: 'TechDistrib'
    }
  ];

  const services = [
    { icon: Code, label: 'Web', color: 'text-orange-deep' },
    { icon: Smartphone, label: 'Mobile', color: 'text-blue-intense' },
    { icon: Palette, label: 'Design', color: 'text-orange-light' },
    { icon: Lightbulb, label: 'IA', color: 'text-blue-gray' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-light via-white-soft to-green-light flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-light/10 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-intense/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-deep/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Sparkle icon animation */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Sparkles className="text-orange-deep animate-spin-slow" size={32} />
                <div className="absolute inset-0 animate-ping">
                  <Sparkles className="text-orange-light/50" size={32} />
                </div>
              </div>
              <span className="font-inter text-blue-gray font-medium">Architecte Digital</span>
            </div>

            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-gray-anthracite mb-6 leading-tight">
              <span className="inline-block animate-fade-in-up">Développeur web & mobile,</span>{' '}
              <span className="text-orange-deep inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                designer UI/UX
              </span>{' '}
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                et ingénieur IA
              </span>{' '}
              <span className="text-blue-intense inline-block animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                au service de vos projets.
              </span>
            </h1>
            
            <div className="space-y-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <p className="font-inter text-lg md:text-xl text-blue-gray leading-relaxed">
                <span className="font-semibold text-gray-anthracite">Arrêtez de perdre du temps avec des outils qui ne marchent pas.</span>
              </p>
              
              <p className="font-inter text-lg md:text-xl text-blue-gray leading-relaxed">
                Je crée des sites web, applications et solutions intelligentes qui fonctionnent vraiment : 
                <span className="text-orange-deep font-semibold"> simples, beaux, rapides, visibles sur Google</span> et 
                conçus pour vous faire <span className="text-blue-intense font-semibold">gagner du temps et des clients.</span>
              </p>
            </div>

            {/* Crédibilité */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 animate-fade-in-up border border-orange-deep/10" style={{ animationDelay: '1s' }}>
              <div className="grid md:grid-cols-1 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-orange-deep flex-shrink-0" size={16} />
                  <span className="font-inter text-sm text-blue-gray">
                    <span className="font-semibold text-gray-anthracite">+5 ans d'expérience</span> en développement & design
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-blue-intense flex-shrink-0" size={16} />
                  <span className="font-inter text-sm text-blue-gray">
                    <span className="font-semibold text-gray-anthracite">Spécialiste</span> solutions PME et startups
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-orange-light flex-shrink-0" size={16} />
                  <span className="font-inter text-sm text-blue-gray">
                    <span className="font-semibold text-gray-anthracite">Projets livrés</span> au Bénin et international
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <Link
                to="/contact"
                className="group bg-orange-deep hover:bg-orange-light text-white-soft px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105"
              >
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                🚀 Construisons votre solution
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/projects"
                className="group bg-transparent hover:bg-blue-intense text-blue-intense hover:text-white-soft border-2 border-blue-intense px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-2"
              >
                <Play size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                Voir mes réalisations
              </Link>
            </div>

            {/* Témoignages imbriqués */}
            <div className="animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-2">
                  {testimonialAvatars.map((testimonial, index) => (
                    <div
                      key={testimonial.name}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-lg overflow-hidden animate-bounce-in"
                      style={{ animationDelay: `${1.6 + index * 0.1}s` }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-orange-light fill-current" size={16} />
                  ))}
                </div>
              </div>
              <p className="font-inter text-sm text-blue-gray">
                <span className="font-semibold text-gray-anthracite">50+ clients satisfaits</span> • 
                "Fortuné transforme vraiment les idées en succès digital" - Marie A.
              </p>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-orange-deep/10 to-blue-intense/10 rounded-3xl p-8 shadow-2xl">
                {/* Central concept */}
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-deep to-orange-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Code className="text-white-soft" size={40} />
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-gray-anthracite mb-2">
                    Architecte Digital
                  </h3>
                  <p className="font-inter text-blue-gray">
                    Je construis votre écosystème digital complet
                  </p>
                </div>

                {/* Services orbit */}
                <div className="relative h-64">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    const angle = (index * 90) - 45; // Répartition en cercle
                    const radius = 100;
                    const x = Math.cos(angle * Math.PI / 180) * radius;
                    const y = Math.sin(angle * Math.PI / 180) * radius;
                    
                    return (
                      <div
                        key={service.label}
                        className="absolute w-16 h-16 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 animate-float hover:scale-110 transition-all duration-300"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          animationDelay: `${index * 0.5}s`
                        }}
                      >
                        <Icon className={service.color} size={24} />
                        <span className="font-inter text-xs text-blue-gray font-medium mt-1">
                          {service.label}
                        </span>
                      </div>
                    );
                  })}
                  
                  {/* Central hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-blue-intense to-blue-gray rounded-full flex items-center justify-center shadow-xl">
                    <Sparkles className="text-white-soft animate-spin-slow" size={24} />
                  </div>
                </div>

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C53C0E" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#1D6FC2" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  {services.map((_, index) => {
                    const angle = (index * 90) - 45;
                    const radius = 100;
                    const x1 = 50 + (Math.cos(angle * Math.PI / 180) * radius) / 4;
                    const y1 = 50 + (Math.sin(angle * Math.PI / 180) * radius) / 4;
                    
                    return (
                      <line
                        key={index}
                        x1="50%"
                        y1="50%"
                        x2={`${x1}%`}
                        y2={`${y1}%`}
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-light rounded-full animate-bounce opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-intense rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-orange-deep rounded-full animate-bounce opacity-70" style={{ animationDelay: '1s' }}></div>
            </div>
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

export default HomeHero;
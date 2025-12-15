import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, CheckCircle, Play, Code, Smartphone, Palette, Lightbulb } from 'lucide-react';

const HomeHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  const testimonialAvatars = [
    { name: 'Marie A.', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Dr. Koffi M.', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Jean-Baptiste K.', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100' }
  ];

  const services = [
    { icon: Code, label: 'Web', color: 'text-orange-deep' },
    { icon: Smartphone, label: 'Mobile', color: 'text-blue-intense' },
    { icon: Palette, label: 'Design', color: 'text-orange-light' },
    { icon: Lightbulb, label: 'IA', color: 'text-blue-gray' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-light via-white-soft to-green-light flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-light/10 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-intense/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-deep/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <Sparkles className="text-orange-deep animate-spin-slow" size={28} />
              </div>
              <span className="font-inter text-blue-gray font-medium text-sm">Architecte Digital</span>
            </div>

            <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-gray-anthracite mb-5 leading-tight">
              <span className="inline-block animate-fade-in-up">Développeur web & mobile,</span>{' '}
              <span className="text-orange-deep inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>designer UI/UX</span>{' '}
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>et ingénieur IA</span>{' '}
              <span className="text-blue-intense inline-block animate-fade-in-up" style={{ animationDelay: '0.6s' }}>au service de vos projets.</span>
            </h1>
            
            <div className="space-y-3 mb-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <p className="font-inter text-base md:text-lg text-blue-gray leading-relaxed">
                <span className="font-semibold text-gray-anthracite">Arrêtez de perdre du temps avec des outils qui ne marchent pas.</span>
              </p>
              <p className="font-inter text-base md:text-lg text-blue-gray leading-relaxed">
                Je crée des sites web, applications et solutions intelligentes : 
                <span className="text-orange-deep font-semibold"> simples, beaux, rapides</span> et 
                conçus pour vous faire <span className="text-blue-intense font-semibold">gagner du temps et des clients.</span>
              </p>
            </div>

            {/* Crédibilité */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 mb-6 animate-fade-in-up border border-orange-deep/10" style={{ animationDelay: '1s' }}>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-orange-deep flex-shrink-0" size={14} />
                  <span className="font-inter text-sm text-blue-gray"><span className="font-semibold text-gray-anthracite">+5 ans d'expérience</span> en développement & design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-blue-intense flex-shrink-0" size={14} />
                  <span className="font-inter text-sm text-blue-gray"><span className="font-semibold text-gray-anthracite">Spécialiste</span> solutions PME et startups</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-orange-light flex-shrink-0" size={14} />
                  <span className="font-inter text-sm text-blue-gray"><span className="font-semibold text-gray-anthracite">Projets livrés</span> au Bénin et international</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <Link to="/contact" className="group btn-primary flex items-center justify-center gap-2 px-6 py-3">
                <Sparkles size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                🚀 Construisons votre solution
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link to="/projects" className="group btn-secondary flex items-center justify-center gap-2 px-6 py-3">
                <Play size={18} /> Voir mes réalisations
              </Link>
            </div>

            {/* Témoignages */}
            <div className="animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {testimonialAvatars.map((t, i) => (
                    <div key={t.name} className="w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden animate-bounce-in" style={{ animationDelay: `${1.6 + i * 0.1}s` }}>
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="text-orange-light fill-current" size={14} />))}
                </div>
              </div>
              <p className="font-inter text-xs text-blue-gray">
                <span className="font-semibold text-gray-anthracite">50+ clients satisfaits</span> • "Fortuné transforme vraiment les idées en succès digital"
              </p>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-deep/10 to-blue-intense/10 rounded-2xl p-6 shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-deep to-orange-light rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Code className="text-white-soft" size={36} />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-1">Architecte Digital</h3>
                  <p className="font-inter text-blue-gray text-sm">Je construis votre écosystème digital complet</p>
                </div>

                <div className="relative h-48">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    const angle = (index * 90) - 45;
                    const radius = 80;
                    const x = Math.cos(angle * Math.PI / 180) * radius;
                    const y = Math.sin(angle * Math.PI / 180) * radius;
                    
                    return (
                      <div key={service.label} className="absolute w-14 h-14 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 animate-float hover:scale-110 transition-all duration-300" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, animationDelay: `${index * 0.5}s` }}>
                        <Icon className={service.color} size={20} />
                        <span className="font-inter text-xs text-blue-gray font-medium mt-0.5">{service.label}</span>
                      </div>
                    );
                  })}
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-intense to-blue-gray rounded-full flex items-center justify-center shadow-xl">
                    <Sparkles className="text-white-soft animate-spin-slow" size={20} />
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-light rounded-full animate-bounce opacity-70"></div>
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-blue-intense rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-5 h-8 border-2 border-blue-gray rounded-full flex justify-center">
            <div className="w-1 h-2 bg-blue-gray rounded-full mt-1.5 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

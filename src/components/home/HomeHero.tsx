import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';

const HomeHero = () => {
  const stats = [
    { value: '50+', label: 'Projets réalisés' },
    { value: '100%', label: 'Clients satisfaits' },
    { value: '5+', label: 'Années d\'expérience' }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-anthracite/95 via-gray-anthracite/85 to-gray-anthracite/70"></div>
      </div>

      <div className="container-main relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-orange-deep/20 text-orange-deep px-4 py-1.5 rounded-full font-inter font-semibold text-sm">
                Architecte Digital
              </span>
            </div>

            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white-soft mb-6 leading-tight">
              Développeur web & mobile, <span className="text-orange-deep">designer UI/UX</span> et ingénieur IA
            </h1>
            
            <p className="font-inter text-xl text-white-soft/90 leading-relaxed mb-8">
              Je crée des solutions digitales qui fonctionnent vraiment : 
              <strong className="text-orange-deep"> simples, performantes</strong> et conçues pour vous faire 
              <strong className="text-white-soft"> gagner du temps et des clients.</strong>
            </p>

            {/* Credibility */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Technologies modernes', 'Support réactif', 'Délais respectés'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white-soft/80">
                  <CheckCircle size={16} className="text-orange-deep" />
                  <span className="font-inter text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact" className="group bg-orange-deep hover:bg-orange-light text-white-soft px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Démarrer un projet <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="group bg-white/10 hover:bg-white/20 text-white-soft border border-white/30 px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center gap-2">
                <Play size={20} /> Voir mes réalisations
              </Link>
            </div>

            {/* Testimonial */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {['https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg', 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg', 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'].map((img, i) => (
                  <img key={i} src={`${img}?auto=compress&cs=tinysrgb&w=100`} alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-orange-light fill-current" />)}
                </div>
                <p className="font-inter text-white-soft/80 text-sm">
                  <strong className="text-white-soft">50+ clients satisfaits</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="hidden lg:block">
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 ${index === 1 ? 'ml-12' : index === 2 ? 'ml-6' : ''}`}>
                  <div className="text-4xl font-bold text-orange-deep mb-2">{stat.value}</div>
                  <div className="font-inter text-white-soft/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

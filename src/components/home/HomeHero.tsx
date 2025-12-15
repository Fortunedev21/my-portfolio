import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';

const HomeHero = () => {
  const stats = [
    { value: '50+', label: 'Projets livrés' },
    { value: '100%', label: 'Clients satisfaits' },
    { value: '5 ans', label: 'D\'expertise' }
  ];

  return (
    <section className="relative h-screen max-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Développeur web Bénin - Fortuné Aïounou" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-anthracite/95 via-gray-anthracite/85 to-gray-anthracite/70"></div>
      </div>

      <div className="container-main relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-orange-deep/20 text-orange-deep px-3 py-1 rounded-full font-inter font-semibold text-xs">
                🚀 Votre partenaire digital au Bénin
              </span>
            </div>

            <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white-soft mb-4 leading-tight">
              Transformez vos idées en <span className="text-orange-deep">solutions digitales</span> qui génèrent des résultats
            </h1>
            
            <p className="font-inter text-base text-white-soft/90 leading-relaxed mb-5">
              Développeur web & mobile, designer UI/UX et ingénieur IA basé à Cotonou. 
              Je crée des <strong className="text-white-soft">sites web performants</strong>, des <strong className="text-white-soft">applications mobiles</strong> et des <strong className="text-white-soft">solutions IA</strong> qui font décoller votre business.
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              {['Sites web sur mesure', 'Applications mobiles', 'Référencement SEO'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-white-soft/80">
                  <CheckCircle size={14} className="text-orange-deep" />
                  <span className="font-inter text-xs">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <Link to="/contact" className="group bg-orange-deep hover:bg-orange-light text-white-soft px-5 py-2.5 rounded-lg font-inter font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Demander un devis gratuit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="group bg-white/10 hover:bg-white/20 text-white-soft border border-white/30 px-5 py-2.5 rounded-lg font-inter font-semibold text-sm transition-all duration-300 flex items-center gap-2">
                <Play size={16} /> Découvrir mes projets
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg', 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg', 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'].map((img, i) => (
                  <img key={i} src={`${img}?auto=compress&cs=tinysrgb&w=100`} alt="Client satisfait" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-orange-light fill-current" />)}
                </div>
                <p className="font-inter text-white-soft/80 text-xs">
                  Rejoint par <strong className="text-white-soft">50+ entrepreneurs</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="grid gap-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 ${index === 1 ? 'ml-12' : index === 2 ? 'ml-6' : ''}`}>
                  <div className="text-3xl font-bold text-orange-deep mb-1">{stat.value}</div>
                  <div className="font-inter text-white-soft/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

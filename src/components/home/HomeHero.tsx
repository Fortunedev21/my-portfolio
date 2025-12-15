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
    <section className="relative flex items-center h-screen max-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Développeur web Bénin - Fortuné Aïounou" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-anthracite/95 via-gray-anthracite/75 to-gray-anthracite/60"></div>
      </div>

      <div className="relative z-10 py-20 container-main">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className='mt-12'>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-4 py-2 text-xs font-semibold rounded-full bg-orange-deep/20 text-orange-deep font-inter">
                🚀 Votre partenaire digital au Bénin
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-bold leading-tight font-poppins md:text-4xl lg:text-5xl text-white-soft">
              Transformez vos idées en <span className="text-orange-deep">solutions digitales</span> qui génèrent des résultats
            </h1>
            
            <p className="mb-5 text-base leading-relaxed font-inter text-white-soft/90">
              Développeur web & mobile, designer UI/UX et ingénieur IA basé à Cotonou. 
              Je crée des <strong className="text-white-soft">sites web performants</strong>, des <strong className="text-white-soft">applications mobiles</strong> et des <strong className="text-white-soft">solutions IA</strong> qui font décoller votre business.
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              {['Sites web sur mesure', 'Applications mobiles', 'Référencement SEO'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-white-soft/80">
                  <CheckCircle size={14} className="text-orange-deep" />
                  <span className="text-xs font-inter">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <Link to="/contact" className="group bg-orange-deep hover:bg-orange-light text-white-soft px-5 py-2.5 rounded-lg font-inter font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Demander un devis gratuit <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/projects" className="group bg-white/10 hover:bg-white/20 text-white-soft border border-white/30 px-5 py-2.5 rounded-lg font-inter font-semibold text-sm transition-all duration-300 flex items-center gap-2">
                <Play size={16} /> Découvrir mes projets
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg', 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg', 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'].map((img, i) => (
                  <img key={i} src={`${img}?auto=compress&cs=tinysrgb&w=100`} alt="Client satisfait" className="object-cover w-8 h-8 border-2 border-white rounded-full" />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-current text-orange-light" />)}
                </div>
                <p className="text-xs font-inter text-white-soft/80">
                  Rejoint par <strong className="text-white-soft">50+ entrepreneurs</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="grid gap-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 ${index === 1 ? 'ml-12' : index === 2 ? 'ml-6' : ''}`}>
                  <div className="mb-1 text-3xl font-bold text-orange-deep">{stat.value}</div>
                  <div className="text-sm font-inter text-white-soft/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute transform -translate-x-1/2 bottom-6 left-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Star, TrendingUp } from 'lucide-react';

const FeaturedProject = () => {
  const results = [
    { icon: Users, value: '+200', label: 'Producteurs' },
    { icon: Star, value: '95%', label: 'Satisfaction' },
    { icon: TrendingUp, value: '+40%', label: 'Efficacité' }
  ];

  return (
    <section className="section-padding bg-gray-anthracite">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Plateforme e-commerce AgriMarket - Projet développé au Bénin" className="w-full h-96 object-cover" />
              <div className="absolute top-4 left-4 bg-orange-deep text-white-soft px-4 py-2 rounded-full font-inter font-semibold text-sm">
                🏆 Projet Phare
              </div>
            </div>
            
            <div className="absolute -bottom-8 left-4 right-4 flex gap-3">
              {results.map((result) => {
                const Icon = result.icon;
                return (
                  <div key={result.label} className="flex-1 bg-white rounded-xl p-4 shadow-xl text-center">
                    <Icon className="text-orange-deep mx-auto mb-1" size={20} />
                    <div className="font-poppins font-bold text-lg text-gray-anthracite">{result.value}</div>
                    <div className="font-inter text-blue-gray text-xs">{result.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:pl-8 pt-8 lg:pt-0">
            <p className="text-orange-deep font-inter font-semibold mb-4">ÉTUDE DE CAS</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white-soft mb-4">
              AgriMarket : de l'idée à +200 producteurs en 6 mois
            </h2>
            <p className="font-inter text-xl text-white-soft/80 mb-6">
              Comment j'ai aidé une startup agricole béninoise à digitaliser tout un secteur
            </p>
            
            <p className="font-inter text-white-soft/70 leading-relaxed mb-8">
              <strong className="text-white-soft">Le défi :</strong> Connecter les producteurs agricoles locaux aux consommateurs urbains, 
              avec des contraintes de connectivité et de paiement mobile. <br/><br/>
              <strong className="text-white-soft">La solution :</strong> Une plateforme e-commerce complète (web + mobile) avec géolocalisation, 
              paiement mobile intégré et interface optimisée pour les connexions lentes.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['Symfony', 'React', 'Flutter', 'PostgreSQL', 'Stripe'].map((tech) => (
                <span key={tech} className="bg-white/10 text-white-soft/80 px-3 py-1.5 rounded-full text-sm font-inter">
                  {tech}
                </span>
              ))}
            </div>

            <div className="bg-white/10 rounded-xl p-6 mb-8 border-l-4 border-orange-deep">
              <p className="font-inter text-white-soft/90 italic mb-4">
                "Fortuné ne s'est pas contenté de coder. Il a compris notre marché, nos utilisateurs, et a créé une solution qui a vraiment changé la donne pour notre business."
              </p>
              <p className="font-poppins font-semibold text-white-soft">Marie Adjovi</p>
              <p className="font-inter text-white-soft/60 text-sm">Fondatrice, AgriMarket</p>
            </div>

            <Link to="/project/agrimarket" className="group inline-flex items-center gap-2 bg-orange-deep hover:bg-orange-light text-white-soft px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300">
              Lire l'étude de cas complète <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;

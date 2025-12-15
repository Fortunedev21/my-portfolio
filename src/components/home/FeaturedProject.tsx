import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, TrendingUp, Users, Star } from 'lucide-react';

const FeaturedProject = () => {
  const project = {
    id: 'agrimarket',
    title: 'AgriMarket',
    subtitle: 'Plateforme E-commerce Agricole',
    description: 'J\'ai transformé l\'idée d\'une startup agricole en une plateforme e-commerce complète qui connecte producteurs et consommateurs. Résultat : +200 producteurs inscrits et 95% de satisfaction client en 6 mois.',
    image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=1200',
    challenge: 'Créer une solution digitale pour un marché traditionnel avec des contraintes de connectivité et de paiement mobile.',
    solution: 'Plateforme web + app mobile avec géolocalisation, paiement mobile intégré et interface optimisée.',
    results: [
      { icon: Users, value: '+200', label: 'Producteurs inscrits' },
      { icon: Star, value: '95%', label: 'Satisfaction client' },
      { icon: TrendingUp, value: '+40%', label: 'Réduction coûts' }
    ],
    technologies: ['Symfony', 'React', 'Flutter', 'PostgreSQL', 'Stripe', 'Google Maps'],
    testimonial: { text: 'Fortuné a transformé notre vision en une plateforme exceptionnelle. Son expertise technique et sa compréhension du marché local ont été déterminantes.', author: 'Marie Adjovi', position: 'Fondatrice, AgriMarket' }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4 animate-fade-in-up">Projet <span className="text-orange-deep">Phare</span></h2>
          <p className="section-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Découvrez comment j'ai transformé une idée en succès digital concret
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Project Image */}
          <div className="animate-slide-up">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-orange-deep/20 to-blue-intense/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-5 left-5 bg-orange-deep text-white-soft px-3 py-1.5 rounded-full">
                  <span className="font-inter font-semibold text-xs">{project.subtitle}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-poppins font-bold text-2xl text-gray-anthracite mb-3">{project.title}</h3>
            <p className="font-inter text-blue-gray leading-relaxed mb-5">{project.description}</p>

            {/* Challenge & Solution */}
            <div className="space-y-3 mb-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r-lg">
                <h4 className="font-poppins font-semibold text-gray-anthracite text-sm mb-1">🎯 Défi</h4>
                <p className="font-inter text-blue-gray text-xs">{project.challenge}</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-lg">
                <h4 className="font-poppins font-semibold text-gray-anthracite text-sm mb-1">💡 Solution</h4>
                <p className="font-inter text-blue-gray text-xs">{project.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {project.results.map((result, index) => {
                const Icon = result.icon;
                return (
                  <div key={index} className="text-center p-3 card-base border border-orange-deep/10 animate-bounce-in" style={{ animationDelay: `${index * 150}ms` }}>
                    <Icon className="text-orange-deep mx-auto mb-1" size={20} />
                    <div className="font-poppins font-bold text-lg text-gray-anthracite">{result.value}</div>
                    <div className="font-inter text-xs text-blue-gray">{result.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="font-poppins font-semibold text-gray-anthracite text-sm mb-2">Technologies utilisées</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-50 text-blue-intense px-2.5 py-1 rounded-full text-xs font-inter border border-blue-intense/20">{tech}</span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5">
                <ExternalLink size={16} /> Voir le projet
              </button>
              <Link to={`/project/${project.id}`} className="btn-secondary flex items-center gap-2 text-sm px-5 py-2.5">
                Étude de cas <ArrowRight size={16} />
              </Link>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-orange-deep/5 to-blue-intense/5 rounded-xl p-5 border border-orange-deep/10">
              <div className="text-xl text-orange-deep mb-1">"</div>
              <p className="font-inter text-blue-gray italic leading-relaxed text-sm mb-3">{project.testimonial.text}</p>
              <div>
                <p className="font-poppins font-semibold text-gray-anthracite text-sm">{project.testimonial.author}</p>
                <p className="font-inter text-xs text-blue-gray">{project.testimonial.position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;

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
    solution: 'Plateforme web + app mobile avec géolocalisation, paiement mobile intégré et interface optimisée pour les connexions lentes.',
    results: [
      { icon: Users, value: '+200', label: 'Producteurs inscrits' },
      { icon: Star, value: '95%', label: 'Satisfaction client' },
      { icon: TrendingUp, value: '+40%', label: 'Réduction coûts logistiques' }
    ],
    technologies: ['Symfony', 'React', 'Flutter', 'PostgreSQL', 'Stripe', 'Google Maps API'],
    testimonial: {
      text: 'Fortuné a transformé notre vision en une plateforme exceptionnelle. Son expertise technique et sa compréhension du marché local ont été déterminantes.',
      author: 'Marie Adjovi',
      position: 'Fondatrice, AgriMarket'
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6 animate-fade-in-up">
            Projet <span className="text-orange-deep">Phare</span>
          </h2>
          <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Découvrez comment j'ai transformé une idée en succès digital concret
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <div className="animate-slide-up">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-deep/20 to-blue-intense/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-4 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6 bg-orange-deep text-white-soft px-4 py-2 rounded-full">
                  <span className="font-inter font-semibold text-sm">{project.subtitle}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-poppins font-bold text-3xl text-gray-anthracite mb-4">
              {project.title}
            </h3>
            
            <p className="font-inter text-lg text-blue-gray leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Challenge & Solution */}
            <div className="space-y-4 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-poppins font-semibold text-gray-anthracite mb-2">🎯 Défi</h4>
                <p className="font-inter text-blue-gray text-sm">{project.challenge}</p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h4 className="font-poppins font-semibold text-gray-anthracite mb-2">💡 Solution</h4>
                <p className="font-inter text-blue-gray text-sm">{project.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {project.results.map((result, index) => {
                const Icon = result.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4 bg-white rounded-xl shadow-lg border border-orange-deep/10 animate-bounce-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <Icon className="text-orange-deep mx-auto mb-2" size={24} />
                    <div className="font-poppins font-bold text-xl text-gray-anthracite">{result.value}</div>
                    <div className="font-inter text-xs text-blue-gray">{result.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="font-poppins font-semibold text-gray-anthracite mb-3">Technologies utilisées</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-50 text-blue-intense px-3 py-1 rounded-full text-sm font-inter border border-blue-intense/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="group bg-orange-deep hover:bg-orange-light text-white-soft px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <ExternalLink size={18} />
                Voir le projet
              </button>
              <Link
                to={`/project/${project.id}`}
                className="group bg-transparent hover:bg-blue-intense text-blue-intense hover:text-white-soft border-2 border-blue-intense px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 flex items-center gap-2"
              >
                Étude de cas complète
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-orange-deep/5 to-blue-intense/5 rounded-xl p-6 border border-orange-deep/10">
              <div className="text-2xl text-orange-deep mb-2">"</div>
              <p className="font-inter text-blue-gray italic leading-relaxed mb-4">
                {project.testimonial.text}
              </p>
              <div>
                <p className="font-poppins font-semibold text-gray-anthracite">
                  {project.testimonial.author}
                </p>
                <p className="font-inter text-sm text-blue-gray">
                  {project.testimonial.position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
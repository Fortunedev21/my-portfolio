import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Globe, Smartphone, ShoppingCart, Lightbulb } from 'lucide-react';

const HomeProjects = () => {
  const featuredProjects = [
    {
      id: 'agrimarket',
      title: 'AgriMarket',
      description: 'Plateforme e-commerce pour produits agricoles locaux',
      image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'E-commerce',
      icon: ShoppingCart,
      color: 'orange-deep',
      results: '+200 producteurs, 95% satisfaction'
    },
    {
      id: 'smartpredict',
      title: 'SmartPredict AI',
      description: 'Modèle ML de prédiction des ventes avec dashboard',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'IA & ML',
      icon: Lightbulb,
      color: 'orange-light',
      results: '92% précision, +25% ventes'
    },
    {
      id: 'healthtracker',
      title: 'HealthTracker',
      description: 'App mobile de suivi médical avec IA',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile',
      icon: Smartphone,
      color: 'blue-intense',
      results: '10K+ téléchargements, 4.8★'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      'orange-deep': { bg: 'bg-orange-deep/10', text: 'text-orange-deep', border: 'border-orange-deep/20' },
      'orange-light': { bg: 'bg-orange-light/10', text: 'text-orange-light', border: 'border-orange-light/20' },
      'blue-intense': { bg: 'bg-blue-intense/10', text: 'text-blue-intense', border: 'border-blue-intense/20' }
    };
    return colorMap[color] || colorMap['orange-deep'];
  };

  return (
    <section id="projects" className="py-20 bg-green-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6 animate-fade-in-up">
            Projets <span className="text-orange-deep">Récents</span>
          </h2>
          <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Découvrez quelques réalisations qui illustrent mon expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const Icon = project.icon;
            
            return (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-anthracite/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`absolute top-4 left-4 ${colors.bg} rounded-lg p-2`}>
                    <Icon className={colors.text} size={20} />
                  </div>
                  <div className="absolute top-4 right-4 bg-white-soft/90 rounded-full px-3 py-1">
                    <span className="font-inter text-sm font-medium text-gray-anthracite">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-poppins font-bold text-lg text-gray-anthracite mb-3 group-hover:text-orange-deep transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="font-inter text-blue-gray mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="font-inter text-sm font-semibold text-orange-deep">
                      {project.results}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 text-orange-deep hover:text-orange-light border border-orange-deep/20 px-3 py-2 rounded-lg font-inter text-sm transition-all duration-300">
                      <ExternalLink size={14} />
                      Demo
                    </button>
                    <Link 
                      to={`/project/${project.id}`}
                      className="group/btn flex items-center gap-1 text-blue-gray hover:text-orange-deep font-inter text-sm transition-colors duration-300"
                    >
                      Détails
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="bg-orange-deep hover:bg-orange-light text-white-soft px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-block"
          >
            Voir tous mes projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
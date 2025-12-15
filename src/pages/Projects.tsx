import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Globe, Smartphone, ShoppingCart, Lightbulb, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', 'Web', 'Mobile', 'IA & ML', 'E-commerce'];

  const projects = [
    {
      id: 'agrimarket',
      title: 'AgriMarket',
      description: 'Plateforme e-commerce pour produits agricoles locaux avec système de géolocalisation et paiement mobile intégré',
      role: 'Dev full-stack, UI/UX, branding',
      stack: ['Symfony', 'React', 'PostgreSQL', 'API REST', 'Stripe', 'Google Maps API'],
      image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'E-commerce',
      icon: ShoppingCart,
      color: 'orange-deep',
      results: '+200 producteurs inscrits, 95% satisfaction client'
    },
    {
      id: 'educonnect',
      title: 'EduConnect',
      description: 'Plateforme d\'apprentissage en ligne avec système de visioconférence et suivi personnalisé des étudiants',
      role: 'Lead developer, Architecture système',
      stack: ['Laravel', 'Vue.js', 'MySQL', 'WebRTC', 'Socket.io', 'AWS'],
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web',
      icon: Globe,
      color: 'blue-intense',
      results: '15 établissements, 5000+ étudiants actifs'
    },
    {
      id: 'healthtracker',
      title: 'HealthTracker',
      description: 'Application mobile de suivi médical avec synchronisation cloud et rappels intelligents',
      role: 'Développeur mobile, API design',
      stack: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'FCM'],
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile',
      icon: Smartphone,
      color: 'orange-light',
      results: '10,000+ téléchargements, 4.8/5 étoiles'
    },
    {
      id: 'businessflow',
      title: 'BusinessFlow',
      description: 'Système de gestion d\'entreprise complet avec CRM, facturation et tableau de bord analytique',
      role: 'Architecte technique, Full-stack',
      stack: ['Django', 'React', 'PostgreSQL', 'Redis', 'Celery', 'Chart.js'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web',
      icon: Globe,
      color: 'blue-gray',
      results: '50+ entreprises clientes, 99.9% disponibilité'
    },
    {
      id: 'smartpredict',
      title: 'SmartPredict AI',
      description: 'Modèle de machine learning pour prédiction des ventes avec dashboard analytique et recommandations automatisées',
      role: 'Ingénieur IA, Data Scientist',
      stack: ['Python', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'IA & ML',
      icon: Lightbulb,
      color: 'orange-light',
      results: '92% précision, +25% amélioration ventes'
    },
    {
      id: 'agrimobile',
      title: 'AgriMobile',
      description: 'Application mobile Flutter pour la plateforme AgriMarket avec géolocalisation, paiement mobile et notifications push',
      role: 'Développeur mobile, UI/UX',
      stack: ['Flutter', 'Firebase', 'Google Maps', 'Stripe', 'FCM'],
      image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile',
      icon: Smartphone,
      color: 'blue-intense',
      results: '50,000+ téléchargements, 4.7/5 étoiles'
    }
  ];

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; hover: string } } = {
      'orange-deep': { bg: 'bg-orange-deep/10', text: 'text-orange-deep', border: 'border-orange-deep/20', hover: 'hover:bg-orange-deep' },
      'orange-light': { bg: 'bg-orange-light/10', text: 'text-orange-light', border: 'border-orange-light/20', hover: 'hover:bg-orange-light' },
      'blue-intense': { bg: 'bg-blue-intense/10', text: 'text-blue-intense', border: 'border-blue-intense/20', hover: 'hover:bg-blue-intense' },
      'blue-gray': { bg: 'bg-blue-gray/10', text: 'text-blue-gray', border: 'border-blue-gray/20', hover: 'hover:bg-blue-gray' }
    };
    return colorMap[color] || colorMap['orange-deep'];
  };

  return (
    <div className="min-h-screen bg-white-soft pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-light via-white-soft to-green-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-anthracite mb-6 animate-fade-in-up">
            Mes <span className="text-orange-deep">Réalisations</span>
          </h1>
          <p className="font-inter text-xl text-blue-gray max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Découvrez mes projets qui allient innovation technique, design soigné et impact business concret
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-orange-deep/10">
              <div className="text-3xl font-bold text-orange-deep mb-2">50+</div>
              <div className="font-inter text-blue-gray">Projets réalisés</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-intense/10">
              <div className="text-3xl font-bold text-blue-intense mb-2">100%</div>
              <div className="font-inter text-blue-gray">Clients satisfaits</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-orange-light/10">
              <div className="text-3xl font-bold text-orange-light mb-2">5+</div>
              <div className="font-inter text-blue-gray">Années d'expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Filter className="text-blue-gray" size={20} />
            <span className="font-inter text-blue-gray font-medium">Filtrer par catégorie :</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-deep text-white-soft shadow-lg'
                    : 'bg-white text-blue-gray border border-green-light hover:border-orange-deep/30 hover:bg-orange-deep/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-white-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => {
              const colors = getColorClasses(project.color);
              const Icon = project.icon;
              
              return (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
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
                    <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-3 group-hover:text-orange-deep transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="font-inter text-blue-gray mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <span className="font-inter text-sm font-semibold text-brown-dark">
                        Rôle : {project.role}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="font-inter text-sm font-semibold text-orange-deep">
                        Résultats : {project.results}
                      </span>
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="bg-green-light rounded-full px-3 py-1 text-sm font-inter text-blue-gray border border-orange-deep/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="bg-green-light rounded-full px-3 py-1 text-sm font-inter text-blue-gray border border-orange-deep/10">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className={`group/btn flex items-center gap-2 ${colors.hover} hover:text-white-soft ${colors.text} border ${colors.border} px-4 py-2 rounded-lg font-inter font-medium transition-all duration-300 hover:shadow-lg`}>
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </button>
                      <button className="group/btn flex items-center gap-2 bg-transparent hover:bg-blue-gray hover:text-white-soft text-blue-gray border border-blue-gray/20 px-4 py-2 rounded-lg font-inter font-medium transition-all duration-300">
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </button>
                      <Link 
                        to={`/project/${project.id}`}
                        className="group/btn flex items-center gap-2 text-orange-deep hover:text-orange-light font-inter font-medium transition-colors duration-300"
                      >
                        <span className="text-sm">Étude de cas</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-deep to-orange-light rounded-2xl p-8 text-white-soft shadow-xl">
              <h3 className="font-poppins font-bold text-2xl mb-4">
                Vous voulez un projet comme ça ?
              </h3>
              <p className="font-inter text-lg mb-6 opacity-90">
                Chaque projet est unique. Discutons ensemble de vos objectifs
                et créons quelque chose d'exceptionnel.
              </p>
              <Link
                to="/contact"
                className="bg-white-soft hover:bg-white text-orange-deep px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-block"
              >
                Contactez-moi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
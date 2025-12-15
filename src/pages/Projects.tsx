import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Globe, Smartphone, ShoppingCart, Lightbulb, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const categories = ['Tous', 'Web', 'Mobile', 'IA & ML', 'E-commerce'];

  const projects = [
    { id: 'agrimarket', title: 'AgriMarket', description: 'Plateforme e-commerce qui connecte 200+ producteurs agricoles aux consommateurs urbains. Géolocalisation, paiement mobile, gestion des stocks en temps réel.', role: 'Développement full-stack, UI/UX, branding', stack: ['Symfony', 'React', 'PostgreSQL', 'Stripe', 'Google Maps'], image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'E-commerce', icon: ShoppingCart, results: '+200 producteurs • 95% satisfaction' },
    { id: 'educonnect', title: 'EduConnect', description: 'Plateforme e-learning utilisée par 15 établissements et 5000+ étudiants. Visioconférence intégrée, suivi personnalisé, évaluations automatisées.', role: 'Lead developer, Architecture système', stack: ['Laravel', 'Vue.js', 'MySQL', 'WebRTC', 'AWS'], image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Web', icon: Globe, results: '15 établissements • 5000+ étudiants' },
    { id: 'healthtracker', title: 'HealthTracker', description: 'Application mobile de suivi médical avec 10,000+ téléchargements. Rappels intelligents, synchronisation cloud, interface accessible à tous les âges.', role: 'Développeur mobile, API design', stack: ['Flutter', 'Firebase', 'Node.js', 'MongoDB'], image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Mobile', icon: Smartphone, results: '10,000+ téléchargements • 4.8/5 étoiles' },
    { id: 'businessflow', title: 'BusinessFlow', description: 'ERP complet utilisé par 50+ entreprises. CRM, facturation automatique, tableau de bord analytique, 99.9% de disponibilité.', role: 'Architecte technique, Full-stack', stack: ['Django', 'React', 'PostgreSQL', 'Redis'], image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Web', icon: Globe, results: '50+ entreprises • 99.9% uptime' },
    { id: 'smartpredict', title: 'SmartPredict AI', description: 'Modèle de prédiction des ventes avec 92% de précision. Dashboard analytique, recommandations automatisées, +25% d\'amélioration des ventes.', role: 'Ingénieur IA, Data Scientist', stack: ['Python', 'TensorFlow', 'FastAPI', 'React'], image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'IA & ML', icon: Lightbulb, results: '92% précision • +25% ventes' },
    { id: 'agrimobile', title: 'AgriMobile', description: 'Application mobile compagnon d\'AgriMarket. 50,000+ téléchargements, géolocalisation des producteurs, paiement mobile intégré.', role: 'Développeur mobile, UI/UX', stack: ['Flutter', 'Firebase', 'Google Maps', 'Stripe'], image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Mobile', icon: Smartphone, results: '50,000+ téléchargements • 4.7/5 étoiles' }
  ];

  const filteredProjects = selectedCategory === 'Tous' ? projects : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white-soft">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Portfolio développeur web Bénin" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-anthracite/90 via-gray-anthracite/80 to-gray-anthracite/60"></div>
        </div>
        
        <div className="container-main relative z-10 py-32">
          <div className="max-w-3xl">
            <p className="text-orange-deep font-inter font-semibold mb-4">PORTFOLIO</p>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white-soft mb-6">
              Des projets qui <span className="text-orange-deep">génèrent des résultats</span>
            </h1>
            <p className="font-inter text-xl text-white-soft/90 leading-relaxed mb-8">
              Pas de projets vitrines. Chaque réalisation a un impact mesurable : plus de clients, plus de ventes, plus d'efficacité pour mes clients.
            </p>
            
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-deep mb-1">50+</div>
                <div className="font-inter text-white-soft/80 text-sm">Projets livrés</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-3xl font-bold text-orange-deep mb-1">100%</div>
                <div className="font-inter text-white-soft/80 text-sm">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-deep mb-1">5 ans</div>
                <div className="font-inter text-white-soft/80 text-sm">D'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white-soft border-b border-green-light sticky top-16 z-40">
        <div className="container-main">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Filter className="text-blue-gray" size={18} />
            <span className="font-inter text-blue-gray font-medium text-sm">Filtrer par type :</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button key={category} onClick={() => setSelectedCategory(category)} className={`px-5 py-2.5 rounded-full font-inter font-medium text-sm transition-all duration-300 ${selectedCategory === category ? 'bg-orange-deep text-white-soft shadow-lg' : 'bg-white text-blue-gray border border-green-light hover:border-orange-deep/30'}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-white-soft">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img src={project.image} alt={`${project.title} - Projet développé au Bénin`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-anthracite/80 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      <Icon className="text-orange-deep" size={20} />
                    </div>
                    <div className="absolute top-4 right-4 bg-orange-deep text-white-soft rounded-full px-3 py-1 text-xs font-inter font-medium">
                      {project.category}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-poppins font-bold text-2xl text-white-soft mb-1">{project.title}</h3>
                      <p className="font-inter text-orange-deep text-sm font-semibold">{project.results}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="font-inter text-blue-gray leading-relaxed mb-4">{project.description}</p>
                    <p className="font-inter text-sm text-gray-anthracite mb-4">
                      <strong>Mon rôle :</strong> {project.role}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <span key={tech} className="bg-green-light rounded-full px-3 py-1 text-xs font-inter text-blue-gray">{tech}</span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <button className="flex items-center gap-1.5 bg-orange-deep hover:bg-orange-light text-white-soft px-4 py-2 rounded-lg font-inter font-medium text-sm transition-all duration-300">
                          <ExternalLink size={14} /> Voir le site
                        </button>
                        <button className="flex items-center gap-1.5 bg-transparent hover:bg-blue-gray hover:text-white-soft text-blue-gray border border-blue-gray/30 px-4 py-2 rounded-lg font-inter font-medium text-sm transition-all duration-300">
                          <Github size={14} /> Code
                        </button>
                      </div>
                      <Link to={`/project/${project.id}`} className="flex items-center gap-1.5 text-orange-deep hover:text-orange-light font-inter font-medium text-sm transition-colors">
                        Étude de cas <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-orange-deep to-orange-light rounded-2xl p-10 text-center text-white-soft shadow-xl">
              <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4">
                Votre projet pourrait être le prochain
              </h3>
              <p className="font-inter text-lg mb-6 opacity-90 max-w-xl mx-auto">
                Chaque projet commence par une conversation. Parlons de vos objectifs et voyons comment je peux vous aider à les atteindre.
              </p>
              <Link to="/contact" className="bg-white-soft hover:bg-white text-orange-deep px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2">
                Discuter de mon projet <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

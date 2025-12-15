import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Layers, Palette, Lightbulb, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'web-development',
      icon: Globe,
      title: 'Développement de sites web performants',
      description: 'Sites vitrines, e-commerce, applications web sur mesure avec les dernières technologies'
    },
    {
      id: 'web-apps',
      icon: Smartphone,
      title: 'Création d\'applications web & SaaS',
      description: 'Applications métiers, plateformes SaaS, tableaux de bord interactifs'
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Développement d\'applications mobiles',
      description: 'Applications natives et cross-platform pour iOS et Android avec Flutter et Kotlin'
    },
    {
      id: 'ai-models',
      icon: Lightbulb,
      title: 'Création de modèles IA & Machine Learning',
      description: 'Développement de solutions d\'intelligence artificielle personnalisées et intégration ML'
    },
    {
      id: 'cms-integration',
      icon: Layers,
      title: 'Intégration CMS (WordPress / Drupal)',
      description: 'Solutions de gestion de contenu personnalisées et faciles à administrer'
    },
    {
      id: 'graphic-design',
      icon: Palette,
      title: 'Design graphique & branding cohérent',
      description: 'Identité visuelle, charte graphique, supports de communication'
    },
    {
      id: 'technical-consulting',
      icon: MessageCircle,
      title: 'Conseils techniques pour MVP & architecture web',
      description: 'Accompagnement stratégique et technique pour vos projets digitaux'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6">
            Ce que je peux faire pour <span className="text-orange-deep">vous</span>
          </h2>
          <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto">
            Des solutions digitales complètes pour concrétiser vos ambitions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-light animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-deep/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-deep/20 transition-colors duration-300">
                    <Icon className="text-orange-deep" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-poppins font-semibold text-lg text-gray-anthracite mb-2 group-hover:text-orange-deep transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-inter text-blue-gray leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      to={`/service/${service.id}`}
                      className="text-orange-deep hover:text-orange-light font-inter font-medium transition-colors duration-300 flex items-center gap-2"
                    >
                      En savoir plus
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-deep to-orange-light rounded-2xl p-8 text-white-soft shadow-xl">
            <h3 className="font-poppins font-bold text-2xl mb-4">
              Prêt à donner vie à votre projet ?
            </h3>
            <p className="font-inter text-lg mb-8 opacity-90">
              Discutons ensemble de vos besoins et trouvons la solution idéale
            </p>
            <button
              onClick={scrollToContact}
              className="group bg-white-soft hover:bg-white text-orange-deep px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              Discutons de votre besoin
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
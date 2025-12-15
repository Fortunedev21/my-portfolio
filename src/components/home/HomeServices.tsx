import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Palette, Lightbulb, ArrowRight } from 'lucide-react';

const HomeServices = () => {
  const services = [
    {
      id: 'web-development',
      icon: Globe,
      title: 'Développement Web',
      description: 'Sites vitrines, e-commerce, applications sur mesure',
      color: 'orange-deep'
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile',
      description: 'Applications Android/iOS, cross-platform',
      color: 'blue-intense'
    },
    {
      id: 'graphic-design',
      icon: Palette,
      title: 'Design',
      description: 'Identité visuelle, UI/UX, logos',
      color: 'orange-light'
    },
    {
      id: 'ai-models',
      icon: Lightbulb,
      title: 'IA',
      description: 'Chatbots, automatisation, analyse de données',
      color: 'blue-gray'
    }
  ];

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
    <section id="services" className="py-20 bg-white-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6 animate-fade-in-up">
            Mes <span className="text-orange-deep">Services</span>
          </h2>
          <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Des solutions digitales complètes pour concrétiser vos ambitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-3 border border-green-light hover:border-orange-deep/30 animate-bounce-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className={`${colors.text} group-hover:animate-pulse`} size={32} />
                </div>
                
                <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-3 group-hover:text-orange-deep transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-inter text-blue-gray mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center text-orange-deep group-hover:text-orange-light transition-colors duration-300">
                  <span className="font-inter font-medium text-sm">En savoir plus</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="bg-orange-deep hover:bg-orange-light text-white-soft px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-block"
          >
            Voir tous mes services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DigitalArchitect = () => {
  const services = [
    { title: 'Développement Web', image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Applications Mobile', image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Design UI/UX', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Intelligence Artificielle', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  return (
    <section className="section-padding bg-white-soft">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-orange-deep font-inter font-semibold mb-4">QUI SUIS-JE</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6">
              L'<span className="text-orange-deep">Architecte Digital</span> de vos projets
            </h2>
            
            <p className="font-inter text-lg text-blue-gray leading-relaxed mb-6">
              Je suis <strong className="text-gray-anthracite">Fortuné Aïounou</strong>, développeur full-stack, 
              designer UI/UX et ingénieur IA basé au Bénin.
            </p>
            
            <p className="font-inter text-blue-gray leading-relaxed mb-8">
              J'assemble branding, design, développement web & mobile et IA pour construire 
              un écosystème digital cohérent, simple et performant. 
              <strong className="text-orange-deep"> Résultat : une marque forte, des outils modernes et zéro prise de tête.</strong>
            </p>

            <div className="flex items-center gap-6 mb-8">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200" 
                alt="Fortuné Aïounou" 
                className="w-20 h-20 rounded-full object-cover border-4 border-orange-deep/20"
              />
              <div>
                <p className="font-poppins font-bold text-gray-anthracite">Fortuné Aïounou</p>
                <p className="font-inter text-blue-gray text-sm">Full-Stack Developer & AI Engineer</p>
              </div>
            </div>

            <Link to="/about" className="group inline-flex items-center gap-2 bg-orange-deep hover:bg-orange-light text-white-soft px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300">
              En savoir plus <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={service.title} className={`group relative rounded-2xl overflow-hidden shadow-lg ${index === 1 || index === 2 ? 'mt-8' : ''}`}>
                <div className="relative h-48">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-anthracite/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-poppins font-semibold text-white-soft text-sm">{service.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalArchitect;

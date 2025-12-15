import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { text: 'Fortuné a transformé notre vision en une plateforme exceptionnelle. Son expertise technique et sa compréhension du marché local ont été déterminantes.', author: 'Marie Adjovi', position: 'Fondatrice, AgriMarket', rating: 5, project: 'Plateforme E-commerce' },
    { text: 'EduConnect a révolutionné notre façon d\'enseigner. La plateforme est intuitive, robuste et parfaitement adaptée à nos besoins.', author: 'Dr. Koffi Mensah', position: 'Directeur pédagogique, Université de Lomé', rating: 5, project: 'Plateforme E-learning' },
    { text: 'SmartPredict AI a révolutionné notre approche commerciale. Les prédictions sont d\'une précision remarquable.', author: 'Jean-Baptiste Kone', position: 'Directeur Commercial, TechDistrib', rating: 5, project: 'Solution IA' }
  ];

  const clientLogos = ['AgriMarket', 'EduConnect', 'HealthTracker', 'BusinessFlow', 'SmartPredict', 'TechDistrib'];

  return (
    <section className="section-padding bg-green-light">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4 animate-fade-in-up">
            Ce que disent mes <span className="text-orange-deep">clients</span>
          </h2>
          <p className="section-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Témoignages authentiques de clients satisfaits
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-base card-hover p-6 animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="mb-4">
                <Quote className="text-orange-deep/30" size={32} />
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-orange-light fill-current" size={14} />
                ))}
              </div>
              
              <p className="font-inter text-blue-gray leading-relaxed mb-5 italic text-sm">"{testimonial.text}"</p>
              
              <div className="border-t border-green-light pt-3">
                <p className="font-poppins font-semibold text-gray-anthracite text-sm">{testimonial.author}</p>
                <p className="font-inter text-xs text-blue-gray">{testimonial.position}</p>
                <p className="font-inter text-xs text-orange-deep font-medium mt-0.5">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="font-poppins font-semibold text-lg text-gray-anthracite mb-6">Projets réalisés pour</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 opacity-60">
            {clientLogos.map((client, index) => (
              <div key={client} className="bg-white rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 hover:opacity-100" style={{ animationDelay: `${index * 80}ms` }}>
                <span className="font-inter font-medium text-blue-gray text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

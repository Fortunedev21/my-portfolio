import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Fortuné a transformé notre vision en une plateforme exceptionnelle. Son expertise technique et sa compréhension du marché local ont été déterminantes pour le succès du projet.',
      author: 'Marie Adjovi',
      position: 'Fondatrice, AgriMarket',
      rating: 5,
      project: 'Plateforme E-commerce'
    },
    {
      text: 'EduConnect a révolutionné notre façon d\'enseigner. La plateforme est intuitive, robuste et parfaitement adaptée à nos besoins pédagogiques.',
      author: 'Dr. Koffi Mensah',
      position: 'Directeur pédagogique, Université de Lomé',
      rating: 5,
      project: 'Plateforme E-learning'
    },
    {
      text: 'SmartPredict AI a révolutionné notre approche commerciale. Les prédictions sont d\'une précision remarquable et nous ont permis d\'optimiser nos stocks.',
      author: 'Jean-Baptiste Kone',
      position: 'Directeur Commercial, TechDistrib',
      rating: 5,
      project: 'Solution IA'
    }
  ];

  const clientLogos = [
    'AgriMarket', 'EduConnect', 'HealthTracker', 'BusinessFlow', 'SmartPredict', 'TechDistrib'
  ];

  return (
    <section className="py-20 bg-green-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6 animate-fade-in-up">
            Ce que disent mes <span className="text-orange-deep">clients</span>
          </h2>
          <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Témoignages authentiques de clients satisfaits
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <Quote className="text-orange-deep/30" size={40} />
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-orange-light fill-current" size={16} />
                ))}
              </div>
              
              <p className="font-inter text-blue-gray leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-green-light pt-4">
                <p className="font-poppins font-semibold text-gray-anthracite">
                  {testimonial.author}
                </p>
                <p className="font-inter text-sm text-blue-gray">
                  {testimonial.position}
                </p>
                <p className="font-inter text-xs text-orange-deep font-medium mt-1">
                  {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="font-poppins font-semibold text-xl text-gray-anthracite mb-8">
            Projets réalisés pour
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((client, index) => (
              <div
                key={client}
                className="bg-white rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 hover:opacity-100 animate-fade-in-delay-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-inter font-medium text-blue-gray">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
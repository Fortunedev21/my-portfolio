import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { text: 'Fortuné a transformé notre vision en une plateforme exceptionnelle. Son expertise technique et sa compréhension du marché local ont été déterminantes.', author: 'Marie Adjovi', position: 'Fondatrice, AgriMarket', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { text: 'EduConnect a révolutionné notre façon d\'enseigner. La plateforme est intuitive, robuste et parfaitement adaptée à nos besoins.', author: 'Dr. Koffi Mensah', position: 'Directeur, Université de Lomé', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { text: 'SmartPredict AI a révolutionné notre approche commerciale. Les prédictions sont d\'une précision remarquable.', author: 'Jean-Baptiste Kone', position: 'Directeur Commercial, TechDistrib', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ];

  return (
    <section className="section-padding bg-green-light">
      <div className="container-main">
        <div className="text-center mb-16">
          <p className="text-orange-deep font-inter font-semibold mb-4">TÉMOIGNAGES</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6">
            Ce que disent mes <span className="text-orange-deep">clients</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <Quote className="absolute top-6 right-6 text-orange-deep/20" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-orange-light fill-current" />)}
              </div>
              
              <p className="font-inter text-blue-gray leading-relaxed mb-8 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.author} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <p className="font-poppins font-semibold text-gray-anthracite">{testimonial.author}</p>
                  <p className="font-inter text-blue-gray text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Amara Diallo',
      role: 'CEO, TechStart Benin',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Fortune a transforme notre vision en une application mobile performante. Son expertise technique et sa comprehension de nos besoins business ont fait toute la difference.',
      rating: 5
    },
    {
      name: 'Sophie Martin',
      role: 'Directrice Marketing, E-Shop Pro',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Un professionnel serieux et reactif. Notre site e-commerce a vu ses conversions augmenter de 40% grace a son travail sur l\'UX.',
      rating: 5
    },
    {
      name: 'Kofi Mensah',
      role: 'Fondateur, AgriTech Solutions',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'La solution IA developpee par Fortune nous permet d\'optimiser nos recoltes. Un vrai game-changer pour notre activite.',
      rating: 5
    },
    {
      name: 'Marie Kouassi',
      role: 'Responsable Digital, Banque Atlantique',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Excellent travail sur notre application bancaire. Securite, performance et design au rendez-vous. Je recommande vivement.',
      rating: 5
    },
    {
      name: 'Jean-Pierre Dubois',
      role: 'Entrepreneur, StartUp France',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Malgre la distance, la collaboration a ete fluide. Fortune livre toujours dans les delais avec une qualite irreprochable.',
      rating: 5
    },
    {
      name: 'Fatou Sow',
      role: 'CEO, Mode Africaine',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Notre boutique en ligne est magnifique et performante. Les ventes ont explose depuis le lancement. Merci Fortune !',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white-soft pt-32 pb-20">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-deep font-inter font-semibold mb-4">TEMOIGNAGES</p>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-anthracite mb-6">
            Ce que disent mes <span className="text-orange-deep">clients</span>
          </h1>
          <p className="font-inter text-blue-gray text-lg max-w-2xl mx-auto">
            La satisfaction de mes clients est ma priorite. Decouvrez leurs retours d'experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '50+', label: 'Projets livres' },
            { value: '100%', label: 'Clients satisfaits' },
            { value: '5/5', label: 'Note moyenne' },
            { value: '95%', label: 'Clients fideles' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <p className="font-poppins font-bold text-3xl text-orange-deep mb-2">{stat.value}</p>
              <p className="font-inter text-blue-gray text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <Quote className="text-orange-deep/20 mb-4" size={40} />
              <p className="font-inter text-blue-gray mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-poppins font-semibold text-gray-anthracite">{testimonial.name}</p>
                  <p className="font-inter text-sm text-blue-gray">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-deep text-orange-deep" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

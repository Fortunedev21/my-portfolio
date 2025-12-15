import React from 'react';

const WhyChooseMe = () => {
  const reasons = [
    { value: '50+', label: 'Projets réalisés', description: 'Des solutions livrées avec succès pour des PME et startups.', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { value: '4', label: 'Expertises combinées', description: 'Web, Mobile, Design et IA réunis en un seul interlocuteur.', image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { value: '100%', label: 'Satisfaction client', description: 'Des résultats concrets et mesurables pour chaque projet.', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  return (
    <section className="section-padding bg-white-soft">
      <div className="container-main">
        <div className="text-center mb-16">
          <p className="text-orange-deep font-inter font-semibold mb-4">POURQUOI MOI</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6">
            Ce qui fait la <span className="text-orange-deep">différence</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.label} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={reason.image} alt={reason.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-anthracite/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-4xl font-bold text-orange-deep">{reason.value}</div>
                  <div className="font-poppins font-semibold text-white-soft">{reason.label}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="font-inter text-blue-gray leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;

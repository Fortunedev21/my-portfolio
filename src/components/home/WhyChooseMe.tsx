import React from 'react';
import { Award, Users, Zap, CheckCircle } from 'lucide-react';

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Expérience Prouvée',
      description: '+5 ans d\'expérience, +50 projets réalisés avec succès pour des PME et startups au Bénin et à l\'international.',
      stats: '50+ projets'
    },
    {
      icon: Users,
      title: 'Polyvalence Unique',
      description: 'La rare combinaison développement full-stack + design UI/UX + ingénierie IA pour des solutions complètes.',
      stats: '4 expertises'
    },
    {
      icon: Zap,
      title: 'Impact Mesurable',
      description: 'Mes solutions génèrent des résultats concrets : +25% de ventes, 95% satisfaction client, ROI de 300%.',
      stats: '100% ROI positif'
    }
  ];

  return (
    <section className="py-20 bg-white-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6 animate-fade-in-up">
            Pourquoi me <span className="text-orange-deep">choisir</span> ?
          </h2>
          <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            3 raisons qui font la différence pour votre projet
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-green-light hover:border-orange-deep/30 animate-bounce-in"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-orange-deep/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-orange-deep/20 transition-colors duration-300">
                    <Icon className="text-orange-deep group-hover:scale-110 transition-transform duration-300" size={40} />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-intense text-white-soft rounded-full px-3 py-1 text-xs font-inter font-semibold">
                    {reason.stats}
                  </div>
                </div>
                
                <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-4 group-hover:text-orange-deep transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="font-inter text-blue-gray leading-relaxed">
                  {reason.description}
                </p>

                <div className="mt-6 flex justify-center">
                  <CheckCircle className="text-orange-deep group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
import React from 'react';
import { Award, Users, Zap, CheckCircle } from 'lucide-react';

const WhyChooseMe = () => {
  const reasons = [
    { icon: Award, title: 'Expérience Prouvée', description: '+5 ans d\'expérience, +50 projets réalisés avec succès pour des PME et startups.', stats: '50+ projets' },
    { icon: Users, title: 'Polyvalence Unique', description: 'La rare combinaison développement full-stack + design UI/UX + ingénierie IA.', stats: '4 expertises' },
    { icon: Zap, title: 'Impact Mesurable', description: 'Mes solutions génèrent des résultats concrets : +25% de ventes, 95% satisfaction.', stats: '100% ROI positif' }
  ];

  return (
    <section className="section-padding bg-white-soft">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4 animate-fade-in-up">
            Pourquoi me <span className="text-orange-deep">choisir</span> ?
          </h2>
          <p className="section-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            3 raisons qui font la différence pour votre projet
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="group text-center p-6 card-base card-hover border border-green-light hover:border-orange-deep/30 animate-bounce-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative mb-5">
                  <div className="w-16 h-16 bg-orange-deep/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-orange-deep/20 transition-colors duration-300">
                    <Icon className="text-orange-deep group-hover:scale-110 transition-transform duration-300" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-intense text-white-soft rounded-full px-2.5 py-0.5 text-xs font-inter font-semibold">
                    {reason.stats}
                  </div>
                </div>
                
                <h3 className="font-poppins font-bold text-lg text-gray-anthracite mb-3 group-hover:text-orange-deep transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="font-inter text-blue-gray leading-relaxed text-sm">{reason.description}</p>

                <div className="mt-5 flex justify-center">
                  <CheckCircle className="text-orange-deep group-hover:scale-110 transition-transform duration-300" size={22} />
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

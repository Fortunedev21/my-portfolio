import React from 'react';
import { AlertTriangle, Clock, DollarSign, Frown, TrendingDown, X } from 'lucide-react';

const PainSection = () => {
  const painPoints = [
    { icon: Clock, title: 'Des outils compliqués', description: 'Une technique qui fait perdre du temps au lieu de simplifier votre quotidien.', color: 'text-red-500' },
    { icon: TrendingDown, title: 'Un site qui n\'attire pas', description: 'Une application ou un site web qui n\'attire ni ne convertit vos visiteurs.', color: 'text-orange-500' },
    { icon: DollarSign, title: 'Une communication floue', description: 'Une communication qui ne reflète pas votre vraie valeur.', color: 'text-red-600' }
  ];

  const commonProblems = [
    'Une identité visuelle qui ne marque pas les esprits',
    'Un site ou une application qui n\'attire ni ne convertit',
    'Des outils compliqués et une technique qui fait perdre du temps',
    'Une communication floue qui ne reflète pas leur vraie valeur',
    'L\'envie d\'utiliser l\'IA, mais sans savoir par où commencer',
    'Des processus manuels qui vous font perdre un temps précieux'
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container-main">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-5">
            <AlertTriangle className="text-red-500 animate-bounce" size={40} />
          </div>
          <h2 className="section-title mb-4 animate-fade-in-up">
            Vous reconnaissez-vous dans ces <span className="text-red-500">situations</span> ?
          </h2>
          <p className="section-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Trop d'entrepreneurs et de dirigeants subissent ces problèmes au quotidien...
          </p>
        </div>

        {/* Main Pain Points */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map((pain, index) => {
            const Icon = pain.icon;
            return (
              <div key={pain.title} className="text-center p-6 card-base border-l-4 border-red-500 animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <Icon className={pain.color} size={28} />
                </div>
                <h3 className="font-poppins font-bold text-lg text-gray-anthracite mb-3">{pain.title}</h3>
                <p className="font-inter text-blue-gray leading-relaxed text-sm">{pain.description}</p>
              </div>
            );
          })}
        </div>

        {/* Common Problems List */}
        <div className="card-base p-6 border border-red-100 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-6 text-center">Ces problèmes vous parlent ?</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {commonProblems.map((problem, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-red-50 rounded-lg" style={{ animationDelay: `${index * 80}ms` }}>
                <X className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                <p className="font-inter text-blue-gray text-sm leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emotional Hook */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6 border border-red-200">
            <Frown className="text-red-500 mx-auto mb-3" size={40} />
            <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-3">Le résultat ? Frustration et perte d'opportunités</h3>
            <p className="font-inter text-blue-gray max-w-2xl mx-auto leading-relaxed">
              Pendant que vous vous débattez avec ces problèmes, vos concurrents avancent. <strong>Il est temps de changer ça.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;

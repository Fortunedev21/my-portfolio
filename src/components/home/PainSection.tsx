import React from 'react';
import { AlertTriangle, Clock, DollarSign, Frown, TrendingDown, X } from 'lucide-react';

const PainSection = () => {
  const painPoints = [
    {
      icon: Clock,
      title: 'Des outils compliqués',
      description: 'Une technique qui fait perdre du temps au lieu de simplifier votre quotidien professionnel.',
      color: 'text-red-500'
    },
    {
      icon: TrendingDown,
      title: 'Un site qui n\'attire pas',
      description: 'Une application ou un site web qui n\'attire ni ne convertit vos visiteurs en clients.',
      color: 'text-orange-500'
    },
    {
      icon: DollarSign,
      title: 'Une communication floue',
      description: 'Une communication qui ne reflète pas votre vraie valeur et n\'inspire pas confiance.',
      color: 'text-red-600'
    }
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
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="text-red-500 animate-bounce" size={48} />
          </div>
          
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6 animate-fade-in-up">
            Vous reconnaissez-vous dans ces <span className="text-red-500">situations</span> ?
          </h2>
          
          <p className="font-inter text-lg text-blue-gray max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Trop d'entrepreneurs et de dirigeants subissent ces problèmes au quotidien...
          </p>
        </div>

        {/* Main Pain Points */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {painPoints.map((pain, index) => {
            const Icon = pain.icon;
            return (
              <div
                key={pain.title}
                className="text-center p-8 bg-white rounded-2xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className={pain.color} size={32} />
                </div>
                
                <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-4">
                  {pain.title}
                </h3>
                
                <p className="font-inter text-blue-gray leading-relaxed">
                  {pain.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Common Problems List */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-red-100 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-poppins font-bold text-2xl text-gray-anthracite mb-8 text-center">
            Ces problèmes vous parlent ?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {commonProblems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-red-50 rounded-lg animate-fade-in-delay-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                <p className="font-inter text-blue-gray leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emotional Hook */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-red-200">
            <Frown className="text-red-500 mx-auto mb-4" size={48} />
            <h3 className="font-poppins font-bold text-2xl text-gray-anthracite mb-4">
              Le résultat ? Frustration et perte d'opportunités
            </h3>
            <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto leading-relaxed">
              Pendant que vous vous débattez avec ces problèmes, vos concurrents avancent 
              et vos clients potentiels vont voir ailleurs. <strong>Il est temps de changer ça.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
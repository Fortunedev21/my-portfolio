import React from 'react';
import { CheckCircle, Zap, Target, Rocket, Globe, Smartphone, Palette, Lightbulb } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: Globe,
      title: 'Sites et applications efficaces',
      description: 'Concevoir des sites et applications efficaces, centrés sur l\'expérience utilisateur.',
      benefits: ['UX optimisée', 'Conversion élevée', 'Performance fluide']
    },
    {
      icon: Smartphone,
      title: 'Technologie simplifiée',
      description: 'Simplifier la technologie pour qu\'elle soit fluide et utile au quotidien.',
      benefits: ['Interface intuitive', 'Processus automatisés', 'Zéro complexité']
    },
    {
      icon: Palette,
      title: 'Marque claire et mémorable',
      description: 'Créer une marque claire et mémorable qui inspire confiance.',
      benefits: ['Identité forte', 'Communication claire', 'Impact visuel']
    },
    {
      icon: Lightbulb,
      title: 'IA concrète et utile',
      description: 'Intégrer des outils d\'IA concrets qui boostent vraiment votre business.',
      benefits: ['Automatisation IA', 'Gains de productivité', 'ROI mesurable']
    }
  ];

  const transformations = [
    {
      before: 'Site lent et obsolète',
      after: 'Site rapide et moderne',
      icon: Zap,
      color: 'text-orange-deep'
    },
    {
      before: 'Pas de visibilité Google',
      after: 'Première page Google',
      icon: Target,
      color: 'text-blue-intense'
    },
    {
      before: 'Processus manuels',
      after: 'Automatisation IA',
      icon: Rocket,
      color: 'text-orange-light'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-light via-white-soft to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <CheckCircle className="text-green-500 animate-bounce" size={48} />
          </div>
          
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6 animate-fade-in-up">
            Ma <span className="text-green-500">solution</span> pour transformer votre business
          </h2>
          
          <p className="font-inter text-lg text-blue-gray max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Je crée des solutions digitales complètes qui résolvent vos problèmes et boostent votre croissance
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-100 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-green-500" size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-3">
                      {solution.title}
                    </h3>
                    
                    <p className="font-inter text-blue-gray leading-relaxed mb-4">
                      {solution.description}
                    </p>

                    <div className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                          <span className="font-inter text-sm text-blue-gray">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Before/After Transformations */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="font-poppins font-bold text-2xl text-gray-anthracite mb-8 text-center">
            La transformation que j'apporte
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {transformations.map((transform, index) => {
              const Icon = transform.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-bounce-in"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="flex items-center justify-center gap-4">
                      <div className="bg-red-50 rounded-lg px-4 py-2 border border-red-200">
                        <span className="font-inter text-sm text-red-600">{transform.before}</span>
                      </div>
                      <div className={`w-10 h-10 bg-green-50 rounded-full flex items-center justify-center ${transform.color}`}>
                        <Icon size={20} />
                      </div>
                      <div className="bg-green-50 rounded-lg px-4 py-2 border border-green-200">
                        <span className="font-inter text-sm text-green-600">{transform.after}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-200">
            <Rocket className="text-green-500 mx-auto mb-4" size={48} />
            <h3 className="font-poppins font-bold text-2xl text-gray-anthracite mb-4">
              Résultat : Votre business décolle enfin !
            </h3>
            <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto leading-relaxed">
              Plus de temps perdu, plus de clients qui partent chez la concurrence. 
              Avec mes solutions, vous <strong>gagnez du temps, des clients et de l'argent</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
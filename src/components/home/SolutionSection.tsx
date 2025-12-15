import React from 'react';
import { CheckCircle, Zap, Target, Rocket, Globe, Smartphone, Palette, Lightbulb } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    { icon: Globe, title: 'Sites et applications efficaces', description: 'Concevoir des sites et applications efficaces, centrés sur l\'expérience utilisateur.', benefits: ['UX optimisée', 'Conversion élevée', 'Performance fluide'] },
    { icon: Smartphone, title: 'Technologie simplifiée', description: 'Simplifier la technologie pour qu\'elle soit fluide et utile au quotidien.', benefits: ['Interface intuitive', 'Processus automatisés', 'Zéro complexité'] },
    { icon: Palette, title: 'Marque claire et mémorable', description: 'Créer une marque claire et mémorable qui inspire confiance.', benefits: ['Identité forte', 'Communication claire', 'Impact visuel'] },
    { icon: Lightbulb, title: 'IA concrète et utile', description: 'Intégrer des outils d\'IA concrets qui boostent vraiment votre business.', benefits: ['Automatisation IA', 'Gains de productivité', 'ROI mesurable'] }
  ];

  const transformations = [
    { before: 'Site lent et obsolète', after: 'Site rapide et moderne', icon: Zap, color: 'text-orange-deep' },
    { before: 'Pas de visibilité Google', after: 'Première page Google', icon: Target, color: 'text-blue-intense' },
    { before: 'Processus manuels', after: 'Automatisation IA', icon: Rocket, color: 'text-orange-light' }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-green-light via-white-soft to-blue-50">
      <div className="container-main">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-5">
            <CheckCircle className="text-green-500 animate-bounce" size={40} />
          </div>
          <h2 className="section-title mb-4 animate-fade-in-up">
            Ma <span className="text-green-500">solution</span> pour transformer votre business
          </h2>
          <p className="section-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Je crée des solutions digitales complètes qui résolvent vos problèmes et boostent votre croissance
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={solution.title} className="card-base card-hover p-6 border border-green-100 animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-green-500" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-poppins font-bold text-lg text-gray-anthracite mb-2">{solution.title}</h3>
                    <p className="font-inter text-blue-gray leading-relaxed text-sm mb-3">{solution.description}</p>
                    <div className="space-y-1.5">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="text-green-500 flex-shrink-0" size={14} />
                          <span className="font-inter text-xs text-blue-gray">{benefit}</span>
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
        <div className="card-base p-6 border border-green-100 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-6 text-center">La transformation que j'apporte</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {transformations.map((transform, index) => {
              const Icon = transform.icon;
              return (
                <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex items-center justify-center gap-3">
                    <div className="bg-red-50 rounded-lg px-3 py-1.5 border border-red-200">
                      <span className="font-inter text-xs text-red-600">{transform.before}</span>
                    </div>
                    <div className={`w-8 h-8 bg-green-50 rounded-full flex items-center justify-center ${transform.color}`}>
                      <Icon size={16} />
                    </div>
                    <div className="bg-green-50 rounded-lg px-3 py-1.5 border border-green-200">
                      <span className="font-inter text-xs text-green-600">{transform.after}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-200">
            <Rocket className="text-green-500 mx-auto mb-3" size={40} />
            <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-3">Résultat : Votre business décolle enfin !</h3>
            <p className="font-inter text-blue-gray max-w-2xl mx-auto leading-relaxed">
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

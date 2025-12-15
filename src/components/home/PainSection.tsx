import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

const PainSection = () => {
  const problems = [
    { title: 'Votre site est invisible sur Google', description: 'Vos concurrents captent vos clients potentiels pendant que vous restez introuvable.' },
    { title: 'Votre site fait fuir les visiteurs', description: 'Un design daté ou un site lent = 53% des visiteurs qui partent en moins de 3 secondes.' },
    { title: 'Vous perdez des heures sur des tâches répétitives', description: 'Sans automatisation, vous gaspillez un temps précieux qui pourrait servir à développer votre business.' },
    { title: 'Votre image ne reflète pas votre valeur', description: 'Une identité visuelle amateur vous fait perdre en crédibilité face à vos prospects.' },
    { title: 'Vous n\'avez pas d\'application mobile', description: 'Vos clients veulent vous trouver sur leur smartphone, mais vous n\'y êtes pas.' },
    { title: 'Vous ne savez pas par où commencer avec l\'IA', description: 'L\'intelligence artificielle pourrait transformer votre business, mais vous ne savez pas comment.' }
  ];

  return (
    <section className="section-padding bg-white-soft">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Entrepreneur frustré par son site web" className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-500 text-white-soft rounded-2xl p-6 shadow-xl">
              <AlertTriangle size={32} className="mb-2" />
              <p className="font-poppins font-bold text-lg">Ça vous parle ?</p>
            </div>
          </div>

          <div>
            <p className="text-red-500 font-inter font-semibold mb-4">LE CONSTAT</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6">
              Ces problèmes freinent la croissance de votre <span className="text-red-500">entreprise</span>
            </h2>
            <p className="font-inter text-lg text-blue-gray mb-8">
              Chaque jour sans solution digitale efficace, c'est de l'argent et des opportunités qui vous échappent. 
              <strong className="text-gray-anthracite"> Vos concurrents, eux, n'attendent pas.</strong>
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((problem) => (
                <div key={problem.title} className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-100">
                  <X className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-poppins font-semibold text-gray-anthracite text-sm mb-1">{problem.title}</p>
                    <p className="font-inter text-blue-gray text-xs">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;

import React from 'react';
import { CheckCircle, Rocket } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    { title: 'Sites web qui convertissent', description: 'Des sites rapides, optimisés SEO et conçus pour transformer vos visiteurs en clients.', image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Visibilité Google garantie', description: 'Apparaissez en première page et captez les clients qui cherchent vos services.', image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Automatisation intelligente', description: 'L\'IA travaille pour vous 24h/24 : chatbots, analyses, recommandations personnalisées.', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Applications mobiles natives', description: 'Soyez dans la poche de vos clients avec une app performante sur iOS et Android.', image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  return (
    <section className="section-padding bg-green-light">
      <div className="container-main">
        <div className="text-center mb-16">
          <p className="text-green-600 font-inter font-semibold mb-4">LA SOLUTION</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6">
            Des solutions digitales qui <span className="text-green-600">génèrent des résultats</span>
          </h2>
          <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto">
            Fini les sites vitrines qui ne servent à rien. Je crée des outils digitaux qui travaillent pour vous, 
            <strong className="text-gray-anthracite"> attirent des clients et font croître votre chiffre d'affaires.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutions.map((solution) => (
            <div key={solution.title} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-40 overflow-hidden">
                <img src={solution.image} alt={solution.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-anthracite/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <CheckCircle className="text-green-400" size={24} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-poppins font-bold text-lg text-gray-anthracite mb-2">{solution.title}</h3>
                <p className="font-inter text-blue-gray text-sm">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-center text-white-soft">
          <Rocket className="mx-auto mb-4" size={40} />
          <h3 className="font-poppins font-bold text-2xl mb-3">Le résultat ? Votre business décolle enfin.</h3>
          <p className="font-inter text-lg opacity-90 max-w-2xl mx-auto">
            Mes clients voient en moyenne <strong>+40% de trafic qualifié</strong> et <strong>+25% de conversions</strong> dans les 6 premiers mois. 
            Et vous, qu'attendez-vous ?
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    { id: 'web-development', title: 'Création de sites web', subtitle: 'Sites vitrines, e-commerce, applications web', description: 'Un site web qui ne génère pas de clients est un site inutile. Je crée des sites performants, optimisés SEO et conçus pour convertir vos visiteurs en clients.', features: ['Design sur mesure', 'Optimisation SEO', 'Site rapide (-3s)', 'Mobile-first'], startingPrice: '500,000 FCFA', timeline: '2-6 semaines', image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'mobile-development', title: 'Applications mobiles', subtitle: 'iOS, Android, cross-platform', description: 'Vos clients sont sur leur smartphone. Soyez-y aussi avec une application performante qui fidélise et génère des ventes récurrentes.', features: ['Flutter cross-platform', 'Android natif', 'Publication stores', 'Notifications push'], startingPrice: '800,000 FCFA', timeline: '2-4 mois', image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'graphic-design', title: 'Design & Branding', subtitle: 'Identité visuelle, UI/UX, logos', description: 'Votre image de marque est votre premier commercial. Je crée des identités visuelles qui inspirent confiance et vous démarquent de la concurrence.', features: ['Logo unique', 'Charte graphique', 'Maquettes UI/UX', 'Supports marketing'], startingPrice: '300,000 FCFA', timeline: '2-3 semaines', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'ai-models', title: 'Solutions IA', subtitle: 'Chatbots, automatisation, analyse', description: 'L\'IA n\'est plus réservée aux grandes entreprises. Automatisez vos processus, analysez vos données et créez des expériences client personnalisées.', features: ['Chatbots intelligents', 'Automatisation', 'Analyse prédictive', 'Intégration OpenAI'], startingPrice: '1,200,000 FCFA', timeline: '1-3 mois', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800' }
  ];

  const packs = [
    { name: 'Starter', price: '500,000 FCFA', description: 'Idéal pour lancer votre présence en ligne', features: ['Site vitrine 5 pages', 'Design responsive', 'Optimisation SEO de base', 'Formulaire de contact', '3 mois de support'], popular: false },
    { name: 'Business', price: '1,500,000 FCFA', description: 'Pour les entreprises qui veulent performer', features: ['Application web complète', 'Interface d\'administration', 'Intégration paiement', 'SEO avancé', '6 mois de support', 'Formation équipe'], popular: true },
    { name: 'Premium', price: 'Sur devis', description: 'Solution sur mesure pour vos ambitions', features: ['Projet 100% personnalisé', 'Architecture scalable', 'Intégration IA', 'Support prioritaire', 'Maintenance incluse', 'Évolutions illimitées'], popular: false }
  ];

  const faqs = [
    { question: 'Combien de temps pour créer mon site web ?', answer: 'Un site vitrine prend 2-4 semaines, un e-commerce 4-6 semaines, une application web 2-4 mois. Je vous donne un planning précis avant de commencer.' },
    { question: 'Que se passe-t-il après la livraison ?', answer: 'Tous mes projets incluent 3-6 mois de support gratuit. Je reste disponible pour les ajustements et vous forme à l\'utilisation. Ensuite, je propose des contrats de maintenance si besoin.' },
    { question: 'Travaillez-vous avec des clients hors du Bénin ?', answer: 'Absolument ! Je travaille avec des clients au Bénin, en Afrique et en Europe. Communication en français ou anglais, paiement par virement ou mobile money.' },
    { question: 'Comment se passe le paiement ?', answer: '30% à la signature pour démarrer, 40% à mi-parcours après validation des maquettes, 30% à la livraison. Pas de surprise, tout est clair dès le départ.' }
  ];

  return (
    <div className="min-h-screen bg-white-soft">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Services développement web Bénin" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-anthracite/90 via-gray-anthracite/80 to-transparent"></div>
        </div>
        
        <div className="container-main relative z-10 py-32">
          <div className="max-w-2xl">
            <p className="text-orange-deep font-inter font-semibold mb-4">MES SERVICES</p>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white-soft mb-6">
              Des solutions digitales qui <span className="text-orange-deep">rapportent</span>
            </h1>
            <p className="font-inter text-xl text-white-soft/90 leading-relaxed mb-8">
              Pas de projets techniques pour faire joli. Je crée des outils digitaux qui génèrent des clients, 
              automatisent vos processus et font croître votre chiffre d'affaires.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Obtenir un devis gratuit <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white-soft">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-4">
              Chaque service, un <span className="text-orange-deep">objectif business</span>
            </h2>
            <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto">
              Je ne vends pas des heures de développement. Je vends des résultats : plus de clients, plus de ventes, plus d'efficacité.
            </p>
          </div>

          <div className="grid gap-16">
            {services.map((service, index) => {
              const isReversed = index % 2 === 1;
              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-10 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${isReversed ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                      <img src={service.image} alt={`${service.title} - Développeur Bénin`} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-anthracite/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-poppins font-bold text-2xl text-white-soft mb-1">{service.title}</h3>
                        <p className="font-inter text-white-soft/80 text-sm">{service.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className={`${isReversed ? 'lg:col-start-1' : ''}`}>
                    <p className="font-inter text-lg text-blue-gray leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="text-orange-deep flex-shrink-0" size={16} />
                          <span className="font-inter text-gray-anthracite text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="bg-green-light rounded-lg px-4 py-2">
                        <span className="font-inter text-xs text-blue-gray">À partir de </span>
                        <span className="font-poppins font-bold text-orange-deep">{service.startingPrice}</span>
                      </div>
                      <div className="bg-green-light rounded-lg px-4 py-2">
                        <span className="font-inter text-xs text-blue-gray">Délai : </span>
                        <span className="font-poppins font-bold text-blue-intense">{service.timeline}</span>
                      </div>
                    </div>

                    <Link to={`/service/${service.id}`} className="group inline-flex items-center gap-2 bg-orange-deep hover:bg-orange-light text-white-soft px-5 py-2.5 rounded-lg font-inter font-semibold text-sm transition-all duration-300">
                      Voir les détails <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packs */}
      <section className="section-padding bg-green-light">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-4">
              Des forfaits <span className="text-orange-deep">clairs et transparents</span>
            </h2>
            <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto">
              Pas de devis à rallonge ni de coûts cachés. Vous savez exactement ce que vous payez et ce que vous obtenez.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packs.map((pack) => (
              <div key={pack.name} className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${pack.popular ? 'ring-2 ring-orange-deep scale-105' : ''}`}>
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-deep text-white-soft px-4 py-1 rounded-full text-xs font-inter font-semibold">
                    Le plus choisi
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-1">{pack.name}</h3>
                  <p className="font-inter text-blue-gray text-sm mb-4">{pack.description}</p>
                  <div className="text-3xl font-bold text-orange-deep">{pack.price}</div>
                </div>
                <div className="space-y-3 mb-8">
                  {pack.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle className="text-orange-deep flex-shrink-0 mt-0.5" size={16} />
                      <span className="font-inter text-blue-gray text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className={`block w-full text-center py-3 rounded-lg font-inter font-semibold transition-all duration-300 ${pack.popular ? 'bg-orange-deep hover:bg-orange-light text-white-soft' : 'bg-transparent hover:bg-orange-deep text-orange-deep hover:text-white-soft border-2 border-orange-deep'}`}>
                  Choisir ce forfait
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-4">
              Vos questions, mes <span className="text-orange-deep">réponses</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-green-light">
                <h3 className="font-poppins font-semibold text-lg text-gray-anthracite mb-3">{faq.question}</h3>
                <p className="font-inter text-blue-gray leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Démarrer projet digital" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-deep/95 via-orange-deep/90 to-orange-light/85"></div>
        </div>

        <div className="container-main relative z-10 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white-soft mb-6">
            Prêt à passer à l'action ?
          </h2>
          <p className="font-inter text-xl text-white-soft/90 mb-8 max-w-2xl mx-auto">
            Chaque jour sans solution digitale efficace, c'est des clients qui vont chez vos concurrents. 
            On en discute ?
          </p>
          <Link to="/contact" className="bg-white-soft hover:bg-white text-orange-deep px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            Demander mon devis gratuit <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

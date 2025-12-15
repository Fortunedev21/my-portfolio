import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    { id: 'web-development', title: 'Développement Web', subtitle: 'Sites vitrines, e-commerce, applications sur mesure', description: 'Je crée des sites web modernes, performants et optimisés pour tous les appareils.', features: ['Design responsive', 'Optimisation SEO', 'Performance élevée', 'Sécurité renforcée'], startingPrice: '500,000 FCFA', timeline: '2-6 semaines', image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'mobile-development', title: 'Développement Mobile', subtitle: 'Applications Android/iOS, cross-platform', description: 'Applications mobiles performantes avec Flutter et Kotlin. Interface intuitive et publication sur les stores.', features: ['Cross-platform Flutter', 'Android natif Kotlin', 'Intégration API', 'Publication stores'], startingPrice: '800,000 FCFA', timeline: '2-4 mois', image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'graphic-design', title: 'Design UI/UX', subtitle: 'Identité visuelle, maquettes, logos', description: 'Création d\'identités visuelles fortes et d\'interfaces utilisateur intuitives qui convertissent.', features: ['Logo unique', 'Charte graphique', 'Maquettes UI/UX', 'Supports print/digital'], startingPrice: '300,000 FCFA', timeline: '2-3 semaines', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 'ai-models', title: 'IA & Machine Learning', subtitle: 'Chatbots, automatisation, analyse de données', description: 'Développement de modèles IA sur mesure pour automatiser vos processus.', features: ['Modèles prédictifs', 'Chatbots IA', 'Analyse de données', 'Intégration OpenAI'], startingPrice: '1,200,000 FCFA', timeline: '1-3 mois', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800' }
  ];

  const packs = [
    { name: 'Starter', price: '500,000 FCFA', description: 'Parfait pour débuter', features: ['Site vitrine responsive', 'Design sur mesure', 'Optimisation SEO de base', '3 mois de support', 'Formation incluse'], popular: false },
    { name: 'Business', price: '1,500,000 FCFA', description: 'Solution complète', features: ['Application web complète', 'Interface d\'administration', 'API REST intégrée', 'Sécurité avancée', '6 mois de support', 'Formation équipe'], popular: true },
    { name: 'Premium', price: 'Sur devis', description: 'Projet sur mesure', features: ['Solution entièrement personnalisée', 'Architecture scalable', 'Intégration IA/ML', 'Support prioritaire', 'Maintenance incluse', 'Évolutions continues'], popular: false }
  ];

  const faqs = [
    { question: 'Quels sont vos délais de livraison ?', answer: 'Les délais varient selon la complexité : 2-6 semaines pour un site web, 2-4 mois pour une application mobile, 1-3 mois pour un projet IA.' },
    { question: 'Proposez-vous de la maintenance après livraison ?', answer: 'Oui, tous mes projets incluent une période de support gratuit (3-6 mois). Je propose également des contrats de maintenance.' },
    { question: 'Travaillez-vous avec des clients internationaux ?', answer: 'Absolument ! Je travaille avec des clients au Bénin et à l\'international. Communication en français ou anglais.' },
    { question: 'Comment se déroule le processus de paiement ?', answer: '30% à la signature, 40% à mi-parcours et 30% à la livraison. Paiements par virement bancaire ou mobile money.' }
  ];

  return (
    <div className="min-h-screen bg-white-soft">
      {/* Hero Section avec image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-anthracite/90 via-gray-anthracite/80 to-transparent"></div>
        </div>
        
        <div className="container-main relative z-10 py-32">
          <div className="max-w-2xl">
            <p className="text-orange-deep font-inter font-semibold mb-4 animate-fade-in-up">NOS SERVICES</p>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white-soft mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Des solutions <span className="text-orange-deep">digitales</span> sur mesure
            </h1>
            <p className="font-inter text-xl text-white-soft/90 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Du développement web à l'intelligence artificielle, je vous accompagne dans tous vos projets numériques.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Demander un devis <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white-soft">
        <div className="container-main">
          <div className="grid gap-16">
            {services.map((service, index) => {
              const isReversed = index % 2 === 1;
              
              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-10 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`animate-slide-up ${isReversed ? 'lg:col-start-2' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                      <img src={service.image} alt={service.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-anthracite/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-poppins font-bold text-2xl text-white-soft mb-1">{service.title}</h3>
                        <p className="font-inter text-white-soft/80 text-sm">{service.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`animate-slide-up ${isReversed ? 'lg:col-start-1' : ''}`} style={{ animationDelay: `${index * 100 + 150}ms` }}>
                    <p className="font-inter text-blue-gray leading-relaxed mb-5">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="text-orange-deep flex-shrink-0" size={14} />
                          <span className="font-inter text-blue-gray text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-5">
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
                      En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
          <div className="text-center mb-12">
            <h2 className="section-title">Forfaits & <span className="text-orange-deep">Packs</span></h2>
            <p className="section-subtitle">Des solutions adaptées à tous les budgets</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packs.map((pack, index) => (
              <div key={pack.name} className={`relative card-base card-hover p-7 animate-slide-up ${pack.popular ? 'ring-2 ring-orange-deep scale-105' : ''}`} style={{ animationDelay: `${index * 150}ms` }}>
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-deep text-white-soft px-3 py-1 rounded-full text-xs font-inter font-semibold">
                    Le plus populaire
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-1">{pack.name}</h3>
                  <p className="font-inter text-blue-gray text-sm mb-3">{pack.description}</p>
                  <div className="text-2xl font-bold text-orange-deep">{pack.price}</div>
                </div>
                <div className="space-y-3 mb-6">
                  {pack.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle className="text-orange-deep flex-shrink-0 mt-0.5" size={14} />
                      <span className="font-inter text-blue-gray text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className={`block w-full text-center py-2.5 rounded-lg font-inter font-semibold text-sm transition-all duration-300 ${pack.popular ? 'bg-orange-deep hover:bg-orange-light text-white-soft' : 'bg-transparent hover:bg-orange-deep text-orange-deep hover:text-white-soft border-2 border-orange-deep'}`}>
                  Choisir ce pack
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
            <h2 className="section-title">Questions <span className="text-orange-deep">Fréquentes</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-base p-5 border border-green-light animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="font-poppins font-semibold text-base text-gray-anthracite mb-2">{faq.question}</h3>
                <p className="font-inter text-blue-gray text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container-main text-center">
          <h2 className="font-poppins font-bold text-3xl text-white-soft mb-4">Prêt à transformer votre idée en réalité ?</h2>
          <p className="font-inter text-lg text-white-soft/90 mb-6 max-w-xl mx-auto">
            Discutons de votre projet et créons ensemble quelque chose d'exceptionnel
          </p>
          <Link to="/contact" className="bg-white-soft hover:bg-white text-orange-deep px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-block">
            Démarrons votre projet
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

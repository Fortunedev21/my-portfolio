import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Layers, Palette, Lightbulb, MessageCircle, ArrowRight, CheckCircle, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'web-development',
      icon: Globe,
      title: 'Développement Web',
      subtitle: 'Sites vitrines, e-commerce, applications sur mesure',
      description: 'Je crée des sites web modernes, performants et optimisés pour tous les appareils. De la vitrine professionnelle à l\'application web complexe.',
      features: ['Design responsive', 'Optimisation SEO', 'Performance élevée', 'Sécurité renforcée'],
      startingPrice: '500,000 FCFA',
      timeline: '2-6 semaines',
      color: 'orange-deep'
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Développement Mobile',
      subtitle: 'Applications Android/iOS, cross-platform',
      description: 'Applications mobiles performantes avec Flutter et Kotlin. Interface intuitive, intégration cloud et publication sur les stores.',
      features: ['Cross-platform Flutter', 'Android natif Kotlin', 'Intégration API', 'Publication stores'],
      startingPrice: '800,000 FCFA',
      timeline: '2-4 mois',
      color: 'blue-intense'
    },
    {
      id: 'graphic-design',
      icon: Palette,
      title: 'Design UI/UX',
      subtitle: 'Identité visuelle, maquettes, logos',
      description: 'Création d\'identités visuelles fortes et d\'interfaces utilisateur intuitives qui marquent les esprits et convertissent.',
      features: ['Logo unique', 'Charte graphique', 'Maquettes UI/UX', 'Supports print/digital'],
      startingPrice: '300,000 FCFA',
      timeline: '2-3 semaines',
      color: 'orange-light'
    },
    {
      id: 'ai-models',
      icon: Lightbulb,
      title: 'IA & Machine Learning',
      subtitle: 'Chatbots, automatisation, analyse de données',
      description: 'Développement de modèles IA sur mesure pour automatiser vos processus et créer des expériences intelligentes.',
      features: ['Modèles prédictifs', 'Chatbots IA', 'Analyse de données', 'Intégration OpenAI'],
      startingPrice: '1,200,000 FCFA',
      timeline: '1-3 mois',
      color: 'blue-gray'
    }
  ];

  const packs = [
    {
      name: 'Starter',
      price: '500,000 FCFA',
      description: 'Parfait pour débuter',
      features: [
        'Site vitrine responsive',
        'Design sur mesure',
        'Optimisation SEO de base',
        '3 mois de support',
        'Formation incluse'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '1,500,000 FCFA',
      description: 'Solution complète',
      features: [
        'Application web complète',
        'Interface d\'administration',
        'API REST intégrée',
        'Sécurité avancée',
        '6 mois de support',
        'Formation équipe'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 'Sur devis',
      description: 'Projet sur mesure',
      features: [
        'Solution entièrement personnalisée',
        'Architecture scalable',
        'Intégration IA/ML',
        'Support prioritaire',
        'Maintenance incluse',
        'Évolutions continues'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Quels sont vos délais de livraison ?',
      answer: 'Les délais varient selon la complexité : 2-6 semaines pour un site web, 2-4 mois pour une application mobile, 1-3 mois pour un projet IA. Je fournis toujours un planning détaillé avant de commencer.'
    },
    {
      question: 'Proposez-vous de la maintenance après livraison ?',
      answer: 'Oui, tous mes projets incluent une période de support gratuit (3-6 mois selon le projet). Je propose également des contrats de maintenance pour les mises à jour et évolutions.'
    },
    {
      question: 'Travaillez-vous avec des clients internationaux ?',
      answer: 'Absolument ! Je travaille avec des clients au Bénin et à l\'international. La communication se fait en français ou anglais selon vos préférences.'
    },
    {
      question: 'Comment se déroule le processus de paiement ?',
      answer: 'Je demande généralement 30% à la signature, 40% à mi-parcours et 30% à la livraison. Les paiements peuvent se faire par virement bancaire ou mobile money.'
    },
    {
      question: 'Puis-je voir des exemples de votre code ?',
      answer: 'Bien sûr ! Vous pouvez consulter mes repositories GitHub publics. Pour les projets clients, je peux partager des extraits de code lors de nos échanges.'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; hover: string } } = {
      'orange-deep': { bg: 'bg-orange-deep/10', text: 'text-orange-deep', border: 'border-orange-deep/20', hover: 'hover:bg-orange-deep' },
      'orange-light': { bg: 'bg-orange-light/10', text: 'text-orange-light', border: 'border-orange-light/20', hover: 'hover:bg-orange-light' },
      'blue-intense': { bg: 'bg-blue-intense/10', text: 'text-blue-intense', border: 'border-blue-intense/20', hover: 'hover:bg-blue-intense' },
      'blue-gray': { bg: 'bg-blue-gray/10', text: 'text-blue-gray', border: 'border-blue-gray/20', hover: 'hover:bg-blue-gray' }
    };
    return colorMap[color] || colorMap['orange-deep'];
  };

  return (
    <div className="min-h-screen bg-white-soft pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-light via-white-soft to-green-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-anthracite mb-6 animate-fade-in-up">
            Mes <span className="text-orange-deep">Services</span>
          </h1>
          <p className="font-inter text-xl text-blue-gray max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Des solutions digitales complètes pour transformer vos idées en succès concrets
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16 bg-white-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              const Icon = service.icon;
              
              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {/* Content */}
                  <div className={`animate-slide-up ${index % 2 === 1 ? 'lg:col-start-2' : ''}`} style={{ animationDelay: `${index * 200}ms` }}>
                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className={colors.text} size={32} />
                    </div>
                    
                    <h3 className="font-poppins font-bold text-3xl text-gray-anthracite mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="font-poppins text-lg text-orange-deep mb-4 font-semibold">
                      {service.subtitle}
                    </p>
                    
                    <p className="font-inter text-lg text-blue-gray leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="text-orange-deep flex-shrink-0" size={16} />
                          <span className="font-inter text-blue-gray text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing & Timeline */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="bg-white rounded-lg px-4 py-2 border border-green-light">
                        <span className="font-inter text-sm text-blue-gray">À partir de </span>
                        <span className="font-poppins font-bold text-orange-deep">{service.startingPrice}</span>
                      </div>
                      <div className="bg-white rounded-lg px-4 py-2 border border-green-light">
                        <span className="font-inter text-sm text-blue-gray">Délai : </span>
                        <span className="font-poppins font-bold text-blue-intense">{service.timeline}</span>
                      </div>
                    </div>

                    <Link
                      to={`/service/${service.id}`}
                      className={`group inline-flex items-center gap-2 ${colors.hover} hover:text-white-soft ${colors.text} border ${colors.border} px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}
                    >
                      En savoir plus
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={`animate-slide-up ${index % 2 === 1 ? 'lg:col-start-1' : ''}`} style={{ animationDelay: `${index * 200 + 300}ms` }}>
                    <div className="relative group">
                      <div className={`absolute -inset-4 bg-gradient-to-r from-${service.color}/20 to-blue-intense/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500`}></div>
                      <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                        <div className={`w-32 h-32 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                          <Icon className={colors.text} size={64} />
                        </div>
                        <div className="text-center">
                          <h4 className="font-poppins font-bold text-xl text-gray-anthracite mb-2">
                            {service.title}
                          </h4>
                          <p className="font-inter text-blue-gray">
                            Solutions professionnelles et sur mesure
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packs Section */}
      <section className="py-16 bg-green-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6">
              Forfaits & <span className="text-orange-deep">Packs</span>
            </h2>
            <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto">
              Des solutions adaptées à tous les budgets et besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packs.map((pack, index) => (
              <div
                key={pack.name}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up ${
                  pack.popular ? 'ring-2 ring-orange-deep scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-deep text-white-soft px-4 py-2 rounded-full text-sm font-inter font-semibold">
                    Le plus populaire
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="font-poppins font-bold text-2xl text-gray-anthracite mb-2">
                    {pack.name}
                  </h3>
                  <p className="font-inter text-blue-gray mb-4">{pack.description}</p>
                  <div className="text-3xl font-bold text-orange-deep mb-2">{pack.price}</div>
                </div>

                <div className="space-y-4 mb-8">
                  {pack.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="text-orange-deep flex-shrink-0 mt-0.5" size={16} />
                      <span className="font-inter text-blue-gray text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-inter font-semibold transition-all duration-300 ${
                    pack.popular
                      ? 'bg-orange-deep hover:bg-orange-light text-white-soft'
                      : 'bg-transparent hover:bg-orange-deep text-orange-deep hover:text-white-soft border-2 border-orange-deep'
                  }`}
                >
                  Choisir ce pack
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6">
              Questions <span className="text-orange-deep">Fréquentes</span>
            </h2>
            <p className="font-inter text-lg text-blue-gray">
              Réponses aux questions les plus courantes sur mes services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-green-light animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-poppins font-semibold text-lg text-gray-anthracite mb-3">
                  {faq.question}
                </h3>
                <p className="font-inter text-blue-gray leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-deep to-orange-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl text-white-soft mb-6">
            Prêt à transformer votre idée en réalité ?
          </h2>
          <p className="font-inter text-lg text-white-soft/90 mb-8">
            Discutons de votre projet et créons ensemble quelque chose d'exceptionnel
          </p>
          <Link
            to="/contact"
            className="bg-white-soft hover:bg-white text-orange-deep px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-block"
          >
            Démarrons votre projet
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
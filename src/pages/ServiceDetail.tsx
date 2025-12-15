import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, DollarSign, MessageCircle, Star, ArrowRight } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();

  const services: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    features: string[];
    process: { step: string; description: string }[];
    deliverables: string[];
    timeline: string;
    startingPrice: string;
    benefits: string[];
    technologies: string[];
    examples: { title: string; description: string; image: string }[];
  }> = {
    'web-development': {
      title: 'Développement Web',
      subtitle: 'Sites vitrines, e-commerce, applications sur mesure',
      description: 'Je crée des sites web modernes, performants et optimisés pour tous les appareils. Que ce soit pour une vitrine professionnelle, une boutique en ligne ou une application web complexe, j\'utilise les meilleures technologies pour garantir rapidité, sécurité et expérience utilisateur exceptionnelle.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920',
      features: ['Design responsive', 'Optimisation SEO', 'Performance élevée', 'Sécurité renforcée', 'Interface d\'administration', 'Intégration paiement'],
      process: [
        { step: 'Analyse & Stratégie', description: 'Étude de vos besoins et définition de la stratégie digitale.' },
        { step: 'Design & Prototypage', description: 'Création de maquettes interactives et validation du design.' },
        { step: 'Développement', description: 'Codage avec les meilleures pratiques et tests réguliers.' },
        { step: 'Tests & Optimisation', description: 'Tests complets et optimisation des performances.' },
        { step: 'Mise en ligne', description: 'Déploiement sécurisé et formation à l\'administration.' }
      ],
      deliverables: ['Site web complet', 'Code source documenté', 'Interface admin', 'Guide d\'utilisation', 'Formation', '3 mois de support'],
      timeline: '2-6 semaines',
      startingPrice: '500,000 FCFA',
      benefits: ['+50 projets réalisés', 'Technologies modernes', 'Support réactif', 'Respect des délais', 'Formation complète', 'Évolutivité garantie'],
      technologies: ['React', 'Next.js', 'Symfony', 'Laravel', 'TailwindCSS', 'PostgreSQL'],
      examples: [
        { title: 'E-commerce AgriMarket', description: 'Plateforme de vente avec géolocalisation et paiement mobile.', image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { title: 'Site Cabinet Médical', description: 'Site professionnel avec prise de rendez-vous en ligne.', image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600' }
      ]
    },
    'mobile-development': {
      title: 'Développement Mobile',
      subtitle: 'Applications Android/iOS, cross-platform',
      description: 'Je développe des applications mobiles performantes et intuitives pour iOS et Android. Avec Flutter pour le cross-platform ou Kotlin pour Android natif, je crée des expériences mobiles exceptionnelles qui engagent vos utilisateurs.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1920',
      features: ['Cross-platform Flutter', 'Android natif Kotlin', 'Interface intuitive', 'Intégration API', 'Notifications push', 'Publication stores'],
      process: [
        { step: 'Analyse & Wireframing', description: 'Étude des besoins et création de wireframes.' },
        { step: 'Design UI/UX Mobile', description: 'Conception d\'interfaces adaptées aux mobiles.' },
        { step: 'Développement', description: 'Codage Flutter ou Kotlin avec intégration APIs.' },
        { step: 'Tests', description: 'Tests sur différents appareils et optimisation.' },
        { step: 'Publication', description: 'Soumission aux stores et suivi post-lancement.' }
      ],
      deliverables: ['Application complète', 'Code source', 'Documentation', 'Fichiers APK/IPA', '4 mois de support', 'Formation'],
      timeline: '2-4 mois',
      startingPrice: '800,000 FCFA',
      benefits: ['Expertise Flutter & Kotlin', 'Apps performantes', 'Design moderne', 'Intégration complète', 'Support stores', 'Maintenance incluse'],
      technologies: ['Flutter', 'Kotlin', 'Firebase', 'SQLite', 'REST APIs', 'Push Notifications'],
      examples: [
        { title: 'HealthTracker', description: 'Application de suivi médical avec rappels intelligents.', image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { title: 'AgriMobile', description: 'App e-commerce avec géolocalisation et paiement mobile.', image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=600' }
      ]
    },
    'graphic-design': {
      title: 'Design UI/UX',
      subtitle: 'Identité visuelle, maquettes, logos',
      description: 'Je crée des identités visuelles fortes et cohérentes qui reflètent vos valeurs et marquent les esprits. Du logo aux supports de communication, je développe un univers graphique unique pour votre marque.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920',
      features: ['Logo unique', 'Charte graphique', 'Maquettes UI/UX', 'Supports print/digital', 'Déclinaisons', 'Révisions illimitées'],
      process: [
        { step: 'Brief Créatif', description: 'Analyse de votre marque et définition de l\'univers graphique.' },
        { step: 'Recherches', description: 'Exploration créative et développement de concepts.' },
        { step: 'Propositions', description: 'Présentation de 3 propositions de logo.' },
        { step: 'Finalisation', description: 'Perfectionnement et création des déclinaisons.' },
        { step: 'Livraison', description: 'Remise des fichiers et guide d\'utilisation.' }
      ],
      deliverables: ['Logo multi-formats', 'Charte graphique PDF', 'Palette couleurs', 'Typographies', 'Déclinaisons', 'Fichiers sources'],
      timeline: '2-3 semaines',
      startingPrice: '300,000 FCFA',
      benefits: ['10+ ans d\'expérience', 'Approche stratégique', 'Révisions illimitées', 'Fichiers pro', 'Conseils inclus', 'Support implémentation'],
      technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'InDesign', 'Canva Pro'],
      examples: [
        { title: 'Identité AgriMarket', description: 'Logo et charte graphique pour plateforme agricole.', image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { title: 'Branding Cabinet', description: 'Identité visuelle complète pour cabinet médical.', image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600' }
      ]
    },
    'ai-models': {
      title: 'IA & Machine Learning',
      subtitle: 'Chatbots, automatisation, analyse de données',
      description: 'Je développe des modèles de machine learning sur mesure pour automatiser vos processus métiers. De la prédiction à la classification, en passant par le NLP, je crée des solutions IA qui apportent une réelle valeur ajoutée.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
      features: ['Modèles prédictifs', 'Chatbots IA', 'Analyse de données', 'Vision par ordinateur', 'NLP', 'Intégration OpenAI'],
      process: [
        { step: 'Analyse des Données', description: 'Audit de vos données et définition des objectifs IA.' },
        { step: 'Préparation', description: 'Collecte, nettoyage et préparation des datasets.' },
        { step: 'Développement', description: 'Création et entraînement des modèles ML.' },
        { step: 'Validation', description: 'Tests rigoureux et optimisation des performances.' },
        { step: 'Déploiement', description: 'Mise en production et monitoring continu.' }
      ],
      deliverables: ['Modèles IA optimisés', 'API REST', 'Documentation', 'Dashboard monitoring', 'Scripts réentraînement', '6 mois de support'],
      timeline: '1-3 mois',
      startingPrice: '1,200,000 FCFA',
      benefits: ['Expertise IA académique', 'Modèles sur mesure', 'Intégration transparente', 'Performance optimisée', 'Support spécialisé', 'Évolution continue'],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'Docker'],
      examples: [
        { title: 'Recommandation E-commerce', description: 'Modèle ML augmentant les ventes de 35%.', image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { title: 'Chatbot Support', description: 'Assistant IA réduisant la charge support de 60%.', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600' }
      ]
    }
  };

  const service = services[id || ''];

  if (!service) {
    return (
      <div className="min-h-screen bg-white-soft flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-poppins font-bold text-3xl text-gray-anthracite mb-4">Service non trouvé</h1>
          <Link to="/services" className="text-orange-deep hover:text-orange-light font-inter font-medium">Retour aux services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white-soft">
      {/* Hero Section avec image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-anthracite/90 via-gray-anthracite/80 to-gray-anthracite/60"></div>
        </div>
        
        <div className="container-main relative z-10 py-32">
          <Link to="/services" className="group inline-flex items-center gap-2 text-white-soft/80 hover:text-white-soft transition-colors duration-300 mb-8 font-inter">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Retour aux services
          </Link>
          
          <div className="max-w-3xl">
            <p className="text-orange-deep font-inter font-semibold mb-4">{service.subtitle}</p>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white-soft mb-6">{service.title}</h1>
            <p className="font-inter text-xl text-white-soft/90 leading-relaxed mb-8">{service.description}</p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                <MessageCircle size={18} /> Demander un devis
              </Link>
              <div className="flex items-center gap-6 text-white-soft/80">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-orange-deep" />
                  <span className="font-inter">{service.timeline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign size={18} className="text-orange-deep" />
                  <span className="font-inter">À partir de {service.startingPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white-soft">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="section-title">Ce qui est <span className="text-orange-deep">inclus</span></h2>
            <p className="section-subtitle">Tout ce dont vous avez besoin pour réussir votre projet</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-orange-deep/20">
                <div className="w-14 h-14 bg-orange-deep/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-deep group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="text-orange-deep group-hover:text-white-soft transition-colors" size={28} />
                </div>
                <h3 className="font-poppins font-bold text-lg text-gray-anthracite mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-green-light">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="section-title">Mon <span className="text-blue-intense">processus</span></h2>
            <p className="section-subtitle">Une méthodologie éprouvée pour garantir le succès</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-blue-intense text-white-soft rounded-full flex items-center justify-center mb-4 font-poppins font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="font-poppins font-bold text-base text-gray-anthracite mb-3">{step.step}</h3>
                  <p className="font-inter text-blue-gray text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-blue-intense" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white-soft">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="section-title">Pourquoi me <span className="text-orange-deep">choisir</span> ?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-orange-deep/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="text-orange-deep" size={20} />
                </div>
                <p className="font-inter text-blue-gray leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="section-padding bg-green-light">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="section-title">Exemples de <span className="text-orange-deep">réalisations</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {service.examples.map((example, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img src={example.image} alt={example.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-anthracite/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-poppins font-bold text-xl text-white-soft">{example.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-inter text-blue-gray leading-relaxed">{example.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-white-soft">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Technologies <span className="text-blue-intense">utilisées</span></h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech) => (
              <span key={tech} className="bg-white border border-green-light rounded-full px-6 py-3 font-inter text-blue-gray hover:border-orange-deep/30 hover:bg-orange-deep/5 transition-all duration-300 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-gradient-to-br from-orange-deep/5 to-blue-intense/5">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Ce que vous <span className="text-orange-deep">recevrez</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {service.deliverables.map((deliverable, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-md">
                <CheckCircle className="text-orange-deep flex-shrink-0" size={22} />
                <p className="font-inter text-gray-anthracite">{deliverable}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="section-padding bg-white-soft">
        <div className="container-main">
          <div className="bg-gradient-to-r from-orange-deep to-orange-light rounded-3xl p-12 text-center text-white-soft shadow-2xl">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Prêt à démarrer ?</h2>
            <p className="font-inter text-xl mb-2 opacity-90">À partir de</p>
            <p className="font-poppins font-bold text-5xl mb-6">{service.startingPrice}</p>
            <p className="font-inter text-lg mb-8 opacity-90 max-w-xl mx-auto">
              Discutons de votre projet et créons ensemble la solution parfaite pour vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white-soft hover:bg-white text-orange-deep px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-2">
                <MessageCircle size={20} /> Demander un devis gratuit
              </Link>
              <Link to="/projects" className="bg-transparent hover:bg-white/20 text-white-soft border-2 border-white-soft px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2">
                Voir mes réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

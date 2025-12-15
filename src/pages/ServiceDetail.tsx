import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, DollarSign, MessageCircle, Star, Zap, Globe, Smartphone, Layers, Palette, Lightbulb } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();

  const services = [
    {
      id: 'web-development',
      icon: Globe,
      title: 'Développement de sites web performants',
      description: 'Sites vitrines, e-commerce, applications web sur mesure avec les dernières technologies',
      longDescription: 'Je crée des sites web modernes, performants et optimisés pour tous les appareils. Que ce soit pour une vitrine professionnelle, une boutique en ligne ou une application web complexe, j\'utilise les meilleures technologies pour garantir rapidité, sécurité et expérience utilisateur exceptionnelle.',
      features: [
        'Design responsive adapté à tous les écrans',
        'Optimisation SEO pour un meilleur référencement',
        'Performance élevée et temps de chargement optimisés',
        'Sécurité renforcée avec certificats SSL',
        'Interface d\'administration intuitive',
        'Intégration de systèmes de paiement',
        'Optimisation pour les moteurs de recherche',
        'Support technique et maintenance inclus'
      ],
      process: [
        {
          step: 'Analyse et stratégie',
          description: 'Étude approfondie de vos besoins, analyse de la concurrence et définition de la stratégie digitale optimale.'
        },
        {
          step: 'Design et prototypage',
          description: 'Création de maquettes interactives et validation du design avec vous avant le développement.'
        },
        {
          step: 'Développement',
          description: 'Codage avec les meilleures pratiques, tests réguliers et intégration progressive des fonctionnalités.'
        },
        {
          step: 'Tests et optimisation',
          description: 'Tests complets sur tous les appareils, optimisation des performances et correction des bugs.'
        },
        {
          step: 'Mise en ligne et formation',
          description: 'Déploiement sécurisé, formation à l\'administration et accompagnement post-lancement.'
        }
      ],
      deliverables: [
        'Site web complet et fonctionnel',
        'Code source documenté',
        'Interface d\'administration',
        'Guide d\'utilisation détaillé',
        'Formation personnalisée',
        '3 mois de support gratuit',
        'Certificat SSL inclus',
        'Sauvegarde automatique'
      ],
      timeline: '2-6 semaines',
      startingPrice: '500,000 FCFA',
      benefits: [
        'Expertise technique reconnue avec +50 projets réalisés',
        'Accompagnement personnalisé du début à la fin',
        'Technologies modernes et évolutives',
        'Support technique réactif et professionnel',
        'Respect des délais et du budget convenu',
        'Formation complète pour l\'autonomie'
      ],
      technologies: ['React', 'Next.js', 'Symfony', 'Laravel', 'WordPress', 'TailwindCSS', 'TypeScript', 'MySQL', 'PostgreSQL'],
      examples: [
        {
          title: 'Site e-commerce AgriMarket',
          description: 'Plateforme de vente en ligne pour produits agricoles avec géolocalisation, paiement mobile et gestion des stocks en temps réel.'
        },
        {
          title: 'Site vitrine Cabinet Médical',
          description: 'Site professionnel avec prise de rendez-vous en ligne, présentation des services et blog médical intégré.'
        }
      ],
      faq: [
        {
          question: 'Quels sont vos délais de livraison ?',
          answer: 'Pour un site web, comptez 2-6 semaines selon la complexité. Je fournis toujours un planning détaillé avant de commencer.'
        },
        {
          question: 'Le référencement SEO est-il inclus ?',
          answer: 'Oui, l\'optimisation SEO de base est incluse : structure, balises, vitesse, responsive. Pour un SEO avancé, je propose un service dédié.'
        },
        {
          question: 'Proposez-vous de la maintenance ?',
          answer: 'Oui, 3 mois de support gratuit sont inclus. Je propose également des contrats de maintenance pour les évolutions.'
        }
      ]
    },
    {
      id: 'web-apps',
      icon: Smartphone,
      title: 'Création d\'applications web & SaaS',
      description: 'Applications métiers, plateformes SaaS, tableaux de bord interactifs',
      longDescription: 'Je développe des applications web complexes et des solutions SaaS sur mesure. De la gestion d\'entreprise aux plateformes collaboratives, je crée des outils digitaux qui automatisent vos processus et boostent votre productivité.',
      features: [
        'Architecture scalable et évolutive',
        'Interface utilisateur intuitive et moderne',
        'Sécurité renforcée et gestion des droits',
        'API REST pour intégrations tierces',
        'Tableau de bord analytique en temps réel',
        'Système de notifications multi-canaux',
        'Sauvegarde automatique et récupération',
        'Support multi-utilisateurs et multi-entreprises'
      ],
      process: [
        {
          step: 'Audit et spécifications',
          description: 'Analyse de vos processus métiers et définition des spécifications fonctionnelles détaillées.'
        },
        {
          step: 'Architecture technique',
          description: 'Conception de l\'architecture système, choix des technologies et planification du développement.'
        },
        {
          step: 'Développement MVP',
          description: 'Création d\'une version minimale viable pour validation rapide des concepts clés.'
        },
        {
          step: 'Développement complet',
          description: 'Implémentation de toutes les fonctionnalités avec tests unitaires et d\'intégration.'
        },
        {
          step: 'Déploiement et monitoring',
          description: 'Mise en production sécurisée avec monitoring et alertes automatiques.'
        }
      ],
      deliverables: [
        'Application web complète',
        'Documentation technique',
        'API REST documentée',
        'Tableau de bord administrateur',
        'Tests automatisés',
        'Guide de déploiement',
        '6 mois de support inclus',
        'Formation équipe technique'
      ],
      timeline: '2-6 mois',
      startingPrice: '1,500,000 FCFA',
      benefits: [
        'Expertise en architecture de systèmes complexes',
        'Méthodologie agile avec livraisons régulières',
        'Code de qualité avec tests automatisés',
        'Scalabilité pour accompagner votre croissance',
        'Sécurité de niveau entreprise',
        'Support technique expert'
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'Django', 'Laravel', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      examples: [
        {
          title: 'Plateforme EduConnect',
          description: 'Solution d\'apprentissage en ligne avec visioconférence, suivi des étudiants et système d\'évaluation automatisé.'
        },
        {
          title: 'CRM BusinessFlow',
          description: 'Système de gestion client complet avec pipeline de ventes, facturation automatique et analytics avancés.'
        }
      ]
    },
    {
      id: 'cms-integration',
      icon: Layers,
      title: 'Intégration CMS (WordPress / Drupal)',
      description: 'Solutions de gestion de contenu personnalisées et faciles à administrer',
      longDescription: 'Je personnalise et optimise WordPress et Drupal pour créer des sites web puissants et faciles à gérer. Thèmes sur mesure, extensions personnalisées et formation complète pour une autonomie totale.',
      features: [
        'Thèmes personnalisés et responsive',
        'Extensions sur mesure pour vos besoins',
        'Interface d\'administration simplifiée',
        'Optimisation SEO avancée',
        'Sécurité renforcée et mises à jour',
        'Intégration e-commerce (WooCommerce)',
        'Multilingue et multi-sites',
        'Formation complète à l\'administration'
      ],
      process: [
        {
          step: 'Analyse des besoins',
          description: 'Étude de vos besoins en gestion de contenu et choix de la solution CMS optimale.'
        },
        {
          step: 'Personnalisation',
          description: 'Développement du thème sur mesure et des extensions spécifiques à vos besoins.'
        },
        {
          step: 'Configuration',
          description: 'Installation, configuration et optimisation du CMS avec tous les plugins nécessaires.'
        },
        {
          step: 'Migration de contenu',
          description: 'Migration sécurisée de votre contenu existant et optimisation pour le nouveau système.'
        },
        {
          step: 'Formation et livraison',
          description: 'Formation complète à l\'administration et remise des accès avec documentation.'
        }
      ],
      deliverables: [
        'Site CMS complet et configuré',
        'Thème personnalisé responsive',
        'Extensions sur mesure',
        'Documentation d\'administration',
        'Formation vidéo personnalisée',
        'Sauvegarde automatique configurée',
        '3 mois de support inclus',
        'Guide de bonnes pratiques'
      ],
      timeline: '2-4 semaines',
      startingPrice: '400,000 FCFA',
      benefits: [
        'Expertise WordPress et Drupal certifiée',
        'Thèmes optimisés pour la performance',
        'Sécurité renforcée contre les attaques',
        'Formation pour une autonomie complète',
        'Support technique spécialisé',
        'Mises à jour et maintenance incluses'
      ],
      technologies: ['WordPress', 'Drupal', 'PHP', 'MySQL', 'WooCommerce', 'ACF', 'Elementor', 'WPML'],
      examples: [
        {
          title: 'Site corporate multilingue',
          description: 'Site d\'entreprise WordPress avec gestion multilingue, blog intégré et espace client sécurisé.'
        },
        {
          title: 'Boutique en ligne WooCommerce',
          description: 'E-commerce complet avec gestion des stocks, paiements multiples et tableau de bord vendeur.'
        }
      ]
    },
    {
      id: 'graphic-design',
      icon: Palette,
      title: 'Design graphique & branding cohérent',
      description: 'Identité visuelle, charte graphique, supports de communication',
      longDescription: 'Je crée des identités visuelles fortes et cohérentes qui reflètent vos valeurs et marquent les esprits. Du logo aux supports de communication, je développe un univers graphique unique pour votre marque.',
      features: [
        'Création de logo unique et mémorable',
        'Charte graphique complète',
        'Supports print et digitaux',
        'Identité visuelle cohérente',
        'Déclinaisons multi-supports',
        'Fichiers sources haute qualité',
        'Guide d\'utilisation détaillé',
        'Révisions illimitées incluses'
      ],
      process: [
        {
          step: 'Brief créatif',
          description: 'Analyse de votre marque, vos valeurs et définition de l\'univers graphique souhaité.'
        },
        {
          step: 'Recherches et concepts',
          description: 'Exploration créative, recherche de références et développement de concepts visuels.'
        },
        {
          step: 'Propositions créatives',
          description: 'Présentation de 3 propositions de logo avec déclinaisons et explications.'
        },
        {
          step: 'Finalisation',
          description: 'Perfectionnement du concept choisi et création de toutes les déclinaisons.'
        },
        {
          step: 'Livraison complète',
          description: 'Remise de tous les fichiers, charte graphique et guide d\'utilisation.'
        }
      ],
      deliverables: [
        'Logo en plusieurs formats (AI, EPS, PNG, SVG)',
        'Charte graphique complète (PDF)',
        'Palette de couleurs avec codes',
        'Typographies recommandées',
        'Déclinaisons (cartes de visite, en-têtes)',
        'Guide d\'utilisation du logo',
        'Fichiers sources modifiables',
        'Mockups de présentation'
      ],
      timeline: '2-3 semaines',
      startingPrice: '300,000 FCFA',
      benefits: [
        '10+ années d\'expérience en design graphique',
        'Approche stratégique et créative',
        'Révisions illimitées jusqu\'à satisfaction',
        'Livraison de fichiers professionnels',
        'Conseils en communication visuelle',
        'Support pour l\'implémentation'
      ],
      technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma', 'Canva Pro'],
      examples: [
        {
          title: 'Identité AgriMarket',
          description: 'Logo, charte graphique et supports de communication pour une plateforme agricole moderne et accessible.'
        },
        {
          title: 'Branding Cabinet Médical',
          description: 'Identité visuelle complète pour un cabinet médical avec logo, signalétique et supports patients.'
        }
      ]
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Développement d\'applications mobiles',
      description: 'Applications natives et cross-platform pour iOS et Android avec Flutter et Kotlin',
      longDescription: 'Je développe des applications mobiles performantes et intuitives pour iOS et Android. Que ce soit avec Flutter pour le cross-platform ou Kotlin pour Android natif, je crée des expériences mobiles exceptionnelles qui engagent vos utilisateurs.',
      features: [
        'Applications cross-platform avec Flutter',
        'Développement Android natif avec Kotlin',
        'Interface utilisateur moderne et intuitive',
        'Intégration API et services cloud',
        'Notifications push et géolocalisation',
        'Optimisation des performances',
        'Tests sur appareils réels',
        'Publication sur App Store et Play Store'
      ],
      process: [
        {
          step: 'Analyse et wireframing',
          description: 'Étude des besoins utilisateurs, création de wireframes et définition de l\'architecture mobile.'
        },
        {
          step: 'Design UI/UX mobile',
          description: 'Conception d\'interfaces adaptées aux écrans mobiles avec les guidelines iOS et Android.'
        },
        {
          step: 'Développement natif/cross-platform',
          description: 'Codage avec Flutter ou Kotlin selon les besoins, intégration des APIs et services.'
        },
        {
          step: 'Tests et optimisation',
          description: 'Tests sur différents appareils, optimisation des performances et correction des bugs.'
        },
        {
          step: 'Publication et suivi',
          description: 'Soumission aux stores, accompagnement pour la validation et suivi post-lancement.'
        }
      ],
      deliverables: [
        'Application mobile complète',
        'Code source documenté',
        'Interface d\'administration (si applicable)',
        'Guide d\'utilisation utilisateur',
        'Documentation technique',
        'Fichiers de publication (APK/IPA)',
        '4 mois de support inclus',
        'Formation à la gestion'
      ],
      timeline: '2-4 mois',
      startingPrice: '800,000 FCFA',
      benefits: [
        'Expertise Flutter et Kotlin confirmée',
        'Applications performantes et fluides',
        'Design adapté aux standards mobiles',
        'Intégration complète avec vos systèmes',
        'Support pour la publication sur les stores',
        'Maintenance et évolutions incluses'
      ],
      technologies: ['Flutter', 'Kotlin', 'React Native', 'Firebase', 'SQLite', 'REST APIs', 'Push Notifications'],
      examples: [
        {
          title: 'App HealthTracker',
          description: 'Application de suivi médical avec rappels intelligents, synchronisation cloud et interface intuitive pour tous âges.'
        },
        {
          title: 'App E-commerce AgriMobile',
          description: 'Application mobile pour la plateforme AgriMarket avec géolocalisation, paiement mobile et gestion des commandes.'
        }
      ]
    },
    {
      id: 'ai-models',
      icon: Lightbulb,
      title: 'Création de modèles IA & Machine Learning',
      description: 'Développement de solutions d\'intelligence artificielle personnalisées et intégration ML',
      longDescription: 'En tant qu\'ingénieur IA, je développe des modèles de machine learning sur mesure pour automatiser vos processus métiers. De la prédiction à la classification, en passant par le traitement du langage naturel, je crée des solutions IA qui apportent une réelle valeur ajoutée.',
      features: [
        'Modèles de prédiction et classification',
        'Traitement du langage naturel (NLP)',
        'Vision par ordinateur et reconnaissance d\'images',
        'Systèmes de recommandation personnalisés',
        'Chatbots intelligents avec IA conversationnelle',
        'Analyse de données et insights automatisés',
        'Intégration API OpenAI et modèles custom',
        'Déploiement cloud et monitoring'
      ],
      process: [
        {
          step: 'Analyse des données et besoins',
          description: 'Audit de vos données, définition des objectifs IA et faisabilité technique du projet.'
        },
        {
          step: 'Préparation et nettoyage des données',
          description: 'Collecte, nettoyage et préparation des datasets pour l\'entraînement des modèles.'
        },
        {
          step: 'Développement et entraînement',
          description: 'Création des modèles ML, entraînement avec vos données et optimisation des performances.'
        },
        {
          step: 'Validation et tests',
          description: 'Tests rigoureux des modèles, validation croisée et ajustement des hyperparamètres.'
        },
        {
          step: 'Déploiement et intégration',
          description: 'Mise en production des modèles, intégration dans vos systèmes et monitoring continu.'
        }
      ],
      deliverables: [
        'Modèles IA entraînés et optimisés',
        'API REST pour intégration',
        'Documentation technique complète',
        'Dashboard de monitoring',
        'Scripts de réentraînement',
        'Guide d\'utilisation et maintenance',
        '6 mois de support technique',
        'Formation équipe technique'
      ],
      timeline: '1-3 mois',
      startingPrice: '1,200,000 FCFA',
      benefits: [
        'Ingénieur IA avec expertise académique et pratique',
        'Modèles sur mesure adaptés à vos données',
        'Intégration transparente dans vos systèmes',
        'Performance et précision optimisées',
        'Support technique spécialisé en IA',
        'Évolution continue des modèles'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Hugging Face', 'Docker', 'AWS/GCP'],
      examples: [
        {
          title: 'Système de recommandation e-commerce',
          description: 'Modèle ML de recommandation produits personnalisées augmentant les ventes de 35% pour une plateforme e-commerce.'
        },
        {
          title: 'Chatbot IA pour support client',
          description: 'Assistant conversationnel intelligent réduisant de 60% la charge du support client avec compréhension contextuelle.'
        }
      ]
    },
    {
      id: 'technical-consulting',
      icon: MessageCircle,
      title: 'Conseils techniques pour MVP & architecture web',
      description: 'Accompagnement stratégique et technique pour vos projets digitaux',
      longDescription: 'Je vous accompagne dans la définition de votre stratégie technique et la conception de votre MVP. Audit, architecture, choix technologiques et roadmap pour maximiser vos chances de succès.',
      features: [
        'Audit technique complet',
        'Définition d\'architecture scalable',
        'Stratégie MVP et roadmap produit',
        'Choix technologiques optimaux',
        'Estimation de coûts et délais',
        'Plan de développement détaillé',
        'Recommandations sécurité',
        'Accompagnement équipe technique'
      ],
      process: [
        {
          step: 'Audit initial',
          description: 'Analyse de votre projet, objectifs business et contraintes techniques existantes.'
        },
        {
          step: 'Stratégie technique',
          description: 'Définition de l\'architecture optimale et des choix technologiques adaptés.'
        },
        {
          step: 'Roadmap MVP',
          description: 'Priorisation des fonctionnalités et planification du développement par phases.'
        },
        {
          step: 'Documentation',
          description: 'Rédaction des spécifications techniques et du plan de développement.'
        },
        {
          step: 'Accompagnement',
          description: 'Suivi de la mise en œuvre et ajustements selon l\'évolution du projet.'
        }
      ],
      deliverables: [
        'Rapport d\'audit technique',
        'Architecture système documentée',
        'Spécifications fonctionnelles',
        'Roadmap de développement',
        'Estimation coûts et délais',
        'Recommandations technologiques',
        'Plan de tests et validation',
        'Sessions de suivi incluses'
      ],
      timeline: '1-2 semaines',
      startingPrice: '200,000 FCFA',
      benefits: [
        'Expertise technique multi-technologies',
        'Vision stratégique et business',
        'Réduction des risques techniques',
        'Optimisation des coûts de développement',
        'Accompagnement personnalisé',
        'Retour d\'expérience sur +50 projets'
      ],
      technologies: ['Architecture Cloud', 'Microservices', 'API Design', 'DevOps', 'Sécurité', 'Performance'],
      examples: [
        {
          title: 'Audit plateforme e-learning',
          description: 'Audit complet et recommandations pour optimiser les performances d\'une plateforme avec 10,000+ utilisateurs.'
        },
        {
          title: 'Architecture SaaS multi-tenant',
          description: 'Conception d\'architecture scalable pour une solution SaaS B2B avec isolation des données clients.'
        }
      ]
    }
  ];

  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-white-soft py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-poppins font-bold text-3xl text-gray-anthracite mb-4">
            Service non trouvé
          </h1>
          <Link
            to="/"
            className="text-orange-deep hover:text-orange-light font-inter font-medium"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white-soft py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="group flex items-center gap-2 text-blue-gray hover:text-orange-deep transition-colors duration-300 mb-8 font-inter font-medium"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          Retour à l'accueil
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="w-20 h-20 bg-orange-deep/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon className="text-orange-deep" size={40} />
          </div>
          
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-anthracite mb-6">
            {service.title}
          </h1>
          
          <p className="font-inter text-xl text-blue-gray leading-relaxed max-w-3xl mx-auto mb-8">
            {service.longDescription}
          </p>

          {/* Key Info */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white p-6 rounded-xl border border-green-light">
              <Clock className="text-orange-deep mx-auto mb-3" size={24} />
              <p className="font-inter text-sm text-blue-gray mb-1">Délai moyen</p>
              <p className="font-poppins font-semibold text-gray-anthracite">{service.timeline}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-green-light">
              <DollarSign className="text-blue-intense mx-auto mb-3" size={24} />
              <p className="font-inter text-sm text-blue-gray mb-1">À partir de</p>
              <p className="font-poppins font-semibold text-gray-anthracite">{service.startingPrice}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-green-light">
              <CheckCircle className="text-green-500 mx-auto mb-3" size={24} />
              <p className="font-inter text-sm text-blue-gray mb-1">Garantie</p>
              <p className="font-poppins font-semibold text-gray-anthracite">Satisfaction 100%</p>
            </div>
          </div>

          {/* CTA Hero */}
          <div className="mt-8">
            <Link
              to="/contact"
              className="group bg-orange-deep hover:bg-orange-light text-white-soft px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-fit"
            >
              <MessageCircle size={20} />
              Demander un devis gratuit
            </Link>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-poppins font-bold text-3xl text-gray-anthracite mb-8 text-center">
            Ce qui est <span className="text-orange-deep">inclus</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-green-light hover:border-orange-deep/30 hover:shadow-lg transition-all duration-300">
                <CheckCircle className="text-orange-deep flex-shrink-0 mt-1" size={20} />
                <p className="font-inter text-blue-gray leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="font-poppins font-bold text-3xl text-gray-anthracite mb-8 text-center">
            Mon <span className="text-blue-intense">processus</span>
          </h2>
          
          <div className="space-y-6">
            {service.process.map((step, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-white rounded-xl border border-green-light hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-intense/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-intense/20 transition-colors duration-300">
                  <span className="font-poppins font-bold text-blue-intense">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-gray-anthracite mb-2 group-hover:text-blue-intense transition-colors duration-300">
                    {step.step}
                  </h3>
                  <p className="font-inter text-blue-gray leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="font-poppins font-bold text-3xl text-gray-anthracite mb-8 text-center">
            Pourquoi me <span className="text-orange-deep">choisir</span> ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl border border-green-light hover:border-orange-deep/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-orange-deep/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-deep/20 transition-colors duration-300">
                  <Star className="text-orange-deep" size={20} />
                </div>
                <p className="font-inter text-blue-gray leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="font-poppins font-bold text-3xl text-gray-anthracite mb-8 text-center">
            Technologies <span className="text-blue-intense">utilisées</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-white border border-green-light rounded-full px-6 py-3 font-inter text-blue-gray hover:border-orange-deep/30 hover:bg-orange-deep/5 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Examples */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
          <h2 className="font-poppins font-bold text-3xl text-gray-anthracite mb-8 text-center">
            Exemples de <span className="text-orange-deep">réalisations</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {service.examples.map((example, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-green-light hover:shadow-lg transition-all duration-300">
                <h3 className="font-poppins font-semibold text-xl text-gray-anthracite mb-4">
                  {example.title}
                </h3>
                <p className="font-inter text-blue-gray leading-relaxed">
                  {example.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <h2 className="font-poppins font-bold text-3xl text-gray-anthracite mb-8 text-center">
            Ce que vous <span className="text-orange-deep">recevrez</span>
          </h2>
          
          <div className="bg-gradient-to-br from-green-light to-white-soft rounded-2xl p-8 border border-orange-deep/10">
            <div className="grid md:grid-cols-2 gap-6">
              {service.deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-orange-deep flex-shrink-0" size={20} />
                  <p className="font-inter text-blue-gray">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <h2 className="font-poppins font-bold text-3xl text-gray-anthracite mb-8 text-center">
            Tarifs <span className="text-orange-deep">transparents</span>
          </h2>
          
          <div className="bg-gradient-to-br from-orange-deep/5 to-blue-intense/5 rounded-2xl p-8 border border-orange-deep/10 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="text-4xl font-bold text-orange-deep mb-4">{service.startingPrice}</div>
              <p className="font-inter text-lg text-blue-gray mb-6">
                Prix de départ pour un projet {service.title.toLowerCase()}
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-4 rounded-lg">
                  <Clock className="text-orange-deep mx-auto mb-2" size={20} />
                  <p className="font-semibold">Délai</p>
                  <p className="text-blue-gray">{service.timeline}</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <CheckCircle className="text-green-500 mx-auto mb-2" size={20} />
                  <p className="font-semibold">Garantie</p>
                  <p className="text-blue-gray">Satisfaction 100%</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <MessageCircle className="text-blue-intense mx-auto mb-2" size={20} />
                  <p className="font-semibold">Support</p>
                  <p className="text-blue-gray">Inclus 3-6 mois</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
          <h2 className="font-poppins font-bold text-3xl text-gray-anthracite mb-8 text-center">
            Questions <span className="text-orange-deep">fréquentes</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {service.faq?.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-green-light">
                <h3 className="font-poppins font-semibold text-lg text-gray-anthracite mb-3">
                  {item.question}
                </h3>
                <p className="font-inter text-blue-gray leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )) || (
              <div className="text-center">
                <p className="font-inter text-blue-gray">
                  Des questions ? N'hésitez pas à me contacter pour plus d'informations.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
          <div className="bg-gradient-to-r from-orange-deep to-orange-light rounded-2xl p-8 text-white-soft">
            <h3 className="font-poppins font-bold text-2xl mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="font-inter text-lg mb-6 opacity-90">
              Discutons de vos besoins et créons ensemble la solution parfaite
            </p>
            <Link
              to="/#contact"
              className="group bg-white-soft hover:bg-white text-orange-deep px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-fit"
            >
              <MessageCircle size={20} />
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
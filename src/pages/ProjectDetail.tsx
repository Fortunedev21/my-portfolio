import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Lightbulb, CheckCircle, Star } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 'agrimarket',
      title: 'AgriMarket',
      description: 'Plateforme e-commerce pour produits agricoles locaux avec système de géolocalisation et paiement mobile intégré',
      longDescription: 'AgriMarket est une plateforme e-commerce révolutionnaire qui connecte directement les producteurs agricoles locaux aux consommateurs. Le projet intègre un système de géolocalisation avancé pour optimiser les livraisons et un système de paiement mobile adapté au marché béninois.',
      role: 'Dev full-stack, UI/UX, branding',
      stack: ['Symfony', 'React', 'PostgreSQL', 'API REST', 'Stripe', 'Google Maps API'],
      image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'E-commerce',
      duration: '4 mois',
      team: 'Solo + 1 designer',
      challenges: [
        'Intégration des systèmes de paiement mobile locaux (MTN Mobile Money, Moov Money)',
        'Optimisation des performances pour les connexions internet limitées',
        'Gestion des stocks en temps réel avec plusieurs vendeurs',
        'Interface multilingue (français, fon, yoruba)'
      ],
      solutions: [
        'Développement d\'une API unifiée pour tous les systèmes de paiement mobile',
        'Mise en place d\'un système de cache intelligent et compression d\'images',
        'Architecture microservices avec synchronisation en temps réel',
        'Système de traduction dynamique avec interface d\'administration'
      ],
      results: [
        '+200 producteurs inscrits en 3 mois',
        '95% de satisfaction client',
        'Réduction de 40% des coûts logistiques'
      ],
      features: [
        'Géolocalisation des producteurs et optimisation des livraisons',
        'Système de notation et avis clients',
        'Gestion des stocks en temps réel',
        'Paiement mobile intégré (MTN, Moov)',
        'Interface d\'administration complète',
        'Application mobile responsive'
      ],
      testimonial: {
        text: 'Fortuné a transformé notre vision en une plateforme exceptionnelle. Son expertise technique et sa compréhension du marché local ont été déterminantes pour le succès du projet.',
        author: 'Marie Adjovi',
        position: 'Fondatrice, AgriMarket'
      }
    },
    {
      id: 'educonnect',
      title: 'EduConnect',
      description: 'Plateforme d\'apprentissage en ligne avec système de visioconférence et suivi personnalisé des étudiants',
      longDescription: 'EduConnect est une plateforme d\'apprentissage en ligne complète conçue pour les établissements d\'enseignement africains. Elle intègre des outils de visioconférence, un système de suivi personnalisé et des fonctionnalités adaptées aux défis de connectivité locaux.',
      role: 'Lead developer, Architecture système',
      stack: ['Laravel', 'Vue.js', 'MySQL', 'WebRTC', 'Socket.io', 'AWS'],
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'SaaS',
      duration: '6 mois',
      team: '3 développeurs + 1 designer',
      challenges: [
        'Optimisation de la vidéoconférence pour les connexions instables',
        'Synchronisation des données en temps réel pour plusieurs utilisateurs',
        'Système d\'évaluation et de notation automatisé',
        'Gestion des droits et permissions complexes'
      ],
      solutions: [
        'Implémentation d\'un système de qualité adaptative pour la vidéo',
        'Architecture WebSocket avec fallback et reconnexion automatique',
        'Moteur d\'évaluation basé sur l\'IA avec correction automatique',
        'Système de rôles granulaire avec héritage de permissions'
      ],
      results: [
        '15 établissements adoptés',
        '5000+ étudiants actifs',
        '98% de temps de disponibilité'
      ],
      features: [
        'Visioconférence HD avec partage d\'écran',
        'Système de quiz et évaluations automatisées',
        'Tableau de bord analytique pour enseignants',
        'Chat en temps réel et forums de discussion',
        'Bibliothèque de ressources pédagogiques',
        'Application mobile native'
      ],
      testimonial: {
        text: 'EduConnect a révolutionné notre façon d\'enseigner. La plateforme est intuitive, robuste et parfaitement adaptée à nos besoins pédagogiques.',
        author: 'Dr. Koffi Mensah',
        position: 'Directeur pédagogique, Université de Lomé'
      }
    },
    {
      id: 'healthtracker',
      title: 'HealthTracker',
      description: 'Application mobile de suivi médical avec synchronisation cloud et rappels intelligents',
      longDescription: 'HealthTracker est une application mobile innovante qui permet aux patients de suivre leur santé au quotidien. Elle offre des rappels intelligents, une synchronisation cloud sécurisée et une interface intuitive pour le suivi médical personnel.',
      role: 'Développeur mobile, API design',
      stack: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'FCM'],
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile',
      duration: '3 mois',
      team: 'Solo + 1 consultant médical',
      challenges: [
        'Sécurisation des données médicales sensibles',
        'Synchronisation offline/online transparente',
        'Système de rappels intelligents et personnalisés',
        'Interface accessible pour tous les âges'
      ],
      solutions: [
        'Chiffrement end-to-end avec authentification biométrique',
        'Base de données locale avec synchronisation différée',
        'Algorithme d\'apprentissage pour optimiser les rappels',
        'Design system accessible avec tests utilisateurs'
      ],
      results: [
        '10,000+ téléchargements',
        '4.8/5 étoiles sur les stores',
        '85% d\'engagement quotidien'
      ],
      features: [
        'Suivi des médicaments avec rappels intelligents',
        'Carnet de santé numérique sécurisé',
        'Graphiques et statistiques de santé',
        'Partage sécurisé avec les médecins',
        'Mode offline complet',
        'Authentification biométrique'
      ]
    },
    {
      id: 'businessflow',
      title: 'BusinessFlow',
      description: 'Système de gestion d\'entreprise complet avec CRM, facturation et tableau de bord analytique',
      longDescription: 'BusinessFlow est une solution complète de gestion d\'entreprise qui centralise CRM, facturation, gestion des stocks et analytics. Conçue spécifiquement pour les PME africaines, elle offre une interface intuitive et des fonctionnalités adaptées au contexte local.',
      role: 'Architecte technique, Full-stack',
      stack: ['Django', 'React', 'PostgreSQL', 'Redis', 'Celery', 'Chart.js'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'SaaS',
      duration: '8 mois',
      team: '4 développeurs + 2 designers',
      challenges: [
        'Architecture scalable pour croissance rapide',
        'Intégration de multiples systèmes de paiement',
        'Tableau de bord temps réel avec gros volumes de données',
        'Système de permissions multi-entreprises'
      ],
      solutions: [
        'Architecture microservices avec Docker et Kubernetes',
        'Gateway de paiement unifié avec fallback automatique',
        'Optimisation des requêtes avec cache Redis et indexation',
        'Système de tenancy multi-niveaux avec isolation des données'
      ],
      results: [
        '50+ entreprises clientes',
        '99.9% de disponibilité',
        'ROI moyen de 300% pour les clients'
      ],
      features: [
        'CRM complet avec pipeline de ventes',
        'Facturation automatisée et récurrente',
        'Gestion des stocks et approvisionnements',
        'Tableau de bord analytique en temps réel',
        'Système de notifications multi-canaux',
        'API REST complète pour intégrations'
      ],
      testimonial: {
        text: 'BusinessFlow a transformé notre gestion d\'entreprise. Nous avons gagné 60% de temps sur nos processus administratifs et notre chiffre d\'affaires a augmenté de 40%.',
        author: 'Fatou Diallo',
        position: 'CEO, Diallo Import-Export'
      }
    },
    {
      id: 'smartpredict',
      title: 'SmartPredict AI',
      description: 'Modèle de machine learning pour prédiction des ventes avec dashboard analytique et recommandations automatisées',
      longDescription: 'SmartPredict AI est une solution d\'intelligence artificielle avancée qui utilise des algorithmes de machine learning pour prédire les tendances de ventes et optimiser les stratégies commerciales. Le système analyse les données historiques, les tendances du marché et les comportements clients pour fournir des prédictions précises et des recommandations actionables.',
      role: 'Ingénieur IA, Data Scientist',
      stack: ['Python', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'IA & ML',
      duration: '3 mois',
      team: '2 data scientists + 1 développeur',
      challenges: [
        'Traitement de gros volumes de données hétérogènes',
        'Création de modèles prédictifs précis avec données limitées',
        'Intégration temps réel avec les systèmes existants',
        'Interface utilisateur intuitive pour non-techniciens'
      ],
      solutions: [
        'Pipeline de données automatisé avec nettoyage et validation',
        'Ensemble de modèles ML avec validation croisée et hyperparameter tuning',
        'API FastAPI avec cache Redis pour performances optimales',
        'Dashboard React avec visualisations interactives et explications IA'
      ],
      results: [
        '92% de précision sur les prédictions',
        '+25% d\'amélioration des ventes',
        'Réduction de 40% des stocks dormants'
      ],
      features: [
        'Prédictions de ventes multi-horizons (1 semaine à 6 mois)',
        'Analyse des tendances et saisonnalités',
        'Recommandations automatisées de pricing',
        'Détection d\'anomalies dans les ventes',
        'Dashboard interactif avec visualisations avancées',
        'API REST pour intégration avec ERP/CRM'
      ],
      testimonial: {
        text: 'SmartPredict AI a révolutionné notre approche commerciale. Les prédictions sont d\'une précision remarquable et nous ont permis d\'optimiser nos stocks et d\'augmenter significativement nos ventes.',
        author: 'Jean-Baptiste Kone',
        position: 'Directeur Commercial, TechDistrib'
      }
    },
    {
      id: 'agrimobile',
      title: 'AgriMobile',
      description: 'Application mobile Flutter pour la plateforme AgriMarket avec géolocalisation, paiement mobile et notifications push',
      longDescription: 'AgriMobile est l\'application mobile compagnon de la plateforme AgriMarket, développée avec Flutter pour offrir une expérience native sur iOS et Android. Elle permet aux utilisateurs de découvrir des produits agricoles locaux, de passer commande et de suivre leurs livraisons en temps réel.',
      role: 'Développeur mobile, UI/UX',
      stack: ['Flutter', 'Firebase', 'Google Maps', 'Stripe', 'FCM'],
      image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile',
      duration: '2 mois',
      team: 'Solo + 1 designer UI',
      challenges: [
        'Performance optimale sur appareils Android bas de gamme',
        'Synchronisation offline/online transparente',
        'Intégration des paiements mobiles locaux (MTN, Moov)',
        'Géolocalisation précise pour livraisons rurales'
      ],
      solutions: [
        'Optimisation Flutter avec lazy loading et cache intelligent',
        'Base de données locale SQLite avec synchronisation différée',
        'SDK unifié pour tous les opérateurs de paiement mobile',
        'Algorithme de géolocalisation hybride GPS + réseau'
      ],
      results: [
        '50,000+ téléchargements en 6 mois',
        '4.7/5 étoiles sur les stores',
        '70% des commandes via mobile'
      ],
      features: [
        'Catalogue produits avec recherche et filtres avancés',
        'Géolocalisation des producteurs et calcul de distance',
        'Panier intelligent avec suggestions personnalisées',
        'Paiement mobile intégré (MTN Money, Moov Money)',
        'Suivi de commande en temps réel avec notifications',
        'Mode offline pour consultation des produits'
      ],
      testimonial: {
        text: 'L\'app AgriMobile a considérablement simplifié nos achats de produits locaux. L\'interface est intuitive et les livraisons sont toujours précises grâce à la géolocalisation.',
        author: 'Aminata Traore',
        position: 'Utilisatrice, Cotonou'
      }
    }
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white-soft py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-poppins font-bold text-3xl text-gray-anthracite mb-4">
            Projet non trouvé
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

  const getColorClasses = (category: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      'E-commerce': { bg: 'bg-orange-deep/10', text: 'text-orange-deep', border: 'border-orange-deep/20' },
      'SaaS': { bg: 'bg-blue-intense/10', text: 'text-blue-intense', border: 'border-blue-intense/20' },
      'Mobile': { bg: 'bg-orange-light/10', text: 'text-orange-light', border: 'border-orange-light/20' },
    };
    return colorMap[category] || colorMap['E-commerce'];
  };

  const colors = getColorClasses(project.category);

  return (
    <div className="min-h-screen bg-white-soft py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="group flex items-center gap-2 text-blue-gray hover:text-orange-deep transition-colors duration-300 mb-8 font-inter font-medium"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          Retour aux projets
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-up">
            <div className={`inline-flex items-center gap-2 ${colors.bg} ${colors.text} px-4 py-2 rounded-full text-sm font-medium mb-4`}>
              <div className={`w-2 h-2 ${colors.text.replace('text-', 'bg-')} rounded-full`}></div>
              {project.category}
            </div>
            
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-anthracite mb-6">
              {project.title}
            </h1>
            
            <p className="font-inter text-xl text-blue-gray leading-relaxed mb-8">
              {project.longDescription}
            </p>

            {/* Project Info */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="text-orange-deep" size={20} />
                <div>
                  <p className="font-inter text-sm text-blue-gray">Durée</p>
                  <p className="font-poppins font-semibold text-gray-anthracite">{project.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="text-blue-intense" size={20} />
                <div>
                  <p className="font-inter text-sm text-blue-gray">Équipe</p>
                  <p className="font-poppins font-semibold text-gray-anthracite">{project.team}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group bg-orange-deep hover:bg-orange-light text-white-soft px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <ExternalLink size={18} />
                Voir le projet
              </button>
              <button className="group bg-transparent hover:bg-blue-gray text-blue-gray hover:text-white-soft border-2 border-blue-gray px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 flex items-center gap-2">
                <Github size={18} />
                Code source
              </button>
            </div>
          </div>

          {/* Project Image */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-deep/20 to-blue-intense/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-poppins font-semibold text-2xl text-gray-anthracite mb-6 flex items-center gap-3">
            <Code className="text-orange-deep" size={24} />
            Technologies utilisées
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bg-white border border-green-light rounded-full px-4 py-2 font-inter text-blue-gray hover:border-orange-deep/30 hover:bg-orange-deep/5 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Challenges */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <h3 className="font-poppins font-semibold text-2xl text-gray-anthracite mb-6 flex items-center gap-3">
              <Lightbulb className="text-orange-light" size={24} />
              Défis relevés
            </h3>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-orange-deep/10">
                  <div className="w-6 h-6 bg-orange-deep/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-orange-deep rounded-full"></div>
                  </div>
                  <p className="font-inter text-blue-gray leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <h3 className="font-poppins font-semibold text-2xl text-gray-anthracite mb-6 flex items-center gap-3">
              <CheckCircle className="text-blue-intense" size={24} />
              Solutions apportées
            </h3>
            <div className="space-y-4">
              {project.solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-blue-intense/10">
                  <CheckCircle className="text-blue-intense flex-shrink-0 mt-0.5" size={20} />
                  <p className="font-inter text-blue-gray leading-relaxed">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <h3 className="font-poppins font-semibold text-2xl text-gray-anthracite mb-8 text-center">
            Fonctionnalités principales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-green-light hover:border-orange-deep/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-10 h-10 bg-orange-deep/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-deep/20 transition-colors duration-300">
                  <Star className="text-orange-deep" size={20} />
                </div>
                <p className="font-inter text-blue-gray leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
          <h3 className="font-poppins font-semibold text-2xl text-gray-anthracite mb-8 text-center">
            Résultats obtenus
          </h3>
          <div className="bg-gradient-to-br from-green-light to-white-soft rounded-2xl p-8 border border-orange-deep/10">
            <div className="grid md:grid-cols-3 gap-8">
              {project.results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-deep/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-orange-deep" size={24} />
                  </div>
                  <p className="font-inter text-blue-gray leading-relaxed">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        {project.testimonial && (
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '2.1s' }}>
            <div className="bg-gradient-to-r from-orange-deep/5 to-blue-intense/5 rounded-2xl p-8 border border-orange-deep/10 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="text-4xl text-orange-deep mb-4">"</div>
                <p className="font-inter text-lg text-blue-gray italic leading-relaxed mb-6">
                  {project.testimonial.text}
                </p>
                <div>
                  <p className="font-poppins font-semibold text-gray-anthracite">
                    {project.testimonial.author}
                  </p>
                  <p className="font-inter text-sm text-blue-gray">
                    {project.testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '2.4s' }}>
          <div className="bg-gradient-to-r from-orange-deep to-orange-light rounded-2xl p-8 text-white-soft">
            <h3 className="font-poppins font-bold text-2xl mb-4">
              Un projet similaire en tête ?
            </h3>
            <p className="font-inter text-lg mb-6 opacity-90">
              Discutons ensemble de vos objectifs et créons quelque chose d'exceptionnel
            </p>
            <Link
              to="/#contact"
              className="bg-white-soft hover:bg-white text-orange-deep px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-block"
            >
              Démarrons votre projet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
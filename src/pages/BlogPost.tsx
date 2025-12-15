import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Données des articles (en production, cela viendrait d'une API ou CMS)
  const blogPosts = [
    {
      slug: 'comment-choisir-technologie-web-2025',
      title: 'Comment choisir la bonne technologie web en 2025 ?',
      excerpt: 'Guide complet pour choisir entre React, Vue, Angular et les autres frameworks selon vos besoins business.',
      content: `
        <p>Le choix d'une technologie web est crucial pour le succès de votre projet. En 2025, le paysage technologique continue d'évoluer rapidement, et il devient de plus en plus important de faire le bon choix dès le départ.</p>

        <h2>Les critères essentiels pour choisir</h2>
        
        <h3>1. La complexité de votre projet</h3>
        <p>Pour un site vitrine simple, WordPress ou un générateur de site statique comme Gatsby peut suffire. Pour une application complexe avec beaucoup d'interactions, React ou Vue.js seront plus appropriés.</p>

        <h3>2. Votre équipe et vos ressources</h3>
        <p>Avez-vous déjà une équipe de développeurs ? Quelle est leur expertise ? Il vaut mieux choisir une technologie que votre équipe maîtrise plutôt que la dernière tendance.</p>

        <h3>3. La performance requise</h3>
        <p>Si la performance est critique (e-commerce, application métier), privilégiez des frameworks optimisés comme Next.js pour React ou Nuxt.js pour Vue.</p>

        <h2>React : Le choix sûr</h2>
        <p>React reste le framework le plus populaire en 2025. Ses avantages :</p>
        <ul>
          <li>Écosystème mature et riche</li>
          <li>Grande communauté de développeurs</li>
          <li>Flexibilité et réutilisabilité</li>
          <li>Support à long terme garanti</li>
        </ul>

        <h2>Vue.js : L'équilibre parfait</h2>
        <p>Vue.js offre un excellent compromis entre simplicité et puissance :</p>
        <ul>
          <li>Courbe d'apprentissage douce</li>
          <li>Documentation excellente</li>
          <li>Performance optimale</li>
          <li>Écosystème en croissance</li>
        </ul>

        <h2>Angular : Pour les grandes applications</h2>
        <p>Angular convient parfaitement aux applications d'entreprise :</p>
        <ul>
          <li>Framework complet "tout-en-un"</li>
          <li>TypeScript natif</li>
          <li>Architecture robuste</li>
          <li>Outils de développement avancés</li>
        </ul>

        <h2>Ma recommandation</h2>
        <p>En tant que développeur expérimenté, voici mes recommandations selon le contexte :</p>
        
        <ul>
          <li><strong>Startup/MVP :</strong> Next.js (React) pour la rapidité de développement</li>
          <li><strong>Site vitrine :</strong> Gatsby ou WordPress selon les besoins</li>
          <li><strong>Application métier :</strong> Vue.js ou Angular selon la complexité</li>
          <li><strong>E-commerce :</strong> Next.js avec Shopify ou WooCommerce</li>
        </ul>

        <p>Le plus important n'est pas de choisir la technologie la plus récente, mais celle qui correspond le mieux à vos objectifs business et à vos contraintes techniques.</p>

        <h2>Besoin d'aide pour votre projet ?</h2>
        <p>Si vous hésitez encore sur le choix de votre technologie, n'hésitez pas à me contacter. Je peux vous accompagner dans cette décision cruciale et développer votre solution avec la stack la plus adaptée.</p>
      `,
      category: 'Développement Web',
      author: 'Fortuné Aïounou',
      publishedAt: '2025-01-15',
      readTime: '8 min',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['React', 'Vue.js', 'Angular', 'Technologie'],
      featured: true
    },
    {
      slug: 'ia-pme-guide-pratique',
      title: 'IA pour les PME : Guide pratique pour commencer',
      excerpt: 'Comment intégrer l\'intelligence artificielle dans votre PME sans se ruiner ? Exemples concrets et ROI.',
      content: `
        <p>L'intelligence artificielle n'est plus réservée aux grandes entreprises. En 2025, les PME peuvent facilement intégrer des solutions IA pour automatiser leurs processus et booster leur productivité.</p>

        <h2>Pourquoi l'IA est-elle importante pour les PME ?</h2>
        <p>L'IA permet aux petites entreprises de :</p>
        <ul>
          <li>Automatiser les tâches répétitives</li>
          <li>Améliorer le service client</li>
          <li>Optimiser les processus métier</li>
          <li>Prendre des décisions basées sur les données</li>
        </ul>

        <h2>Par où commencer ?</h2>
        
        <h3>1. Identifiez vos besoins</h3>
        <p>Avant d'investir dans l'IA, identifiez les processus qui vous font perdre du temps :</p>
        <ul>
          <li>Service client répétitif</li>
          <li>Tri et classification de documents</li>
          <li>Analyse de données</li>
          <li>Gestion des stocks</li>
        </ul>

        <h3>2. Solutions IA accessibles</h3>
        <p>Voici des solutions que je recommande pour débuter :</p>
        
        <h4>Chatbots intelligents</h4>
        <p>Un chatbot peut répondre à 80% des questions clients courantes, 24h/24. Coût : 200-500€/mois selon la complexité.</p>

        <h4>Analyse prédictive</h4>
        <p>Prédisez vos ventes, optimisez vos stocks, anticipez les pannes. ROI moyen : 300% la première année.</p>

        <h4>Automatisation des emails</h4>
        <p>Personnalisez vos campagnes email selon le comportement client. Augmentation moyenne du taux d'ouverture : +40%.</p>

        <h2>Cas concret : PME de distribution</h2>
        <p>J'ai récemment aidé une PME de distribution à implémenter :</p>
        <ul>
          <li>Un système de prédiction des ventes (+25% de précision)</li>
          <li>Un chatbot pour le SAV (-60% de tickets support)</li>
          <li>Une analyse automatique des retours clients</li>
        </ul>
        <p><strong>Résultat :</strong> 40% de gain de productivité et ROI de 280% en 8 mois.</p>

        <h2>Budget et ROI</h2>
        <p>Contrairement aux idées reçues, l'IA peut être accessible :</p>
        <ul>
          <li><strong>Budget initial :</strong> 5,000-15,000€ pour une solution complète</li>
          <li><strong>ROI moyen :</strong> 200-400% la première année</li>
          <li><strong>Temps de retour :</strong> 6-12 mois</li>
        </ul>

        <h2>Mes conseils pour réussir</h2>
        <ol>
          <li>Commencez petit avec un projet pilote</li>
          <li>Formez votre équipe aux nouveaux outils</li>
          <li>Mesurez les résultats régulièrement</li>
          <li>Itérez et améliorez continuellement</li>
        </ol>

        <h2>Prêt à franchir le pas ?</h2>
        <p>L'IA n'est plus un luxe mais une nécessité pour rester compétitif. Si vous souhaitez explorer les possibilités pour votre entreprise, contactez-moi pour un audit gratuit de vos processus.</p>
      `,
      category: 'IA & ML',
      author: 'Fortuné Aïounou',
      publishedAt: '2025-01-12',
      readTime: '12 min',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['IA', 'PME', 'Automatisation', 'ROI'],
      featured: true
    }
  ];

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white-soft py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-poppins font-bold text-3xl text-gray-anthracite mb-4">
            Article non trouvé
          </h1>
          <Link
            to="/blog"
            className="text-orange-deep hover:text-orange-light font-inter font-medium"
          >
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Développement Web': 'bg-orange-deep/10 text-orange-deep',
      'Mobile': 'bg-blue-intense/10 text-blue-intense',
      'IA & ML': 'bg-orange-light/10 text-orange-light',
      'Design': 'bg-blue-gray/10 text-blue-gray',
      'Business': 'bg-green-500/10 text-green-600'
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
  };

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  return (
    <div className="min-h-screen bg-white-soft pt-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/blog"
          className="group flex items-center gap-2 text-blue-gray hover:text-orange-deep transition-colors duration-300 font-inter font-medium"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          Retour au blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-2xl mb-8 animate-fade-in-up">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-anthracite/60 to-transparent"></div>
          <div className={`absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
            {post.category}
          </div>
        </div>

        {/* Article Meta */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-blue-gray mb-6">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span className="font-inter">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span className="font-inter">{new Date(post.publishedAt).toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="font-inter">{post.readTime}</span>
            </div>
          </div>

          <p className="font-inter text-xl text-blue-gray leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-green-light text-blue-gray px-3 py-1 rounded-full text-sm font-inter border border-orange-deep/10"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 pb-8 border-b border-green-light">
            <span className="font-inter text-blue-gray font-medium flex items-center gap-2">
              <Share2 size={16} />
              Partager :
            </span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <Twitter size={16} />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <div className="mt-16 p-8 bg-gradient-to-br from-orange-deep/5 to-blue-intense/5 rounded-2xl border border-orange-deep/10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-orange-deep/10 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="text-orange-deep" size={32} />
            </div>
            <div>
              <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-3">
                À propos de l'auteur
              </h3>
              <p className="font-inter text-blue-gray leading-relaxed mb-4">
                <strong>Fortuné Aïounou</strong> est développeur full-stack, designer UI/UX et ingénieur IA. 
                Avec plus de 5 ans d'expérience, il aide les PME et startups à transformer leurs idées 
                en solutions digitales performantes.
              </p>
              <Link
                to="/contact"
                className="bg-orange-deep hover:bg-orange-light text-white-soft px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 inline-block"
              >
                Travaillons ensemble
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles CTA */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="font-poppins font-bold text-2xl text-gray-anthracite mb-6">
            Découvrez d'autres articles
          </h3>
          <Link
            to="/blog"
            className="bg-transparent hover:bg-orange-deep text-orange-deep hover:text-white-soft border-2 border-orange-deep px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 inline-block"
          >
            Voir tous les articles
          </Link>
        </div>
      </article>

      {/* Newsletter CTA */}
      <section className="py-16 mt-16 bg-gradient-to-r from-orange-deep to-orange-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl text-white-soft mb-6">
            📧 Ne ratez aucun article
          </h2>
          <p className="font-inter text-lg text-white-soft/90 mb-8">
            Recevez mes derniers conseils tech directement dans votre boîte mail
          </p>
          <div className="flex max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20 font-inter"
            />
            <button className="bg-white-soft hover:bg-white text-orange-deep px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
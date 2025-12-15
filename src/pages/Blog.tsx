import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, User, Search } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Tous', 'Développement Web', 'Mobile', 'IA & ML', 'Design', 'Business'];

  const blogPosts = [
    { slug: 'comment-choisir-technologie-web-2025', title: 'Comment choisir la bonne technologie web en 2025 ?', excerpt: 'Guide complet pour choisir entre React, Vue, Angular selon vos besoins business.', category: 'Développement Web', author: 'Fortuné Aïounou', publishedAt: '2025-01-15', readTime: '8 min', image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800', tags: ['React', 'Vue.js', 'Angular'], featured: true },
    { slug: 'ia-pme-guide-pratique', title: 'IA pour les PME : Guide pratique pour commencer', excerpt: 'Comment intégrer l\'intelligence artificielle dans votre PME sans se ruiner ?', category: 'IA & ML', author: 'Fortuné Aïounou', publishedAt: '2025-01-12', readTime: '12 min', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', tags: ['IA', 'PME', 'Automatisation'], featured: true },
    { slug: 'design-ui-ux-erreurs-eviter', title: '10 erreurs UI/UX qui tuent vos conversions', excerpt: 'Les erreurs de design les plus courantes qui font fuir vos clients.', category: 'Design', author: 'Fortuné Aïounou', publishedAt: '2025-01-10', readTime: '6 min', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800', tags: ['UI/UX', 'Conversion', 'Design'], featured: false },
    { slug: 'flutter-vs-react-native-2025', title: 'Flutter vs React Native : Le match 2025', excerpt: 'Comparaison détaillée des deux frameworks mobiles les plus populaires.', category: 'Mobile', author: 'Fortuné Aïounou', publishedAt: '2025-01-08', readTime: '10 min', image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800', tags: ['Flutter', 'React Native', 'Mobile'], featured: false },
    { slug: 'seo-site-web-2025-guide', title: 'SEO en 2025 : Ce qui marche vraiment', excerpt: 'Les nouvelles règles du référencement Google et comment optimiser votre site.', category: 'Développement Web', author: 'Fortuné Aïounou', publishedAt: '2025-01-05', readTime: '15 min', image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800', tags: ['SEO', 'Google', 'Référencement'], featured: false },
    { slug: 'startup-mvp-erreurs-eviter', title: 'Startup : 5 erreurs fatales dans votre MVP', excerpt: 'Les pièges les plus courants lors du développement d\'un MVP.', category: 'Business', author: 'Fortuné Aïounou', publishedAt: '2025-01-03', readTime: '9 min', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', tags: ['Startup', 'MVP', 'Business'], featured: false }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Développement Web': 'bg-orange-deep/10 text-orange-deep',
      'Mobile': 'bg-blue-intense/10 text-blue-intense',
      'IA & ML': 'bg-orange-light/10 text-orange-light',
      'Design': 'bg-blue-gray/10 text-blue-gray',
      'Business': 'bg-green-500/10 text-green-600'
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-white-soft">
      {/* Hero Section avec image */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Blog" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-anthracite/90 via-gray-anthracite/85 to-gray-anthracite/70"></div>
        </div>
        
        <div className="container-main relative z-10 py-32 text-center">
          <p className="text-orange-deep font-inter font-semibold mb-4 animate-fade-in-up">BLOG</p>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white-soft mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Insights & <span className="text-orange-deep">Actualités</span>
          </h1>
          <p className="font-inter text-xl text-white-soft/90 leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Conseils, tutoriels et retours d'expérience sur le développement web, mobile, l'IA et le design.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-gray" size={18} />
              <input type="text" placeholder="Rechercher un article..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 border-0 rounded-lg focus:ring-2 focus:ring-orange-deep/20 transition-colors duration-200 font-inter text-sm shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 bg-white-soft border-b border-green-light">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button key={category} onClick={() => setSelectedCategory(category)} className={`px-5 py-2.5 rounded-full font-inter font-medium text-sm transition-all duration-300 ${selectedCategory === category ? 'bg-orange-deep text-white-soft shadow-lg' : 'bg-white text-blue-gray border border-green-light hover:border-orange-deep/30'}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === 'Tous' && !searchTerm && (
        <section className="section-padding bg-green-light">
          <div className="container-main">
            <h2 className="font-poppins font-bold text-2xl text-gray-anthracite mb-8 flex items-center gap-2">
              <Tag className="text-orange-deep" size={24} /> Articles à la une
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group card-base card-hover overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="relative overflow-hidden h-56">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-anthracite/70 to-transparent"></div>
                    <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>{post.category}</div>
                    <div className="absolute top-3 right-3 bg-orange-deep text-white-soft px-2.5 py-1 rounded-full text-xs font-medium">À la une</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-poppins font-bold text-xl text-white-soft mb-1 line-clamp-2">{post.title}</h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="font-inter text-blue-gray text-sm mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center gap-4 text-xs text-blue-gray mb-3">
                      <div className="flex items-center gap-1"><User size={12} /><span>{post.author}</span></div>
                      <div className="flex items-center gap-1"><Calendar size={12} /><span>{new Date(post.publishedAt).toLocaleDateString('fr-FR')}</span></div>
                      <div className="flex items-center gap-1"><Clock size={12} /><span>{post.readTime}</span></div>
                    </div>

                    <div className="flex items-center text-orange-deep group-hover:text-orange-light transition-colors duration-300">
                      <span className="font-inter font-medium text-sm">Lire l'article</span>
                      <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="section-padding bg-white-soft">
        <div className="container-main">
          {featuredPosts.length > 0 && selectedCategory === 'Tous' && !searchTerm && (
            <h2 className="font-poppins font-bold text-2xl text-gray-anthracite mb-8">Tous les articles</h2>
          )}
          
          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group card-base card-hover overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative overflow-hidden h-44">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-anthracite/50 to-transparent"></div>
                    <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>{post.category}</div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-poppins font-bold text-base text-gray-anthracite mb-2 group-hover:text-orange-deep transition-colors duration-300 line-clamp-2">{post.title}</h3>
                    <p className="font-inter text-blue-gray text-sm mb-3 leading-relaxed line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-blue-gray mb-3">
                      <div className="flex items-center gap-1"><Calendar size={12} /><span>{new Date(post.publishedAt).toLocaleDateString('fr-FR')}</span></div>
                      <div className="flex items-center gap-1"><Clock size={12} /><span>{post.readTime}</span></div>
                    </div>

                    <div className="flex items-center text-orange-deep group-hover:text-orange-light transition-colors duration-300">
                      <span className="font-inter font-medium text-sm">Lire</span>
                      <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-orange-deep/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Search className="text-orange-deep" size={28} />
              </div>
              <h3 className="font-poppins font-bold text-lg text-gray-anthracite mb-3">Aucun article trouvé</h3>
              <p className="font-inter text-blue-gray text-sm mb-5">Essayez de modifier vos critères de recherche.</p>
              <button onClick={() => { setSelectedCategory('Tous'); setSearchTerm(''); }} className="btn-primary text-sm">
                Voir tous les articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-2xl text-white-soft mb-4">📧 Restez informé</h2>
          <p className="font-inter text-white-soft/90 mb-6">Recevez mes derniers articles et conseils tech directement dans votre boîte mail</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input type="email" placeholder="votre@email.com" className="flex-1 px-4 py-2.5 rounded-lg border-0 focus:ring-2 focus:ring-white/20 font-inter text-sm" />
            <button className="bg-white-soft hover:bg-white text-orange-deep px-5 py-2.5 rounded-lg font-inter font-semibold text-sm transition-all duration-300">S'abonner</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

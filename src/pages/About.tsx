import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    { title: 'Résultats avant tout', description: 'Chaque ligne de code doit servir votre business. Pas de fioritures, que du concret.', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Transparence totale', description: 'Vous savez exactement où en est votre projet, à chaque étape. Zéro surprise.', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Innovation pragmatique', description: 'Les dernières technologies, oui. Mais seulement si elles apportent une vraie valeur.', image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const journey = [
    { year: '2019', title: 'Les fondations', description: 'Diplôme en systèmes informatiques. Premiers sites web pour des PME locales.' },
    { year: '2020', title: 'L\'accélération', description: 'Lancement en freelance. 15 projets livrés la première année.' },
    { year: '2022', title: 'La spécialisation', description: 'Formation avancée en Flutter, Kotlin et Machine Learning. Cap sur le mobile et l\'IA.' },
    { year: '2025', title: 'L\'expertise', description: '+50 projets, des clients au Bénin et à l\'international. Une méthode qui a fait ses preuves.' }
  ];

  const technologies = [
    { name: 'React & Next.js', image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Flutter & Kotlin', image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Python & TensorFlow', image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Figma & Design', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ];

  const process = [
    { step: '01', title: 'Écoute', description: 'Je comprends votre business, vos objectifs, vos contraintes.' },
    { step: '02', title: 'Stratégie', description: 'On définit ensemble la solution optimale pour votre budget.' },
    { step: '03', title: 'Création', description: 'Développement agile avec des points réguliers. Vous voyez l\'avancement.' },
    { step: '04', title: 'Livraison', description: 'Mise en ligne, formation et support. Vous êtes autonome.' }
  ];

  return (
    <div className="min-h-screen bg-white-soft">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Fortuné Aïounou - Développeur web freelance Bénin" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-anthracite/95 via-gray-anthracite/85 to-gray-anthracite/70"></div>
        </div>
        
        <div className="container-main relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-deep font-inter font-semibold mb-4">À PROPOS</p>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white-soft mb-6">
                Le développeur qui comprend votre <span className="text-orange-deep">business</span>
              </h1>
              <p className="font-inter text-xl text-white-soft/90 leading-relaxed mb-8">
                Je ne suis pas juste un technicien qui code. Je suis un partenaire qui comprend vos enjeux business 
                et crée des solutions digitales qui génèrent des résultats concrets.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Discutons de votre projet <ArrowRight size={18} />
                </Link>
                <Link to="/projects" className="bg-white/10 hover:bg-white/20 text-white-soft border border-white/30 px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300">
                  Voir mes réalisations
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fortuné Aïounou - Expert développement web Cotonou" className="w-80 h-96 object-cover rounded-2xl shadow-2xl mx-auto" />
                <div className="absolute -bottom-6 -left-6 bg-orange-deep text-white-soft rounded-xl p-6 shadow-xl">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Années d'expertise</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
                  <div className="text-3xl font-bold text-orange-deep">50+</div>
                  <div className="text-sm text-blue-gray">Projets livrés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white-soft">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Développeur web au travail" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
            </div>
            
            <div>
              <p className="text-orange-deep font-inter font-semibold mb-4">MON HISTOIRE</p>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6">
                Pourquoi j'ai choisi ce <span className="text-orange-deep">métier</span>
              </h2>
              <p className="font-inter text-lg text-blue-gray leading-relaxed mb-6">
                J'ai vu trop d'entrepreneurs investir dans des sites web qui ne leur rapportent rien. 
                Des applications qui ne sont jamais utilisées. Des designs qui ne convertissent pas.
              </p>
              <p className="font-inter text-lg text-blue-gray leading-relaxed mb-6">
                <strong className="text-gray-anthracite">Ma mission ?</strong> Créer des solutions digitales qui génèrent un vrai retour sur investissement. 
                Pas des projets techniques pour faire joli, mais des outils qui font croître votre business.
              </p>
              <div className="bg-green-light rounded-xl p-6 border-l-4 border-orange-deep">
                <p className="font-inter text-gray-anthracite">
                  <strong>Ma promesse :</strong> Chaque euro investi dans votre projet digital doit vous en rapporter plusieurs. 
                  Sinon, je n'ai pas fait mon travail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-green-light">
        <div className="container-main">
          <div className="text-center mb-16">
            <p className="text-orange-deep font-inter font-semibold mb-4">MES VALEURS</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite">
              Ce qui guide chacun de mes <span className="text-orange-deep">projets</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img src={value.image} alt={value.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-anthracite/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-poppins font-bold text-xl text-white-soft">{value.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-inter text-blue-gray leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-padding bg-gray-anthracite">
        <div className="container-main">
          <div className="text-center mb-16">
            <p className="text-orange-deep font-inter font-semibold mb-4">MON PARCOURS</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white-soft">
              5 ans d'évolution <span className="text-orange-deep">constante</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((step, index) => (
              <div key={step.year} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <div className="text-4xl font-bold text-orange-deep mb-4">{step.year}</div>
                  <h3 className="font-poppins font-bold text-lg text-white-soft mb-2">{step.title}</h3>
                  <p className="font-inter text-white-soft/70 text-sm">{step.description}</p>
                </div>
                {index < journey.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-deep"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-white-soft">
        <div className="container-main">
          <div className="text-center mb-16">
            <p className="text-orange-deep font-inter font-semibold mb-4">MES OUTILS</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite">
              Les technologies que je <span className="text-orange-deep">maîtrise</span>
            </h2>
            <p className="font-inter text-lg text-blue-gray mt-4 max-w-2xl mx-auto">
              Je choisis toujours la technologie la plus adaptée à votre projet, pas celle qui est à la mode.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {technologies.map((tech) => (
              <div key={tech.name} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-40">
                  <img src={tech.image} alt={tech.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-anthracite/80 to-gray-anthracite/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-poppins font-bold text-lg text-white-soft text-center px-2">{tech.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {['Symfony', 'Laravel', 'PostgreSQL', 'Docker', 'AWS', 'Firebase', 'Node.js'].map((tech) => (
              <span key={tech} className="bg-green-light text-blue-gray px-4 py-2 rounded-full font-inter text-sm border border-orange-deep/10">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-green-light">
        <div className="container-main">
          <div className="text-center mb-16">
            <p className="text-orange-deep font-inter font-semibold mb-4">MA MÉTHODE</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite">
              Un processus simple et <span className="text-orange-deep">efficace</span>
            </h2>
            <p className="font-inter text-lg text-blue-gray mt-4 max-w-2xl mx-auto">
              Pas de jargon technique, pas de surprises. Vous savez exactement ce qui se passe à chaque étape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                  <div className="text-5xl font-bold text-orange-deep/20 mb-4">{item.step}</div>
                  <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-3">{item.title}</h3>
                  <p className="font-inter text-blue-gray">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-orange-deep" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Collaboration projet digital" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-deep/95 via-orange-deep/90 to-orange-light/85"></div>
        </div>

        <div className="container-main relative z-10 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white-soft mb-6">
            Prêt à donner vie à votre projet ?
          </h2>
          <p className="font-inter text-xl text-white-soft/90 mb-8 max-w-2xl mx-auto">
            Premier échange gratuit et sans engagement. On discute de votre projet, je vous donne mon avis honnête 
            et on voit si on peut travailler ensemble.
          </p>
          <Link to="/contact" className="bg-white-soft hover:bg-white text-orange-deep px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            Réserver un appel gratuit <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

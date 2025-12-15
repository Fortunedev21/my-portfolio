import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Target, Zap } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Code, title: 'Simplicité', description: 'Des solutions élégantes qui résolvent des problèmes complexes de manière simple et intuitive.' },
    { icon: Target, title: 'Impact', description: 'Chaque projet doit apporter une valeur concrète et mesurable à votre business.' },
    { icon: Zap, title: 'Innovation', description: 'J\'utilise les dernières technologies pour créer des solutions modernes et performantes.' }
  ];

  const journey = [
    { year: '2019', title: 'Formation en Systèmes Informatiques', description: 'Diplôme en développement et administration systèmes' },
    { year: '2020', title: 'Premiers projets freelance', description: 'Développement de sites web et identités visuelles' },
    { year: '2022', title: 'Spécialisation Mobile & IA', description: 'Formation avancée en Flutter, Kotlin et Machine Learning' },
    { year: '2025', title: 'Expert Full-Stack & IA', description: 'Plus de 50 projets réalisés, expertise reconnue' }
  ];

  const technologies = [
    { name: 'React', logo: '⚛️' }, { name: 'Symfony', logo: '🎵' }, { name: 'Flutter', logo: '💙' }, { name: 'Python', logo: '🐍' },
    { name: 'TensorFlow', logo: '🧠' }, { name: 'PostgreSQL', logo: '🐘' }, { name: 'Figma', logo: '🎨' }, { name: 'Docker', logo: '🐳' }
  ];

  const workingMethod = [
    { step: '1', title: 'Écoute & Analyse', description: 'Je prends le temps de comprendre vos besoins et objectifs.' },
    { step: '2', title: 'Stratégie & Conception', description: 'Définition de la solution optimale avec architecture et design.' },
    { step: '3', title: 'Développement Agile', description: 'Développement itératif avec points réguliers.' },
    { step: '4', title: 'Tests & Optimisation', description: 'Tests rigoureux et optimisation des performances.' },
    { step: '5', title: 'Livraison & Support', description: 'Mise en production et accompagnement post-lancement.' }
  ];

  return (
    <div className="min-h-screen bg-white-soft">
      {/* Hero Section avec image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="À propos" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-anthracite/90 via-gray-anthracite/80 to-gray-anthracite/70"></div>
        </div>
        
        <div className="container-main relative z-10 py-32">
          <div className="max-w-3xl">
            <p className="text-orange-deep font-inter font-semibold mb-4 animate-fade-in-up">À PROPOS</p>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white-soft mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Qui suis-<span className="text-orange-deep">je</span> ?
            </h1>
            <p className="font-inter text-xl text-white-soft/90 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Développeur full-stack, designer UI/UX et ingénieur IA basé au Bénin. 
              Je crée des solutions digitales qui transforment les idées en succès concrets.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/contact" className="btn-primary">Travaillons ensemble</Link>
              <Link to="/projects" className="bg-white/10 hover:bg-white/20 text-white-soft border border-white/30 px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300">
                Voir mes projets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation personnelle */}
      <section className="section-padding bg-white-soft">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-orange-deep/20 to-blue-intense/20 rounded-2xl blur-lg"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fortuné Aïounou" className="w-full h-96 object-cover rounded-xl" />
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                    <p className="font-poppins font-semibold text-gray-anthracite">Fortuné Aïounou</p>
                    <p className="font-inter text-blue-gray text-sm">Full-Stack Developer & AI Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="section-title mb-6">Mon <span className="text-orange-deep">histoire</span></h2>
              <div className="space-y-4 font-inter text-blue-gray leading-relaxed">
                <p>
                  <strong className="text-orange-deep">Pourquoi je fais ça ?</strong> Parce que j'ai vu trop d'entreprises 
                  perdre du temps et de l'argent avec des solutions digitales qui ne fonctionnent pas.
                </p>
                <p>
                  Ma mission est de créer des outils qui <em>marchent vraiment</em> et qui apportent 
                  une valeur concrète à votre business.
                </p>
                <div className="bg-green-light p-5 rounded-xl border-l-4 border-orange-deep">
                  <p className="flex items-start gap-3">
                    <Target className="text-orange-deep mt-1 flex-shrink-0" size={20} />
                    <span><strong className="text-gray-anthracite">Ma philosophie :</strong> Chaque ligne de code doit servir un objectif business clair.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-green-light">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Mes <span className="text-orange-deep">Valeurs</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card-base card-hover text-center p-8 animate-bounce-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="w-14 h-14 bg-orange-deep/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="text-orange-deep" size={28} />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-3">{value.title}</h3>
                  <p className="font-inter text-blue-gray leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-padding bg-white-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Mon <span className="text-blue-intense">Parcours</span></h2>
          </div>
          <div className="space-y-6">
            {journey.map((step, index) => (
              <div key={step.year} className="flex items-start gap-5 animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 bg-blue-intense/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-poppins font-bold text-blue-intense text-sm">{step.year}</span>
                </div>
                <div className="card-base p-5 flex-1">
                  <h3 className="font-poppins font-bold text-lg text-gray-anthracite mb-1">{step.title}</h3>
                  <p className="font-inter text-blue-gray">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-green-light">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Technologies <span className="text-orange-deep">Maîtrisées</span></h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="card-base card-hover text-center p-4 animate-bounce-in" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="text-2xl mb-1">{tech.logo}</div>
                <p className="font-inter text-xs text-blue-gray font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Method */}
      <section className="section-padding bg-white-soft">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Comment je <span className="text-blue-intense">travaille</span></h2>
            <p className="section-subtitle">Une méthode éprouvée pour garantir le succès de votre projet</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {workingMethod.map((method, index) => (
              <div key={method.step} className="text-center animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-12 h-12 bg-orange-deep text-white-soft rounded-full flex items-center justify-center mx-auto mb-3 font-poppins font-bold">
                  {method.step}
                </div>
                <h3 className="font-poppins font-semibold text-base text-gray-anthracite mb-2">{method.title}</h3>
                <p className="font-inter text-blue-gray text-sm leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container-main text-center">
          <h2 className="font-poppins font-bold text-3xl text-white-soft mb-4">Travaillons ensemble</h2>
          <p className="font-inter text-lg text-white-soft/90 mb-6 max-w-xl mx-auto">
            Vous avez un projet en tête ? Discutons-en et créons quelque chose d'exceptionnel
          </p>
          <Link to="/contact" className="bg-white-soft hover:bg-white text-orange-deep px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-block">
            📩 Travaillons ensemble
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

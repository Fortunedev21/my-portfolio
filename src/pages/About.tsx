import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Code, Palette, Target, Award, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Code,
      title: 'Simplicité',
      description: 'Des solutions élégantes qui résolvent des problèmes complexes de manière simple et intuitive.'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Chaque projet doit apporter une valeur concrète et mesurable à votre business.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'J\'utilise les dernières technologies pour créer des solutions modernes et performantes.'
    }
  ];

  const journey = [
    {
      year: '2019',
      title: 'Formation en Systèmes Informatiques',
      description: 'Diplôme en développement et administration systèmes'
    },
    {
      year: '2020',
      title: 'Premiers projets freelance',
      description: 'Développement de sites web et identités visuelles'
    },
    {
      year: '2022',
      title: 'Spécialisation Mobile & IA',
      description: 'Formation avancée en Flutter, Kotlin et Machine Learning'
    },
    {
      year: '2025',
      title: 'Expert Full-Stack & IA',
      description: 'Plus de 50 projets réalisés, expertise reconnue'
    }
  ];

  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'Symfony', logo: '🎵' },
    { name: 'Flutter', logo: '💙' },
    { name: 'Python', logo: '🐍' },
    { name: 'TensorFlow', logo: '🧠' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'Figma', logo: '🎨' },
    { name: 'Docker', logo: '🐳' }
  ];

  const workingMethod = [
    {
      step: '1',
      title: 'Écoute & Analyse',
      description: 'Je prends le temps de comprendre vos besoins, vos objectifs et vos contraintes.'
    },
    {
      step: '2',
      title: 'Stratégie & Conception',
      description: 'Définition de la solution optimale avec architecture technique et design.'
    },
    {
      step: '3',
      title: 'Développement Agile',
      description: 'Développement itératif avec points réguliers et livraisons fréquentes.'
    },
    {
      step: '4',
      title: 'Tests & Optimisation',
      description: 'Tests rigoureux, optimisation des performances et correction des bugs.'
    },
    {
      step: '5',
      title: 'Livraison & Support',
      description: 'Mise en production, formation et accompagnement post-lancement.'
    }
  ];

  return (
    <div className="min-h-screen bg-white-soft pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-light via-white-soft to-green-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slide-up">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-anthracite mb-6">
                Qui suis-<span className="text-orange-deep">je</span> ?
              </h1>
              
              <div className="space-y-6 font-inter text-lg text-blue-gray leading-relaxed">
                <p className="animate-fade-in-delay-1">
                  Je m'appelle <strong className="text-gray-anthracite">Fortuné Aïounou</strong>, 
                  développeur full-stack, designer UI/UX et ingénieur IA basé au Bénin.
                </p>
                
                <p className="animate-fade-in-delay-2">
                  <strong className="text-orange-deep">Pourquoi je fais ça ?</strong> Parce que j'ai vu trop d'entreprises 
                  perdre du temps et de l'argent avec des solutions digitales qui ne fonctionnent pas. 
                  Ma mission est de créer des outils qui <em>marchent vraiment</em> et qui apportent 
                  une valeur concrète à votre business.
                </p>
                
                <div className="bg-green-light p-6 rounded-lg border-l-4 border-orange-deep animate-fade-in-delay-3">
                  <p className="flex items-start gap-3">
                    <Target className="text-orange-deep mt-1 flex-shrink-0" size={20} />
                    <strong>Ma philosophie :</strong> Chaque ligne de code, chaque pixel, chaque algorithme 
                    doit servir un objectif business clair. Pas de fioritures inutiles, 
                    que des solutions qui génèrent des résultats.
                  </p>
                </div>
                
                <p className="text-brown-dark font-semibold animate-fade-in-delay-4">
                  → Aujourd'hui, je combine développement web/mobile, design et intelligence artificielle 
                  pour créer des solutions digitales complètes et innovantes.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="relative animate-slide-up-delay">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-deep/20 to-blue-intense/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Fortuné Aïounou - Développeur Full-Stack & Ingénieur IA"
                    className="w-full h-96 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                    <p className="font-poppins font-semibold text-gray-anthracite text-sm">
                      Fortuné Aïounou
                    </p>
                    <p className="font-inter text-blue-gray text-xs">
                      Full-Stack Developer & AI Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl text-gray-anthracite mb-6">
              Mes <span className="text-orange-deep">Valeurs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-bounce-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-orange-deep/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-orange-deep" size={32} />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-gray-anthracite mb-4">
                    {value.title}
                  </h3>
                  <p className="font-inter text-blue-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 bg-green-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl text-gray-anthracite mb-6">
              Mon <span className="text-blue-intense">Parcours</span>
            </h2>
          </div>

          <div className="space-y-8">
            {journey.map((step, index) => (
              <div
                key={step.year}
                className="flex items-start gap-6 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-blue-intense/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-poppins font-bold text-blue-intense">{step.year}</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg flex-1 hover:shadow-xl transition-all duration-300">
                  <h3 className="font-poppins font-bold text-lg text-gray-anthracite mb-2">
                    {step.title}
                  </h3>
                  <p className="font-inter text-blue-gray">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl text-gray-anthracite mb-6">
              Technologies <span className="text-orange-deep">Maîtrisées</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-bounce-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-2">{tech.logo}</div>
                <p className="font-inter text-sm text-blue-gray font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Method */}
      <section className="py-16 bg-green-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl text-gray-anthracite mb-6">
              Comment je <span className="text-blue-intense">travaille</span>
            </h2>
            <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto">
              Une méthode éprouvée pour garantir le succès de votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {workingMethod.map((method, index) => (
              <div
                key={method.step}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-orange-deep text-white-soft rounded-full flex items-center justify-center mx-auto mb-4 font-poppins font-bold text-xl">
                  {method.step}
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-anthracite mb-3">
                  {method.title}
                </h3>
                <p className="font-inter text-blue-gray text-sm leading-relaxed">
                  {method.description}
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
            Travaillons ensemble
          </h2>
          <p className="font-inter text-lg text-white-soft/90 mb-8">
            Vous avez un projet en tête ? Discutons-en et créons quelque chose d'exceptionnel
          </p>
          <Link
            to="/contact"
            className="bg-white-soft hover:bg-white text-orange-deep px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-block"
          >
            📩 Travaillons ensemble
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
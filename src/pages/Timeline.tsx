import React from 'react';
import { GraduationCap, Briefcase, Award, Rocket } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      year: '2017',
      title: 'Debut de l\'aventure',
      description: 'Decouverte de la programmation et premiers projets personnels. Passion immediate pour le developpement web.',
      icon: GraduationCap,
      type: 'education'
    },
    {
      year: '2019',
      title: 'Diplome en Systemes Informatiques',
      description: 'Obtention du diplome avec mention. Maitrise des fondamentaux du developpement et des bases de donnees.',
      icon: GraduationCap,
      type: 'education'
    },
    {
      year: '2020',
      title: 'Lancement en Freelance',
      description: 'Debut de l\'activite independante. 15 projets livres la premiere annee pour des PME locales.',
      icon: Rocket,
      type: 'career'
    },
    {
      year: '2021',
      title: 'Premier client international',
      description: 'Collaboration avec une startup francaise. Ouverture vers le marche europeen.',
      icon: Briefcase,
      type: 'career'
    },
    {
      year: '2022',
      title: 'Specialisation Mobile & IA',
      description: 'Formation avancee en Flutter, Kotlin et Machine Learning. Nouveaux services proposes.',
      icon: GraduationCap,
      type: 'education'
    },
    {
      year: '2023',
      title: 'Cap des 30 projets',
      description: 'Diversification du portfolio : e-commerce, applications metier, solutions IA.',
      icon: Award,
      type: 'milestone'
    },
    {
      year: '2024',
      title: 'Reconnaissance et croissance',
      description: 'Clients fideles, recommandations, projets de plus en plus ambitieux.',
      icon: Briefcase,
      type: 'career'
    },
    {
      year: '2025',
      title: 'Aujourd\'hui',
      description: '+50 projets livres, une expertise reconnue et une methode eprouvee. Pret pour de nouveaux defis.',
      icon: Rocket,
      type: 'milestone'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-blue-500';
      case 'career': return 'bg-green-500';
      case 'milestone': return 'bg-orange-deep';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-white-soft pt-32 pb-20">
      <div className="container-main max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-deep font-inter font-semibold mb-4">PARCOURS</p>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-anthracite mb-6">
            Mon <span className="text-orange-deep">evolution</span>
          </h1>
          <p className="font-inter text-blue-gray text-lg">
            De la decouverte du code a l'expertise : retour sur les etapes cles de mon parcours.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span className="font-inter text-sm text-blue-gray">Formation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="font-inter text-sm text-blue-gray">Carriere</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-deep"></span>
            <span className="font-inter text-sm text-blue-gray">Etape cle</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <span className="inline-block font-poppins font-bold text-orange-deep mb-2">{event.year}</span>
                      <h3 className="font-poppins font-semibold text-xl text-gray-anthracite mb-2">{event.title}</h3>
                      <p className="font-inter text-blue-gray">{event.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full ${getTypeColor(event.type)} flex items-center justify-center shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

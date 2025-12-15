import React, { useEffect, useRef, useState } from 'react';
import { 
  Server, 
  Code, 
  Database, 
  Smartphone, 
  Palette, 
  Shield, 
  GitBranch, 
  Layers,
  Globe,
  Settings
} from 'lucide-react';

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate items with staggered delay
            skillCategories.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Server,
      title: 'Backend',
      skills: ['Symfony', 'Laravel', 'Drupal'],
      color: 'orange-deep'
    },
    {
      icon: Code,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
      color: 'blue-intense'
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      skills: ['Flutter', 'Kotlin', 'React Native', 'iOS/Android'],
      color: 'orange-light'
    },
    {
      icon: Settings,
      title: 'IA & ML',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API'],
      color: 'blue-gray'
    },
    {
      icon: Layers,
      title: 'CMS',
      skills: ['WordPress', 'Drupal'],
      color: 'orange-deep'
    },
    {
      icon: Globe,
      title: 'API',
      skills: ['RESTful APIs'],
      color: 'blue-gray'
    },
    {
      icon: Palette,
      title: 'UX/UI',
      skills: ['Figma', 'Prototypage'],
      color: 'blue-intense'
    },
    {
      icon: Database,
      title: 'BDD',
      skills: ['MySQL', 'PostgreSQL'],
      color: 'blue-intense'
    },
    {
      icon: Shield,
      title: 'Sécurité',
      skills: ['Auth', 'Validation', 'Protection'],
      color: 'orange-light'
    },
    {
      icon: GitBranch,
      title: 'Outils',
      skills: ['Git', 'GitHub', 'GitLab', 'Scrum'],
      color: 'blue-gray'
    },
    {
      icon: Settings,
      title: 'Design',
      skills: ['Photoshop', 'Illustrator', 'InDesign'],
      color: 'orange-deep'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      'orange-deep': { bg: 'bg-orange-deep/10', text: 'text-orange-deep', border: 'border-orange-deep/20' },
      'orange-light': { bg: 'bg-orange-light/10', text: 'text-orange-light', border: 'border-orange-light/20' },
      'blue-intense': { bg: 'bg-blue-intense/10', text: 'text-blue-intense', border: 'border-blue-intense/20' },
      'blue-gray': { bg: 'bg-blue-gray/10', text: 'text-blue-gray', border: 'border-blue-gray/20' }
    };
    return colorMap[color] || colorMap['orange-deep'];
  };

  return (
    <section id="skills" className="py-20 bg-green-light" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6 animate-fade-in-up">
            Mes <span className="text-orange-deep">Compétences</span>
          </h2>
          <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Une expertise technique complète pour transformer vos idées en solutions digitales performantes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div
                key={category.title}
                className={`group bg-white-soft rounded-xl p-6 border ${colors.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-3 cursor-pointer transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ 
                  transitionDelay: isVisible ? '0ms' : `${index * 100}ms`
                }}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                  <Icon className={`${colors.text} group-hover:animate-pulse`} size={24} />
                </div>
                
                <h3 className="font-poppins font-semibold text-lg text-gray-anthracite mb-3 group-hover:text-orange-deep transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="inline-block bg-white rounded-full px-3 py-1 text-sm font-inter text-blue-gray mr-2 mb-2 border border-green-light/50 hover:border-orange-deep/30 hover:bg-orange-deep/5 transition-all duration-300 hover:scale-105"
                      style={{
                        animationDelay: `${(index * 100) + (skillIndex * 50)}ms`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info with enhanced animation */}
        <div className="mt-16 text-center">
          <div className="bg-white-soft/50 rounded-2xl p-8 border border-orange-deep/10 hover:border-orange-deep/30 transition-all duration-500 hover:shadow-lg group">
            <h3 className="font-poppins font-semibold text-xl text-gray-anthracite mb-4 group-hover:text-orange-deep transition-colors duration-300">
              Une approche complète
            </h3>
            <p className="font-inter text-blue-gray max-w-3xl mx-auto leading-relaxed group-hover:text-gray-anthracite transition-colors duration-300">
              De la conception à la mise en production, je maîtrise chaque étape du processus de développement.
              Mon approche combine rigueur technique, sensibilité design et compréhension des enjeux métiers
              pour livrer des solutions qui dépassent vos attentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
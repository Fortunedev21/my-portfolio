import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ProjectsCategory = () => {
  const { category } = useParams();

  const allProjects = {
    web: {
      title: 'Projets Web',
      description: 'Sites vitrines, e-commerce et applications web',
      projects: [
        { id: 1, title: 'E-Shop Pro', description: 'Plateforme e-commerce complete avec paiement integre', image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600', tech: ['React', 'Node.js', 'Stripe'] },
        { id: 2, title: 'Dashboard Analytics', description: 'Tableau de bord pour visualisation de donnees', image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600', tech: ['Next.js', 'Chart.js', 'PostgreSQL'] },
        { id: 3, title: 'Site Corporate', description: 'Site vitrine moderne pour entreprise', image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600', tech: ['React', 'Tailwind', 'Framer Motion'] }
      ]
    },
    mobile: {
      title: 'Applications Mobiles',
      description: 'Apps iOS et Android natives et cross-platform',
      projects: [
        { id: 4, title: 'FinTrack', description: 'Application de gestion financiere personnelle', image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600', tech: ['Flutter', 'Firebase', 'Dart'] },
        { id: 5, title: 'FoodDelivery', description: 'App de livraison de repas avec tracking', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', tech: ['Kotlin', 'Google Maps', 'Room'] },
        { id: 6, title: 'FitCoach', description: 'Application de coaching sportif personnalise', image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600', tech: ['Flutter', 'SQLite', 'Charts'] }
      ]
    },
    design: {
      title: 'Projets Design',
      description: 'UI/UX design et identites visuelles',
      projects: [
        { id: 7, title: 'Branding StartUp', description: 'Identite visuelle complete pour startup tech', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600', tech: ['Figma', 'Illustrator'] },
        { id: 8, title: 'App Banking UI', description: 'Design d\'interface pour application bancaire', image: 'https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=600', tech: ['Figma', 'Prototyping'] },
        { id: 9, title: 'E-commerce Redesign', description: 'Refonte UX d\'une boutique en ligne', image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600', tech: ['Figma', 'User Research'] }
      ]
    }
  };

  const categoryData = allProjects[category as keyof typeof allProjects];

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-white-soft pt-32 pb-20">
        <div className="container-main text-center">
          <h1 className="font-poppins font-bold text-4xl text-gray-anthracite mb-4">Categorie introuvable</h1>
          <Link to="/projects" className="text-orange-deep hover:underline">Retour aux projets</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white-soft pt-32 pb-20">
      <div className="container-main">
        {/* Back link */}
        <Link to="/projects" className="inline-flex items-center gap-2 text-blue-gray hover:text-orange-deep transition-colors mb-8">
          <ArrowLeft size={20} />
          <span className="font-inter">Tous les projets</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-anthracite mb-4">
            {categoryData.title}
          </h1>
          <p className="font-inter text-blue-gray text-lg">{categoryData.description}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.projects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-gray-anthracite mb-2 group-hover:text-orange-deep transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-inter text-blue-gray text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="bg-gray-100 text-gray-anthracite text-xs px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Categories Navigation */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="font-poppins font-bold text-xl text-gray-anthracite mb-6">Autres categories</h2>
          <div className="flex flex-wrap gap-4">
            {Object.entries(allProjects).filter(([key]) => key !== category).map(([key, data]) => (
              <Link key={key} to={`/projects/${key}`} className="bg-white px-6 py-3 rounded-full font-inter font-medium text-gray-anthracite hover:bg-orange-deep hover:text-white transition-colors shadow-sm">
                {data.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCategory;

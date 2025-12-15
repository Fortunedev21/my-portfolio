import React from 'react';
import { ExternalLink, Download, BookOpen, Wrench, FileText } from 'lucide-react';

const Resources = () => {
  const tools = [
    { name: 'Figma', description: 'Design d\'interfaces et prototypage', url: 'https://figma.com', icon: '🎨' },
    { name: 'VS Code', description: 'Editeur de code puissant et extensible', url: 'https://code.visualstudio.com', icon: '💻' },
    { name: 'Notion', description: 'Organisation et gestion de projets', url: 'https://notion.so', icon: '📝' },
    { name: 'GitHub', description: 'Hebergement et versioning de code', url: 'https://github.com', icon: '🐙' },
    { name: 'Vercel', description: 'Deploiement rapide d\'applications web', url: 'https://vercel.com', icon: '▲' },
    { name: 'Postman', description: 'Test et documentation d\'APIs', url: 'https://postman.com', icon: '📮' }
  ];

  const guides = [
    { title: 'Guide du site web performant', description: 'Les bonnes pratiques pour un site rapide et bien reference', type: 'PDF' },
    { title: 'Checklist avant lancement', description: '50 points a verifier avant de mettre en ligne votre projet', type: 'PDF' },
    { title: 'Cahier des charges type', description: 'Template pour bien definir votre projet web ou mobile', type: 'DOCX' }
  ];

  const articles = [
    { title: 'Comment choisir entre site web et application mobile ?', category: 'Strategie' },
    { title: 'Les tendances web design 2025', category: 'Design' },
    { title: 'Optimiser le SEO de son site', category: 'Marketing' },
    { title: 'Introduction a l\'IA pour les entrepreneurs', category: 'Tech' }
  ];

  return (
    <div className="min-h-screen bg-white-soft pt-32 pb-20">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-deep font-inter font-semibold mb-4">RESSOURCES</p>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-anthracite mb-6">
            Outils et <span className="text-orange-deep">ressources</span>
          </h1>
          <p className="font-inter text-blue-gray text-lg max-w-2xl mx-auto">
            Decouvrez les outils que j'utilise au quotidien et des ressources gratuites pour vos projets.
          </p>
        </div>

        {/* Tools Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="text-orange-deep" size={28} />
            <h2 className="font-poppins font-bold text-2xl text-gray-anthracite">Outils recommandes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{tool.icon}</span>
                  <ExternalLink className="text-blue-gray group-hover:text-orange-deep transition-colors" size={20} />
                </div>
                <h3 className="font-poppins font-semibold text-gray-anthracite mb-2">{tool.name}</h3>
                <p className="font-inter text-sm text-blue-gray">{tool.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Guides Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-orange-deep" size={28} />
            <h2 className="font-poppins font-bold text-2xl text-gray-anthracite">Guides gratuits</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <span className="inline-block bg-orange-deep/10 text-orange-deep text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {guide.type}
                </span>
                <h3 className="font-poppins font-semibold text-gray-anthracite mb-2">{guide.title}</h3>
                <p className="font-inter text-sm text-blue-gray mb-4">{guide.description}</p>
                <button className="inline-flex items-center gap-2 text-orange-deep font-inter font-medium hover:underline">
                  <Download size={18} />
                  Telecharger
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Articles Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-orange-deep" size={28} />
            <h2 className="font-poppins font-bold text-2xl text-gray-anthracite">Articles utiles</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm divide-y">
            {articles.map((article, index) => (
              <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                <div>
                  <span className="text-xs font-semibold text-orange-deep uppercase">{article.category}</span>
                  <h3 className="font-poppins font-medium text-gray-anthracite mt-1">{article.title}</h3>
                </div>
                <ExternalLink className="text-blue-gray" size={20} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;

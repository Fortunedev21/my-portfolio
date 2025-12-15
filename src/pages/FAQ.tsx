import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quels types de projets acceptez-vous ?',
      answer: 'Je travaille sur des sites web, applications mobiles (iOS/Android), solutions e-commerce, applications metier et projets integrant l\'intelligence artificielle. Du site vitrine a l\'application complexe, j\'adapte mes services a vos besoins.'
    },
    {
      question: 'Quels sont vos tarifs ?',
      answer: 'Mes tarifs varient selon la complexite du projet. Un site vitrine demarre a partir de 500 000 FCFA, une application mobile a partir de 1 500 000 FCFA. Je propose toujours un devis gratuit et detaille apres analyse de votre besoin.'
    },
    {
      question: 'Quels sont les delais de realisation ?',
      answer: 'Les delais dependent du projet : 2-4 semaines pour un site vitrine, 1-2 mois pour un site e-commerce, 2-4 mois pour une application mobile. Je m\'engage sur des delais realistes et je vous tiens informe a chaque etape.'
    },
    {
      question: 'Comment se deroule un projet ?',
      answer: 'Mon processus : 1) Appel decouverte gratuit, 2) Devis detaille, 3) Maquettes et validation, 4) Developpement avec points reguliers, 5) Tests et corrections, 6) Mise en ligne et formation. Vous etes implique a chaque etape.'
    },
    {
      question: 'Proposez-vous la maintenance apres livraison ?',
      answer: 'Oui, je propose des forfaits de maintenance mensuelle incluant mises a jour, corrections de bugs, sauvegardes et support technique. C\'est essentiel pour garder votre site/app performant et securise.'
    },
    {
      question: 'Travaillez-vous avec des clients a l\'international ?',
      answer: 'Absolument ! Je travaille avec des clients au Benin, en Afrique et en Europe. La communication se fait par visio, email et messagerie. Le decalage horaire n\'est jamais un probleme.'
    },
    {
      question: 'Quelles technologies utilisez-vous ?',
      answer: 'Pour le web : React, Next.js, Node.js, Python. Pour le mobile : Flutter, Kotlin. Pour l\'IA : TensorFlow, PyTorch. Je choisis toujours la technologie la plus adaptee a votre projet et budget.'
    },
    {
      question: 'Comment puis-je vous contacter ?',
      answer: 'Vous pouvez me contacter via le formulaire de contact sur ce site, par email ou par telephone. Je reponds generalement sous 24h. N\'hesitez pas a prendre rendez-vous pour un appel decouverte gratuit.'
    }
  ];

  return (
    <div className="min-h-screen bg-white-soft pt-32 pb-20">
      <div className="container-main max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-deep font-inter font-semibold mb-4">FAQ</p>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-anthracite mb-6">
            Questions <span className="text-orange-deep">frequentes</span>
          </h1>
          <p className="font-inter text-blue-gray text-lg">
            Retrouvez les reponses aux questions les plus posees par mes clients.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-poppins font-semibold text-gray-anthracite pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-orange-deep flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-blue-gray flex-shrink-0" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="font-inter text-blue-gray leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gray-anthracite rounded-3xl p-10">
          <h2 className="font-poppins font-bold text-2xl text-white-soft mb-4">
            Vous avez d'autres questions ?
          </h2>
          <p className="font-inter text-white-soft/80 mb-6">
            N'hesitez pas a me contacter, je vous repondrai dans les plus brefs delais.
          </p>
          <Link to="/contact" className="inline-block bg-orange-deep text-white px-8 py-3 rounded-full font-inter font-medium hover:bg-orange-light transition-colors">
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

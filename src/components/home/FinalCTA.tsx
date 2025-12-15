import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="CTA" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-deep/95 via-orange-deep/90 to-orange-light/85"></div>
      </div>

      <div className="container-main relative z-10 text-center">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white-soft mb-6">
          Prêt à transformer votre idée en réalité ?
        </h2>
        
        <p className="font-inter text-xl text-white-soft/90 mb-10 max-w-2xl mx-auto">
          Discutons de votre projet et créons ensemble une solution digitale qui fait vraiment la différence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/contact" className="group bg-white-soft hover:bg-white text-orange-deep px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
            <MessageCircle size={20} /> Discutons de votre projet
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/services" className="bg-transparent hover:bg-white/20 text-white-soft border-2 border-white-soft px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
            Voir mes services
          </Link>
        </div>

        <p className="font-inter text-white-soft/80 text-sm">
          Réponse garantie sous 24h • Devis gratuit • Premier échange offert
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;

import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-orange-deep via-orange-light to-blue-intense relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="flex justify-center mb-5">
            <Sparkles className="text-white-soft animate-spin-slow" size={40} />
          </div>
          
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white-soft mb-4">
            🚀 Démarrons ensemble
          </h2>
          
          <p className="font-inter text-lg text-white-soft/90 mb-6 max-w-2xl mx-auto leading-relaxed">
            Vous avez une idée ? Un projet ? Un défi technique ? 
            Transformons votre vision en solution digitale qui marche vraiment.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <Link to="/contact" className="group bg-white-soft hover:bg-white text-orange-deep px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <MessageCircle size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              Discutons de votre projet
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link to="/services" className="group bg-transparent hover:bg-white/20 text-white-soft border-2 border-white-soft px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 flex items-center gap-2 hover:-translate-y-1">
              Voir mes services
            </Link>
          </div>

          <p className="font-inter text-white-soft/80 text-sm">
            Réponse garantie sous 24h • Devis gratuit • Premier échange offert
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

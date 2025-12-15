import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-deep via-orange-light to-blue-intense relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <Sparkles className="text-white-soft animate-spin-slow" size={48} />
          </div>
          
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white-soft mb-6">
            🚀 Démarrons ensemble
          </h2>
          
          <p className="font-inter text-xl text-white-soft/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vous avez une idée ? Un projet ? Un défi technique ? 
            Transformons votre vision en solution digitale qui marche vraiment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/contact"
              className="group bg-white-soft hover:bg-white text-orange-deep px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105"
            >
              <MessageCircle size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              Discutons de votre projet
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/services"
              className="group bg-transparent hover:bg-white/20 text-white-soft border-2 border-white-soft px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-2"
            >
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
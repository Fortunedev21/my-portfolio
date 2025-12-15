import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white-soft flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="font-poppins font-bold text-8xl md:text-9xl text-orange-deep mb-4">404</h1>
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-gray-anthracite mb-4">
          Page introuvable
        </h2>
        <p className="font-inter text-blue-gray mb-8">
          Oups ! La page que vous recherchez n'existe pas ou a ete deplacee.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="inline-flex items-center justify-center gap-2 bg-orange-deep text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-orange-light transition-colors">
            <Home size={20} />
            Retour a l'accueil
          </Link>
          <button onClick={() => window.history.back()} className="inline-flex items-center justify-center gap-2 border-2 border-gray-anthracite text-gray-anthracite px-6 py-3 rounded-full font-inter font-medium hover:bg-gray-anthracite hover:text-white transition-colors">
            <ArrowLeft size={20} />
            Page precedente
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

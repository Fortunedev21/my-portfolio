import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Code, Mail, Phone, MapPin, Linkedin, Github, MessageCircle, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Projets', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'À propos', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const externalLinks = [
    { label: 'GitHub', href: '#', icon: Github },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'ComeUp', href: '#', icon: ExternalLink },
    { label: 'Upwork', href: '#', icon: ExternalLink }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-blue-dark py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Identité */}
          <div className="md:col-span-1">
            <h3 className="font-poppins font-bold text-xl text-white-soft mb-4">
              Fortuné Aïounou
            </h3>
            <p className="font-inter text-green-light/80 mb-6 leading-relaxed">
              Je transforme vos idées en solutions digitales intelligentes et élégantes.
            </p>
            <p className="font-inter text-green-light/60 text-sm italic">
              "Créer. Développer. Impacter."
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-poppins font-semibold text-white-soft mb-4">
              Liens rapides
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block font-inter text-green-light/80 hover:text-orange-light transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Ressources externes */}
          <div>
            <h4 className="font-poppins font-semibold text-white-soft mb-4">
              Ressources
            </h4>
            <div className="space-y-2">
              {externalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 font-inter text-green-light/80 hover:text-orange-light transition-colors duration-300"
                  >
                    <Icon size={16} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact direct */}
          <div>
            <h4 className="font-poppins font-semibold text-white-soft mb-4">
              Contact direct
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-inter text-green-light/80">
                <Phone size={16} />
                <span className="text-sm">+229 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-2 font-inter text-green-light/80">
                <Mail size={16} />
                <span className="text-sm">fortune.dev@example.com</span>
              </div>
              <div className="flex items-center gap-2 font-inter text-green-light/80">
                <MapPin size={16} />
                <span className="text-sm">Cotonou, Bénin</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-blue-gray/30 hover:bg-orange-deep rounded-lg flex items-center justify-center text-green-light hover:text-white-soft transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats rapides */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 py-8 border-t border-b border-blue-gray/30">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-light mb-1">5+</div>
            <div className="font-inter text-green-light/80 text-sm">Années d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-light mb-1">50+</div>
            <div className="font-inter text-green-light/80 text-sm">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-light mb-1">100%</div>
            <div className="font-inter text-green-light/80 text-sm">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-light mb-1">FR/EN</div>
            <div className="font-inter text-green-light/80 text-sm">Langues parlées</div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-blue-gray/20 rounded-xl p-6 mb-8 text-center">
          <h4 className="font-poppins font-semibold text-white-soft mb-2">
            Restez informé de mes nouveaux projets
          </h4>
          <p className="font-inter text-green-light/80 text-sm mb-4">
            Recevez mes dernières réalisations et conseils tech
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white-soft placeholder-white-soft/60 focus:outline-none focus:ring-2 focus:ring-orange-light"
            />
            <button className="bg-orange-deep hover:bg-orange-light text-white-soft px-6 py-2 rounded-lg font-inter font-medium transition-colors duration-300">
              S'abonner
            </button>
          </div>
        </div>
          
        {/* Copyright */}
        <div className="text-center border-t border-blue-gray/30 pt-8">
            <p className="font-inter text-green-light/80 flex items-center justify-center gap-2 flex-wrap">
              © 2025 Fortuné Aïounou • Conçu avec{' '}
              <Heart className="text-orange-light animate-bounce-gentle" size={16} />{' '}
              • Propulsé par{' '}
              <span className="inline-flex items-center gap-1">
                <Code className="text-blue-intense" size={16} />
                React + TypeScript + TailwindCSS
              </span>
            </p>
            <div className="mt-4 flex justify-center gap-6 text-sm">
              <Link to="#" className="font-inter text-green-light/60 hover:text-orange-light transition-colors duration-300">
                Mentions légales
              </Link>
              <Link to="#" className="font-inter text-green-light/60 hover:text-orange-light transition-colors duration-300">
                Politique de confidentialité
              </Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
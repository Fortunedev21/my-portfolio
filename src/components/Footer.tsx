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
    <footer className="bg-blue-dark py-12">
      <div className="container-main">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Identité */}
          <div className="md:col-span-1">
            <h3 className="font-poppins font-bold text-lg text-white-soft mb-3">Fortuné Aïounou</h3>
            <p className="font-inter text-green-light/80 text-sm mb-4 leading-relaxed">
              Je transforme vos idées en solutions digitales intelligentes et élégantes.
            </p>
            <p className="font-inter text-green-light/60 text-xs italic">"Créer. Développer. Impacter."</p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-poppins font-semibold text-white-soft text-sm mb-3">Liens rapides</h4>
            <div className="space-y-1.5">
              {quickLinks.map((link) => (
                <Link key={link.label} to={link.href} className="block font-inter text-green-light/80 hover:text-orange-light transition-colors duration-300 text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Ressources externes */}
          <div>
            <h4 className="font-poppins font-semibold text-white-soft text-sm mb-3">Ressources</h4>
            <div className="space-y-1.5">
              {externalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.label} href={link.href} className="flex items-center gap-2 font-inter text-green-light/80 hover:text-orange-light transition-colors duration-300 text-sm">
                    <Icon size={14} /> {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact direct */}
          <div>
            <h4 className="font-poppins font-semibold text-white-soft text-sm mb-3">Contact direct</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-inter text-green-light/80 text-sm">
                <Phone size={14} /> <span>+229 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-2 font-inter text-green-light/80 text-sm">
                <Mail size={14} /> <span>fortune.dev@example.com</span>
              </div>
              <div className="flex items-center gap-2 font-inter text-green-light/80 text-sm">
                <MapPin size={14} /> <span>Cotonou, Bénin</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} className="w-9 h-9 bg-blue-gray/30 hover:bg-orange-deep rounded-lg flex items-center justify-center text-green-light hover:text-white-soft transition-all duration-300 hover:scale-110" aria-label={social.label}>
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats rapides */}
        <div className="grid grid-cols-4 gap-4 mb-10 py-6 border-t border-b border-blue-gray/30">
          {[
            { value: '5+', label: 'Années d\'expérience' },
            { value: '50+', label: 'Projets réalisés' },
            { value: '100%', label: 'Clients satisfaits' },
            { value: 'FR/EN', label: 'Langues parlées' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-bold text-orange-light mb-0.5">{stat.value}</div>
              <div className="font-inter text-green-light/80 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-blue-gray/20 rounded-xl p-5 mb-8 text-center">
          <h4 className="font-poppins font-semibold text-white-soft text-sm mb-1">Restez informé de mes nouveaux projets</h4>
          <p className="font-inter text-green-light/80 text-xs mb-3">Recevez mes dernières réalisations et conseils tech</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input type="email" placeholder="votre@email.com" className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white-soft placeholder-white-soft/60 focus:outline-none focus:ring-2 focus:ring-orange-light text-sm" />
            <button className="bg-orange-deep hover:bg-orange-light text-white-soft px-4 py-2 rounded-lg font-inter font-medium text-sm transition-colors duration-300">S'abonner</button>
          </div>
        </div>
          
        {/* Copyright */}
        <div className="text-center border-t border-blue-gray/30 pt-6">
          <p className="font-inter text-green-light/80 text-xs flex items-center justify-center gap-1.5 flex-wrap">
            © 2025 Fortuné Aïounou • Conçu avec <Heart className="text-orange-light animate-bounce-gentle" size={14} /> • Propulsé par
            <span className="inline-flex items-center gap-1"><Code className="text-blue-intense" size={14} /> React + TypeScript + TailwindCSS</span>
          </p>
          <div className="mt-3 flex justify-center gap-4 text-xs">
            <Link to="#" className="font-inter text-green-light/60 hover:text-orange-light transition-colors duration-300">Mentions légales</Link>
            <Link to="#" className="font-inter text-green-light/60 hover:text-orange-light transition-colors duration-300">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

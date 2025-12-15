import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, Calendar, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    alert('Message envoyé avec succès ! Je vous recontacterai dans les 24h.');
  };

  const contactInfo = [
    { icon: Phone, label: 'Téléphone', value: '+229 XX XX XX XX', href: 'tel:+229XXXXXXXX', description: 'Appelez-moi directement' },
    { icon: Mail, label: 'Email', value: 'fortune.dev@example.com', href: 'mailto:fortune.dev@example.com', description: 'Réponse sous 24h' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat direct', href: 'https://wa.me/229XXXXXXXX', description: 'Réponse immédiate' },
    { icon: MapPin, label: 'Localisation', value: 'Cotonou, Bénin', href: '#', description: 'Disponible en présentiel' }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-intense' },
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-gray-anthracite' },
    { icon: MessageCircle, label: 'WhatsApp', href: '#', color: 'hover:text-orange-light' }
  ];

  return (
    <div className="min-h-screen bg-white-soft">
      {/* Hero Section avec image */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Contact" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-anthracite/90 via-gray-anthracite/85 to-gray-anthracite/75"></div>
        </div>
        
        <div className="container-main relative z-10 py-32 text-center">
          <p className="text-orange-deep font-inter font-semibold mb-4 animate-fade-in-up">CONTACT</p>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white-soft mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Restons en <span className="text-orange-deep">contact</span>
          </h1>
          <p className="font-inter text-xl text-white-soft/90 leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Vous avez un projet ? Une idée ? Je suis toujours partant pour discuter d'un nouveau défi.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <Clock className="text-orange-deep mx-auto mb-2" size={24} />
              <p className="font-inter text-sm text-white-soft/80">Réponse sous</p>
              <p className="font-poppins font-bold text-white-soft">24 heures</p>
            </div>
            <div className="text-center">
              <Calendar className="text-orange-deep mx-auto mb-2" size={24} />
              <p className="font-inter text-sm text-white-soft/80">Disponibilité</p>
              <p className="font-poppins font-bold text-white-soft">7j/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white-soft">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up">
              <div>
                <h2 className="font-poppins font-bold text-2xl text-gray-anthracite mb-6">Contactons-nous</h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <a key={info.label} href={info.href} className="group flex items-center gap-4 p-5 card-base border border-green-light hover:border-orange-deep/30">
                        <div className="w-12 h-12 bg-orange-deep/10 rounded-xl flex items-center justify-center group-hover:bg-orange-deep/20 transition-colors duration-300">
                          <Icon className="text-orange-deep" size={22} />
                        </div>
                        <div>
                          <p className="font-poppins font-semibold text-gray-anthracite group-hover:text-orange-deep transition-colors duration-300 text-sm">{info.label}</p>
                          <p className="font-inter text-blue-gray text-sm">{info.value}</p>
                          <p className="font-inter text-xs text-blue-gray/70">{info.description}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-poppins font-semibold text-base text-gray-anthracite mb-4">Retrouvez-moi aussi sur</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a key={social.label} href={social.href} className={`w-12 h-12 card-base flex items-center justify-center text-blue-gray ${social.color} transition-all duration-300 hover:-translate-y-1 border border-green-light`} aria-label={social.label}>
                        <Icon size={22} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* CTA Secondary */}
              <div className="bg-gradient-to-br from-orange-deep/5 to-blue-intense/5 rounded-xl p-5 border border-orange-deep/10">
                <h3 className="font-poppins font-semibold text-base text-gray-anthracite mb-2">Préférez un appel ?</h3>
                <p className="font-inter text-blue-gray text-sm mb-3">Réservez un créneau de 30 minutes pour discuter de votre projet</p>
                <button className="btn-primary flex items-center gap-2 text-sm">
                  <Calendar size={16} /> Réserver un appel
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-base p-7 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-poppins font-bold text-2xl text-gray-anthracite mb-5">Envoyez-moi un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-inter text-sm font-medium text-blue-gray mb-1.5">Nom complet *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2.5 border border-green-light rounded-lg focus:ring-2 focus:ring-orange-deep/20 focus:border-orange-deep transition-colors duration-200 font-inter text-sm" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-inter text-sm font-medium text-blue-gray mb-1.5">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 border border-green-light rounded-lg focus:ring-2 focus:ring-orange-deep/20 focus:border-orange-deep transition-colors duration-200 font-inter text-sm" placeholder="votre@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-inter text-sm font-medium text-blue-gray mb-1.5">Sujet *</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2.5 border border-green-light rounded-lg focus:ring-2 focus:ring-orange-deep/20 focus:border-orange-deep transition-colors duration-200 font-inter text-sm" placeholder="L'objet de votre message" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-inter text-sm font-medium text-blue-gray mb-1.5">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2.5 border border-green-light rounded-lg focus:ring-2 focus:ring-orange-deep/20 focus:border-orange-deep transition-colors duration-200 font-inter text-sm resize-none" placeholder="Décrivez votre projet ou votre besoin..." />
                </div>
                
                <button type="submit" disabled={isSubmitting} className="group w-full btn-primary flex items-center justify-center gap-2 py-3.5 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white-soft border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <><Send size={18} /> Envoyer le message</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-64 bg-green-light relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="text-orange-deep mx-auto mb-2" size={32} />
            <p className="font-poppins font-semibold text-gray-anthracite">Cotonou, Bénin</p>
            <p className="font-inter text-blue-gray text-sm">Disponible pour des projets locaux et internationaux</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

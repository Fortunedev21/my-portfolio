import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, Calendar, Clock, CheckCircle } from 'lucide-react';

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
    alert('Message envoyé ! Je vous réponds dans les 24h.');
  };

  const contactInfo = [
    { icon: Phone, label: 'Téléphone', value: '+229 XX XX XX XX', href: 'tel:+229XXXXXXXX', description: 'Du lundi au samedi, 9h-18h' },
    { icon: Mail, label: 'Email', value: 'fortune.dev@example.com', href: 'mailto:fortune.dev@example.com', description: 'Réponse garantie sous 24h' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat direct', href: 'https://wa.me/229XXXXXXXX', description: 'Pour les urgences' },
    { icon: MapPin, label: 'Localisation', value: 'Cotonou, Bénin', href: '#', description: 'Disponible en visio partout' }
  ];

  const benefits = [
    'Réponse garantie sous 24h',
    'Premier échange gratuit',
    'Devis détaillé sans engagement',
    'Conseils personnalisés'
  ];

  return (
    <div className="min-h-screen bg-white-soft">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Contact développeur web Bénin" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-anthracite/90 via-gray-anthracite/85 to-gray-anthracite/75"></div>
        </div>
        
        <div className="container-main relative z-10 py-32 text-center">
          <p className="text-orange-deep font-inter font-semibold mb-4">CONTACT</p>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white-soft mb-6">
            Parlons de votre <span className="text-orange-deep">projet</span>
          </h1>
          <p className="font-inter text-xl text-white-soft/90 leading-relaxed max-w-2xl mx-auto mb-8">
            Une idée ? Un projet ? Un défi technique ? Je suis là pour vous aider à transformer votre vision en réalité digitale.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-white-soft/80">
                <CheckCircle size={16} className="text-orange-deep" />
                <span className="font-inter text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white-soft">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-poppins font-bold text-2xl text-gray-anthracite mb-2">Discutons de votre projet</h2>
              <p className="font-inter text-blue-gray mb-8">
                Choisissez le canal qui vous convient. Je réponds personnellement à chaque message.
              </p>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a key={info.label} href={info.href} className="group flex items-center gap-4 p-5 bg-white rounded-xl shadow-md border border-green-light hover:border-orange-deep/30 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-orange-deep/10 rounded-xl flex items-center justify-center group-hover:bg-orange-deep group-hover:scale-110 transition-all duration-300">
                        <Icon className="text-orange-deep group-hover:text-white-soft transition-colors" size={22} />
                      </div>
                      <div>
                        <p className="font-poppins font-semibold text-gray-anthracite group-hover:text-orange-deep transition-colors">{info.label}</p>
                        <p className="font-inter text-blue-gray text-sm">{info.value}</p>
                        <p className="font-inter text-blue-gray/60 text-xs">{info.description}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social */}
              <div className="mb-8">
                <p className="font-poppins font-semibold text-gray-anthracite mb-4">Retrouvez-moi aussi sur</p>
                <div className="flex gap-3">
                  {[{ icon: Linkedin, label: 'LinkedIn' }, { icon: Github, label: 'GitHub' }, { icon: MessageCircle, label: 'WhatsApp' }].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a key={social.label} href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-gray hover:text-orange-deep hover:shadow-lg transition-all duration-300 border border-green-light" aria-label={social.label}>
                        <Icon size={22} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Call CTA */}
              <div className="bg-gradient-to-br from-orange-deep/10 to-blue-intense/10 rounded-xl p-6 border border-orange-deep/20">
                <h3 className="font-poppins font-semibold text-lg text-gray-anthracite mb-2">Préférez un appel ?</h3>
                <p className="font-inter text-blue-gray text-sm mb-4">
                  Réservez un créneau de 30 minutes. On discute de votre projet, je vous donne mon avis et on voit si on peut travailler ensemble.
                </p>
                <button className="btn-primary flex items-center gap-2 text-sm">
                  <Calendar size={16} /> Réserver un appel gratuit
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="font-poppins font-bold text-2xl text-gray-anthracite mb-2">Envoyez-moi un message</h2>
              <p className="font-inter text-blue-gray mb-6">
                Décrivez votre projet en quelques lignes. Plus vous êtes précis, plus ma réponse sera pertinente.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-inter text-sm font-medium text-gray-anthracite mb-1.5">Votre nom *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-green-light rounded-lg focus:ring-2 focus:ring-orange-deep/20 focus:border-orange-deep transition-colors font-inter" placeholder="Jean Dupont" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-inter text-sm font-medium text-gray-anthracite mb-1.5">Votre email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-green-light rounded-lg focus:ring-2 focus:ring-orange-deep/20 focus:border-orange-deep transition-colors font-inter" placeholder="jean@entreprise.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-inter text-sm font-medium text-gray-anthracite mb-1.5">Sujet *</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-green-light rounded-lg focus:ring-2 focus:ring-orange-deep/20 focus:border-orange-deep transition-colors font-inter" placeholder="Ex: Création d'un site e-commerce" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-inter text-sm font-medium text-gray-anthracite mb-1.5">Votre message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-green-light rounded-lg focus:ring-2 focus:ring-orange-deep/20 focus:border-orange-deep transition-colors font-inter resize-none" placeholder="Décrivez votre projet : objectifs, budget approximatif, délais souhaités..." />
                </div>
                
                <button type="submit" disabled={isSubmitting} className="group w-full btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-50">
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white-soft border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <><Send size={18} /> Envoyer mon message</>
                  )}
                </button>
                
                <p className="font-inter text-blue-gray/60 text-xs text-center">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par email ou téléphone.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location */}
      <section className="py-16 bg-green-light">
        <div className="container-main text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="text-orange-deep" size={28} />
            <h3 className="font-poppins font-bold text-xl text-gray-anthracite">Basé à Cotonou, disponible partout</h3>
          </div>
          <p className="font-inter text-blue-gray max-w-xl mx-auto">
            Je travaille avec des clients au Bénin, en Afrique de l'Ouest et en Europe. 
            Visioconférence, email, WhatsApp : on trouve toujours un moyen de collaborer efficacement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;

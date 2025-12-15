import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, Calendar, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message
    alert('Message envoyé avec succès ! Je vous recontacterai dans les 24h.');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+229 XX XX XX XX',
      href: 'tel:+229XXXXXXXX',
      description: 'Appelez-moi directement'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'fortune.dev@example.com',
      href: 'mailto:fortune.dev@example.com',
      description: 'Réponse sous 24h'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat direct',
      href: 'https://wa.me/229XXXXXXXX',
      description: 'Réponse immédiate'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Cotonou, Bénin',
      href: '#',
      description: 'Disponible en présentiel'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-intense'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'hover:text-gray-anthracite'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: '#',
      color: 'hover:text-orange-light'
    }
  ];

  return (
    <div className="min-h-screen bg-white-soft pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-light via-white-soft to-green-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-anthracite mb-6 animate-fade-in-up">
            Restons en <span className="text-orange-deep">contact</span>
          </h1>
          <p className="font-inter text-xl text-blue-gray mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Vous avez un projet ? Une idée ? Ou simplement envie d'échanger 
            autour de votre vision digitale ? Je suis toujours partant pour 
            discuter d'un nouveau défi.
          </p>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-orange-deep/10">
              <Clock className="text-orange-deep mx-auto mb-2" size={24} />
              <p className="font-inter text-sm text-blue-gray">Réponse sous</p>
              <p className="font-poppins font-bold text-gray-anthracite">24 heures</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-intense/10">
              <Calendar className="text-blue-intense mx-auto mb-2" size={24} />
              <p className="font-inter text-sm text-blue-gray">Disponibilité</p>
              <p className="font-poppins font-bold text-gray-anthracite">7j/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h2 className="font-poppins font-bold text-2xl text-gray-anthracite mb-8">
                  Contactons-nous
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        className="group flex items-center gap-4 p-6 bg-white rounded-xl hover:bg-orange-deep/5 transition-all duration-300 hover:shadow-lg border border-green-light hover:border-orange-deep/30"
                      >
                        <div className="w-14 h-14 bg-orange-deep/10 rounded-xl flex items-center justify-center group-hover:bg-orange-deep/20 transition-colors duration-300">
                          <Icon className="text-orange-deep" size={24} />
                        </div>
                        <div>
                          <p className="font-poppins font-semibold text-gray-anthracite group-hover:text-orange-deep transition-colors duration-300">
                            {info.label}
                          </p>
                          <p className="font-inter text-blue-gray">{info.value}</p>
                          <p className="font-inter text-sm text-blue-gray/70">{info.description}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-poppins font-semibold text-lg text-gray-anthracite mb-6">
                  Retrouvez-moi aussi sur
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-14 h-14 bg-white rounded-xl flex items-center justify-center text-blue-gray ${social.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-green-light`}
                        aria-label={social.label}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* CTA Secondary */}
              <div className="bg-gradient-to-br from-orange-deep/5 to-blue-intense/5 rounded-xl p-6 border border-orange-deep/10">
                <h3 className="font-poppins font-semibold text-lg text-gray-anthracite mb-3">
                  Préférez un appel ?
                </h3>
                <p className="font-inter text-blue-gray mb-4">
                  Réservez un créneau de 30 minutes pour discuter de votre projet
                </p>
                <button className="bg-orange-deep hover:bg-orange-light text-white-soft px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 flex items-center gap-2">
                  <Calendar size={18} />
                  Réserver un appel
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="font-poppins font-bold text-2xl text-gray-anthracite mb-6">
                Envoyez-moi un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-inter text-sm font-medium text-blue-gray mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-green-light rounded-lg focus:ring-2 focus:ring-orange-deep/20 focus:border-orange-deep transition-colors duration-200 font-inter"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-inter text-sm font-medium text-blue-gray mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-green-light rounded-lg focus:ring-2 focus:ring-orange-deep/20 focus:border-orange-deep transition-colors duration-200 font-inter"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-inter text-sm font-medium text-blue-gray mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-green-light rounded-lg focus:ring-2 focus:ring-orange-deep/20 focus:border-orange-deep transition-colors duration-200 font-inter"
                    placeholder="L'objet de votre message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-inter text-sm font-medium text-blue-gray mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-green-light rounded-lg focus:ring-2 focus:ring-orange-deep/20 focus:border-orange-deep transition-colors duration-200 font-inter resize-none"
                    placeholder="Décrivez votre projet ou votre besoin..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-orange-deep hover:bg-orange-light text-white-soft px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white-soft border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
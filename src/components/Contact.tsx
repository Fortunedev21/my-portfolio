import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle } from 'lucide-react';

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
    
    // Show success message (you can implement a toast notification here)
    alert('Message envoyé avec succès ! Je vous recontacterai bientôt.');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'fortune.dev@example.com',
      href: 'mailto:fortune.dev@example.com'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+229 XX XX XX XX',
      href: 'tel:+229XXXXXXXX'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Cotonou, Bénin',
      href: '#'
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
    <section id="contact" className="py-20 bg-white-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-anthracite mb-6">
            Vous avez un projet ? Une <span className="text-orange-deep">idée</span> ?
          </h2>
          <p className="font-inter text-lg text-blue-gray max-w-2xl mx-auto">
            Ou simplement envie d'échanger autour de votre vision digitale ?
            <br />
            Je suis toujours partant pour discuter d'un nouveau défi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins font-semibold text-2xl text-gray-anthracite mb-6">
                Contactons-nous
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="group flex items-center gap-4 p-4 bg-green-light rounded-lg hover:bg-orange-deep/5 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="w-12 h-12 bg-orange-deep/10 rounded-lg flex items-center justify-center group-hover:bg-orange-deep/20 transition-colors duration-300">
                        <Icon className="text-orange-deep" size={20} />
                      </div>
                      <div>
                        <p className="font-inter text-sm text-blue-gray">{info.label}</p>
                        <p className="font-poppins font-medium text-gray-anthracite group-hover:text-orange-deep transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-poppins font-semibold text-lg text-gray-anthracite mb-4">
                Retrouvez-moi aussi sur
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 bg-green-light rounded-lg flex items-center justify-center text-blue-gray ${social.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-br from-orange-deep/5 to-blue-intense/5 rounded-xl p-6 border border-orange-deep/10">
              <p className="font-inter text-blue-gray italic leading-relaxed">
                "Chaque conversation est le début d'une collaboration potentielle.
                N'hésitez pas à partager votre vision, même si elle n'est qu'à l'état d'idée."
              </p>
              <p className="font-poppins font-semibold text-orange-deep mt-3">
                - Fortuné Aïounou
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-poppins font-semibold text-2xl text-gray-anthracite mb-6">
              Envoyez-moi un message
            </h3>
            
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
  );
};

export default Contact;
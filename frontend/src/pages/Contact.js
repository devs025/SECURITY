import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react';
import { companyInfo } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Message envoyé avec succès ! Nous vous recontacterons sous 24h.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="dark-content-container">
          <div className="text-center mb-16">
            <h1 className="display-huge mb-6">Contactez-Nous</h1>
            <p className="display-medium text-brand-primary mb-8">
              Votre sécurité commence par une conversation
            </p>
            <p className="body-large text-text-secondary max-w-4xl mx-auto">
              Notre équipe d'experts est à votre écoute pour étudier vos besoins et vous proposer 
              une solution de sécurité parfaitement adaptée à votre situation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="dark-content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="display-large mb-12">Nos Coordonnées</h2>
              
              <div className="space-y-8">
                <div className="service-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Téléphone</h3>
                      <p className="body-large text-brand-primary mb-2">
                        <a href={`tel:${companyInfo.phone}`} className="hover:text-brand-active transition-colors">
                          {companyInfo.phone}
                        </a>
                      </p>
                      <p className="body-medium text-text-secondary">Disponible 24h/24 - 7j/7</p>
                    </div>
                  </div>
                </div>

                <div className="service-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Email</h3>
                      <p className="body-large text-brand-primary mb-2">
                        <a href={`mailto:${companyInfo.email}`} className="hover:text-brand-active transition-colors">
                          {companyInfo.email}
                        </a>
                      </p>
                      <p className="body-medium text-text-secondary">Réponse sous 4h en moyenne</p>
                    </div>
                  </div>
                </div>

                <div className="service-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Adresse</h3>
                      <p className="body-medium text-text-secondary">{companyInfo.address}</p>
                    </div>
                  </div>
                </div>

                <div className="service-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Horaires Bureau</h3>
                      <div className="space-y-1 text-text-secondary">
                        <p className="body-medium">Lun - Ven : 8h00 - 18h00</p>
                        <p className="body-medium">Sam - Dim : 9h00 - 17h00</p>
                        <p className="body-medium text-brand-primary">Urgences : 24h/24</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="display-large mb-12">Demande de Devis</h2>
              
              <form onSubmit={handleSubmit} className="service-card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block body-medium font-medium mb-2">Prénom *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-none text-white placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block body-medium font-medium mb-2">Nom *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-none text-white placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block body-medium font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-none text-white placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block body-medium font-medium mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-none text-white placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block body-medium font-medium mb-2">Entreprise</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-none text-white placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label className="block body-medium font-medium mb-2">Service souhaité</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-none text-white focus:border-brand-primary focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionner un service</option>
                      <option value="gardiennage">Gardiennage</option>
                      <option value="intervention">Intervention Mobile</option>
                      <option value="incendie">Sécurité Incendie</option>
                      <option value="acces">Contrôle d'Accès</option>
                      <option value="audit">Audit et Contrôle</option>
                      <option value="evenementiel">Événementiel</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block body-medium font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-none text-white placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors resize-vertical"
                    placeholder="Décrivez-nous vos besoins en sécurité..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Envoyer ma demande
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-sm text-text-muted mt-4 text-center">
                  Vos données personnelles sont protégées et ne seront jamais partagées avec des tiers.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-bg-secondary">
        <div className="dark-content-container">
          <div className="text-center">
            <h2 className="display-large mb-6">Urgence Sécuritaire ?</h2>
            <p className="body-large text-text-secondary mb-12 max-w-2xl mx-auto">
              En cas d'urgence sécuritaire, nos équipes d'intervention sont mobilisables immédiatement, 
              24 heures sur 24 et 7 jours sur 7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href={`tel:${companyInfo.phone}`} 
                className="btn-primary text-xl px-12 py-6"
              >
                <Phone className="w-6 h-6" />
                Appel d'urgence : {companyInfo.phone}
              </a>
              <div className="text-text-muted">
                <p className="body-medium">Temps de réponse moyen :</p>
                <p className="heading-2 text-brand-primary">15 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Mock) */}
      <section className="py-20">
        <div className="dark-content-container">
          <div className="text-center mb-12">
            <h2 className="display-large mb-6">Notre Localisation</h2>
            <p className="body-large text-text-secondary">
              Retrouvez-nous au cœur de Paris pour vos rendez-vous
            </p>
          </div>
          
          <div className="relative h-96 bg-bg-secondary border border-border-subtle rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-brand-primary mx-auto mb-4" />
                <h3 className="heading-2 mb-2">{companyInfo.name}</h3>
                <p className="body-medium text-text-secondary">{companyInfo.address}</p>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-brand-primary hover:text-brand-active transition-colors"
                >
                  Voir sur Google Maps
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
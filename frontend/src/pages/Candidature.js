import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, MapPin, Briefcase, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jobOffers, companyInfo } from '../mock';

const Candidature = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobId: '',
    message: '',
    cv: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      cv: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Candidature envoyée avec succès ! Nous vous recontacterons sous 48h.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      jobId: '',
      message: '',
      cv: null
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="dark-content-container">
          <div className="text-center mb-16">
            <h1 className="display-huge mb-6">Rejoignez Notre Équipe</h1>
            <p className="display-medium text-brand-primary mb-8">
              Construisons ensemble l'avenir de la sécurité
            </p>
            <p className="body-large text-text-secondary max-w-4xl mx-auto">
              {companyInfo.name} recrute des professionnels passionnés pour renforcer ses équipes. 
              Découvrez nos opportunités et rejoignez une entreprise en pleine croissance.
            </p>
          </div>
        </div>
      </section>

      {/* Job Offers */}
      <section className="py-20">
        <div className="dark-content-container">
          <div className="mb-16">
            <h2 className="display-large mb-6">Nos Offres d'Emploi</h2>
            <p className="body-large text-text-secondary">
              Des postes variés pour tous les profils dans le domaine de la sécurité
            </p>
          </div>
          
          <div className="space-y-8">
            {jobOffers.map((job, index) => (
              <div 
                key={job.id} 
                className="service-card fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="heading-1">{job.title}</h3>
                      <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary rounded text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-6 mb-6 text-text-secondary">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="body-medium">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="body-medium">Sécurité</span>
                      </div>
                    </div>
                    
                    <p className="body-medium text-text-secondary mb-6">
                      {job.description}
                    </p>
                    
                    <div>
                      <h4 className="heading-3 text-brand-primary mb-3">Prérequis :</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {job.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                            <span className="body-medium text-text-secondary">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-64 flex-shrink-0">
                    <button
                      onClick={() => {
                        setSelectedJob(job);
                        setFormData(prev => ({ ...prev, jobId: job.id }));
                        document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn-primary w-full"
                    >
                      Postuler
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-bg-secondary">
        <div className="dark-content-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-large mb-6">
                {selectedJob ? `Postuler pour : ${selectedJob.title}` : 'Candidature Spontanée'}
              </h2>
              <p className="body-large text-text-secondary">
                Remplissez le formulaire ci-dessous pour nous envoyer votre candidature
              </p>
            </div>
            
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
              
              <div className="mb-6">
                <label className="block body-medium font-medium mb-2">CV *</label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-none text-white file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-medium file:bg-brand-primary file:text-black hover:file:bg-brand-active transition-colors"
                  />
                  <Upload className="absolute right-3 top-3 w-5 h-5 text-text-muted" />
                </div>
                <p className="text-sm text-text-muted mt-2">Formats acceptés : PDF, DOC, DOCX (max 5MB)</p>
              </div>
              
              <div className="mb-8">
                <label className="block body-medium font-medium mb-2">Lettre de motivation</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-bg-primary border border-border-subtle rounded-none text-white placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors resize-vertical"
                  placeholder="Parlez-nous de votre motivation à rejoindre SECURITÉ H..."
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="btn-primary">
                  Envoyer ma candidature
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  type="button" 
                  onClick={() => {
                    setSelectedJob(null);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      jobId: '',
                      message: '',
                      cv: null
                    });
                  }}
                  className="btn-secondary"
                >
                  Réinitialiser
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="dark-content-container">
          <div className="text-center mb-16">
            <h2 className="display-large mb-6">Pourquoi nous rejoindre ?</h2>
            <p className="body-large text-text-secondary">
              Les avantages de travailler chez {companyInfo.name}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card text-center">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="heading-2 mb-4">Formation Continue</h3>
              <p className="body-medium text-text-secondary">
                Formations régulières aux dernières techniques de sécurité et évolutions réglementaires.
              </p>
            </div>

            <div className="service-card text-center">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="heading-2 mb-4">Équilibre Vie Pro/Perso</h3>
              <p className="body-medium text-text-secondary">
                Plannings flexibles et respect des temps de repos pour un équilibre optimal.
              </p>
            </div>

            <div className="service-card text-center">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="heading-2 mb-4">Évolution de Carrière</h3>
              <p className="body-medium text-text-secondary">
                Opportunités d'évolution et de spécialisation dans différents domaines de la sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="dark-content-container text-center">
          <h2 className="display-large mb-6">Une question sur nos offres ?</h2>
          <p className="body-large mb-12 text-text-secondary max-w-2xl mx-auto">
            Notre équipe RH est à votre disposition pour répondre à toutes vos questions sur nos offres d'emploi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="btn-primary">
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${companyInfo.phone}`} className="btn-secondary">
              {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Candidature;
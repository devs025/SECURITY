import React from 'react';
import { Shield, Car, Flame, Key, FileSearch, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, companyInfo } from '../mock';

const Services = () => {
  const getIcon = (iconName) => {
    const icons = {
      Shield,
      Car, 
      Flame,
      Key,
      FileSearch,
      Calendar
    };
    return icons[iconName] || Shield;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="dark-content-container">
          <div className="text-center mb-16">
            <h1 className="display-huge mb-6">Nos Services</h1>
            <p className="display-medium text-brand-primary mb-8">
              Une expertise complète pour votre sécurité
            </p>
            <p className="body-large text-text-secondary max-w-4xl mx-auto">
              Depuis {companyInfo.founded}, {companyInfo.name} vous accompagne avec une gamme complète de services de sécurité 
              adaptés à tous vos besoins. Notre équipe d'experts certifiés intervient 24h/24 et 7j/7.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-bg-secondary">
        <div className="dark-content-container">
          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = getIcon(service.icon);
              return (
                <div 
                  key={service.id} 
                  className="service-card fade-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <IconComponent className="service-icon morph-icon" />
                  <h2 className="heading-1 mb-4">{service.title}</h2>
                  <p className="body-large mb-8 text-text-secondary">{service.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    <h3 className="heading-3 text-brand-primary">Nos prestations :</h3>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                        <span className="body-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border-subtle">
                    <Link to="/contact" className="btn-secondary">
                      Demander un devis
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="dark-content-container">
          <div className="text-center mb-16">
            <h2 className="display-large mb-6">Pourquoi nous choisir ?</h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Notre engagement : vous offrir une sécurité sans faille grâce à notre expertise et notre réactivité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card text-center">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="heading-2 mb-4">Expertise Certifiée</h3>
              <p className="body-medium text-text-secondary">
                Tous nos agents sont certifiés et régulièrement formés aux dernières techniques de sécurité.
              </p>
            </div>

            <div className="service-card text-center">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="heading-2 mb-4">Disponibilité 24h/24</h3>
              <p className="body-medium text-text-secondary">
                Nos équipes sont mobilisables à tout moment pour répondre à vos urgences sécuritaires.
              </p>
            </div>

            <div className="service-card text-center">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="heading-2 mb-4">Qualité Garantie</h3>
              <p className="body-medium text-text-secondary">
                Nous nous engageons sur la qualité de nos prestations avec un suivi personnalisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="dark-content-container text-center">
          <h2 className="display-large mb-6">Besoin d'un service personnalisé ?</h2>
          <p className="body-large mb-12 text-text-secondary max-w-2xl mx-auto">
            Contactez nos experts pour une étude gratuite de vos besoins et un devis sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="btn-primary">
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${companyInfo.phone}`} className="btn-secondary">
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
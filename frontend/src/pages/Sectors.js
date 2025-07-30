import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sectors, companyInfo } from '../mock';

const Sectors = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="dark-content-container">
          <div className="text-center mb-16">
            <h1 className="display-huge mb-6">Nos Secteurs d'Intervention</h1>
            <p className="display-medium text-brand-primary mb-8">
              Une expertise adaptée à chaque secteur
            </p>
            <p className="body-large text-text-secondary max-w-4xl mx-auto">
              Depuis {companyInfo.founded}, nous intervenons dans de nombreux secteurs d'activité, 
              en adaptant nos services aux spécificités de chaque environnement.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20">
        <div className="dark-content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {sectors.map((sector, index) => (
              <div 
                key={sector.id} 
                className="group fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden mb-6">
                  <img 
                    src={sector.image} 
                    alt={sector.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                  <div className="absolute bottom-6 left-6">
                    <h2 className="heading-1 text-white mb-2">{sector.name}</h2>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="body-large text-text-secondary">{sector.description}</p>
                  
                  <div>
                    <h3 className="heading-3 text-brand-primary mb-3">Services adaptés :</h3>
                    <div className="space-y-2">
                      {sector.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                          <span className="body-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-active transition-colors font-medium"
                    >
                      En savoir plus sur ce secteur
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="dark-content-container">
          <div className="text-center mb-16">
            <h2 className="display-large mb-6">Notre Impact</h2>
            <p className="body-large text-text-secondary">
              Des chiffres qui témoignent de notre expertise dans tous les secteurs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="display-medium text-brand-primary mb-2">8</div>
              <div className="body-medium text-text-muted">Secteurs d'expertise</div>
            </div>
            <div className="text-center">
              <div className="display-medium text-brand-primary mb-2">200+</div>
              <div className="body-medium text-text-muted">Sites sécurisés</div>
            </div>
            <div className="text-center">
              <div className="display-medium text-brand-primary mb-2">24h/24</div>
              <div className="body-medium text-text-muted">Surveillance active</div>
            </div>
            <div className="text-center">
              <div className="display-medium text-brand-primary mb-2">100%</div>
              <div className="body-medium text-text-muted">Satisfaction client</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="dark-content-container text-center">
          <h2 className="display-large mb-6">Votre secteur nécessite une sécurité spécialisée ?</h2>
          <p className="body-large mb-12 text-text-secondary max-w-2xl mx-auto">
            Nos experts étudient gratuitement vos besoins spécifiques et vous proposent 
            une solution de sécurité adaptée à votre secteur d'activité.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="btn-primary">
              Étude gratuite de vos besoins
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="btn-secondary">
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sectors;
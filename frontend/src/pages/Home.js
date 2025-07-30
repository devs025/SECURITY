import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Car, Flame, Key, FileSearch, Calendar, ArrowRight, Users, Building, CheckCircle } from 'lucide-react';
import { companyInfo, services, sectors, stats, testimonials } from '../mock';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      Shield,
      Car, 
      Flame,
      Key,
      FileSearch,
      Calendar,
      Users,
      Building
    };
    return icons[iconName] || Shield;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="fade-up">
            <h1 className="display-huge mb-6">
              {companyInfo.name}
            </h1>
            <p className="display-medium mb-8 text-brand-primary">
              {companyInfo.tagline}
            </p>
            <p className="body-large mb-12 text-text-secondary max-w-2xl">
              {companyInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/services" className="btn-primary">
                Découvrir nos services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Nous contacter
              </Link>
            </div>
          </div>
          
          <div 
            className="parallax-element"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-brand-primary/20 to-brand-blue/20 rounded-lg backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-32 h-32 text-brand-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="dark-content-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = getIcon(stat.icon);
              return (
                <div key={index} className="text-center fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <IconComponent className="w-12 h-12 text-brand-primary mx-auto mb-4 morph-icon" />
                  <div className="display-medium mb-2">{stat.value}</div>
                  <div className="body-medium text-text-muted">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="dark-content-container">
          <div className="text-center mb-16">
            <h2 className="display-large mb-6">Nos Services</h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Une gamme complète de services de sécurité adaptés à tous vos besoins
            </p>
          </div>
          
          <div className="services-grid">
            {services.slice(0, 6).map((service, index) => {
              const IconComponent = getIcon(service.icon);
              return (
                <div 
                  key={service.id} 
                  className="service-card fade-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <IconComponent className="service-icon morph-icon" />
                  <h3 className="heading-2 mb-4">{service.title}</h3>
                  <p className="body-medium mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-primary" />
                        <span className="body-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              Voir tous nos services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Preview */}
      <section className="py-20 bg-bg-secondary">
        <div className="dark-content-container">
          <div className="text-center mb-16">
            <h2 className="display-large mb-6">Nos Secteurs d'Intervention</h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Nous intervenons dans de nombreux secteurs d'activité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.slice(0, 8).map((sector, index) => (
              <div 
                key={sector.id} 
                className="group cursor-pointer fade-up"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={sector.image} 
                    alt={sector.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="heading-3 text-white">{sector.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/secteurs" className="btn-primary">
              Découvrir tous nos secteurs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="dark-content-container">
          <div className="text-center mb-16">
            <h2 className="display-large mb-6">Ils nous font confiance</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="service-card fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-brand-primary text-xl">★</span>
                  ))}
                </div>
                <p className="body-medium mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="heading-3">{testimonial.name}</div>
                  <div className="body-medium text-text-muted">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="dark-content-container text-center">
          <h2 className="display-large mb-6">Prêt à sécuriser votre entreprise ?</h2>
          <p className="body-large mb-12 text-text-secondary max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis personnalisé et découvrez comment nous pouvons répondre à vos besoins de sécurité.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="btn-primary">
              Demander un devis gratuit
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

export default Home;
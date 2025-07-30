import React from 'react';
import { Shield, Users, Award, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo, teamMembers, stats } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="dark-content-container">
          <div className="hero-content">
            <div className="fade-up">
              <h1 className="display-huge mb-6">À Propos de {companyInfo.name}</h1>
              <p className="display-medium text-brand-primary mb-8">
                Votre partenaire sécurité depuis {companyInfo.founded}
              </p>
              <p className="body-large text-text-secondary max-w-2xl mb-12">
                Née d'une vision claire de la sécurité moderne, {companyInfo.name} s'est imposée 
                comme un acteur incontournable de la sécurité privée en France.
              </p>
            </div>
            
            <div className="fade-up" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-brand-primary/20 to-brand-blue/20 rounded-lg backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-24 h-24 text-brand-primary mx-auto mb-4" />
                    <div className="display-medium text-white">5+ ans</div>
                    <div className="body-large">d'expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-bg-secondary">
        <div className="dark-content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="display-large mb-8">Notre Histoire</h2>
              <div className="space-y-6">
                <p className="body-large">
                  Fondée en <span className="text-brand-primary font-semibold">{companyInfo.founded}</span>, 
                  {companyInfo.name} est née de la volonté de révolutionner le secteur de la sécurité privée 
                  en proposant des services innovants et personnalisés.
                </p>
                <p className="body-medium text-text-secondary">
                  Dès nos débuts, nous avons fait le choix de privilégier la qualité à la quantité, 
                  en recrutant uniquement des professionnels expérimentés et en investissant massivement 
                  dans la formation et les technologies de pointe.
                </p>
                <p className="body-medium text-text-secondary">
                  Aujourd'hui, nous sommes fiers d'accompagner plus de 150 clients dans la sécurisation 
                  de leurs biens et de leurs activités, avec un taux de satisfaction de 100%.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="service-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">2020</h3>
                    <p className="body-medium text-text-secondary">Création de l'entreprise avec une vision claire : révolutionner la sécurité privée</p>
                  </div>
                </div>
              </div>
              
              <div className="service-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">2022</h3>
                    <p className="body-medium text-text-secondary">Expansion de l'équipe et diversification des services proposés</p>
                  </div>
                </div>
              </div>
              
              <div className="service-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">2025</h3>
                    <p className="body-medium text-text-secondary">Plus de 200 sites sécurisés et une reconnaissance dans 8 secteurs d'activité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="dark-content-container">
          <div className="text-center mb-16">
            <h2 className="display-large mb-6">Nos Valeurs</h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card text-center">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="heading-2 mb-4">Excellence</h3>
              <p className="body-medium text-text-secondary">
                Nous visons l'excellence dans chaque mission, avec des standards de qualité irréprochables.
              </p>
            </div>

            <div className="service-card text-center">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="heading-2 mb-4">Proximité</h3>
              <p className="body-medium text-text-secondary">
                Une relation de confiance avec nos clients, basée sur l'écoute et la réactivité.
              </p>
            </div>

            <div className="service-card text-center">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="heading-2 mb-4">Innovation</h3>
              <p className="body-medium text-text-secondary">
                L'adoption constante des dernières technologies pour une sécurité toujours plus efficace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="dark-content-container">
          <div className="text-center mb-16">
            <h2 className="display-large mb-6">Notre Équipe Dirigeante</h2>
            <p className="body-large text-text-secondary">
              Des professionnels expérimentés au service de votre sécurité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="service-card text-center fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-24 h-24 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-brand-primary" />
                </div>
                <h3 className="heading-2 mb-2">{member.name}</h3>
                <p className="body-medium text-brand-primary mb-4">{member.position}</p>
                <p className="body-medium text-text-secondary mb-6">{member.experience}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Certifications :</h4>
                  {member.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-2 justify-center">
                      <CheckCircle className="w-4 h-4 text-brand-primary" />
                      <span className="text-sm text-text-secondary">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="dark-content-container">
          <div className="text-center mb-16">
            <h2 className="display-large mb-6">Nos Performances</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="display-medium text-brand-primary mb-2">{stat.value}</div>
                <div className="body-medium text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="dark-content-container text-center">
          <h2 className="display-large mb-6">Rejoignez-nous dans l'aventure</h2>
          <p className="body-large mb-12 text-text-secondary max-w-2xl mx-auto">
            Découvrez nos opportunités de carrière ou devenez notre partenaire pour bâtir ensemble l'avenir de la sécurité.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/candidature" className="btn-primary">
              Voir nos offres d'emploi
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
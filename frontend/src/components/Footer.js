import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { companyInfo } from '../mock';

const Footer = () => {
  return (
    <footer className="dark-footer">
      <div className="footer-content">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-brand-primary" />
            <span className="text-2xl font-bold text-white">{companyInfo.name}</span>
          </div>
          <p className="body-medium text-text-secondary mb-6 max-w-xs">
            Votre sécurité, notre expertise depuis {companyInfo.founded}
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-brand-primary/20 rounded flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-black transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-brand-primary/20 rounded flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-black transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-brand-primary/20 rounded flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-black transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="heading-3 mb-6">Navigation</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="body-medium text-text-secondary hover:text-brand-primary transition-colors">Accueil</Link></li>
            <li><Link to="/services" className="body-medium text-text-secondary hover:text-brand-primary transition-colors">Nos Services</Link></li>
            <li><Link to="/secteurs" className="body-medium text-text-secondary hover:text-brand-primary transition-colors">Secteurs</Link></li>
            <li><Link to="/a-propos" className="body-medium text-text-secondary hover:text-brand-primary transition-colors">À Propos</Link></li>
            <li><Link to="/candidature" className="body-medium text-text-secondary hover:text-brand-primary transition-colors">Candidature</Link></li>
            <li><Link to="/contact" className="body-medium text-text-secondary hover:text-brand-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="heading-3 mb-6">Nos Services</h3>
          <ul className="space-y-3">
            <li className="body-medium text-text-secondary">Gardiennage</li>
            <li className="body-medium text-text-secondary">Intervention Mobile</li>
            <li className="body-medium text-text-secondary">Sécurité Incendie</li>
            <li className="body-medium text-text-secondary">Contrôle d'Accès</li>
            <li className="body-medium text-text-secondary">Audit et Contrôle</li>
            <li className="body-medium text-text-secondary">Événementiel</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="heading-3 mb-6">Contact</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-brand-primary mt-1" />
              <div>
                <p className="body-medium text-text-secondary">{companyInfo.phone}</p>
                <p className="text-sm text-text-muted">24h/24 - 7j/7</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-brand-primary mt-1" />
              <p className="body-medium text-text-secondary">{companyInfo.email}</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-primary mt-1" />
              <p className="body-medium text-text-secondary">{companyInfo.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-subtle mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <p className="body-medium text-text-muted">
            © {new Date().getFullYear()} {companyInfo.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="body-medium text-text-muted hover:text-brand-primary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="body-medium text-text-muted hover:text-brand-primary transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="body-medium text-text-muted hover:text-brand-primary transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
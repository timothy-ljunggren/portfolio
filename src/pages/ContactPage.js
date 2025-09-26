import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const ContactPage = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacy: false,
  });

  useEffect(() => {
    document.title = 'Timothy Ljunggren - Contact';
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [id]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://formspree.io/f/mblypwpw', formData, {
        headers: {
          'Accept': 'application/json'
        }
      });
      setStatus('SUCCESS');
      setFormData({ name: '', email: '', message: '', privacy: false });
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEOHead 
        title="Contact Timothy Ljunggren - Get In Touch"
        description="Contact Timothy Ljunggren for collaboration opportunities, project inquiries, or professional connections. Business Informatics student and developer based in Berlin, Germany."
        keywords="Contact Timothy Ljunggren, Business Inquiries, Collaboration, Developer Contact, Berlin, Email, LinkedIn"
      />
      <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>

      <div className="max-w-xl mx-auto mb-12 text-center">
        <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4">
          <a href="mailto:timothy@antimala.de" className="flex items-center space-x-2 text-lg hover:text-primary">
            <Mail size={24} />
            <span>timothy@antimala.de</span>
          </a>
          <a href="tel:+4915164581384" className="flex items-center space-x-2 text-lg hover:text-primary">
            <Phone size={24} />
            <span>+49 1516 4581384</span>
          </a>
          <a href="https://www.linkedin.com/in/timothy-ljunggren-27ab42263/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-lg hover:text-primary">
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="max-w-xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name*
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-gray-600 transition-colors"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              E-Mail*
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-gray-600 transition-colors"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message*
            </label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-gray-600 transition-colors resize-y"
              required
            ></textarea>
          </div>

          {/* Privacy Policy Consent */}
          <div className="mb-6 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
            <h3 className="text-md font-medium mb-3 text-white">Datenschutz und Einwilligung</h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Ihre Kontaktdaten werden über den Dienst Formspree an mich weitergeleitet und 
              nur zur Bearbeitung Ihrer Anfrage verwendet. Die Verarbeitung erfolgt auf 
              Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
            
            <div className="flex items-start gap-3 mb-4">
              <input
                type="checkbox"
                id="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-primary bg-gray-600 border-gray-500 rounded focus:ring-primary focus:ring-2"
                required
              />
              <label htmlFor="privacy" className="text-sm text-gray-300 leading-relaxed">
                Ich bin damit einverstanden, dass meine Angaben aus dem Kontaktformular zur 
                Bearbeitung meiner Anfrage erhoben und verarbeitet werden. 
                Weitere Informationen finden Sie in unserer{' '}
                <Link to="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                  Datenschutzerklärung
                </Link>.
              </label>
            </div>
            
            <p className="text-xs text-gray-400">
              <strong>Hinweis:</strong> Die Datenübertragung erfolgt über Formspree (USA). 
              Weitere Details in deren{' '}
              <a 
                href="https://formspree.io/legal/privacy-policy/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Datenschutzrichtlinie
              </a>.
            </p>
          </div>
          {status === 'SUCCESS' && (
            <p className="text-green-500 mb-4 p-3 bg-green-500/10 rounded-md border border-green-500/20">
              Vielen Dank für Ihre Nachricht! Ich werde mich schnellstmöglich bei Ihnen melden.
            </p>
          )}
          {status === 'ERROR' && (
            <p className="text-red-500 mb-4 p-3 bg-red-500/10 rounded-md border border-red-500/20">
              Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt per E-Mail.
            </p>
          )}
          <button
            type="submit"
            disabled={!formData.privacy}
            className={`w-full font-bold py-3 px-4 rounded-md transition-all duration-300 ${
              formData.privacy 
                ? 'bg-primary-dark hover:bg-primary text-white cursor-pointer' 
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            Nachricht senden
          </button>
          
          <p className="text-xs text-gray-400 mt-3 text-center">
            Ihre Daten werden SSL-verschlüsselt übertragen und gemäß DSGVO verarbeitet.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

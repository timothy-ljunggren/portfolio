import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Mail, Phone, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    document.title = 'Timothy Ljunggren - Contact';
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
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
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>

      <div className="max-w-lg mx-auto mb-12 text-center">
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

      <div className="max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>
          {status === 'SUCCESS' && (
            <p className="text-green-500 mb-4">Thanks for your message! I'll get back to you soon.</p>
          )}
          {status === 'ERROR' && (
            <p className="text-red-500 mb-4">Ooops! There was an error.</p>
          )}
          <button
            type="submit"
            className="w-full bg-primary-dark hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
          <p className="text-xs text-gray-500 mt-4 text-center">
            This site uses Formspree for contact form submissions. By submitting this form, you acknowledge that your information will be transferred to Formspree for processing in accordance with their <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const LandingPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Timothy Ljunggren - Home';
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Timothy Ljunggren",
    "jobTitle": "Business Informatics Student",
    "description": "Passionate Business Informatics student specializing in React, Python, and Machine Learning",
    "url": "https://timothy-ljunggren.de",
    "image": "https://www.timothy-ljunggren.de/logo.svg",
    "sameAs": [
      "https://www.linkedin.com/in/timothy-ljunggren/",
      "https://github.com/timothy-ljunggren"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Technical University of Berlin"
    },
    "knowsAbout": ["React", "Python", "Machine Learning", "Business Informatics", "Web Development"]
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-8 md:py-16">
      <SEOHead 
        title="Timothy Ljunggren - Business Informatics Student & Developer"
        description="Passionate Business Informatics student at TU Berlin specializing in React, Python, and machine learning. Explore my innovative projects and technical expertise."
        keywords="Timothy Ljunggren, Business Informatics, TU Berlin, React Developer, Python, Machine Learning, Portfolio, Berlin, Web Development"
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden flex flex-col items-center space-y-12">
          {/* Image Section - Mobile */}
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
              {/* Gradient background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-white/10">
                <img 
                  src="/images/me_square.png" 
                  alt="Timothy Ljunggren"
                  className="w-full h-full object-cover object-center scale-110 hover:scale-115 transition-transform duration-700 ease-out"
                />
              </div>
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full opacity-40 animate-pulse delay-1000"></div>
            </div>
          </div>
          
          {/* Content Section - Mobile */}
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Hello, I'm
              </span>
              <span className="block text-white mt-2">
                Timothy Ljunggren
              </span>
            </h1>
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                A passionate <span className="text-primary font-semibold">Business Informatics</span> student.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Dedicated to building innovative and intelligent solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center">
          {/* Content Section - Desktop */}
          <div className="space-y-8">
            <h1 className="text-5xl xl:text-7xl font-extrabold text-white leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Hello, I'm
              </span>
              <span className="block text-white mt-4">
                Timothy Ljunggren
              </span>
            </h1>
            <div className="space-y-4">
              <p className="text-xl xl:text-2xl text-gray-300 leading-relaxed">
                A passionate <span className="text-primary font-semibold">Business Informatics</span> student.
              </p>
              <p className="text-lg xl:text-xl text-gray-400 leading-relaxed">
                Dedicated to building innovative and intelligent solutions.
              </p>
            </div>
            
            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => navigate('/projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  View My Work
                </span>
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="group px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1"
              >
                <span className="flex items-center justify-center gap-2">
                  Get In Touch
                </span>
              </button>
            </div>
          </div>
          
          {/* Image Section - Desktop */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-80 h-80 xl:w-96 xl:h-96 relative">
              {/* Large gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl scale-110"></div>
              {/* Secondary gradient ring */}
              <div className="absolute inset-4 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-xl"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-white/10 shadow-2xl">
                <img 
                  src="/images/me_square.png" 
                  alt="Timothy Ljunggren"
                  className="w-full h-full object-cover object-center scale-110 hover:scale-115 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full opacity-40 animate-pulse delay-1000"></div>
              <div className="absolute top-1/4 -left-4 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full opacity-30 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
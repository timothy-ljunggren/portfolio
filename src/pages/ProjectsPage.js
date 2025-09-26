import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SEOHead from '../components/SEOHead';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define custom project images stored in your repo
  const projectImages = {
    'Movie-Recommendation-System': '/images/projects/preview-movie-recommendation-system.png',
    'Meal-Planner': '/images/projects/preview-meal-planner.png',
    'portfolio': '/images/projects/preview-portfolio.png',
    'MRI-Brain-Tumor-Detection': '/images/projects/preview-mri-brain-tumor-detection.jpg',
    'neural-network': '/images/projects/preview-neural-network.png',
    // Add more project-specific images as needed
    // The key should match your GitHub repo name
  };

  useEffect(() => {
    document.title = 'Timothy Ljunggren - Projects';
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/timothy-ljunggren/repos?sort=created'
        );

        const projectsWithDetails = await Promise.all(
          response.data.map(async (project) => {
            let languages = [];
            if (project.languages_url) {
              try {
                const languagesResponse = await axios.get(project.languages_url);
                languages = Object.keys(languagesResponse.data);
              } catch (error) {
                console.error(`Could not fetch languages for ${project.name}`, error);
              }
            }
            return { ...project, languages };
          })
        );

        setProjects(projectsWithDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const formatProjectName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEOHead 
        title="Timothy Ljunggren - Projects | React, Python & Machine Learning"
        description="Explore Timothy Ljunggren's software development projects including React web applications, Python machine learning models, and innovative solutions. View source code on GitHub."
        keywords="Timothy Ljunggren, Projects, Portfolio, React Projects, Python Projects, Machine Learning, GitHub, Web Development, Software Development"
      />
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      {loading ? (
        <p className="text-center">Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const projectLanguages = [...new Set([
              ...(project.language ? [project.language] : []),
              ...(project.languages || []),
            ])];
            const projectTopics = project.topics || [];

            console.log(project.name);

            return (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 overflow-hidden"
              >
                <div className="w-full relative" style={{ paddingBottom: '56.25%' }}>
                  <img
                    src={
                      projectImages[project.name] || 
                      `https://opengraph.githubassets.com/1/${project.owner.login}/${project.name}`
                    }
                    alt={`${formatProjectName(project.name)} preview`}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      // If custom image fails, try GitHub OpenGraph
                      if (e.target.src !== `https://opengraph.githubassets.com/1/${project.owner.login}/${project.name}`) {
                        e.target.src = `https://opengraph.githubassets.com/1/${project.owner.login}/${project.name}`;
                      } else {
                        // If GitHub image also fails, hide the image
                        e.target.style.display = 'none';
                      }
                    }}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold mb-2">{formatProjectName(project.name)}</h2>
                  <p className="text-gray-400 mb-4 flex-grow">{project.description || 'No description available.'}</p>
                  
                  {(projectLanguages.length > 0 || projectTopics.length > 0) && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projectLanguages.map(lang => (
                        <span key={lang} className="bg-primary-dark text-white px-2 py-1 rounded-full text-xs font-medium">{lang}</span>
                      ))}
                      {projectTopics.map(topic => (
                        <span key={topic} className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs font-medium">{topic}</span>
                      ))}
                    </div>
                  )}
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-auto"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;

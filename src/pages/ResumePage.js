import React, { useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Award, Star, Briefcase } from 'lucide-react';

const ResumePage = () => {
  useEffect(() => {
    document.title = 'Timothy Ljunggren - Resume';
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white">Timothy Ljunggren</h1>
          <p className="text-xl text-gray-300 mt-2">Information Systems Management student, Co-founder & CEO</p>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-4 text-gray-400">
            <a href="mailto:timothy@antimala.de" className="hover:text-primary flex items-center"><Mail className="mr-2" /> timothy@antimala.de</a>
            <a href="tel:+4915164581384" className="hover:text-primary flex items-center"><Phone className="mr-2" /> +49 1516 4581384</a>
            <a href="https://www.linkedin.com/in/timothy-ljunggren-27ab42263/" target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center"><Linkedin className="mr-2" /> LinkedIn</a>
            <a href="https://github.com/timothy-ljunggren" target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center"><Github className="mr-2" /> GitHub</a>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-3xl font-bold border-b-2 border-primary pb-2 mb-6 flex items-center"><Star className="mr-3" /> Education</h2>
          <div className="relative border-l-4 border-primary-dark pl-8 space-y-10 py-4">
            <div className="relative">
              <div className="absolute -left-[42px] top-1 w-4 h-4 bg-gray-800 border-4 border-primary rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <p className="text-sm font-medium text-gray-400 md:order-2">2025 - Present</p>
                <h3 className="text-xl font-bold md:order-1">Technical University of Berlin</h3>
              </div>
              <p className="text-lg text-gray-300">B.Sc. in Information Systems Management</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[42px] top-1 w-4 h-4 bg-gray-800 border-4 border-primary rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <p className="text-sm font-medium text-gray-400 md:order-2">2024 - 2025</p>
                <h3 className="text-xl font-bold md:order-1">Humboldt University of Berlin</h3>
              </div>
              <p className="text-lg text-gray-300">B.Sc. in Computer Science, Mathematics, and Physics</p>
              <p className="text-gray-400 mt-1">Transitioned to Information Systems Management to better align with personal interests and career aspirations.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[42px] top-1 w-4 h-4 bg-gray-800 border-4 border-primary rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <p className="text-sm font-medium text-gray-400 md:order-2">2024</p>
                <h3 className="text-xl font-bold md:order-1">Kurt-Tucholsky-Oberschule, Berlin</h3>
              </div>
              <p className="text-lg text-gray-300">Abitur (University Entrance Qualification) - Grade: 1.0</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold border-b-2 border-primary pb-2 mb-6 flex items-center"><Briefcase className="mr-3" /> Professional Experience</h2>
           <div className="relative border-l-4 border-primary-dark pl-8 space-y-10 py-4">
             <div className="relative">
                <div className="absolute -left-[42px] top-1 w-4 h-4 bg-gray-800 border-4 border-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                    <p className="text-sm font-medium text-gray-400 md:order-2">Jul 2025 - Present</p>
                    <h3 className="text-xl font-bold md:order-1">Co-founder & CEO (Front-End & Machine Learning Expert)</h3>
                </div>
                <p className="text-md text-gray-400">yournee, Berlin</p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li>Spearheaded the development of a React Native application, focusing on intuitive UI/UX design to maximize user engagement.</li>
                  <li>Established and managed robust CI/CD pipelines using Azure DevOps, automating the entire build, test, and release lifecycle.</li>
                  <li>Championed agile methodologies, leading biweekly sprints to ensure timely delivery and cross-team synergy.</li>
                  <li>Architected and deployed advanced recommender systems using Python, enhancing user personalization.</li>
                </ul>
            </div>
             <div className="relative">
                <div className="absolute -left-[42px] top-1 w-4 h-4 bg-gray-800 border-4 border-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                    <p className="text-sm font-medium text-gray-400 md:order-2">Aug 2024 - Sep 2025</p>
                    <h3 className="text-xl font-bold md:order-1">Sales Associate & Acting Deputy Manager</h3>
                </div>
                <p className="text-md text-gray-400">Netto Marken-Discount, Berlin</p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li>Led and motivated a team of up to 5 employees, consistently achieving and exceeding sales goals.</li>
                  <li>Oversaw daily store operations, including staff scheduling and resource allocation, to ensure seamless workflow.</li>
                </ul>
            </div>
             <div className="relative">
                <div className="absolute -left-[42px] top-1 w-4 h-4 bg-gray-800 border-4 border-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                    <p className="text-sm font-medium text-gray-400 md:order-2">Jan 2024 - Jul 2024</p>
                    <h3 className="text-xl font-bold md:order-1">Sales Associate</h3>
                </div>
                <p className="text-md text-gray-400">Netto Marken-Discount, Berlin</p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li>Provided exceptional customer service, resolving inquiries and issues promptly to maintain high levels of client satisfaction.</li>
                </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold border-b-2 border-primary pb-2 mb-6 flex items-center"><Award className="mr-3" /> Certifications</h2>
            <div className="text-lg text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                <p>Abitur Prize in Mathematics - German Mathematical Society</p>
                <p>Google AI Essentials - Google</p>
                <p>Google Data Analytics (German) - Google</p>
                <p>Google Project Management - Google</p>
            </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-primary pb-2 mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">HTML5</span>
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">CSS3</span>
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">React.js</span>
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">App Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">React Native</span>
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">NumPy</span>
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">PyTorch</span>
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">Jupyter Notebook</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                 <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                 <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">MySQL</span>
                 <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">PHP</span>
                 <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">Azure DevOps</span>
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">Git</span>
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">GitHub</span>
                <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-sm font-medium">VS Code</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Leadership & Management</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Leadership</span>
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Project Management</span>
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Agile Methodologies</span>
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Management</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Collaboration & Communication</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Teamwork</span>
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Problem Solving</span>
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Customer Service</span>
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Communication</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary-dark text-white px-3 py-1 rounded-full text-sm font-medium">German (Native)</span>
                <span className="bg-secondary-dark text-white px-3 py-1 rounded-full text-sm font-medium">English (C1)</span>
                <span className="bg-secondary-dark text-white px-3 py-1 rounded-full text-sm font-medium">Latin</span>
              </div>
            </div>
             <div>
              <h3 className="text-xl font-bold mb-3">Microsoft Office</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-tertiary-dark text-white px-3 py-1 rounded-full text-sm font-medium">Word</span>
                <span className="bg-tertiary-dark text-white px-3 py-1 rounded-full text-sm font-medium">PowerPoint</span>
                <span className="bg-tertiary-dark text-white px-3 py-1 rounded-full text-sm font-medium">Excel</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
import React, { useEffect } from 'react';

const LandingPage = () => {
  useEffect(() => {
    document.title = 'Timothy Ljunggren - Home';
  }, []);

  return (
    <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-white md:text-7xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Hello, I'm Timothy Ljunggren
          </span>
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          A passionate Information Systems Management student and the co-founder of yournee.
        </p>
        <p className="mt-2 text-lg text-gray-400">
          Dedicated to building intuitive and intelligent applications.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
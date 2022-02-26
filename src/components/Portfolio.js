import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import ProjectContainer from './pages/ProjectContainer';
import Resume from './pages/Resume';

import projects from './projectList';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('AboutMe');
  
  const pageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe pageChange={pageChange} />;
    }
    if (currentPage === 'ProjectContainer') {
      return <ProjectContainer projects={projects} />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} pageChange={pageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Portfolio;
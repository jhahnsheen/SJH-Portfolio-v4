import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import ProjectContainer from './pages/ProjectContainer';
import Resume from './pages/Resume';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'ProjectContainer') {
      return <ProjectContainer />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const pageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} pageChange={pageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Portfolio;
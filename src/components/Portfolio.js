import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import ProjectContainer from './pages/ProjectContainer';
import Resume from './pages/Resume';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('AboutMe');
  const [input, setInput] = useState('');

  const pageChange = (page) => setCurrentPage(page);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(input)
  };

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe currentPage={currentPage} pageChange={pageChange} />;
    }
    if (currentPage === 'ProjectContainer') {
      return <ProjectContainer />;
    }
    if (currentPage === 'Contact') {
      return <Contact input={input} inputChange={handleInputChange} formSubmit={handleFormSubmit} />;
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
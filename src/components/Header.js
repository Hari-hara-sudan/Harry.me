import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS to refresh animations
import '../styles.css';

function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked and refresh AOS animations
  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const targetId = e.currentTarget.getAttribute('href').substring(1); // Get the target section ID
    const targetElement = document.getElementById(targetId); // Get the target section element
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Adjust offset here (e.g., for fixed header)
        behavior: 'smooth'
      });
    }

    setIsMobileMenuOpen(false); // Close the mobile menu
    AOS.refresh(); // Manually refresh AOS when a link is clicked
  };

  // Function to track which section is currently in view
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        setActiveSection(section.getAttribute("id"));
      }
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Adjust the duration as needed
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav>
        {/* Hamburger icon */}
        <div className="mobile-menu-icon" onClick={handleMenuToggle}>
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* Navigation links */}
        <ul className={isMobileMenuOpen ? 'nav-links mobile' : 'nav-links'}>
          <li className={activeSection === 'hero' ? 'active' : ''}>
            <a href="#hero" onClick={handleLinkClick}>HOME</a>
          </li>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <a href="#about" onClick={handleLinkClick}>ABOUT</a>
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''}>
            <a href="#projects" onClick={handleLinkClick}>PROJECTS</a>
          </li>
          <li className={activeSection === 'skills' ? 'active' : ''}>
            <a href="#skills" onClick={handleLinkClick}>SKILLS</a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a href="#contact" onClick={handleLinkClick}>CONTACTS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

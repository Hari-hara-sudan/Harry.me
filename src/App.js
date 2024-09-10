import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Allow animations to happen every time the element enters the viewport
    });
  }, []);

  return (
    <div>
      <Header /> {/* Header */}
      <Hero /> {/* Hero Section */}
      <About /> {/* About Section */}
      <Projects /> {/* Projects Section */}
      <Skills /> {/* Skills Section */}
      <Contact /> {/* Contact Section */}
      <Footer /> {/* Footer */}
      <ScrollToTop />
    </div>
  );
}

export default App;

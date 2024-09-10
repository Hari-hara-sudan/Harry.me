// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <section className="projects" id="projects" data-aos="fade-up">
      <h2>My Projects</h2>
      <ul>
        <li data-aos="fade-up" data-aos-delay="100">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio built with React.js.</p>
          

        </li>
        <br />
        <li data-aos="fade-up" data-aos-delay="200">
          <h3>DOCTORS ON DEMAND-Online Medical Appointment Booking Platform </h3>
                <p>— BUILT USING HTML,CSS,JAVASCRIPT,MYSQL</p>
                <p>It is an innovative online platform designed to streamline the process of
                  booking medical appointments, specifically tailored to meet the needs of
                  elderly individuals
                </p>
        </li>
        
      </ul>
    </section>
  );
}

export default Projects;

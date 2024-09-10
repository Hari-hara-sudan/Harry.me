import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <section id="about" className="about">
      <h2 data-aos="fade-up">About Me</h2>
      <div className="about-grid">
      <div className="grid-item" data-aos="fade-down">
          <h3>Summary of me</h3>
          <p><strong>i'm Hariharasudhan </strong></p>
          <p>I am a passionate Web Developer currently pursuing a B.TECH CSE  in DATASCIENCE at KARE.</p>
          <p>My journey in the tech world began with a fascination for programming and how it enables us to build and innovate. I was initially captivated by the problem-solving aspects of coding during a high school computer science class. This early exposure led me to pursue a degree in Computer Science, where I delved deeper into various technologies and programming languages.</p>
        </div>

        <div className="grid-item" data-aos="fade-left">
          <h3>2021 - 2022</h3>
          <p><strong>12th Grade</strong></p>
          <p>Dr. G.S. Kalyanasundaram Memorial School, Kumbakonam</p>
          <p>Score: 68.8%</p><br />
          <h3>2022 - Present</h3>
          <p><strong>B.Tech in Computer Science and Data Science</strong></p>
          <p>Kalasalingam Academy of Research and Education</p>
          <p>CGPA: 8.2/10</p><br />
        </div>  
        <div className="grid-item" data-aos="fade-right">
          <h3>Certifications</h3>
          <ul>
            <li>Oracle Certified Foundations Associate</li>
            <li>Top Engineers Workshop: Data Science with Python</li>
            <li>IBM Dashboard Creation Certificate of Achievement</li>
            <li>Simplilearn: Programming with Python 3.X</li>
          </ul>
        </div>


      </div>
    </section>
  );
}

export default About;

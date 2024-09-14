// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    
  return (
    <footer>
        
            <ul className='proicon'>
                <li><a href="https://github.com/Hari-hara-sudan"><FaGithub /></a></li>
                <li><a href="https://linkedin.com/in/harihara-sudan-78266b268"><FaLinkedin /></a></li>
            </ul>
      <p>© 2024 Hariharasudhan</p>
    </footer>
  );
}

export default Footer;

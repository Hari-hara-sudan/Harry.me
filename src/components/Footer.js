// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    
  return (
    <footer>
        
            <ul className='proicon'>
                <li><a href="https://www.linkedin.com/in/harihara-sudan-78266b268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaGithub /></a></li>
                <li><a href="https://www.linkedin.com/in/harihara-sudan-78266b268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a></li>
            </ul>
      <p>© 2024 Hariharasudhan</p>
    </footer>
  );
}

export default Footer;

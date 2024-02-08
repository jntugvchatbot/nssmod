import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/nss-unit">NSS Unit</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/downloads">Downloads</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}


export default Navbar;

// import React from 'react';
// import { Link as ScrollLink } from 'react-scroll';

// function Navbar() {
//   return (
//     <nav>
//       <ul className="nav-list">
//         <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
//         <li><ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink></li>
//         <li><ScrollLink to="activities" smooth={true} duration={500}>Activities</ScrollLink></li>
//         <li><ScrollLink to="team" smooth={true} duration={500}>Team</ScrollLink></li>
//         <li><ScrollLink to="nss-unit" smooth={true} duration={500}>NSS Unit</ScrollLink></li>
//         <li><ScrollLink to="gallery" smooth={true} duration={500}>Gallery</ScrollLink></li>
//         <li><ScrollLink to="downloads" smooth={true} duration={500}>Downloads</ScrollLink></li>
//         <li><ScrollLink to="login" smooth={true} duration={500}>Login</ScrollLink></li>
//         <li><ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink></li>
//         {/* Add more navigation links as needed */}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


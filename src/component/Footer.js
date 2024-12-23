import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a> | 
        <a href="/terms-of-service">Terms of Service</a> | 
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

export const Sitemap = () => {
  return (
    <div className="max-w-3xl mx-auto prose">
      <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
      
      <h2 className="text-xl font-bold text-gray-900">Main Pages</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900">Legal Pages</h2>
      <ul>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/cookies">Cookie Policy</Link></li>
        <li><Link to="/disclaimer">Disclaimer</Link></li>
      </ul>
    </div>
  );
};
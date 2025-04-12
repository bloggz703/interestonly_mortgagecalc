import React from 'react';

export const Cookies = () => {
  return (
    <div className="max-w-3xl mx-auto prose">
      <h1>Cookie Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>What Are Cookies</h2>
      <p>
        Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better website experience and understand how you use our site.
      </p>

      <h2>How We Use Cookies</h2>
      <p>
        We use cookies to:
      </p>
      <ul>
        <li>Remember your calculator inputs</li>
        <li>Analyze how you use our website</li>
        <li>Improve our website's performance</li>
      </ul>

      <h2>Types of Cookies We Use</h2>
      <h3>Essential Cookies</h3>
      <p>
        These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
      </p>

      <h3>Analytics Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
      </p>

      <h2>Managing Cookies</h2>
      <p>
        Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may affect the functionality of our website.
      </p>
    </div>
  );
};
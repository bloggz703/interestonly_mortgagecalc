import React from 'react';

export const Privacy = () => {
  return (
    <div className="max-w-3xl mx-auto prose">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>Introduction</h2>
      <p>
        This Privacy Policy explains how Interest Only Mortgage Calculator ("we," "us," or "our") collects, uses, and protects your personal information when you use our website.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Calculator inputs (loan amount, interest rate, term)</li>
        <li>Contact form submissions</li>
        <li>Usage data and analytics</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect to:
      </p>
      <ul>
        <li>Provide and improve our calculator service</li>
        <li>Respond to your inquiries</li>
        <li>Analyze and improve our website performance</li>
      </ul>

      <h2>Data Protection</h2>
      <p>
        We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to:
      </p>
      <ul>
        <li>Access your personal data</li>
        <li>Request correction of your personal data</li>
        <li>Request deletion of your personal data</li>
        <li>Object to processing of your personal data</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us through our contact form.
      </p>
    </div>
  );
};
import React from 'react';

export const Disclaimer = () => {
  return (
    <div className="max-w-3xl mx-auto prose">
      <h1>Disclaimer</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>Not Financial Advice</h2>
      <p>
        The information and calculations provided by Interest Only Mortgage Calculator are for illustrative purposes only and should not be considered as financial advice. We strongly recommend consulting with qualified financial advisors, mortgage brokers, or legal professionals before making any financial decisions.
      </p>

      <h2>Accuracy of Information</h2>
      <p>
        While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Your use of this website and its tools is entirely at your own risk. We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, the website and its calculators.
      </p>

      <h2>External Links</h2>
      <p>
        Our website may contain links to external websites. We have no control over the content and availability of those sites and are not responsible for their content or privacy practices.
      </p>

      <h2>Changes to This Disclaimer</h2>
      <p>
        We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website.
      </p>
    </div>
  );
};
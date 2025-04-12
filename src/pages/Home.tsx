import React from 'react';
import { Calculator } from '../components/Calculator';

export const Home = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Interest Only Mortgage Calculator</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate your monthly payments to discover your total interest with our easy-to-use interest only mortgage calculator.
        </p>
      </section>

      <Calculator />

      <section className="prose max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Understanding Your Interest Only Mortgage</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">How to Use Our Calculator</h3>
          <p className="mb-4">Follow these simple steps:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Enter your current mortgage balance</li>
            <li>Input the interest rate from your lender</li>
            <li>Specify your mortgage term in years</li>
          </ul>
          <p>Our calculator will instantly display your monthly payments and total interest costs.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Features of Interest Only Mortgages</h3>
          <ul className="list-disc pl-6">
            <li>Monthly payments cover only the interest</li>
            <li>Original loan amount remains unchanged</li>
            <li>Lower monthly payments compared to repayment mortgages</li>
            <li>Full loan amount due at the end of the term</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6">Important Considerations</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Who Should Consider an Interest Only Mortgage?</h3>
          <ul className="list-disc pl-6">
            <li>Buy-to-let property investors</li>
            <li>Professionals expecting future income growth</li>
            <li>Those with a solid repayment strategy</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Potential Risks to Consider</h3>
          <ul className="list-disc pl-6">
            <li>Need to repay the full loan at term end</li>
            <li>Requires a robust repayment strategy</li>
            <li>Interest rate changes affect monthly payments</li>
            <li>Property value fluctuations can impact your equity</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Repayment Strategies</h3>
          <ul className="list-disc pl-6">
            <li>Investment portfolio growth</li>
            <li>Property sale proceeds</li>
            <li>Retirement fund lump sum</li>
            <li>Converting to a repayment mortgage</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
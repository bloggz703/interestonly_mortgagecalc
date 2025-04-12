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

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions About Interest Only Mortgages</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">What exactly is an interest only mortgage?</h3>
              <p>
                An interest only mortgage is a type of home loan where your monthly payments only cover the interest charges, not the original amount borrowed (the capital). While this means lower monthly payments, you'll need to repay the full loan amount at the end of the mortgage term. This structure differs significantly from a traditional repayment mortgage, where you gradually pay off both interest and capital over time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">How do interest only mortgage payments work?</h3>
              <p>
                With an interest only mortgage, your monthly payment solely covers the interest on your loan. For example, if you borrow £200,000 at 3% annual interest, you'll pay £500 monthly (£200,000 × 3% ÷ 12 months). This amount remains constant if your interest rate is fixed, but can vary with a variable rate mortgage. Remember, these payments don't reduce your original loan amount - you'll still owe £200,000 at the end of the term.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">What are the advantages of an interest only mortgage?</h3>
              <p>
                Interest only mortgages offer several potential benefits:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Lower monthly payments compared to repayment mortgages</li>
                <li>Flexibility to invest the money you save elsewhere</li>
                <li>Potential tax advantages for buy-to-let investors</li>
                <li>Useful for property investors focusing on capital appreciation</li>
                <li>Can be beneficial for those with irregular income patterns</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">What are the risks and disadvantages?</h3>
              <p>
                Interest only mortgages come with significant risks that borrowers must carefully consider:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>The full loan amount must be repaid at the end of the term</li>
                <li>You're not building any equity in your property through your monthly payments</li>
                <li>Your chosen repayment strategy might not perform as expected</li>
                <li>Property values might fall, affecting your ability to sell or remortgage</li>
                <li>Interest rates could rise, increasing your monthly payments</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">How can I qualify for an interest only mortgage?</h3>
              <p>
                Lenders typically have stricter criteria for interest only mortgages. You'll usually need:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>A larger deposit (typically 25% or more)</li>
                <li>Higher income requirements compared to repayment mortgages</li>
                <li>A clear and viable repayment strategy</li>
                <li>Proof of assets or investments that could repay the loan</li>
                <li>A good credit history</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">What are acceptable repayment strategies?</h3>
              <p>
                Lenders will want to see a credible plan for repaying the capital at the end of the term. Common acceptable strategies include:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Investment portfolios with a proven track record</li>
                <li>Savings accounts or ISAs specifically designated for mortgage repayment</li>
                <li>Expected inheritance</li>
                <li>Sale of other properties or assets</li>
                <li>Pension lump sums (though lenders may be cautious about this option)</li>
              </ul>
              <p className="mt-2">
                It's crucial to regularly review your repayment strategy to ensure it remains on track to repay the mortgage.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Can I switch from an interest only to a repayment mortgage?</h3>
              <p>
                Yes, it's possible to switch from an interest only to a repayment mortgage, and many borrowers consider this as part of their long-term strategy. However, remember that:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Monthly payments will increase significantly</li>
                <li>The switch might need lender approval</li>
                <li>You might need to pass new affordability checks</li>
                <li>The earlier you switch, the more manageable the monthly payments will be</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
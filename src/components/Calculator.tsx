import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PoundSterling } from 'lucide-react';

const schema = z.object({
  loanAmount: z.string().min(1, 'Current mortgage balance is required'),
  interestRate: z.string().min(1, 'Interest rate is required'),
  loanTerm: z.string().min(1, 'Loan term is required'),
});

type FormData = z.infer<typeof schema>;

export const Calculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [sixMonthInterest, setSixMonthInterest] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-GB', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const calculatePayment = (data: FormData) => {
    const principal = parseFloat(data.loanAmount);
    const annualRate = parseFloat(data.interestRate) / 100;
    const monthlyRate = annualRate / 12;
    const termMonths = parseFloat(data.loanTerm) * 12;

    const monthlyInterest = principal * monthlyRate;
    const totalInterestPaid = monthlyInterest * termMonths;
    const sixMonthTotal = monthlyInterest * 6;

    setMonthlyPayment(monthlyInterest);
    setTotalInterest(totalInterestPaid);
    setSixMonthInterest(sixMonthTotal);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Interest Only Mortgage Calculator</h2>
      
      <form onSubmit={handleSubmit(calculatePayment)} className="space-y-4 sm:space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Current Mortgage Balance (£)</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <PoundSterling className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              {...register('loanAmount')}
              className="block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="200000"
            />
          </div>
          {errors.loanAmount && (
            <p className="mt-1 text-sm text-red-600">{errors.loanAmount.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
          <input
            type="number"
            step="0.01"
            {...register('interestRate')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="3.5"
          />
          {errors.interestRate && (
            <p className="mt-1 text-sm text-red-600">{errors.interestRate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Loan Term (Years)</label>
          <input
            type="number"
            {...register('loanTerm')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="25"
          />
          {errors.loanTerm && (
            <p className="mt-1 text-sm text-red-600">{errors.loanTerm.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Calculate
        </button>
      </form>

      {monthlyPayment !== null && totalInterest !== null && (
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Your Payment Summary</h3>
          
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="text-sm font-medium text-gray-500">Monthly Interest Payment</h4>
              <p className="text-xl sm:text-2xl font-bold">£{formatNumber(monthlyPayment)}</p>
            </div>
            
            <div className="border-b pb-4">
              <h4 className="text-sm font-medium text-gray-500">First 6 Months Total Interest</h4>
              <p className="text-xl sm:text-2xl font-bold">£{formatNumber(sixMonthInterest!)}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Total Interest Over Full Term</h4>
              <p className="text-xl sm:text-2xl font-bold">£{formatNumber(totalInterest)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
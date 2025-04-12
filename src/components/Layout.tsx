import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Home, Info, Mail, FileText, Map } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                <span className="ml-2 text-base sm:text-xl font-bold text-gray-900">Interest Only Calculator</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 flex items-center">
                <Home className="h-5 w-5 sm:mr-1" />
                <span className="hidden sm:inline">Home</span>
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 flex items-center">
                <Info className="h-5 w-5 sm:mr-1" />
                <span className="hidden sm:inline">About</span>
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 flex items-center">
                <Mail className="h-5 w-5 sm:mr-1" />
                <span className="hidden sm:inline">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {children}
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <div className="mt-4 space-y-2 sm:space-y-4">
                <Link to="/privacy" className="text-sm sm:text-base text-gray-500 hover:text-gray-900 block">
                  Privacy Policy
                </Link>
                <Link to="/cookies" className="text-sm sm:text-base text-gray-500 hover:text-gray-900 block">
                  Cookie Policy
                </Link>
                <Link to="/disclaimer" className="text-sm sm:text-base text-gray-500 hover:text-gray-900 block">
                  Disclaimer
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
              <div className="mt-4 space-y-2 sm:space-y-4">
                <Link to="/sitemap" className="text-sm sm:text-base text-gray-500 hover:text-gray-900 block">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 border-t border-gray-200 pt-6 sm:pt-8">
            <p className="text-sm sm:text-base text-gray-400 text-center">
              © {new Date().getFullYear()} Interest Only Mortgage Calculator. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
import React from "react";
import {
  FaHome,
  FaWallet,
  FaExchangeAlt,
  FaCompass,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const FinancialDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-100 px-4 py-6">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Need help?"
            className="flex-1 rounded-full bg-white px-4 py-2 shadow-sm text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
          />
          <div className="flex items-center gap-4">
            <button>
              <FaCompass className="text-gray-600 text-xl" />
            </button>
            <button>
              <FaBars className="text-gray-600 text-xl" />
            </button>
          </div>
        </div>
        <h1 className="mt-4 text-xl font-bold text-gray-800">
          Good Day, Deron
        </h1>
      </header>

      {/* Account Summary */}
      <main className="px-4 py-6 space-y-4">
        {/* Account Card */}
        <Link
          to="/savings"
          className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
        >
          <h2 className="text-gray-800 font-semibold">SAVINGS ...2652</h2>
          <p className="text-2xl font-bold text-green-600">£867,653.77</p>
          <p className="text-sm text-gray-600">Available balance</p>
          <div className="mt-2 bg-red-50 p-3 rounded-md text-sm text-red-600 flex items-start gap-2">
            <span className="text-xl">⚠️</span>
            <div>
              <strong>Critical Alert:</strong> Unusual activity detected from an
              unrecognized remote location. Your account has been temporarily
              frozen. Please provide your token PIN to reactivate your account.
              <span className="block mt-1 text-blue-600 font-medium">
                Manage Transfers
              </span>
            </div>
          </div>
        </Link>

        {/* Another Account Card */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-gray-800 font-semibold">
            IRA BROKERAGE CASH ...9116
          </h2>
          <p className="text-2xl font-bold text-gray-800">$234,909.33</p>
          <p className="text-sm text-gray-600">Available balance</p>
        </div>

        {/* Open an Account Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">
            Open an account
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center bg-blue-50 p-3 rounded-lg">
              <span className="text-blue-600">🏦</span>
              <span className="mt-2 text-sm text-gray-800">Checking</span>
            </button>
            <button className="flex flex-col items-center bg-blue-50 p-3 rounded-lg">
              <span className="text-blue-600">💰</span>
              <span className="mt-2 text-sm text-gray-800">Savings & CDs</span>
            </button>
            <button className="flex flex-col items-center bg-blue-50 p-3 rounded-lg">
              <span className="text-blue-600">💳</span>
              <span className="mt-2 text-sm text-gray-800">Credit Cards</span>
            </button>
            <button className="flex flex-col items-center bg-blue-50 p-3 rounded-lg">
              <span className="text-blue-600">🏡</span>
              <span className="mt-2 text-sm text-gray-800">Loans</span>
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
};

export default FinancialDashboard;

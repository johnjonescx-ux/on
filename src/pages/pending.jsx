import React from "react";
import {
  FaHome,
  FaWallet,
  FaExchangeAlt,
  FaCompass,
  FaBars,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useTransfer } from "../components/TransferContext";

const Pending = () => {
  const { pendingTransfers } = useTransfer();

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
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

      <main className="px-4 py-6 space-y-4">
        <Link
          to="/transfer"
          className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
        >
          <h2 className="text-gray-800 font-semibold">SAVINGS ...2652</h2>
          <p className="text-2xl font-bold text-green-600">£867,653.77</p>
          <p className="text-sm text-gray-600">Available balance</p>
        </Link>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Recent Transactions
          </h3>
          <div className="space-y-3">
            {pendingTransfers.map((transfer) => (
              <div
                key={transfer.id}
                className="flex items-center justify-between p-3 bg-blue-50 rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <FaClock className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {transfer.type}
                    </p>
                    <p className="text-xs text-gray-600">
                      {new Date(transfer.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    +£{transfer.amount.toFixed(2)}
                  </p>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                    {transfer.status}
                  </span>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <FaWallet className="text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    ACCOUNT MAINTENANCE FEE
                  </p>
                  <p className="text-xs text-gray-600">Jan 26, 2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-800">-£50.00</p>
                <span className="text-xs text-gray-500">Completed</span>
              </div>
            </div>
          </div>
          <Link
            to="/savings"
            className="block mt-3 text-center text-sm text-blue-600 font-medium"
          >
            View All Transactions
          </Link>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-gray-800 font-semibold">
            IRA BROKERAGE CASH ...9116
          </h2>
          <p className="text-2xl font-bold text-gray-800">$234,909.33</p>
          <p className="text-sm text-gray-600">Available balance</p>
        </div>

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

      <Navigation />
    </div>
  );
};

export default Pending;

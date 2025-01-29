import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaCreditCard, FaCheckCircle } from "react-icons/fa";
import Navigation from "../components/Navigation";
import { useTransfer } from "../components/TransferContext";

const PayAndTransferPage = () => {
  const navigate = useNavigate();
  const { addPendingTransfer } = useTransfer();

  const [formData, setFormData] = useState({
    amount: "",
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const formatted = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
      setFormData((prev) => ({ ...prev, [name]: formatted }));
      return;
    }

    if (name === "expiryDate") {
      const formatted = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{0,2})/, "$1/$2")
        .slice(0, 5);
      setFormData((prev) => ({ ...prev, [name]: formatted }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newTransfer = {
      id: Math.random().toString(36).slice(2, 10).toUpperCase(),
      type: "Account Funding",
      amount: parseFloat(formData.amount),
      date: new Date().toISOString(),
      status: "Pending",
      cardNumber: formData.cardNumber.slice(-4),
      cardHolder: formData.cardHolder,
    };

    setTimeout(() => {
      setIsLoading(false);
      setShowConfirmation(true);

      addPendingTransfer(newTransfer);

      const storedTransfers = JSON.parse(
        localStorage.getItem("recentTransfer") || "[]"
      );
      localStorage.setItem(
        "recentTransfer",
        JSON.stringify([newTransfer, ...storedTransfers])
      );

      setTimeout(() => {
        navigate("/pending");
      }, 5000);
    }, 2000);
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-blue-200">
        <header className="flex items-center justify-between px-4 py-3 bg-blue-300">
          <Link to="/dashboardsuccess" className="text-blue-900 text-xl">
            ←
          </Link>
          <h1 className="text-blue-900 font-semibold">Payment Status</h1>
          <FaBell className="text-blue-900 text-xl" />
        </header>

        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full text-center">
            <div className="flex justify-center mb-4">
              <FaCheckCircle className="text-6xl text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Payment Processed
            </h2>
            <p className="text-gray-600 mb-4">
              Your payment of £{formData.amount} is pending confirmation
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-sm text-gray-500">
                Transaction ID:{" "}
                {Math.random().toString(36).slice(2, 10).toUpperCase()}
              </p>
              <p className="text-sm text-gray-500">
                Card ending in: {formData.cardNumber.slice(-4)}
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800">
                Redirecting to dashboard in 5 seconds...
              </p>
            </div>
            <button
              onClick={() => navigate("/pending")}
              className="w-full py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700"
            >
              Return to Dashboard
            </button>
          </div>
        </div>

        <Navigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-blue-200">
      <header className="flex items-center justify-between px-4 py-3 bg-blue-300">
        <Link to="/dashboard" className="text-blue-900 text-xl">
          ←
        </Link>
        <h1 className="text-blue-900 font-semibold">Pay & Transfer</h1>
        <FaBell className="text-blue-900 text-xl" />
      </header>

      <div className="flex-1 overflow-y-auto pb-20 px-4 py-6">
        <div className="bg-white rounded-lg p-4 shadow mb-6">
          <p className="text-gray-600 text-sm">Available Balance</p>
          <p className="text-3xl font-bold text-green-600">£867,653.77</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Fund Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Amount (£)
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter amount"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Card Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  required
                />
                <FaCreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Card Holder Name
              </label>
              <input
                type="text"
                name="cardHolder"
                value={formData.cardHolder}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="MM/YY"
                  maxLength="5"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  CVV
                </label>
                <input
                  type="password"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="123"
                  maxLength="3"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold text-white ${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Pay Now"}
            </button>
          </form>

          <p className="text-gray-600 text-sm mt-4 text-center">
            🔒 Your payment information is secure and encrypted
          </p>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default PayAndTransferPage;

import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const ProvideTokenPinPage = () => {
  const [tokenPin, setTokenPin] = useState("");
  const [status, setStatus] = useState(""); // "loading", "success", or ""
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate token PIN
    if (tokenPin === "543217") {
      setStatus("loading");
      setTimeout(() => {
        setStatus("success");
        setTimeout(() => {
          navigate("/dashboard-success"); // Redirect to dashboard after success
        }, 2000); // Show success message for 2 seconds
      }, 7000); // Simulate 7 seconds loading
    } else {
      alert("Invalid Token PIN. Please try again.");
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-200">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          In Progress...
        </h2>
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-200">
        <h2 className="text-lg font-semibold text-green-700 mb-4">Success!</h2>
        <p className="text-gray-600">
          Redirecting you back to the dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-200">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-blue-300 shadow">
        <Link
          to="/dashboard" // Navigate to the dashboard route
          className="text-blue-900 text-xl"
        >
          ←
        </Link>
        <h1 className="text-blue-900 font-semibold text-lg">
          Provide Token PIN
        </h1>
        <FaLock className="text-blue-900 text-xl" />
      </header>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-center text-lg font-bold text-gray-700 mb-4">
            Token PIN Required
          </h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            Please enter your 6-digit Token PIN to reactivate your account.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              maxLength={6}
              value={tokenPin}
              onChange={(e) => setTokenPin(e.target.value)}
              placeholder="Enter Token PIN"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-center text-lg tracking-widest"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Submit
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link
              to="/help"
              className="text-blue-600 text-sm underline hover:text-blue-800"
            >
              Need help? Contact support
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProvideTokenPinPage;

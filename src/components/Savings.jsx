import React, { useState } from "react";
import {
  FaBell,
  FaSearch,
  FaShareAlt,
  FaHome,
  FaMoneyCheckAlt,
  FaWallet,
  FaBars,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import LoadingScreen from "../components/LoadingScreen";

const SavingsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Your existing allTransactions array stays the same
 const allTransactions = [
  {
    date: "09/02/2025",
    description: "SALARY RCV FROM IBERIA AIRLINES",
    amount: "+$28,550.00",
    isPositive: true,
    reference: "REF567890",
    status: "Successful",
  },
  {
    date: "09/06/2025",
    description: "REIMBURSEMENT FOR AUGUST",
    amount: "+$32,000.00",
    isPositive: true,
    reference: "REF567527",
    status: "Successful",
  },
  {
    date: "09/08/2025",
    description: "SENT TO US DEPARTMENT OF STATE",
    amount: "-$100,000.00",
    isPositive: false,
    reference: "REF2655546",
    status: "Successful",
  },
  {
    date: "09/10/2025",
    description: "ACCOUNT MAINTENACE FEE",
    amount: "-£50.00",
    isPositive: false,
    reference: "REF2655557",
    status: "Successful",
  },
  {
    date: "09/12/2025",
    description: "ACCOUNT MAINTENANCE FEE",
    amount: "-£50.00",
    isPositive: false,
    reference: "REF789012",
    status: "Successful",
  },
  {
    date: "09/14/2025",
    description: "CARD MAINTENANCE FEE",
    amount: "-£25.00",
    isPositive: false,
    reference: "REF789012",
    status: "Successful",
  },
  {
    date: "09/15/2025",
    description: "CREDIT/STAFF REIMBURSEMENT FROM IBERIA AIRLINES",
    amount: "+40,031.00",
    isPositive: true,
    reference: "REF2655758",
    status: "Successful",
  },
  {
    date: "09/16/2025",
    description: "PURCHASE AT ROLEX (REFUND)",
    amount: "+4,850.14",
    isPositive: true,
    reference: "REF789012",
    status: "Successful",
  },
  {
    date: "09/17/2025",
    description: "PURCHASE AT ROLEX",
    amount: "-7,650.00",
    isPositive: false,
    reference: "REF789012",
    status: "Successful",
  },
  {
    date: "09/18/2025",
    description: "PAYMENT AT AIR NOSTRUM LOGISTICS",
    amount: "-$1,200.00",
    isPositive: false,
    reference: "REF345678",
    status: "Successful",
  },
  {
    date: "09/19/2025",
    description: "OFFSHORE",
    amount: "-$10,000.00",
    isPositive: false,
    reference: "REF901234",
    status: "Successful",
  },
  {
    date: "09/20/2025",
    description: "SALARY RCV FROM IBERIA AIRLINES",
    amount: "+$18,500.00",
    isPositive: true,
    reference: "REF567890",
    status: "Successful",
  },
  {
    date: "09/21/2025",
    description: "GROCERY SHOPPING AT TESCO",
    amount: "-$120.45",
    isPositive: false,
    reference: "REF445566",
    status: "Successful",
  },
  {
    date: "09/22/2025",
    description: "ONLINE PURCHASE - AMAZON",
    amount: "-$150.00",
    isPositive: false,
    reference: "REF112233",
    status: "Successful",
  },
  {
    date: "09/23/2025",
    description: "SALARY RCV FROM IBERIA AIRLINES",
    amount: "+$18,500.00",
    isPositive: true,
    reference: "REF567891",
    status: "Successful",
  },
  {
    date: "09/24/2025",
    description: "SUBSCRIPTION - NETFLIX",
    amount: "-$15.99",
    isPositive: false,
    reference: "REF778899",
    status: "Successful",
  },
  {
    date: "09/25/2025",
    description: "DINNER AT ITALIAN RESTAURANT",
    amount: "-$75.00",
    isPositive: false,
    reference: "REF556677",
    status: "Successful",
  },
  {
    date: "09/26/2025",
    description: "SALARY RCV FROM IBERIA AIRLINES",
    amount: "+$18,500.00",
    isPositive: true,
    reference: "REF567892",
    status: "Successful",
  },
  {
    date: "09/27/2025",
    description: "UTILITY BILL PAYMENT",
    amount: "-$200.00",
    isPositive: false,
    reference: "REF223344",
    status: "Successful",
  },
  {
    date: "09/28/2025",
    description: "CAR FUEL PURCHASE",
    amount: "-$60.00",
    isPositive: false,
    reference: "REF998877",
    status: "Successful",
  },
  {
    date: "09/29/2025",
    description: "SALARY RCV FROM IBERIA AIRLINES",
    amount: "+$18,500.00",
    isPositive: true,
    reference: "REF567893",
    status: "Successful",
  },
  {
    date: "09/30/2025",
    description: "GADGET PURCHASE - APPLE STORE",
    amount: "-$250.00",
    isPositive: false,
    reference: "REF445533",
    status: "Successful",
  },
  {
    date: "09/30/2025",
    description: "GYM MEMBERSHIP RENEWAL",
    amount: "-$45.00",
    isPositive: false,
    reference: "REF112244",
    status: "Successful",
  },
  {
    date: "09/30/2025",
    description: "SALARY RCV FROM IBERIA AIRLINES",
    amount: "+$18,500.00",
    isPositive: true,
    reference: "REF567894",
    status: "Successful",
  },
  {
    date: "09/30/2025",
    description: "BOOKSTORE PURCHASE",
    amount: "-$30.00",
    isPositive: false,
    reference: "REF332211",
    status: "Successful",
  },
  {
    date: "10/01/2025",
    description: "ONLINE COURSE ENROLLMENT",
    amount: "-$120.00",
    isPositive: false,
    reference: "REF667788",
    status: "Successful",
  },
  {
    date: "10/01/2025",
    description: "SALARY RCV FROM IBERIA AIRLINES",
    amount: "+$18,500.00",
    isPositive: true,
    reference: "REF567895",
    status: "Successful",
  },
  {
    date: "10/01/2025",
    description: "MOBILE DATA RECHARGE",
    amount: "-$25.00",
    isPositive: false,
    reference: "REF778899",
    status: "Successful",
  },
  {
    date: "10/01/2025",
    description: "MOVIE TICKET PURCHASE",
    amount: "-$12.00",
    isPositive: false,
    reference: "REF998877",
    status: "Successful",
  },
];


  const [visibleTransactions, setVisibleTransactions] = useState(5);

  const handleLoadMore = () => {
    setVisibleTransactions((prevCount) =>
      Math.min(prevCount + 5, allTransactions.length)
    );
  };

  const handleProvideToken = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/provide-token-pin");
    }, 2000);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-blue-200">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-blue-300">
        <Link to="/dashboard" className="text-blue-900 text-xl">
          ←
        </Link>
        <input
          type="text"
          placeholder="Need help?"
          className="flex-1 mx-2 px-4 py-2 rounded-lg border border-gray-300 text-sm"
        />
        <FaBell className="text-blue-900 text-xl" />
        <button className="text-blue-900 ml-2">Sign off</button>
      </header>

      {/* Main content wrapper with padding bottom for navigation */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto pb-20">
          {" "}
          {/* Added pb-20 for navigation spacing */}
          {/* Balance Section */}
          <div className="text-center py-6">
            <h2 className="text-lg font-semibold text-gray-700">
              SAVINGS ...2652
            </h2>
            <p className="text-4xl font-bold text-green-600">£867,653.77</p>
            <p className="text-sm text-gray-600">Available balance</p>
          </div>
          {/* Alert Box */}
          <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mx-4 rounded-lg mb-4">
            <p>
              <strong>Critical Alert:</strong> Unusual activity detected from an
              unrecognized remote location. Your account has been temporarily
              frozen. Please provide your token PIN to reactivate your account.
            </p>
            <button
              className="mt-2 text-blue-600 underline"
              onClick={handleProvideToken}
            >
              Provide Token PIN
            </button>
          </div>
          {/* Tabs */}
          <div className="flex justify-around border-b border-gray-300 mb-4">
            <button className="py-2 text-blue-900 border-b-2 border-blue-900 font-semibold">
              Overview
            </button>
            <button className="py-2 text-gray-600">Manage</button>
            <button className="py-2 text-gray-600">
              Routing & Balance Info
            </button>
          </div>
          {/* Transactions */}
          <div className="px-4">
            <h3 className="text-gray-700 font-semibold mb-2">Transactions</h3>
            <div className="space-y-4">
              {allTransactions
                .slice(0, visibleTransactions)
                .map((transaction, index) => (
                  <div
                    key={index}
                    className="flex flex-col bg-white shadow rounded-lg p-4"
                  >
                    <div className="flex justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">
                          {transaction.date}
                        </p>
                        <p className="text-gray-800 text-sm font-medium">
                          {transaction.description}
                        </p>
                      </div>
                      <p
                        className={`text-sm font-semibold ${
                          transaction.isPositive
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.amount}
                      </p>
                    </div>
                    <div className="mt-2 flex justify-between text-sm text-gray-600">
                      <p>Ref: {transaction.reference}</p>
                      <p>Status: {transaction.status}</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* More Button with margin bottom */}
            {visibleTransactions < allTransactions.length && (
              <div className="text-center my-4">
                <button
                  onClick={handleLoadMore}
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                >
                  More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
};

export default SavingsPage;

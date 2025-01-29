import React from "react";
import {
  FaHome,
  FaWallet,
  FaExchangeAlt,
  FaCompass,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-t flex justify-around py-2">
      <Link
        to="/dashboard"
        className="flex flex-col items-center text-blue-600"
      >
        <FaHome className="text-xl" />
        <span className="text-xs">Accounts</span>
      </Link>
      <Link to="/deposit" className="flex flex-col items-center text-gray-600">
        <FaWallet className="text-xl" />
        <span className="text-xs">Deposit</span>
      </Link>
      <Link to="/transfer" className="flex flex-col items-center text-gray-600">
        <FaExchangeAlt className="text-xl" />
        <span className="text-xs">Pay & Transfer</span>
      </Link>
      <Link to="/explore" className="flex flex-col items-center text-gray-600">
        <FaCompass className="text-xl" />
        <span className="text-xs">Explore</span>
      </Link>
      <Link to="/menu" className="flex flex-col items-center text-gray-600">
        <FaBars className="text-xl" />
        <span className="text-xs">Menu</span>
      </Link>
    </nav>
  );
};

export default Navigation;

import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { TransferProvider } from "./components/TransferContext";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import LoadingScreen from "./components/LoadingScreen";
import Dashboard from "./pages/dashboard";
import Savings from "./components/Savings";
import ProvideTokenPinPage from "./components/ProvideToken";
import Dashboard2 from "./pages/dashboardsuccess";
import Transfer from "./pages/Transfer";
import Pending from "./pages/pending";
import Dashboard3 from "./pages/dashboardmain";
import Checkout from "./pages/checkout";
import TransactionsPage from "./pages/TransactionPage";

// Loading animation for the text with dots (Loading...)
const LoadingDots = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length < 3) return prevDots + ".";
        return ".";
      });
    }, 500); // Adds a dot every 500ms

    return () => clearInterval(interval);
  }, []);

  return <span>{`Loading${dots}`}</span>;
};

const LoadingRoute = ({ element, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Simulate 10-second loading time

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "20px",
          animation: "fadeIn 1s ease-out",
        }}
      >
        <LoadingDots />
      </div>

      <button
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          animation: "pulse 1.5s infinite",
          transition: "background-color 0.3s",
        }}
        disabled
      >
        Please wait...
      </button>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            background-color: #4CAF50;
          }
          50% {
            transform: scale(1.05);
            background-color: #45a049;
          }
          100% {
            transform: scale(1);
            background-color: #4CAF50;
          }
        }
      `}</style>
    </div>
  ) : (
    element
  );
};

function App() {
  return (
    <Router>
      <TransferProvider>
        <Routes>
          <Route path="/" element={<LoadingRoute element={<LoginPage />} />} />
          <Route
            path="/signup"
            element={<LoadingRoute element={<SignupPage />} />}
          />
          <Route
            path="/dashboard"
            element={<LoadingRoute element={<Dashboard />} />}
          />
          <Route
            path="/savings"
            element={<LoadingRoute element={<Savings />} />}
          />
          <Route
            path="/provide-token-pin"
            element={<LoadingRoute element={<ProvideTokenPinPage />} />}
          />
          <Route
            path="/dashboard-success"
            element={<LoadingRoute element={<Dashboard2 />} />}
          />
          <Route
            path="/transfer"
            element={<LoadingRoute element={<Transfer />} />}
          />
          <Route
            path="/pending"
            element={<LoadingRoute element={<Pending />} />}
          />
          <Route
            path="/dashboard3"
            element={<LoadingRoute element={<Dashboard3 />} />}
          />
          <Route
            path="/checkout"
            element={<LoadingRoute element={<Checkout />} />}
          />
          <Route
            path="/onlyme"
            element={<LoadingRoute element={<TransactionsPage />} />}
          />
        </Routes>
      </TransferProvider>
    </Router>
  );
}

export default App;

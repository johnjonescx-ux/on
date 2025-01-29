import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

const LoadingRoute = ({ element, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate 1-second loading time

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <LoadingScreen /> : element;
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
        </Routes>
      </TransferProvider>
    </Router>
  );
}

export default App;

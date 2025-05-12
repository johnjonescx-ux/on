import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaApple,
  FaKey,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [isCodeRequested, setIsCodeRequested] = useState(false);
  const [codeError, setCodeError] = useState("");
  const navigate = useNavigate();

  // Valid access codes (in a real app, these would come from a backend)
  const validCodes = ["123456", "789012", "345678"];

  const handleRequestCode = (e) => {
    e.preventDefault();
    if (email.length < 5) {
      alert("Please enter a valid email first");
      return;
    }

    setIsCodeRequested(true);
    setShowCodeInput(true);
    setCodeError("");

    // Simulate sending code to email
    alert(
      `A secure access code has been sent to ${email}. Please check your email and enter the code to continue.`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate access code
    if (!validCodes.includes(accessCode)) {
      setCodeError("Invalid access code. Please try again.");
      return;
    }

    // Validate email and password
    if (email.length > 4 && password.length > 4) {
      navigate("/dashboard");
    } else {
      alert("Email and password must be more than 4 characters long.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <img
            src={logoImage}
            alt="Logo"
            className="h-16 w-auto mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold tracking-tight text-gray-800">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-600">Sign in to your account</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Access Code Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="accessCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Access Code
                </label>
                <button
                  type="button"
                  onClick={handleRequestCode}
                  className={`text-sm font-medium ${
                    isCodeRequested
                      ? "text-gray-500 cursor-not-allowed"
                      : "text-red-600 hover:text-red-500"
                  }`}
                  disabled={isCodeRequested}
                >
                  {isCodeRequested ? "Code Sent" : "Request Code"}
                </button>
              </div>
              {showCodeInput && (
                <div className="relative">
                  <input
                    id="accessCode"
                    name="accessCode"
                    type="text"
                    maxLength="6"
                    required
                    value={accessCode}
                    onChange={(e) => {
                      setAccessCode(e.target.value);
                      setCodeError("");
                    }}
                    className={`w-full rounded-lg border ${
                      codeError ? "border-red-500" : "border-gray-300"
                    } px-4 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm`}
                    placeholder="Enter 6-digit code"
                  />
                  <FaKey className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              )}
              {codeError && <p className="text-sm text-red-600">{codeError}</p>}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-red-600 hover:text-red-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className={`w-full flex justify-center rounded-lg ${
              !isCodeRequested
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-500"
            } py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2`}
            disabled={!isCodeRequested}
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-gray-100 px-2 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <button className="flex justify-center items-center rounded-lg bg-white py-2 px-4 text-gray-600 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50">
            <FaGoogle className="h-5 w-5" />
          </button>
          <button className="flex justify-center items-center rounded-lg bg-white py-2 px-4 text-gray-600 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50">
            <FaGithub className="h-5 w-5" />
          </button>
          <button className="flex justify-center items-center rounded-lg bg-white py-2 px-4 text-gray-600 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50">
            <FaApple className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-red-600 hover:text-red-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

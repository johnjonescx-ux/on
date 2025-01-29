import React, { useState } from "react";
import { FaGoogle, FaGithub, FaApple } from "react-icons/fa";
import logoImage from "../assets/logo.png"; // Replace with your actual logo path
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signup attempted", { email, password });
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
            Create Your Account
          </h2>
          <p className="text-sm text-gray-600">Sign up to get started</p>
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
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center rounded-lg bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Sign up
          </button>
        </form>

        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-gray-100 px-2 text-gray-500">
              Or sign up with
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
          Already have an account?{" "}
          <Link to="/" className="font-medium text-red-600 hover:text-red-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

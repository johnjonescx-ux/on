import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center">
        {/* Spinner */}
        <div className="animate-spin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-lg font-semibold text-gray-700 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;

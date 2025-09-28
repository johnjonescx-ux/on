import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../../supabase';

const BankTransferForm = () => {
  const [formData, setFormData] = useState({
    bankName: "",
    accountNo: "",
    routingNo: "",
    address: "",
    recipientName: "",
    amount: "",
  });

  const [errors, setErrors] = useState({
    bankName: "",
    accountNo: "",
    routingNo: "",
    address: "",
    recipientName: "",
    amount: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [submittedAmount, setSubmittedAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();// Used for redirecting to /dashboard3 after submission

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation rules
    let errorMsg = "";
    if (name === "amount" && value < 1) {
      errorMsg = "Amount must be greater than 0.";
    } else if (name === "accountNo" && value.length < 8) {
      errorMsg = "Account number must be at least 8 characters.";
    } else if (name === "routingNo" && value.length !== 9) {
      errorMsg = "Routing number must be exactly 9 digits.";
    }

    setErrors({ ...errors, [name]: errorMsg });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors first
    if (Object.values(errors).some((err) => err !== "")) {
      alert("Please correct the errors before submitting.");
      return;
    }

    // Set loading state
    setIsLoading(true);

    // Submit to Supabase
    const { data, error } = await supabase.from('transactions').insert([
      {
        bank_name: formData.bankName,
        account_number: formData.accountNo,
        routing_number: formData.routingNo,
        bank_address: formData.address,
        recipient_name: formData.recipientName,
        amount: parseFloat(formData.amount),
      },
    ]);

    if (error) {
      console.error("Error submitting data to Supabase:", error);
      setIsLoading(false);
      return;
    }

    // Show the modal before redirect
    setSubmittedAmount(formData.amount);
    setShowModal(true);

    // Reset form data
    setFormData({
      bankName: "",
      accountNo: "",
      routingNo: "",
      address: "",
      recipientName: "",
      amount: "",
    });

    // After showing modal, wait a moment and then redirect
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard3"); // Redirect to dashboard3 after submission
    }, 3000); // Delay the redirection to show the modal
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-600">
            Make a Transfer / Send Wire
          </h2>
          <p className="text-gray-500 mt-2">
            Complete the form below to initiate a secure bank transfer
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Bank Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name of Bank
            </label>
            <input
              type="text"
              name="bankName"
              className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.bankName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter recipient's bank name"
              value={formData.bankName}
              onChange={handleChange}
              required
            />
            {errors.bankName && (
              <p className="mt-1 text-sm text-red-600">{errors.bankName}</p>
            )}
          </div>

          {/* Account Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account No
            </label>
            <input
              type="text"
              name="accountNo"
              className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.accountNo ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter account number"
              value={formData.accountNo}
              onChange={handleChange}
              required
            />
            {errors.accountNo && (
              <p className="mt-1 text-sm text-red-600">{errors.accountNo}</p>
            )}
          </div>

          {/* Routing Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Routing No
            </label>
            <input
              type="text"
              name="routingNo"
              className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.routingNo ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter routing number (9 digits)"
              value={formData.routingNo}
              onChange={handleChange}
              maxLength="9"
              required
            />
            {errors.routingNo && (
              <p className="mt-1 text-sm text-red-600">{errors.routingNo}</p>
            )}
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter bank address"
              value={formData.address}
              onChange={handleChange}
              rows="2"
              required
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">{errors.address}</p>
            )}
          </div>

          {/* Recipient Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name of Recipient
            </label>
            <input
              type="text"
              name="recipientName"
              className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.recipientName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter recipient's full name"
              value={formData.recipientName}
              onChange={handleChange}
              required
            />
            {errors.recipientName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.recipientName}
              </p>
            )}
          </div>

          {/* Amount Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                $
              </span>
              <input
                type="number"
                name="amount"
                className={`flex-1 px-3 py-2 border rounded-r-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.amount ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter amount to transfer"
                value={formData.amount}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
            {errors.amount && (
              <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 mt-6 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring
            focus:ring-blue-500 focus:ring-offset-2 ${
              isLoading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Process Transfer"}
          </button>
        </form>
      </div>

      {/* Modal for Confirmation */}
      {showModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Transfer Pending
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your transfer of{" "}
                        <span className="font-bold">${submittedAmount}</span> is
                        being processed. Please wait for confirmation.
                      </p>
                    </div>
                    <div className="mt-4 flex justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankTransferForm;

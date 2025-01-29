// TransferContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
const TransferContext = createContext();

// Create a provider component
export const TransferProvider = ({ children }) => {
  // State to store pending transfers
  const [pendingTransfers, setPendingTransfers] = useState([]);

  // Function to add a new pending transfer
  const addPendingTransfer = (transfer) => {
    setPendingTransfers((prev) => [transfer, ...prev]);
  };

  // Provide the context value to children
  return (
    <TransferContext.Provider
      value={{
        pendingTransfers,
        addPendingTransfer,
      }}
    >
      {children}
    </TransferContext.Provider>
  );
};

// Custom hook to use the transfer context
export const useTransfer = () => {
  const context = useContext(TransferContext);
  if (!context) {
    throw new Error("useTransfer must be used within a TransferProvider");
  }
  return context;
};

export default TransferContext;

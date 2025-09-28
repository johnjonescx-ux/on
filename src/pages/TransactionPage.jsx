import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase"; 

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch transaction data from Supabase when the component mounts
  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        // Query the "transactions" table in Supabase
        const { data, error } = await supabase
          .from("transactions") // The table name
          .select("*"); // Select all columns

        if (error) {
          throw error;
        }

        // Set the transaction data
        setTransactions(data);
      } catch (error) {
        setError("Error fetching transactions: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <div className="text-center">Loading transactions...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Transactions</h1>

      {/* Transactions Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2">Bank Name</th>
              <th className="px-4 py-2">Account No</th>
              <th className="px-4 py-2">Routing No</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Recipient Name</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-t">
                <td className="px-4 py-2 text-center">{transaction.bank_name}</td>
                <td className="px-4 py-2 text-center">{transaction.account_number}</td>
                <td className="px-4 py-2 text-center">{transaction.routing_number}</td>
                <td className="px-4 py-2 text-center">{transaction.bank_address}</td>
                <td className="px-4 py-2 text-center">{transaction.recipient_name}</td>
                <td className="px-4 py-2 text-center">${transaction.amount}</td>
                <td className="px-4 py-2 text-center">
                  {new Date(transaction.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsPage;
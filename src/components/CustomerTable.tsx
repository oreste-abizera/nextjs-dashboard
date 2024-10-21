"use client";

import React, { useState } from "react";
import { Customer } from "@/types";

interface CustomerTableProps {
  customers: Customer[];
}

const CustomerTable: React.FC<CustomerTableProps> = ({ customers }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 10;

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredCustomers.length / customersPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or email"
        className="w-full p-2 mb-4 border rounded"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Signup Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Activity
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentCustomers.map((customer) => (
            <tr key={customer.id}>
              <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {customer.signupDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {customer.lastActivity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomerTable;

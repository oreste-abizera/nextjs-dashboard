/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomerTable from "@/components/CustomerTable";
import { Customer } from "@/types";
import axios from "axios";

async function getCustomers() {
  try {
    const response = await axios.get<Customer[]>(
      "http://localhost:3000/api/customers"
    );
    return response.data || [];
  } catch (error: any) {
    const errorData = error?.response?.data;
    throw new Error(`Failed to fetch data: ${errorData?.error}`);
  }
}

export default async function Customers() {
  const customers: Customer[] = await getCustomers();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Customer Data</h1>
      <CustomerTable customers={customers} />
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import axios from "axios";
import { Customer } from "@/types";

export async function GET() {
  try {
    const response = await axios.get<Customer[]>(
      `https://my.api.mockaroo.com/customers.json?key=${process.env.MOCKAROO_API_KEY}`
    );
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response?.data?.error || "Failed to fetch customer data" },
      { status: 500 }
    );
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import axios from "axios";
import { WebsiteVisit } from "@/types";

export async function GET() {
  try {
    const response = await axios.get<WebsiteVisit[]>(
      `https://my.api.mockaroo.com/website_visits.json?key=${process.env.MOCKAROO_API_KEY}`
    );
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      {
        error:
          error.response?.data?.error || "Failed to fetch website visits data",
      },
      { status: 500 }
    );
  }
}

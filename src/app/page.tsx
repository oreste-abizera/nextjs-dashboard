/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import axios from "axios";
import { WebsiteVisit } from "@/types";
import DashboardOverview from "@/components/DashboardOverview";

const fetchWebsiteVisits = async () => {
  try {
    const response = await axios.get<WebsiteVisit[]>(
      "http://localhost:3000/api/website-visits"
    );
    return response.data || [];
  } catch (error: any) {
    const errorData = error?.response?.data;
    throw new Error(`Failed to fetch data: ${errorData?.error}`);
  }
};

export default async function Dashboard() {
  const visits: WebsiteVisit[] = await fetchWebsiteVisits();

  if (visits.length === 0) {
    throw new Error("No visit data available");
  }

  return <DashboardOverview visits={visits} />;
}

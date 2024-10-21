/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from "next/dynamic";

import { WebsiteVisit } from "@/types";
import axios from "axios";

const VisitChart = dynamic(() => import("@/components/VisitChart"), {
  ssr: false,
});

async function getWebsiteVisits() {
  try {
    const response = await axios.get<WebsiteVisit[]>(
      "http://localhost:3000/api/website-visits"
    );
    return response.data || [];
  } catch (error: any) {
    const errorData = error?.response?.data;
    throw new Error(`Failed to fetch data: ${errorData?.error}`);
  }
}

export default async function Visits() {
  const visits: WebsiteVisit[] = await getWebsiteVisits();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Website Visit Analysis</h1>
      {visits.length === 0 ? (
        <p>No visit data available</p>
      ) : (
        <VisitChart data={visits} />
      )}
    </div>
  );
}

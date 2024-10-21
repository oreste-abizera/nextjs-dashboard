/* eslint-disable @typescript-eslint/no-explicit-any */
import { WebsiteVisit } from "@/types";
import axios from "axios";

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

export default async function Home() {
  const visits: WebsiteVisit[] = await getWebsiteVisits();

  if (visits.length === 0) {
    throw new Error("No visit data available");
  }

  const totalVisitors = visits.reduce(
    (sum, day) => sum + day.uniqueVisitors,
    0
  );
  const avgBounceRate =
    visits.reduce((sum, day) => sum + day.bounceRate, 0) / visits.length;
  const avgSessionDuration =
    visits.reduce((sum, day) => sum + day.avgSessionDuration, 0) /
    visits.length;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Total Visitors</h2>
          <p className="text-3xl font-bold">{totalVisitors}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Avg. Bounce Rate</h2>
          <p className="text-3xl font-bold">{avgBounceRate.toFixed(2)}%</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Avg. Session Duration</h2>
          <p className="text-3xl font-bold">
            {avgSessionDuration.toFixed(2)} min
          </p>
        </div>
      </div>
    </div>
  );
}

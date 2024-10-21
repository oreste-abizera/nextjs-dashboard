import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { WebsiteVisit } from "@/types";

interface VisitChartProps {
  data: WebsiteVisit[];
}

const VisitChart: React.FC<VisitChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pageViews"
          stroke="#8884d8"
          name="Page Views"
        />
        <Line
          type="monotone"
          dataKey="uniqueVisitors"
          stroke="#82ca9d"
          name="Unique Visitors"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VisitChart;

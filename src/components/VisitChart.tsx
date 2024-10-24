"use client";

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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface VisitChartProps {
  data: WebsiteVisit[];
}

const VisitChart: React.FC<VisitChartProps> = ({ data }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Website Traffic</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="chart">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="chart">Chart</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
          </TabsList>
          <TabsContent value="chart" className="space-y-4">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis
                    dataKey="date"
                    label={{
                      value: "Date",
                      position: "insideBottomRight",
                      offset: 0,
                    }}
                    className="text-sm"
                  />
                  <YAxis
                    label={{
                      value: "Count",
                      angle: -90,
                      position: "insideLeft",
                    }}
                    className="text-sm"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                    }}
                    itemStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pageViews"
                    stroke="hsl(var(--primary))"
                    name="Page Views"
                    strokeWidth={2}
                    dot={{ stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="uniqueVisitors"
                    stroke="hsl(var(--secondary))"
                    name="Unique Visitors"
                    strokeWidth={2}
                    dot={{ stroke: "hsl(var(--secondary))", strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="data">
            <div className="rounded-md border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="p-2 text-left font-medium">Date</th>
                    <th className="p-2 text-left font-medium">Page Views</th>
                    <th className="p-2 text-left font-medium">
                      Unique Visitors
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="p-2">{item.date}</td>
                      <td className="p-2">{item.pageViews}</td>
                      <td className="p-2">{item.uniqueVisitors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default VisitChart;

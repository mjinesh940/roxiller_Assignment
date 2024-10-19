import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import "./index.css";

export function StatsChart({ itemPriceRange, monthName }) {
  // Transform itemPriceRange object to the desired format for the chart
  const list = Object.keys(itemPriceRange).map((each) => ({
    name: each,
    items: itemPriceRange[each],
  }));

  return (
    <div className="chart-container">
      <h2 className="chart-title">
        <u>Bar Charts Stats</u> - <i className="month-name">{monthName}</i>
      </h2>
      <ResponsiveContainer width="80%" height={400}>
        <BarChart
          data={list}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickCount={10} allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="items" fill="#82ca9d" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
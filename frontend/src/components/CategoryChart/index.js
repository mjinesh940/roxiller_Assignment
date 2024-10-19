import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";
import "./index.css";


const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function CategoryChart({ monthName, categories }) {
  const categoryColors = useMemo(() => {
    return categories.map(() => getRandomColor());
  }, [categories]);

  return (
    <div className="category-chart-container">
      <h2 className="chart-title">
        <u>Unique Category Chart</u> -{" "}
        <b style={{ color: "green" }}>{monthName}</b>
      </h2>
      <ResponsiveContainer width="50%" height={300} className="responsive-container">
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={categories}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="items"
            aria-label="Category Pie Chart">
            {categories.map((each, index) => (
              <Cell
                key={`cell-${index}`}
                name={each.category.toUpperCase()}
                fill={categoryColors[index]}
              />
            ))}
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
import { color } from "chart.js/helpers";
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};
const labels = [
  "Refrigerador",
  "Lavadora",
  "Secadora",
  "Computador",
  "Horno",
  "Play",
  "TV",
  "Sonido",
  "Otros",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Electrodomestico",
      data: [100, 200, 200, 243, 212, 150, 156, 123, 162],
      backgroundColor: "#FF812D80",
    },
  ],
};
const BarChart = () => {
  return (
    <div className="h-[320px] w-full flex justify-center my-10">
      <Bar options={options} data={data} className="w-full" />{" "}
    </div>
  );
};

export default BarChart;

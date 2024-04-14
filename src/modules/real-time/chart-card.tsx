import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const ChartCardRealTime = () => {
  const [data, setData] = useState<{
    labels: string[];
    values: number[];
  }>({
    labels: [],
    values: [],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        labels: [...prev.labels, new Date().toLocaleTimeString()],
        values: [...prev.values, Math.floor(Math.random() * 100)],
      }));
      if (data.labels.length === 5) {
        setData((prev) => {
          prev.labels.unshift();
          prev.values.unshift();
          return prev;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Line
      options={options}
      data={{
        yLabels: ["Consumo en watts"],
        xLabels: ["Hora"],
        labels: data.labels,
        datasets: [
          {
            label: "Costo energético vs tiempo",
            backgroundColor: "#FF812D",
            data: data.values,
            borderColor: "#FF812D",
            tension: 0.1,
          },
        ],
      }}
    />
  );
};

export default ChartCardRealTime;

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
      setData((prev) => {
        const newLabels = [...prev.labels, new Date().toLocaleTimeString()];
        const newValues = [...prev.values, Math.floor(Math.random() * 100)];
        // Mantener solo los últimos 5 valores
        if (newLabels.length > 5) {
          newLabels.shift();
          newValues.shift();
        }
        console.log(newLabels, newValues);

        return { labels: newLabels, values: newValues };
      });
    }, 60000); // Cambio cada minuto

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

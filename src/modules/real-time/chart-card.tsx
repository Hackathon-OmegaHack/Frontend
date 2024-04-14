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
  return (
    <Line
      options={options}
      data={{
        yLabels: ["Consumo en watts"],
        xLabels: ["Hora"],
        labels: [
          "01:00AM",
          "01:01AM",
          "01:02AM",
          "01:03AM",
          "01:04AM",
          "01:05AM",
          "01:06AM",
          "01:07AM",
        ],
        datasets: [
          {
            label: "Costo energético vs tiempo",
            backgroundColor: "#FF812D",
            data: [0, 10, 50, 20, 20, 100, 87, 300],
            borderColor: "#FF812D",
            tension: 0.1,
          },
        ],
      }}
    />
  );
};

export default ChartCardRealTime;

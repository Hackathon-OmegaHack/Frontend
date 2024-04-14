import { Line } from "react-chartjs-2";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const CardChart = () => {
  return (
    <section>
      <Line
        options={options}
        data={{
          yLabels: ["Consumo en watts"],
          xLabels: ["Hora"],
          labels: [
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
          ],
          datasets: [
            {
              label: "Consumo",
              backgroundColor: "#FF812D",
              data: [0, 10, 5, 2, 20, 30, 45, 50],
              borderColor: "#FF812D",
              tension: 0.1,
            },
          ],
        }}
      />
    </section>
  );
};

export default CardChart;

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie, Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export interface ChartProps {
  chartType: string;
  height: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
    hoverOffset?: number;
  }[];
}

const Chart = ({ chartType, labels, datasets, height }: ChartProps) => {
  if (chartType === "pie") {
    return (
      <Pie
        data={{ labels, datasets }}
        redraw={true}
        height={height}
        width="100%"
        options={{
          maintainAspectRatio: false,
          responsive: true,
          animation: {
            duration: 1500,
            easing: "easeInOutQuad",
          },
          plugins: {
            legend: {
              position: "right",
            },
            title: {
              display: true,
              text: "Chart.js Pie Chart",
              position: "right",
            },
          },
        }}
      />
    );
  }

  if (chartType === "doughnut") {
    return (
      <Doughnut
        redraw={true}
        data={{ labels, datasets }}
        height={height}
        width="100%"
        options={{
          maintainAspectRatio: false,
          responsive: true,
          animation: {
            duration: 1500,
            easing: "easeInOutQuad",
          },
          plugins: {
            title: {
              display: true,
              text: "Chart.js doughnut Chart",
            },
          },
        }}
      />
    );
  }
};

export default Chart;

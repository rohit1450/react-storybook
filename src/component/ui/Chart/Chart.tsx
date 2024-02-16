import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
  Filler,
  PointElement,
  LineElement,
} from "chart.js";

import { Pie, Doughnut, Bar, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
  Filler,
  PointElement,
  LineElement
);

export interface ChartProps {
  chartType: string;
  height: string;
  width: string;
  labels: string[];
  text?: string;
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
    hoverOffset?: number;
    fill?: boolean;
  }[];
  option: {
    maintainAspectRatio: boolean;
    responsive: boolean;
    animation: {
      duration: number;
      easing: string;
    };
    plugins: {
      legend: {
        position: "top" | "bottom" | "left" | "right";
      };
      title: {
        display: boolean;
        text: string;
        position: "top" | "bottom" | "left" | "right";
      };
    };
    indexAxis?: "x" | "y";
    scales?: {};
  };
}

const Chart = ({
  chartType,
  labels,
  datasets,
  height,
  width,
  option,
}: ChartProps) => {
  if (chartType === "pie") {
    return (
      <Pie
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={option}
      />
    );
  }

  if (chartType === "doughnut") {
    return (
      <Doughnut
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={option}
      />
    );
  }

  if (chartType === "bar") {
    return (
      <Bar
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={option}
      />
    );
  }

  if (chartType === "line") {
    return (
      <Line
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={option}
      />
    );
  }
};

export default Chart;

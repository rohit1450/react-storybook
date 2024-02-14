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
  chartTitle: string;
  text?: string;
  titlePosition: "top" | "left" | "right" | "bottom";
  dataSetPosition: "top" | "left" | "right" | "bottom";
  axis?: "x" | "y";
  minX?: number;
  maxX?: number;
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
    hoverOffset?: number;
    fill?: boolean;
  }[];
}

const Chart = ({
  chartType,
  labels,
  datasets,
  height,
  chartTitle,
  titlePosition,
  dataSetPosition,
  width,
  axis,
  minX,
  maxX,
}: ChartProps) => {
  if (chartType === "pie") {
    const cc = {
      maintainAspectRatio: false,
      responsive: true,
      animation: {
        duration: 1500,
        easing: "easeInOutQuad",
      },
      plugins: {
        legend: {
          position: dataSetPosition,
        },
        title: {
          display: true,
          text: chartTitle,
          position: titlePosition,
        },
      },
    };

    return (
      <Pie
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          animation: {
            duration: 1500,
            easing: "easeInOutQuad",
          },
          plugins: {
            legend: {
              position: dataSetPosition,
            },
            title: {
              display: true,
              text: chartTitle,
              position: titlePosition,
            },
          },
        }}
      />
    );
  }

  if (chartType === "doughnut") {
    return (
      <Doughnut
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          animation: {
            duration: 1500,
            easing: "easeInOutQuad",
          },
          plugins: {
            legend: {
              position: dataSetPosition,
            },
            title: {
              display: true,
              text: chartTitle,
              position: titlePosition,
            },
          },
        }}
      />
    );
  }

  if (chartType === "bar") {
    return (
      <Bar
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          animation: {
            duration: 1500,
            easing: "easeInOutQuad",
          },
          plugins: {
            legend: {
              position: dataSetPosition,
            },
            title: {
              display: true,
              text: chartTitle,
              position: titlePosition,
            },
          },
          indexAxis: axis,
          scales: {
            y: {
              min: minX,
              max: maxX,
            },
          },
        }}
      />
    );
  }

  if (chartType === "line") {
    return (
      <Line
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          animation: {
            duration: 1500,
            easing: "easeInOutQuad",
          },
          plugins: {
            legend: {
              position: dataSetPosition,
            },
            title: {
              display: true,
              text: chartTitle,
              position: titlePosition,
            },
          },
        }}
      />
    );
  }
};

export default Chart;

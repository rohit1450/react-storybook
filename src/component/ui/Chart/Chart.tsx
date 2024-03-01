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
import { SyntheticEvent, useRef } from "react";
import "@storybook/addon-console";

import { Pie, Doughnut, Bar, Line, getElementAtEvent } from "react-chartjs-2";

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
  customText: string;
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[] | string;
    borderWidth?: number;
    hoverOffset?: number;
    fill?: boolean;
  }[];
  customPosition: string;
  min?: number;
  max?: number;
  axis?: string;
  onClick?: (event: MouseEvent) => void;
}

const Chart = ({
  chartType,
  labels,
  datasets,
  height,
  width,
  customPosition,
  customText,
  min,
  max,
  axis,
}: ChartProps) => {
  const chartRef = useRef(null);
  const pieRef = useRef(null);
  const barRef = useRef(null);
  const doughnutRef = useRef(null);

  const customOption: object = {
    maintainAspectRatio: false,
    responsive: true,
    animation: {
      duration: 1500,
      easing: "easeInOutQuad",
    },
    plugins: {
      legend: {
        position: customPosition,
      },
      title: {
        display: true,
        text: customText,
        position: customPosition,
      },
    },
    indexAxis: axis,
  };

  const handleClick = (event:SyntheticEvent) => {
    console.log(chartType);
    getElementAtEvent(barRef.current,event)
  }

  if (chartType === "pie") {
    return (
      <Pie
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={customOption}
        ref={pieRef}
        onClick={handleClick}
      />
    );
  }

  if (chartType === "doughnut") {
    return (
      <Doughnut
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={customOption}
        ref={doughnutRef}
        onClick={handleClick}
      />
    );
  }

  if (chartType === "bar") {
    return (
      <Bar
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={{...customOption,   scales: {
          y: {
            min,
            max,
          },
        },}}
        ref={barRef}
        onClick={handleClick}
      />
    );
  }

  if (chartType === "line") {
    return (
      <Line
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={{...customOption,   scales: {
          y: {
            min,
            max,
          },
        },}}
        ref={chartRef}
        onClick={handleClick}
      />
    );
  }
};

export default Chart;

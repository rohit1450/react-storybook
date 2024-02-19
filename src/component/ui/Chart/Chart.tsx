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
  scales,
} from "chart.js";
import { useRef } from "react";
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

  const handleData = (event: Event) => {
    const requiredIndex: number | undefined = getElementAtEvent(
      chartRef.current,
      event
    )[0]?.index;
    if (requiredIndex !== undefined) {
      console.log(
        `country 2 year: ${labels[requiredIndex]} => ${datasets[1].data[requiredIndex]}%`
      );
      console.log(
        `country 1 year: ${labels[requiredIndex]} => ${datasets[0].data[requiredIndex]}%`
      );
    }
  };

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
    scales: {
      y: {
        min,
        max,
      },
    },
  };

  if (chartType === "pie") {
    return (
      <Pie
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={customOption}
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
      />
    );
  }

  if (chartType === "bar") {
    return (
      <Bar
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={customOption}
      />
    );
  }

  if (chartType === "line") {
    return (
      <Line
        data={{ labels, datasets }}
        height={height}
        width={width}
        options={customOption}
        ref={chartRef}
        onClick={handleData}
      />
    );
  }
};

export default Chart;

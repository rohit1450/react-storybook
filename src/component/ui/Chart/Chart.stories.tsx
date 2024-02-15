import Chart, { ChartProps } from "./Chart";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/ui/Chart",
  component: Chart,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<ChartProps> = (args: ChartProps) => <Chart {...args} />;

export const PieChart: StoryFn<ChartProps> = Template.bind({});
PieChart.args = {
  chartType: "pie",
  height: "400px",
  width: "400px",
  labels: ["Housing", "Transportation", "Food"],
  datasets: [
    {
      label: "Total Expense",
      data: [1500, 500, 600],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      borderWidth: 1,
      hoverOffset: 4,
    },
  ],
  option: {
    maintainAspectRatio: false,
    responsive: true,
    animation: {
      duration: 1500,
      easing: "easeInOutQuad",
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "House Holding Pie Chart",
        position: "top",
      },
    },
  },
};

export const Doughnut: StoryFn<ChartProps> = Template.bind({});
Doughnut.args = {
  ...PieChart.args,
  chartType: "doughnut",
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Area",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
      borderWidth: 1,
    },
  ],
  option: {
    ...PieChart.args.option,
    plugins: {
      ...PieChart?.args?.option?.plugins,
      title: { ...PieChart?.args?.option?.plugins.title, text: "doughnut" },
    },
  },
};

export const BarChart: StoryFn<ChartProps> = Template.bind({});
BarChart.args = {
  ...PieChart.args,
  chartType: "bar",
  labels: ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"],
  datasets: [
    {
      label: "Area",
      data: [77, 25, 88, 45, 60, 70],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
        "rgb(255, 159, 64)",
      ],
      hoverOffset: 4,
      borderWidth: 1,
    },
  ],
  option: {
    ...PieChart.args.option,
    plugins: {
      ...PieChart.args?.option?.plugins,
      title: { ...PieChart.args?.option?.plugins?.title, text: "Bar chart" },
    },
    indexAxis: "x",
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  },
};

export const LineChart: StoryFn<ChartProps> = Template.bind({});
LineChart.args = {
  ...PieChart.args,
  chartType: "line",
  labels: ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"],
  datasets: [
    {
      fill: true,
      label: "Area",
      data: [77, 25, 88, 45, 60, 70],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
        "rgb(255, 159, 64)",
      ],
      hoverOffset: 4,
      borderWidth: 1,
    },
  ],
  option: {
    ...PieChart.args.option,
    plugins: {
      ...PieChart.args?.option?.plugins,
      title: { ...PieChart.args?.option?.plugins.title, text: "Line chart" },
    },
  },
};

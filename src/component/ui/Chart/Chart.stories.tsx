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
  chartTitle: "House Holding Pie Chart",
  titlePosition: "top",
  dataSetPosition: "top",
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
};

export const Doughnut: StoryFn<ChartProps> = Template.bind({});
Doughnut.args = {
  ...PieChart.args,
  chartType: "doughnut",
  chartTitle: "Doughnut Chart",
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
  text: "donot",
};

export const BarChart: StoryFn<ChartProps> = Template.bind({});
BarChart.args = {
  ...PieChart.args,
  chartType: "bar",
  chartTitle: "Bar Chart",
  minX: 0,
  maxX: 100,
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
};

export const LineChart: StoryFn<ChartProps> = Template.bind({});
LineChart.args = {
  ...PieChart.args,
  chartType: "line",
  chartTitle: "line Chart",
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
};

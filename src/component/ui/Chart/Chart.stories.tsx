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
  labels: ["Housing", "Transportation", "Food"],
  datasets: [
    {
      label: "Monthly Expenses",
      data: [1500, 500, 600],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      borderWidth: 1,
    },
  ],
};

export const Doughnut: StoryFn<ChartProps> = Template.bind({});
Doughnut.args = {
  chartType: "doughnut",
  height: "400px",
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
    },
  ],
};

import Chart, { ChartProps } from "./Chart";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/ui/Chart",
  component: Chart,
  tags: ["autodocs"],
  argTypes: {
    chartType: {
      description: "Describe type of the chart",
    },
    height: {
      description: "Defines height of the chart",
    },
    width: {
      description: "Defines width of the chart",
    },
    customPosition: {
      description: "Position of title of the chart",
    },
    customText: {
      description: "Title of the chart",
    },
    min: {
      description: "Min value of axis scale to start from",
    },
    max: {
      description: "Max value of axis scale to start from",
    },
    axis: {
      description: "Defines axis of the chart X or Y",
    },
    onClick: {
      description: "Click event for charts by chartjs",
    },
    labels: {
      description: "An array of string contains labels for chart",
    },
    datasets: {
      description: "An array of object contains data for chart",
    },
  },
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
  customPosition: "top",
  customText: "House holding",
  handleClick
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
  customPosition: "top",
  customText: "Colors Data",
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
  customPosition: "top",
  customText: "Colors Data",
  axis: "x",
};

export const LineChart: StoryFn<ChartProps> = Template.bind({});
LineChart.args = {
  ...PieChart.args,
  chartType: "line",
  labels: ["2003", "2005", "2008", "2010", "2015", "2020"],
  datasets: [
    {
      label: "country 1",
      fill: false,
      data: [77, 25, 88, 45, 60, 95],
      hoverOffset: 4,
      borderWidth: 3,
      borderColor: "red",
    },
    {
      label: "country 2",
      fill: false,
      data: [70, 43, 57, 31, 45, 63],
      hoverOffset: 4,
      borderWidth: 3,
      borderColor: "blue",
    },
  ],
  customPosition: "top",
  customText: "Country Comparison",
  min: 0,
  max: 100,
  axis: "x",
};

function handleClick(){
  console.log("chart type");
}

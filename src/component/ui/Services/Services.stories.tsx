
import { StoryFn } from "@storybook/react";
import Services, { serviceProps } from "./Services";

export default {
    title: 'Components/ui/Services',
    component: Services,
    tags: ['autodocs'],
};

const Template: StoryFn<serviceProps> = (args: serviceProps) => <Services {...args} />;

export const Default = Template.bind({});
Default.args = {
    heading: 'Our Services',
    service1: 'Lorem ipsum dolor sit amet',
    service2: 'Consectetur adipiscing elit',
    service3: 'Aenean id neque auctor tellus mattis accumsan',
    servClass: '',
};

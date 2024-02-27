
import { StoryFn } from "@storybook/react";
import Services, { serviceProps } from "./Services";

export default {
    title: 'Components/ui/Services',
    component: Services,
    tags: ['autodocs'],
    argTypes: {
        heading: {
            description: "Defines text for heading of the section"
        },
        service1: {
            description: "Defines text for service one"
        },
        service2: {
            description: "Defines text for service one"
        },
        service3: {
            description: "Defines text for service one"
        },
        servClass: {
            description: "Custom class for tailwind merge"
        },
    }
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

import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Switch, { SwitchProps } from './Switch';

export default {
    title: 'Components/ui/Switch',
    component: Switch,
    tags: ['autodocs'],
    argTypes: {
        isOn: {
            description: "Boolean value for switch box"
        },
        onToggle: {
            description: "Boolean value for swicth"
        },
        label: {
            description: "Defines label for the switch"
        },
        containerSize: {
            description: "Defines container size of the switch"
        },
        thumbSize: {
            description: "Defines button size inside swicth"
        },
        switchClass: {
            description: "Custom class for tailwind merge"
        },
        thumbClass: {
            description: "Custom class for tailwind merge"
        },
    }
} as Meta;

const Template: StoryFn<SwitchProps> = (args: SwitchProps) => {
    const [isOn, setIsOn] = useState<boolean>(false);
    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return <Switch {...args} isOn={isOn} onToggle={handleToggle} />;
};

export const Default = Template.bind({});
Default.args = {
    label: '',
    containerSize: 'small',
    thumbSize: 'small',
    switchClass: '',
    thumbClass: '',
};



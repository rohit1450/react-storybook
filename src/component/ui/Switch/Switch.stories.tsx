import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Switch, { SwitchProps } from './Switch';

export default {
    title: 'Components/ui/Switch',
    component: Switch,
    tags: ['autodocs'],
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
    containerSize: 'large',
    thumbSize: 'large',
    switchClass: '',
    thumbClass: '',
};



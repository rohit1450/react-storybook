import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Slider, { SliderProps } from './Slider';

export default {
    title: 'Components/ui/Slider',
    component: Slider,
    tags: ['autodocs']
} as Meta;

const Template: StoryFn<SliderProps> = (args: SliderProps) => {
    const [value, setValue] = useState(args.defaultValue || args.min);

    const handleChange = (newValue: number) => {
        setValue(newValue);
    };

    return <Slider {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
    min: 0,
    max: 100,
    defaultValue: 50,
    value: 50,
    color: '#4299e1',
    size: 'medium',
    bigTheme: true,
};


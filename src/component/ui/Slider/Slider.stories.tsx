import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Slider, { SliderProps } from './Slider';

export default {
    title: 'Components/ui/Slider',
    component: Slider,
    tags: ['autodocs'],
    argTypes: {
        min: { description: "Minimum value of the slider" },
        max: { description: "Maximum value of the slider" },
        value: { description: "Current value of the slider" },
        defaultValue: { description: "Default value of the slider if no value is provided" },
        onChange: { description: "Event handler called when the slider value changes" },
        color: { description: "Color of the slider track (optional)" },
        size: { description: "Size of the slider ('small', 'medium', 'large')" },
        bigTheme: { description: "Boolean indicating whether to use a big theme for the slider" },
    }    
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


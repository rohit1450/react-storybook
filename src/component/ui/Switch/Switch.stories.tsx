import { Meta, StoryFn } from '@storybook/react';
import Toggle, { ToggleProps } from './Switch';
import { useState } from 'react';

export default {
    title: 'Components/ui/Switch',
    component: Toggle,
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ToggleProps> = (args: ToggleProps) => {
    const [enabled, setEnabled] = useState(args.enabled || false);

    const handleToggle = () => {
        setEnabled(!enabled);
    };

    return <Toggle {...args} enabled={enabled} onToggle={handleToggle} />;
};

export const Default: StoryFn<ToggleProps> = Template.bind({});
Default.args = {
    enabled: true,
};

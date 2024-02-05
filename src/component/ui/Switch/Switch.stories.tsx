
import { Meta, StoryFn } from '@storybook/react';
import Toggle from './Switch';

export default {
    title: 'Components/ui/Switch',
    component: Toggle,
} as Meta;

const Template: StoryFn = (args) => <Toggle {...args} />;

export const Default: StoryFn = Template.bind({});
Default.args = {

};


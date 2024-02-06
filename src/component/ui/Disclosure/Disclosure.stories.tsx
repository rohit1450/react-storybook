
import { Meta, StoryFn } from '@storybook/react';
import Disclose from './Disclosure';

export default {
    title: 'Components/ui/Disclosure',
    component: Disclose,
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn = (args) => <Disclose {...args} />;

export const Default: StoryFn = Template.bind({});
Default.args = {

};


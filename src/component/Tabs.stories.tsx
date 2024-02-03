import { Meta, StoryFn } from '@storybook/react';
import Tabs from './Tabs';

export default {
    title: 'Components/ui/Tabs',
    component: Tabs,
} as Meta;

const Template: StoryFn = () => <Tabs />;

export const Default = Template.bind({});
Default.args = {};
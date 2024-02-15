
import { Meta, StoryFn } from '@storybook/react';
import Avatars, { avatarProps } from './Avatar';

export default {
    title: 'Components/ui/Avatars',
    component: Avatars,
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn<avatarProps> = (args: avatarProps) => <Avatars {...args} />;

export const Default: StoryFn<avatarProps> = Template.bind({});
Default.args = {
    name: 'Arush',
    round: true,
    size: '100',
    src: "http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3",
    maxInitials: 2
};


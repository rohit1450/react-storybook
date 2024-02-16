

import { StoryFn, Meta } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';

export default {
    title: 'Components/ui/Badge',
    component: Badge,
    args: {
        className: '',
    },
    tags: ["autodocs"],
} as Meta;

const Template: StoryFn<BadgeProps> = (args: BadgeProps) => <Badge {...args} />;

export const Default: StoryFn<BadgeProps> = () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
        <Badge {...Primary.args as BadgeProps} />
        <Badge {...Success.args as BadgeProps} />
        <Badge {...Secondary.args as BadgeProps} />
        <Badge {...Warning.args as BadgeProps} />
        <Badge {...Danger.args as BadgeProps} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    count: 1,
    label: 'Primary',
    type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    count: 1,
    label: 'Secondary',
    type: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
    count: 1,
    label: 'Success',
    type: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
    count: 1,
    label: 'Warning',
    type: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
    count: 1,
    label: 'Danger',
    type: 'danger',
};



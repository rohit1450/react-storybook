
import { Meta, StoryFn } from '@storybook/react';
import Info, { InfoProps } from './Info';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
type heroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;
export default {
    title: 'Components/ui/Info',
    component: Info,
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn<InfoProps> = (args: InfoProps) => <Info {...args} />;

export const Default: StoryFn<InfoProps> = Template.bind({});
Default.args = {
    title: "This is title",
    icon: heroIcon,
    tooltipPosition: 'top'
};

export const Red: StoryFn<InfoProps> = Template.bind({});
Red.args = {
    title: "This is a red icon",
    icon: heroIcon,
    color: "red",
    bgColor: "red",
    tooltipPosition: 'bottom'
};

export const Big: StoryFn<InfoProps> = Template.bind({});
Big.args = {
    ...Default.args,
    title: "This is large icon",
    size: '5',
    tooltipPosition: 'left'
};

function heroIcon({ title, color, size }: { title?: string; color?: string; size?: number }) {
    const iconSize = size || 2;
    return (
        <InformationCircleIcon title={title} color={color} style={{ width: `${iconSize}rem`, height: `${iconSize}rem` }} />
    )
}

import { Meta, StoryFn } from '@storybook/react';
import Info, { InfoProps } from './Info';

export default {
    title: 'Components/ui/Info',
    component: Info,
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn<InfoProps> = (args: InfoProps) => <Info {...args} />;

export const Default: StoryFn<InfoProps> = Template.bind({});
Default.args = {
    title: "This is title",
    icon: infoIcon
};

export const Red: StoryFn<InfoProps> = Template.bind({});
Red.args = {
    title: "This is a red icon",
    icon: infoIcon,
    color: "red"
};

export const Big: StoryFn<InfoProps> = Template.bind({});
Big.args = {
    ...Default.args,
    title: "This is large icon",
    size: 10,
};


function infoIcon({ title, color, size }: { title: string; color?: string; size?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={color || "currentColor"} className={`w-${size || 6} h-${size || 6}`}>
            <title>{title}</title>
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
    );
}
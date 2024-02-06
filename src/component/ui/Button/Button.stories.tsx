import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
    title: 'Components/ui/Button',
    component: Button,
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;
export const Primary: StoryFn<ButtonProps> = Template.bind({});
Primary.args = {
    label: 'Primary',
    primary: 'true',
    bg: 'blue-light',
    color: 'black',
};
export const Secondary: StoryFn<ButtonProps> = Template.bind({});
Secondary.args = {
    label: 'Secondry',
    bg: 'gray-dark',
    color: 'white',
};

export const Disabled: StoryFn<ButtonProps> = Template.bind({});
Disabled.args = {
    label: 'Disabled',
    bg: 'gray-dark',
    color: 'white',
    icon: IconOne,
    disabled: true,
};


function IconOne() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
        </svg>
    )
}
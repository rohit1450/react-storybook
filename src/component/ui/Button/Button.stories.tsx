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
    lable: 'Button',
    primary: 'true',
    color: 'white',
    icon: IconTwo,
};
export const Secondary: StoryFn<ButtonProps> = Template.bind({});
Secondary.args = {
    lable: 'Button',
    primary: 'false',
    color: 'white',
    icon: IconTwo,
};

export const Disabled: StoryFn<ButtonProps> = Template.bind({});
Disabled.args = {
    lable: 'Button',
    color: 'white',
    icon: IconOne,
    disabled: true,
};

export const Loading: StoryFn<ButtonProps> = Template.bind({});
Loading.args = {
    lable: 'Button',
    primary: 'false',
    color: 'white',
    icon: Loader,
};


function IconOne() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 pt-1 pr-1 text-gray">
            <path fill="currentColor" d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
        </svg>
    )
}
function IconTwo() {
    return (
        <p></p>
    )
}

function Loader() {
    return (
        <div className='pt-1 pr-1'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 text-gray animate-spin"
            >
                <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
            </svg>
        </div>
    )
}


import { Meta, StoryFn } from '@storybook/react';
import Navbar, { NavProps } from './Navbar';
import { BugAntIcon } from "@heroicons/react/20/solid";
import { useState } from 'react';
import { UserIcon } from '@heroicons/react/16/solid';
import { UserPlusIcon } from '@heroicons/react/16/solid';

export default {
    title: 'Components/ui/Navbar',
    component: Navbar,
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn<NavProps> = (args: NavProps) => {
    const [isOn, setIsOn] = useState<boolean>(false);
    const handleToggle = () => {
        setIsOn(!isOn);
    };
    return <Navbar {...args} isOn={isOn} onToggle={handleToggle} />;
}

export const Default: StoryFn<NavProps> = Template.bind({});
Default.args = {
    title: 'AntTech',
    name: 'Arush',
    round: true,
    size: '30',
    src: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
    icon: Icon(),
    loginIcon: Login(),
    signUpIcon: Signup(),
    maxInitials: 2,
    bgColor: 'blue',
    padding: '2',
    menuClass: '',
    smallScreenMenuClass: '',
};

function Icon() {
    return (
        <BugAntIcon />
    )
}

function Login() {
    return (
        <UserIcon />
    )
}

function Signup() {
    return (
        <UserPlusIcon />
    )
}
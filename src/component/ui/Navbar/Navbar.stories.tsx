import { Meta, StoryFn } from '@storybook/react';
import Navbar, { NavProps } from './Navbar';
import { BugAntIcon } from "@heroicons/react/20/solid";
import { useState } from 'react';
import { UserIcon } from '@heroicons/react/16/solid';


export default {
    title: 'Components/ui/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {
        title: { description: "Defines the title of the section" },
        name: { description: "Defines the name prop for the avatar" },
        round: { description: "Determines whether the avatar image should be rounded" },
        size: { description: "Defines the size of the avatar container" },
        src: { description: "Source of the image for the avatar" },
        maxInitials: { description: "Maximum initials for the name of the avatar if the image is not rendered" },
        bgColor: { description: "Background color of the section" },
        loginIcon: { description: "Login icon displayed in the avatar" },
        signUpIcon: { description: "Signup icon displayed in the avatar" },
        thumbSize: { description: "Defines the size of the button inside the switch" },
        containerSize: { description: "Defines the size of the container of the switch" },
        isOverlayOpen: { description: "Boolean value indicating whether the overlay is open" },
        toggleOverlay: { description: "Event handler for toggling the overlay" },
        onToggle: { description: "Event handler for toggle action" },
        padding: { description: "Padding of the navbar section" },
        menuClass: { description: "Class name for custom styling of the menu" },
        smallScreenMenuClass: { description: "Class name for custom styling of the menu on small screens" },
    }

} as Meta;

const Template: StoryFn<NavProps> = (args: NavProps) => {
    const [isOn, setIsOn] = useState<boolean>(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };
    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };
    return <Navbar {...args} isOn={isOn} onToggle={handleToggle} isOverlayOpen={isOverlayOpen} toggleOverlay={toggleOverlay} />;
}

export const Default: StoryFn<NavProps> = Template.bind({});
Default.args = {
    title: 'AntTech',
    name: 'Arush',
    round: true,
    size: '30',
    src: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
    icon: Icon,
    loginIcon: Login,
    signUpIcon: Signup,
    maxInitials: 2,
    bgColor: 'blue',
    padding: '4',
    menuClass: '',
    smallScreenMenuClass: '',
}

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
        <div></div>
    )
}

import { StoryFn, Meta } from '@storybook/react';
import Webpage, { webProps } from './Webpage';
import { UserPlusIcon } from '@heroicons/react/16/solid';
import { BookOpenIcon, DevicePhoneMobileIcon, ServerIcon, Squares2X2Icon, UserGroupIcon, UserIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';


export default {
    title: 'Components/ui/Webpage',
    component: Webpage,
    tags: ['autodocs'],
    argTypes: {
        sideBar: { description: "Props for the sidebar component" },
        nav: { description: "Props for the navbar component" },
        heading: { description: "Heading/title of the webpage" },
        content: { description: "Main content of the webpage" },
        iconSize: { description: "Size of the icons in the sidebar" },
        width: { description: "Width of the sidebar" },
        onToggle: { description: "Event handler for toggling the sidebar" },
        isOn: { description: "Boolean value indicating whether the sidebar is on" },
        toggleOverlay: { description: "Event handler for toggling the overlay" },
    },
} as Meta;

const Template: StoryFn<webProps> = (args) => {
    const [isOn, setIsOn] = useState<boolean>(false);
    const handleToggle = () => {
        setIsOn(!isOn);
    };
    return <Webpage {...args} isOn={isOn} onToggle={handleToggle} />;
}

export const Default = Template.bind({});
Default.args = {
    heading: 'Dashboard Page',
    content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean id neque auctor tellus mattis accumsan.  Curabitur vestibulum mauris sit amet velit fermentum onsequat.Vivamus vehicula eu felis vitae dictum.Donec at quam tortor.Morbi malesuada ante a arcu euismod, auctor dapibus purus maximus.Donec dapibus lorem nec quam fringilla rutrum.Suspendisse venenatis arcu sit amet massa volutpat bibendum.Sed a pretium urna.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et dolor ultricies, porttitor felis vitae, auctor dolor.In sed elit euismod, dapibus nunc in, eleifend purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas orci lorem, iaculis sed mauris nec, convallis ullamcorper leo.Quisque a est leo.Nunc tempus purus pellentesque feugiat consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean id neque auctor tellus mattis accumsan.Curabitur vestibulum mauris sit amet velit fermentum consequat.Vivamus vehicula eu felis vitae dictum.Donec at quam tortor.Morbi malesuada ante a arcu euismod, auctor dapibus purus maximus.Donec dapibus lorem nec quam fringilla rutrum.Suspendisse venenatis arcu sit amet massa volutpat bibendum.Sed a pretium urna.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et dolor ultricies, porttitor felis vitae, auctor dolor.In sed elit euismod, dapibus nunc in, eleifend purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas orci lorem, iaculis sed mauris nec, convallis ullamcorper leo.Quisque a est leo.Nunc tempus purus pellentesque feugiat consequatQuisque a est leo.Nunc tempus purus pellentesque feugiat consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean id neque auctor tellus mattis accumsan.Curabitur vestibulum mauris sit amet velit fermentum consequat.Vivamus vehicula eu felis vitae dictum.Donec at quam tortor.Morbi malesuada ante a arcu euismod, auctor dapibus purus maximus.Donec dapibus lorem nec quam fringilla rutrum.Suspendisse venenatis arcu sit amet massa volutpat bibendum.Sed a pretium urna.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et dolor ultricies, porttitor felis vitae, auctor dolor.In sed elit euismod, dapibus nunc in, eleifend purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas orci lorem, iaculis sed mauris nec, convallis ullamcorper leo.Quisque a est leo.Nunc tempus purus pellentesque feugiat consequat.",
    nav: {
        title: '',
        name: 'Arush',
        round: true,
        size: '30',
        src: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
        loginIcon: IconOne,
        signUpIcon: IconTwo,
        maxInitials: 2,
        bgColor: '#0078d4',
        padding: '4',
        menuClass: '',
        smallScreenMenuClass: '',
        isOn: false,
        onToggle: () => { },
        toggleOverlay: () => { },
        isOverlayOpen: false,
    },
    sideBar: {
        width: "250px",
        imgURL: "",
        imgWidth: "60px",
        imgHeight: "50px",
        textWidth: "16px",
        iconSize: "20px",
        containerClass: 'bg-Primary',
        pages: [
            {
                title: 'Dashboard',
                link: '/dashboard',
                icon: IconThree,
            },
            {
                title: 'About us',
                link: '#',
                sub: [
                    {
                        title: 'edu',
                        link: '/about',
                        icon: IconFour,

                    },
                    {
                        title: 'family',
                        link: '/about',
                        icon: IconFive,
                    },
                ],
                icon: IconSix
            },
            {
                title: 'Services',
                link: '/services',
                icon: IconSeven 
            },
            {
                title: 'Contact us',
                link: '/contact',
                icon: IconEight
            },

        ],
        toggleOverlay: () => { },
    },
};

function IconOne(){
    return <UserIcon />;
    } 
function IconTwo() {
        return <UserPlusIcon />;
    } 
    function IconThree() {
        return <Squares2X2Icon />;
    } 
    function IconFour() {
        return <BookOpenIcon />;
    } 
    function IconFive() {
        return <UserGroupIcon />;
    } 
    function IconSix() {
        return <UserIcon />;
    } 
    function IconSeven() {
        return <ServerIcon />;
    } 
    function IconEight() {
        return <DevicePhoneMobileIcon />;
    } 


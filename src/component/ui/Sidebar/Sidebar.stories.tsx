import { Meta, StoryFn } from '@storybook/react';

import Sidebar, { SidebarProps } from './Sidebar';
import { useState } from 'react';
import { BookOpenIcon, DevicePhoneMobileIcon, ServerIcon, Squares2X2Icon, UserGroupIcon, UserIcon } from '@heroicons/react/20/solid';


const meta: Meta<typeof Sidebar> = {
    title: 'Components/ui/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {
        width: { description: "Width of the sidebar" },
        textWidth: { description: "Width of the text in the sidebar" },
        iconSize: { description: "Size of the icons in the sidebar" },
        imgURL: { description: "URL of the image/logo displayed in the sidebar" },
        imgHeight: { description: "Height of the image/logo displayed in the sidebar" },
        imgWidth: { description: "Width of the image/logo displayed in the sidebar" },
        isOverlayOpen: { description: "Boolean value indicating whether the overlay is open" },
        toggleOverlay: { description: "Event handler for toggling the overlay" },
        containerClass: { description: "Class name for custom styling of the container" },
        childClass: { description: "Class name for custom styling of the children elements" },
        pages: { description: "Array of objects representing pages in the sidebar" },
    }
    
};
export default meta;
const Template: StoryFn<SidebarProps> = (args: SidebarProps) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };

    return (
        <Sidebar
            {...args}
            isOverlayOpen={isOverlayOpen}
            toggleOverlay={toggleOverlay}
        />
    );
}

export const Primary = Template.bind({});

Primary.args = {
    width: "200px",
    imgURL: "https://w7.pngwing.com/pngs/925/348/png-transparent-logo-online-and-offline-e-online-design-text-logo-online-and-offline.png",
    imgWidth: "80px",
    imgHeight: "50px",
    textWidth: "15px",
    iconSize: "30px",
    containerClass: '',
    childClass: '',
    logoClass: '',
    parentListClass: '',
    childListClass: '',
    pages: [
        {
            title: 'Dashboard',
            link: '#',
            icon: IconOne
        },
        {
            title: 'About us',
            link: '#',
            sub: [
                {
                    title: 'edu',
                    link: '/about',
                    icon: IconTwo,

                },
                {
                    title: 'family',
                    link: '/about',
                    icon: IconThree,
                },
            ],
            icon: IconFour
        },
        {
            title: 'Services',
            link: '#',
            icon: IconFive
        },
        {
            title: 'Contact us',
            link: '#',
            icon: IconSix
        },

    ],
};

function IconOne(){
return <Squares2X2Icon />;
} 
function IconTwo() {
    return <BookOpenIcon />;
} 
function IconThree() {
    return <UserGroupIcon />;
} 
function IconFour() {
    return <UserIcon />;
} 
function IconFive() {
    return <ServerIcon />;
} 
function IconSix() {
    return <DevicePhoneMobileIcon />;
} 



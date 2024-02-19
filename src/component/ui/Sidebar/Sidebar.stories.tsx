import { Meta, StoryFn } from '@storybook/react';

import Sidebar, { SidebarProps } from './Sidebar';
import { useState } from 'react';
import { DevicePhoneMobileIcon, ServerIcon, Squares2X2Icon, UserIcon } from '@heroicons/react/20/solid';


const meta: Meta<typeof Sidebar> = {
    title: 'Components/ui/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
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
    width: "100px",
    imgURL: "https://w7.pngwing.com/pngs/925/348/png-transparent-logo-online-and-offline-e-online-design-text-logo-online-and-offline.png",
    colorPrimary: "red",
    imgWidth: "80px",
    imgHeight: "50px",
    textWidth: "15px",
    iconSize: "50px",
    pages: [
        {
            title: 'Dashboard',
            link: '#',
            icon: <Squares2X2Icon />,
        },
        {
            title: 'About us',
            link: '#',
            icon: <UserIcon />
        },
        {
            title: 'Services',
            link: '#',
            icon: <ServerIcon/>
        },
        {
            title: 'Contact us',
            link: '#',
            icon: <DevicePhoneMobileIcon/>
        },

    ],
};


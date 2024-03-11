import { Meta, StoryFn } from '@storybook/react';

import Sidebar, { SidebarProps } from './Sidebar';
import { useState } from 'react';
import { BookOpenIcon, Cog6ToothIcon, PhoneIcon, TableCellsIcon, UserGroupIcon, UserIcon } from '@heroicons/react/20/solid';


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
    width: "250px",
    imgURL: "",
    imgWidth: "80px",
    imgHeight: "50px",
    textWidth: "15px",
    iconSize: "22px",
    containerClass: '',
    childClass: '',
    logoClass: '',
    parentListClass: '',
    childListClass: '',
    pages: [
        {
            title: 'Dashboard',
            link: '1',
            icon: <TableCellsIcon />,
        },
        {
            title: 'About us',
            link: '2',
            sub: [
                {
                    title: 'Edu',
                    link: '2.1',
                    icon: <BookOpenIcon />,

                },
                {
                    title: 'Family',
                    link: '2.2',
                    icon: <UserGroupIcon />,
                },
            ],
            icon: <UserIcon />
        },
        {
            title: 'Services',
            link: '3',
            icon: <Cog6ToothIcon />
        },
        {
            title: 'Contact us',
            link: '4',
            icon: <PhoneIcon />
        },

    ],
};


import { StoryFn, Meta } from '@storybook/react';
import Webpage, { webProps } from './Webpage';
import { UserPlusIcon } from '@heroicons/react/16/solid';
import { DevicePhoneMobileIcon, ServerIcon, Squares2X2Icon, UserIcon } from '@heroicons/react/20/solid';

export default {
    title: 'Components/ui/Webpage',
    component: Webpage,
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn<webProps> = (args) => <Webpage {...args} />;

export const Default = Template.bind({});
Default.args = {
    nav: {
        title: '',
        name: 'Arush',
        round: true,
        size: '30',
        src: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
        loginIcon: <UserIcon />,
        signUpIcon: <UserPlusIcon />,
        maxInitials: 2,
        bgColor: 'blue',
        padding: '4',
        menuClass: '',
        smallScreenMenuClass: '',
        onToggle: () => { },
    },
    sideBar: {
        width: "100px",
        imgURL: "https://w7.pngwing.com/pngs/925/348/png-transparent-logo-online-and-offline-e-online-design-text-logo-online-and-offline.png",
        colorPrimary: "gray",
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
                link: '/#',
                icon: <UserIcon />
            },
            {
                title: 'Services',
                link: '/#',
                icon: <ServerIcon />
            },
            {
                title: 'Contact us',
                link: '/#',
                icon: <DevicePhoneMobileIcon />
            },

        ],
    },
};



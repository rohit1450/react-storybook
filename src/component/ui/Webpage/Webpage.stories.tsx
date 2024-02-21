
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
    width: '',
    heading: 'Dashboard Page',
    content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean id neque auctor tellus mattis accumsan.  Curabitur vestibulum mauris sit amet velit fermentum onsequat.Vivamus vehicula eu felis vitae dictum.Donec at quam tortor.Morbi malesuada ante a arcu euismod, auctor dapibus purus maximus.Donec dapibus lorem nec quam fringilla rutrum.Suspendisse venenatis arcu sit amet massa volutpat bibendum.Sed a pretium urna.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et dolor ultricies, porttitor felis vitae, auctor dolor.In sed elit euismod, dapibus nunc in, eleifend purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas orci lorem, iaculis sed mauris nec, convallis ullamcorper leo.Quisque a est leo.Nunc tempus purus pellentesque feugiat consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean id neque auctor tellus mattis accumsan.Curabitur vestibulum mauris sit amet velit fermentum consequat.Vivamus vehicula eu felis vitae dictum.Donec at quam tortor.Morbi malesuada ante a arcu euismod, auctor dapibus purus maximus.Donec dapibus lorem nec quam fringilla rutrum.Suspendisse venenatis arcu sit amet massa volutpat bibendum.Sed a pretium urna.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et dolor ultricies, porttitor felis vitae, auctor dolor.In sed elit euismod, dapibus nunc in, eleifend purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas orci lorem, iaculis sed mauris nec, convallis ullamcorper leo.Quisque a est leo.Nunc tempus purus pellentesque feugiat consequatQuisque a est leo.Nunc tempus purus pellentesque feugiat consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean id neque auctor tellus mattis accumsan.Curabitur vestibulum mauris sit amet velit fermentum consequat.Vivamus vehicula eu felis vitae dictum.Donec at quam tortor.Morbi malesuada ante a arcu euismod, auctor dapibus purus maximus.Donec dapibus lorem nec quam fringilla rutrum.Suspendisse venenatis arcu sit amet massa volutpat bibendum.Sed a pretium urna.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et dolor ultricies, porttitor felis vitae, auctor dolor.In sed elit euismod, dapibus nunc in, eleifend purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas orci lorem, iaculis sed mauris nec, convallis ullamcorper leo.Quisque a est leo.Nunc tempus purus pellentesque feugiat consequat.",
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
        width: "",
        imgURL: "https://w7.pngwing.com/pngs/925/348/png-transparent-logo-online-and-offline-e-online-design-text-logo-online-and-offline.png",
        colorPrimary: "gray",
        imgWidth: "80px",
        imgHeight: "50px",
        textWidth: "15px",
        iconSize: "50px",
        pages: [
            {
                title: 'Dashboard',
                link: '/dashboard',
                sub: [
                    {
                        title: 'Sub1',
                        link: '#',
                    },
                    {
                        title: 'Sub2',
                        link: '#sublink2',
                    },
                ],
                icon: <Squares2X2Icon />,
            },
            {
                title: 'About us',
                link: '/about',
                sub: [
                    {
                        title: 'edu',
                        link: '#',

                    },
                    {
                        title: 'family',
                        link: '#',

                    },
                ],
                icon: <UserIcon />
            },
            {
                title: 'Services',
                link: '/services',
                sub: [

                ],
                icon: <ServerIcon />
            },
            {
                title: 'Contact us',
                link: '/contact',
                icon: <DevicePhoneMobileIcon />
            },

        ],
    },
};



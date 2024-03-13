
import { StoryFn, Meta } from '@storybook/react';
import Webpage, { webProps } from './Webpage';
import { BookOpenIcon, Cog6ToothIcon, DevicePhoneMobileIcon, TableCellsIcon, UserGroupIcon, UserIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import Card from '../Card/Card';


export default {
    title: 'Components/ui/Webpage',
    component: Webpage,
    tags: ['autodocs'],
    parameters: {
        themes: {
            themeOverride: 'light',
        },
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
    Component: [
        <Card
            size="medium"
            imageSrc="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg"
            about="Where does it come from?"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            aboutFontSize="1.2rem"
            descriptionFontSize="0.9rem"
            imgHeight="16rem"
            imagePosition="top"
            imgWidth="200%"
            button={{
                buttonType: 'primary',
                color: 'white',
                label: 'Button',
                className: 'bg-purple',
            }}
            isButton={false}
        />,
    ],
    para: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    nav: {
        title: '',
        name: 'Arush',
        round: true,
        size: '30',
        src: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
        loginIcon: Login,
        signUpIcon: Signup,
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
        isActive: 1,
        width: "250px",
        imgURL: "",
        imgWidth: "80px",
        imgHeight: "50px",
        textWidth: "15px",
        iconSize: "22px",
        containerClass: 'bg-Primary',
        pages: [
            {
                title: 'Dashboard',
                link: '/dashboard',
                icon: <TableCellsIcon />,
            },
            {
                title: 'About us',
                link: '#',
                sub: [
                    {
                        title: 'Edu',
                        link: '/aboutEdu',
                        icon: <BookOpenIcon />,

                    },
                    {
                        title: 'Family',
                        link: '/aboutFamily',
                        icon: <UserGroupIcon />,
                    },
                ],
                icon: <UserIcon />
            },
            {
                title: 'Services',
                link: '/services',
                icon: <Cog6ToothIcon />
            },
            {
                title: 'Contact us',
                link: '/contact',
                icon: <DevicePhoneMobileIcon />
            },

        ],
        toggleOverlay: () => { },
    },
};

export const Dark = Template.bind({});

Dark.args = {
    ...Default.args,
},
    Dark.parameters = {
        themes: {
            themeOverride: 'dark'
        }
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
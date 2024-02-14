import { Meta, StoryFn } from '@storybook/react';
import Toaster, { ToasterProps } from './Toaster';


export default {
    title: 'Components/ui/Toaster',
    component: Toaster,
    tags: ['autodocs'],
} as Meta;


const Template: StoryFn<ToasterProps> = (args: ToasterProps) => <Toaster {...args} />
export const Default = Template.bind({})

Default.args = {
    type: 'default',
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: 'light',
    transition: 'Bounce',
    notifyText: "Wow! So easy",
    button: {
        buttonType: 'primary',
        color: 'white',
        label: 'Notify',
        className: '',
        // onClick: action('on-click'),
    },
}

export const Success = Template.bind({})

Success.args = {
    ...Default.args,
    type: 'success',
}

export const Info = Template.bind({})

Info.args = {
    ...Default.args,
    type: 'info',
}

export const Warning = Template.bind({})

Warning.args = {
    ...Default.args,
    type: 'warning',
}

export const Error = Template.bind({})

Error.args = {
    ...Default.args,
    type: 'error',
}

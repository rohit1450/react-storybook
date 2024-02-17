import { Meta, StoryFn } from '@storybook/react';
import Toaster, { ToasterProps } from './Toaster';
import { action } from '@storybook/addon-actions';

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
    classContainer: '',
    button: {
        buttonType: 'primary',
        color: 'white',
        label: 'Notify',
        className: '',
        onClick: action('on-click'),
    },
}

export const Success = Template.bind({})

Success.args = {
    ...Default.args,
    button: {
        buttonType: 'primary',
        color: 'white',
        label: 'Success',
        className: '',
        onClick: action('on-click'),
    },
    type: 'success',
}

export const Info = Template.bind({})

Info.args = {
    ...Default.args,
    button: {
        buttonType: 'primary',
        color: 'white',
        label: 'Info',
        className: '',
        onClick: action('on-click'),
    },
    type: 'info',
}

export const Warning = Template.bind({})

Warning.args = {
    ...Default.args,
    button: {
        buttonType: 'primary',
        color: 'white',
        label: 'Warning',
        className: '',
        onClick: action('on-click'),
    },
    type: 'warning',
}

export const Error = Template.bind({})

Error.args = {
    ...Default.args,
    button: {
        buttonType: 'primary',
        color: 'white',
        label: 'Error',
        className: '',
        onClick: action('on-click'),
    },
    type: 'error',
}
export const MultipleToast: StoryFn<ToasterProps> = () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
        <Toaster {...Default.args as ToasterProps} />
        <Toaster {...Success.args as ToasterProps} />
        <Toaster {...Info.args as ToasterProps} />
        <Toaster {...Warning.args as ToasterProps} />
        <Toaster {...Error.args as ToasterProps} />
    </div>
);
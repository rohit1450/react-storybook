import { StoryFn, Meta } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import React from 'react';

export default {
    title: 'Components/ui/Modal',
    component: Modal,
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ModalProps> = (args: ModalProps) => {
    const [isOpen, setIsOpen] = React.useState(args.initialIsOpen);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <Modal {...args} button={args.button} initialIsOpen={isOpen} handleOpen={openModal}
            handleClose={closeModal} />
    );
}

export const Default = Template.bind({});
Default.args = {
    button: {
        buttonType: 'loading',
        color: 'white',
        label: 'Open dialoge',
    },
    initialIsOpen: false,
    title: 'Lorem ipsum',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more- or - less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English.',
    buttonName: 'OK'
};

export const Open = Template.bind({});

Open.args = {
    ...Default.args,
    initialIsOpen: true,
};
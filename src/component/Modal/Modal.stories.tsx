
import { StoryFn, Meta } from '@storybook/react';
import Modal, { ModalProps } from './Modal';

export default {
    title: 'Components/ui/Modal',
    component: Modal,
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {};

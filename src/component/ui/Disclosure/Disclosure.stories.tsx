
import { Meta, StoryFn } from '@storybook/react';
import Disclose, { disclosureProps } from './Disclosure';

export default {
    title: 'Components/ui/Disclosure',
    component: Disclose,
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn<disclosureProps> = (args: disclosureProps) => <Disclose {...args} />;

export const Default: StoryFn<disclosureProps> = Template.bind({});
Default.args = {
    title1: 'What is your refund policy?',
    title2: 'Do you offer technical support?',
    content1: 'If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.',
    content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit lectus nec orci luctus, ac varius massa efficitur.',
    bgColor: 'Primary',
    btnTextColor: 'white',
    panelTextColor: 'black',
};


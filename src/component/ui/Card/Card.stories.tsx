
import { StoryFn } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
    title: 'components/ui/Card',
    component: Card,
    tags: ['autodocs']
};

const Template: StoryFn<CardProps> = (args: CardProps) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 'medium',
    imageSrc: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg',
    about: 'Where does it come from?',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    aboutFontSize: '1.2rem',
    descriptionFontSize: '0.9rem',
    imgHeight: '16rem',
    imagePosition: 'top',
    button: {
        buttonType: 'primary',
        color: 'white',
        label: 'Button',
    },
    isButton: false,
};


export const Small = Template.bind({});
Small.args = {
    ...Default.args,
    size: 'small',
    imagePosition: 'right',
};

export const Medium = Template.bind({});
Medium.args = {
    ...Default.args,
    size: 'medium',
    imagePosition: 'bottom',
};

export const Large = Template.bind({});
Large.args = {
    ...Default.args,
    size: 'large',
    imagePosition: 'left',
};
export const WithButton = Template.bind({});
WithButton.args = {
    ...Default.args,
    isButton: true,
};

export const MultipleCards: StoryFn<CardProps> = () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
        <Card {...Large.args as CardProps} />
        <Card {...Small.args as CardProps} />
        <Card {...Medium.args as CardProps} />
    </div>
);
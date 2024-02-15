
import { StoryFn } from '@storybook/react';
import Card, { CardProps } from './Card';
import { action } from '@storybook/addon-actions';

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
    imgWidth: '200%',
    button: {
        buttonType: 'primary',
        color: 'white',
        label: 'Button',
        className: 'bg-purple',
        onClick: action('on-click'),
    },
    isButton: false,
};


export const Small = Template.bind({});
Small.args = {
    ...Default.args,
    size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
    ...Default.args,
    size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
    ...Default.args,
    size: 'large',
};
export const WithButton = Template.bind({});
WithButton.args = {
    ...Default.args,
    isButton: true,
};

export const MultipleCards: StoryFn<CardProps> = () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
        <Card {...Medium.args as CardProps} />
        <Card {...Medium.args as CardProps} />
        <Card {...Medium.args as CardProps} />
    </div>
);
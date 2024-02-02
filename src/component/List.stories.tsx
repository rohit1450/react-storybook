// import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import List from './List';
import { useState } from 'react';

const meta: Meta<typeof List> = {
    title: 'Components/ui/List',
    component: List,
};

export default meta;

type Story = StoryObj<typeof List>;

export const Single: Story = (args: any) => <List {...args} />;

Single.args = {
    people: [
        { id: 1, name: 'Durward Reynolds', unavailable: false },
        { id: 2, name: 'Kenton Towne', unavailable: false },
        { id: 3, name: 'Therese Wunsch', unavailable: false },
        { id: 4, name: 'Benedict Kessler', unavailable: true },
        { id: 5, name: 'Katelyn Rohan', unavailable: false },
    ],
};

export const Multiple: Story = (args: any) => {
    const [multiple, setMultiple] = useState(true);

    return (
        <List {...args} multiple={multiple} />
    );
}

Multiple.args = {
    people: [
        { id: 1, name: 'Durward Reynolds', unavailable: false },
        { id: 2, name: 'Kenton Towne', unavailable: false },
        { id: 3, name: 'Therese Wunsch', unavailable: false },
        { id: 4, name: 'Benedict Kessler', unavailable: true },
        { id: 5, name: 'Katelyn Rohan', unavailable: false },
    ],
};

import { StoryFn, Meta } from '@storybook/react';
import List, { ListProps } from './List';
import { useState } from 'react';

const meta: Meta<typeof List> = {
    title: 'Components/ui/List',
    component: List,
};

export default meta;

export const Single: StoryFn<ListProps> = (args: ListProps) => <List {...args} />;

Single.args = {
    people: [
        { id: 1, name: 'Durward Reynolds', unavailable: false },
        { id: 2, name: 'Kenton Towne', unavailable: false },
        { id: 3, name: 'Therese Wunsch', unavailable: false },
        { id: 4, name: 'Benedict Kessler', unavailable: true },
        { id: 5, name: 'Katelyn Rohan', unavailable: false },
    ],
};

export const Multiple: StoryFn<ListProps> = (args: ListProps) => {
    const [multiple] = useState(true);

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

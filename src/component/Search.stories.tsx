import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Search, { SearchProps } from './Search';

export default {
    title: 'Components/ui/Search',
    component: Search,
} as Meta;

const Template: StoryFn<SearchProps> = (args: SearchProps) => <Search {...args} />;

export const Single: StoryFn<SearchProps> = Template.bind({});
Single.args = {};

export const Multiple: StoryFn<SearchProps> = (args: SearchProps) => {
    const [multiple] = useState<boolean>(true);

    return (
        <Search {...args} multiple={multiple} />
    );
};

Multiple.args = {};
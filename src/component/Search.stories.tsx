import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Search, { SearchProps } from './Search';

export default {
    title: 'Components/ui/Search',
    component: Search,
} as Meta;

const Template: Story<SearchProps> = (args: any) => <Search {...args} />;

export const Single = Template.bind({});
Single.args = {};

export const Multiple: Story<SearchProps> = (args: any) => {
    const [multiple, setMultiple] = useState(true);

    return (
        <Search {...args} multiple={multiple} />
    );
};

Multiple.args = {};
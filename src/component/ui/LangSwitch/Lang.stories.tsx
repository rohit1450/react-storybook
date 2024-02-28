import { Meta, StoryFn } from '@storybook/react';
import Lang, { LangProps } from './Lang';


export default {
    title: 'Components/ui/Lang',
    component: Lang,
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn<LangProps> = (args: LangProps) => <Lang {...args} />;

export const Default = Template.bind({});
Default.args = {
    solutions: [
        {
            name: 'Insights',
            description: 'Measure actions your users take',
        },
        {
            name: 'Automations',
            description: 'Create your own targeted content',
        },
        {
            name: 'Reports',
            description: 'Keep track of your growth',
        },
    ]
}


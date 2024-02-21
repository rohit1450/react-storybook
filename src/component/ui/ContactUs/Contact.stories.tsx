
import { StoryFn } from "@storybook/react";
import Contact, { contactProps } from "./ContactUs";

export default {
    title: 'Components/ui/Contact',
    component: Contact,
    tags: ['autodocs'],
};

const Template: StoryFn<contactProps> = (args: contactProps) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {
    heading: 'Contact Us',
    content: ' If you have any questions or inquiries, please feel free to contact us using the information below:'
};

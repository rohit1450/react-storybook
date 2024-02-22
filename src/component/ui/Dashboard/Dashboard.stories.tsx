
import { StoryFn } from '@storybook/react';
import Dashboard, { dashProps } from './Dashboard';

export default {
    title: 'Components/ui/Dashboard',
    component: Dashboard,
};

const Template: StoryFn<dashProps> = (args: dashProps) => <Dashboard {...args} />;

export const Default = Template.bind({});
Default.args = {
    heading: 'Dashboard Page',
    content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean id neque auctor tellus mattis accumsan.  Curabitur vestibulum mauris sit amet velit fermentum onsequat.Vivamus vehicula eu felis vitae dictum.Donec at quam tortor.Morbi malesuada ante a arcu euismod, auctor dapibus purus maximus.Donec dapibus lorem nec quam fringilla rutrum.Suspendisse venenatis arcu sit amet massa volutpat bibendum.Sed a pretium urna.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et dolor ultricies, porttitor felis vitae, auctor dolor.In sed elit euismod, dapibus nunc in, eleifend purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas orci lorem, iaculis sed mauris nec, convallis ullamcorper leo.Quisque a est leo.Nunc tempus purus pellentesque feugiat consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean id neque auctor tellus mattis accumsan.Curabitur vestibulum mauris sit amet velit fermentum consequat.Vivamus vehicula eu felis vitae dictum.Donec at quam tortor.Morbi malesuada ante a arcu euismod, auctor dapibus purus maximus.Donec dapibus lorem nec quam fringilla rutrum.Suspendisse venenatis arcu sit amet massa volutpat bibendum.Sed a pretium urna.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et dolor ultricies, porttitor felis vitae, auctor dolor.In sed elit euismod, dapibus nunc in, eleifend purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas orci lorem, iaculis sed mauris nec, convallis ullamcorper leo.Quisque a est leo.Nunc tempus purus pellentesque feugiat consequatQuisque a est leo.Nunc tempus purus pellentesque feugiat consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean id neque auctor tellus mattis accumsan.Curabitur vestibulum mauris sit amet velit fermentum consequat.Vivamus vehicula eu felis vitae dictum.Donec at quam tortor.Morbi malesuada ante a arcu euismod, auctor dapibus purus maximus.Donec dapibus lorem nec quam fringilla rutrum.Suspendisse venenatis arcu sit amet massa volutpat bibendum.Sed a pretium urna.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et dolor ultricies, porttitor felis vitae, auctor dolor.In sed elit euismod, dapibus nunc in, eleifend purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas orci lorem, iaculis sed mauris nec, convallis ullamcorper leo.Quisque a est leo.Nunc tempus purus pellentesque feugiat consequat.",
    dashClass: '',
};

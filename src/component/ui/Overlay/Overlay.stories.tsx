import { Meta, StoryFn } from '@storybook/react';
import Overlay, { OverlayProps } from './Overlay';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
export default {
    title: 'Components/ui/Overlay',
    component: Overlay,
    tags: ['autodocs'],
    argTypes: {
        content1: {
            description: "Defines default text on the sceen"
        },
        content2: {
            description: "Defines text for overlay"
        },
        openIcon: {
            description: "Icon to open overplay"
        },
        closeIcon: {
            description: "Icon to close overplay"
        },
        size: {
            description: "Defines size of the icon for open/close overlay "
        },
        isOverlayOpen: {
            description: "Boolean value to open/close overlay"
        },
        toggleOverlay: {
            description: "Defines function for toggle overlay"
        },
    }
} as Meta;

const Template: StoryFn<OverlayProps> = (args: OverlayProps) => {

    return (
        <Overlay
            {...args}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    isOverlayOpen: true,
    content1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    content2: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    openIcon: leftArrow,
    closeIcon: rightArrow,
    size: 10,
};


function leftArrow({ size }: { size?: number }) {
    return (

        <ChevronLeftIcon className={`w-${size || 5} h-${size || 5} rounded-full bg-gray/[0.30]`} />

    )
}
function rightArrow({ size }: { size?: number }) {
    return (

        <ChevronRightIcon className={`w-${size || 5} h-${size || 5} rounded-full bg-gray/[0.30]`} />

    )
}
import { Meta } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import Task from './Task';

interface ToggleProps {
    isChecked: boolean;
    disabled?: boolean;
    onChange: void;
}

const meta: Meta<typeof Task> = {
    title: 'Components/ui/Checkbox',
    component: Task,
    tags: ['autodocs'],
};
export default meta;

export const Default: React.FC<ToggleProps> = ({ isChecked }) => {
    const [{ isChecked: checked }, updateArgs] = useArgs();

    function onChange() {
        updateArgs({ isChecked: !checked });
    }

    return <Task onChange={onChange} isChecked={isChecked} />;
};

export const Disabled: React.FC<ToggleProps> = () => {

    function handleChange() {

    }
    return <Task onChange={handleChange} isChecked={true} disabled={true} />;
};
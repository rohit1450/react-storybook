import { Meta } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import Task from './Task'

interface ToggleProps {
    isChecked: boolean;
}

const meta: Meta<typeof Task> = {
    title: 'Components/ui/Checkbox',
    component: Task,
};
export default meta;

export const Toggle: React.FC<ToggleProps> = ({ isChecked }) => {
    const [{ isChecked: checked }, updateArgs] = useArgs();

    function onChange() {
        updateArgs({ isChecked: !checked });
    }

    return <Task onChange={onChange} isChecked={isChecked} />;
};


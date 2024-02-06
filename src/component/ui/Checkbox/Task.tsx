import React, { ChangeEvent } from 'react';

interface TaskProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    isChecked: boolean;
    disabled?: boolean;
}

const Task: React.FC<TaskProps> = ({ onChange, isChecked, disabled }) => {
    return (
        <div className='py-16 left-8'>
            <input type="checkbox" onChange={onChange} defaultChecked={isChecked} disabled={disabled} className='focus:ring-2 focus:outline-none !bg-none checked:bg-none w-5 h-5' />
        </div>
    );
};

export default Task;

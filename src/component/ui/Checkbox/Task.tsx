import React, { ChangeEvent } from 'react';

interface TaskProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    isChecked: boolean;
}

const Task: React.FC<TaskProps> = ({ onChange, isChecked }) => {
    return (
        <div className='fixed top-16 left-8'>
            <input type="checkbox" onChange={onChange} defaultChecked={isChecked} className='focus:ring-2 focus:outline-none !bg-none checked:bg-none w-5 h-5' />
        </div>
    );
};

export default Task;

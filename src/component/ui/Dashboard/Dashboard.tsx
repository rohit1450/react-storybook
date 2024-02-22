

import React from 'react';
import { twMerge } from 'tailwind-merge';


export interface dashProps {
    heading: string,
    content: string,
    dashClass: string,
}

const Dashboard: React.FC<dashProps> = ({ heading, content, dashClass }) => {
    return (
        <div className={twMerge('flex flex-col text-justify', dashClass)}>
            <h1 className='text-4xl mb-4'>{heading}</h1>
            <p className='text-base'>{content}
            </p>
        </div>
    );
};

export default Dashboard;

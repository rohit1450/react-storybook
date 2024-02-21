

import React from 'react';


export interface dashProps {
    heading: string,
    content: string,
}

const Dashboard: React.FC<dashProps> = ({ heading, content }) => {
    return (
        <div className='text-black flex flex-col text-justify'>
            <h1 className='text-4xl mb-4'>{heading}</h1>
            <p className='text-base'>{content}
            </p>
        </div>
    );
};

export default Dashboard;

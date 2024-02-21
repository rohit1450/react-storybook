
import React from 'react';


export interface aboutProps {
    heading: string;
    content: string;
}

const AboutUs: React.FC<aboutProps> = ({ heading, content }) => {
    return (
        <div className='bg-blue text-white p-8'>
            <h1 className='text-4xl mb-4'>{heading}</h1>
            <p className='text-base'>
                {content}
            </p>
        </div>
    );
};

export default AboutUs;

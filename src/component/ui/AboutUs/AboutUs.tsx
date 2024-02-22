
import React from 'react';
import { twMerge } from 'tailwind-merge';


export interface aboutProps {
    heading: string;
    content: string;
    aboutClass: string;
}

const AboutUs: React.FC<aboutProps> = ({ heading, content, aboutClass }) => {
    return (
        <div className={twMerge('p-8 w-full', aboutClass)}>
            <h1 className='text-4xl mb-4'>{heading}</h1>
            <p className='text-base'>
                {content}
            </p>
        </div>
    );
};

export default AboutUs;

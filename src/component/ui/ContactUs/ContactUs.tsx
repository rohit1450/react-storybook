
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface contactProps {
    heading: string;
    content: string;
    contactClass: string;
}

const Contact: React.FC<contactProps> = ({ heading, content, contactClass }) => {
    return (
        <div className={twMerge('p-8', contactClass)}>
            <h1 className='text-4xl mb-4'>{heading}</h1>
            <p className='text-base'>
                {content}
            </p>
            <div className='mt-4'>
                <p className='text-base'>
                    Email: info@example.com
                </p>
                <p className='text-base'>
                    Phone: +91 8909745945
                </p>
            </div>
        </div>
    );
};

export default Contact;

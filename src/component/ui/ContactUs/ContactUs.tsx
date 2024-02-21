
import React from 'react';

export interface contactProps {
    heading: string;
    content: string;
}

const Contact: React.FC<contactProps> = ({ heading, content }) => {
    return (
        <div className='bg-Primary text-white p-8'>
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

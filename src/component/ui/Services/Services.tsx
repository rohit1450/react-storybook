import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface serviceProps {
    heading: string;
    service1: string;
    service2: string;
    service3: string;
    servClass: string;
}

const Services: React.FC<serviceProps> = ({ servClass, heading, service1, service2, service3 }) => {
    return (
        <div className={twMerge('p-8', servClass)}>
            <h1 className='text-4xl mb-4'>{heading}</h1>
            <ul className='list-disc pl-8'>
                <li className='text-base mb-2'>Service 1: {service1} </li>
                <li className='text-base mb-2'>Service 2: {service2} </li>
                <li className='text-base mb-2'>Service 3: {service3} </li>
            </ul>
        </div>
    );
};

export default Services;

import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps {
    label: string;
    type: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    className: string
}

const Badge: React.FC<BadgeProps> = ({ label, type, className }) => {
    const getStyles = () => {
        switch (type) {
            case 'primary':
                return { backgroundColor: '#0078d4', color: '#fff' };
            case 'secondary':
                return { backgroundColor: '#6c757d', color: '#fff' };
            case 'success':
                return { backgroundColor: '#28a745', color: '#fff' };
            case 'warning':
                return { backgroundColor: '#ffc107', color: '#000' };
            case 'danger':
                return { backgroundColor: '#dc3545', color: '#fff' };
            default:
                return {};
        }
    };
    return (
        <div className={`relative inline-block bg-gray text-sm p-1 m-1 rounded-lg`} >
            <span>{label}</span>
            <span className={twMerge('absolute -top-4 -right-4 px-2 -py-1 bg-red text-white rounded-full', className)} style={getStyles()}>
                1
            </span>
        </div>
    );
};

export default Badge;
import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SwitchProps {
    isOn: boolean;
    onToggle: () => void;
    label?: ReactElement | string;
    containerSize?: 'small' | 'medium' | 'large';
    thumbSize?: 'small' | 'medium' | 'large';
    switchClass?: string;
    thumbClass?: string
}

const Switch: React.FC<SwitchProps> = ({ isOn, onToggle, label, containerSize, thumbSize, switchClass, thumbClass }) => {
    let switchSizeClass = '';
    let thumbSizeClass = '';

    switch (containerSize) {
        case 'small':
            switchSizeClass = 'w-[40px] h-[24px]';
            break;
        case 'medium':
            switchSizeClass = 'w-[50px] h-[30px]';
            break;
        case 'large':
            switchSizeClass = 'w-[60px] h-[32px]';
            break;
        default:
            switchSizeClass = 'w-[40px] h-[24px]';
    }

    switch (thumbSize) {
        case 'small':
            thumbSizeClass = 'w-[16px] h-[16px]';
            break;
        case 'medium':
            thumbSizeClass = 'w-[22px] h-[22px]';
            break;
        case 'large':
            thumbSizeClass = 'w-[25px] h-[25px]';
            break;
        default:
            thumbSizeClass = 'w-[16px] h-[16px]';
    }

    return (
        <div className={twMerge(`relative inline-block ${switchSizeClass} ${isOn ? 'bg-blue' : 'bg-gray'} rounded-full p-1 transition-colors duration-300 ease-in-out`, switchClass)} onClick={onToggle}>
            <div className={twMerge(`absolute ${isOn ? 'translate-x-full' : 'translate-x-0'} inline-block ${thumbSizeClass} bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out`, thumbClass)}></div>
            {label && <span className="ml-2 text-sm">{label}</span>}
        </div>
    );
};

export default Switch;

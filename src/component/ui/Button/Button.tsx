import React from "react";

export interface ButtonProps {
    label: string;
    buttonType: 'primary' | 'secondary' | 'disabled' | 'loading';
    color?: 'black' | 'white';
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ color = 'black', icon: Icon, label, buttonType, disabled }) => {
    const primaryClass = `bg-blue-dark text-${color} hover:bg-blue-dark/[0.70]`;
    const secondaryClass = 'bg-white hover:bg-gray-dark/[0.80] border border-black text-black';
    const disabledClass = `opacity-50 text-${color}`;
    const commonClass = `bg-blue-dark text-${color} p-2 rounded-md`;

    return (
        <div className="">
            <button
                className={`flex flex-row ${buttonType === 'primary' && !disabled ? primaryClass : commonClass}
                            ${buttonType === 'secondary' && !disabled ? secondaryClass : commonClass}
                            ${buttonType === 'disabled' ? disabledClass : ''}`}
                type={buttonType === 'loading' ? 'button' : undefined}
                disabled={disabled}
            >
                {Icon ? <Icon /> : ''}
                {label}
            </button>
        </div>
    );
};

export default Button;

import React from "react";

export interface ButtonProps {
    lable: 'string';
    primary: 'true' | 'false';
    color?: 'black' | 'white';
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ primary, color, icon: Icon, disabled, lable }) => {
    return (
        <div className="py-16 ">
            <button className={`flex flex-row 
            ${primary === 'true' ? 'bg-blue-dark' : 'bg-gray-dark'} 
            ${!disabled && primary === 'true' ? 'hover:bg-blue-dark/[0.70]' : ''} 
            ${!disabled && primary === 'false' ? 'hover:bg-gray-dark/[0.80]' : ''} 
            ${disabled ? 'opacity-50' : ''} 
            text-${color} p-2 rounded-md  `}
                disabled={disabled}>
                {Icon &&
                    <Icon />
                }
                {lable}
            </button>
        </div >
    );
}
export default Button;

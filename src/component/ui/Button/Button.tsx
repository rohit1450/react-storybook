import React from "react";

export interface ButtonProps {
    label: string;
    primary: boolean;
    bg?: 'blue-light' | 'gray-dark';
    color?: 'black' | 'white';
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, type, color, icon: Icon, disabled }) => {
    return (
        <div className="py-16">
            <button className={` text-${color} p-2 rounded-md`} disabled={disabled}>
                <Icon className="h-10 w-10" />
                {label}
            </button>
        </div>
    );
}

export default Button;

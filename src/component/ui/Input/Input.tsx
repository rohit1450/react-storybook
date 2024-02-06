import React from "react";

export interface InputProps {
    type: 'text' | 'number';
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder = '' }) => {
    return (
        <div className="sm:w-96 py-16 w-11/12">
            <input type={type} placeholder={placeholder} className="focus:outline-none  p-2 rounded-md w-full border border-gray shadow-lg hover:border-blue-prime" />
        </div>
    );
}

export default Input;

import React from 'react';

export interface SliderProps {
    min: number;
    max: number;
    value: number;
    defaultValue?: number;
    onChange: (value: number) => void;
    color?: string;
    size?: 'small' | 'medium' | 'large';
    bigTheme?: boolean;
}

const Slider: React.FC<SliderProps> = ({ min, max, value, onChange, defaultValue, color, size, bigTheme }) => {
    const percent = ((value - min) / (max - min)) * 100;
    const gradientColor = color
        ? `linear-gradient(to right, ${color} ${percent}%, #a0aec0 ${percent}%)`
        : `linear-gradient(to right, #4299e1 ${percent}%, #a0aec0 ${percent}%)`;


    const getSizeStyles = () => {
        switch (size) {
            case 'small':
                return { height: 1, width: 64 };
            case 'medium':
                return { height: 1, width: 96 };
            default:
                return { height: 1, width: 96 };
        }
    };

    const { height, width } = getSizeStyles();

    return (
        <div className="flex w-full items-center space-x-2">
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                defaultValue={defaultValue}
                onChange={(e) => onChange(Number(e.target.value))}
                className={`slider-thumb appearance-none ${size === 'large' && 'w-full h-${height}'} ${bigTheme === true && `w-${width} h-2`} w-${width} h-${height} outline-none rounded-full`}
                style={{ background: gradientColor, accentColor: color }}
            />
            <span>{value}</span>
        </div >
    );
};

export default Slider;

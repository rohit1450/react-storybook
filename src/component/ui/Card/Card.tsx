import React from 'react';
import { CSSProperties } from 'react';
import Button, { ButtonProps } from '../Button/Button';
export interface CardProps {
    size?: 'small' | 'medium' | 'large';
    imageSrc: string;
    about: string;
    description: string;
    aboutFontSize?: string;
    descriptionFontSize?: string;
    imgHeight?: string;
    imagePosition?: 'top' | 'right' | 'bottom' | 'left';
    button: ButtonProps;
    isButton?: boolean,
    imgWidth?: string,
}

const Card: React.FC<CardProps> = ({ imageSrc, button, about, description, size, aboutFontSize, descriptionFontSize, imgHeight, isButton, imagePosition, imgWidth }) => {
    const { buttonType, color, label, className, onClick } = button;
    const getSizeClass = () => {
        switch (size) {
            case 'small':
                return 'max-w-xs';
            case 'large':
                return 'max-w-xl';
            default:
                return 'max-w-md';
        }

    };
    const getAboutStyle = () => ({
        fontSize: aboutFontSize || '1.2rem',
        fontWeight: 'bold',
    });
    const getDescriptionStyle = (): CSSProperties => ({
        fontSize: descriptionFontSize || '1rem',
        color: 'gray',
        textAlign: 'justify',
    });

    const getContainerStyle = (): CSSProperties => {
        const baseStyle: CSSProperties = {
            position: 'relative',
            width: '100%',
        };

        switch (imagePosition) {
            case 'top':
                return { ...baseStyle, };
            case 'right':
                return { ...baseStyle, flexDirection: 'row-reverse', alignItems: 'center', marginLeft: '10px' };
            case 'bottom':
                return { ...baseStyle, flexDirection: 'column-reverse', };
            case 'left':
                return { ...baseStyle, flexDirection: 'row', alignItems: 'center', marginRight: '10px' };
            default:
                return baseStyle;
        }
    };
    const getImageContainerStyle = () => {
        const baseStyle = {

        };

        switch (imagePosition) {
            case 'top':
                return { ...baseStyle, };
            case 'right':
                return { ...baseStyle, width: `${imgWidth}` };
            case 'bottom':
                return { ...baseStyle };
            case 'left':
                return { ...baseStyle, width: `${imgWidth}` };
            default:
                return baseStyle;
        }
    };

    const getImageStyle = (): CSSProperties => ({
        width: '100%',
        height: imgHeight || '16rem',
        objectFit: 'cover',
    });
    return (
        <div className={`flex flex-col rounded overflow-hidden shadow-lg ${getSizeClass()}`} style={getContainerStyle()}>
            <div className='flex' style={getImageContainerStyle()}>
                <img className={`w-full object-cover`} style={getImageStyle()} src={imageSrc} alt="Card" />
            </div>
            {about || description ?
                <div className="px-6 pt-4 pb-4">
                    <div style={getAboutStyle()} className="font-bold text-xl mb-2">{about}</div>
                    <p style={getDescriptionStyle()} className="text-gray text-base">{description}</p>
                </div> : ''
            }
            {isButton === true &&
                <div className='px-6 pb-4 pt-2'>
                    <Button buttonType={buttonType} onClick={onClick} color={color} label={label} className={className || 'bg-purple'} />
                </div>
            }
        </div>
    );
};

export default Card;

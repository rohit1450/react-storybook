import React from 'react';
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
}

const Card: React.FC<CardProps> = ({ imageSrc, button, about, description, size, aboutFontSize, descriptionFontSize, imgHeight, isButton }) => {
    const { buttonType, color, label } = button;
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
    const getDescriptionStyle = () => ({
        fontSize: descriptionFontSize || '1rem',
        color: 'gray',
        textAlign: 'justify',
    });


    return (
        <div className={`flex flex-col rounded overflow-hidden shadow-lg ${getSizeClass()}`}>
            <div className='flex ' style={{
                position: 'relative',
                width: '100%',
            }}>
                <img className={`w-full object-cover`} style={{ height: imgHeight || '16rem' }} src={imageSrc} alt="Card" />
            </div>
            {about || description ?
                <div className="px-6 pt-4 pb-4">
                    <div style={getAboutStyle()} className="font-bold text-xl mb-2">{about}</div>
                    <p style={getDescriptionStyle()} className="text-gray text-base">{description}</p>
                </div> : ''
            }
            {isButton === true &&
                <div className='px-6 pb-4 pt-2'>
                    <Button buttonType={buttonType} color={color} label={label} />
                </div>
            }
        </div>
    );
};

export default Card;

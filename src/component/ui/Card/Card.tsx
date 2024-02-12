import React from 'react';

export interface CardProps {
    size?: 'small' | 'medium' | 'large';
    imageSrc: string;
    about: string;
    description: string;
    aboutFontSize?: string;
    descriptionFontSize?: string;
    imgHeight?: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, about, description, size, aboutFontSize, descriptionFontSize, imgHeight }) => {
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
        <div className={`max-w-sm rounded overflow-hidden shadow-lg ${getSizeClass()} mb-2`}>
            <div style={{
                position: 'relative',
                width: '100%',
            }}>
                <img className={`w-full object-cover`} style={{ height: imgHeight || '16rem' }} src={imageSrc} alt="Card" />
            </div>
            <div className="px-6 py-4">
                <div style={getAboutStyle()} className="font-bold text-xl mb-2">{about}</div>
                <p style={getDescriptionStyle()} className="text-gray text-base">{description}</p>
            </div>
        </div>
    );
};

export default Card;

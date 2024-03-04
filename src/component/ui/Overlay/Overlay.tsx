import React, { useEffect, useRef, useState } from 'react';

export interface OverlayProps {
    content1: string;
    content2: string;
    openIcon?: React.ElementType;
    closeIcon?: React.ElementType;  
    size?: number;
    isOverlayOpen: boolean;
    toggleOverlay: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ size, content1, content2, openIcon: Icon1, closeIcon: Icon2 }) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target) && isOverlayOpen) {
                toggleOverlay();
            }
        };

        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOverlayOpen]);

    return (
        <div className='flex'>
            <div className={`flex justify-between items-center p-2 w-96 m-10 ${isOverlayOpen ? 'opacity-40' : ''}`}>
                <div className='flex items-center '>
                    <h1>{content1}</h1>
                </div>
                {!isOverlayOpen ? (
                    <button
                        type='button'
                        className="absolute right-4 transform -translate-y-1/2 p-2"
                        onClick={toggleOverlay}>
                        {Icon1 && <Icon1 size={size} />}
                    </button>
                ) : null}
            </div>
            <div className={`shadow-lg w-1/2 p-2 relative right-0 top-1/2 transform -translate-y-1/2 ${isOverlayOpen ? 'open' : 'hidden close'}`}
             ref={overlayRef}>
                <h2>{content2}</h2>
                <button
                    type='button'
                    className="absolute p-2 -left-7 top-1/2 transform -translate-y-1/2"
                    onClick={toggleOverlay}>
                    {Icon2 && <Icon2 size={size} />}
                </button>
            </div>
        </div>
    );
    
};

export default Overlay;

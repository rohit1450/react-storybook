
import React, { useEffect, useRef } from 'react';

export interface OverlayProps {
    content1: string;
    content2: string;
    openIcon?: React.ElementType;
    closeIcon?: React.ElementType;
    size?: number;
    isOverlayOpen: boolean;
    toggleOverlay: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isOverlayOpen, toggleOverlay, size, content1, content2, openIcon: Icon1, closeIcon: Icon2 }) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
                toggleOverlay();
            }
        };

        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleOverlay]);

    return (
        <div className='flex'>
            <div className={`flex justify-between w-96 m-10 ${isOverlayOpen ? 'opacity-40' : ''}`}>
                <div>
                    <h1>{content1}</h1>
                </div>
                {!isOverlayOpen && (
                    <button className="absolute right-4 p-2" onClick={toggleOverlay}>
                        {Icon1 && <Icon1 size={size} />}
                    </button>)}
            </div>
            {
                isOverlayOpen && (
                    <div className="shadow-lg h-full w-1/2 p-10 fixed right-0" ref={overlayRef} >
                        <h2>{content2}</h2>
                        <button className="absolute p-2 -left-7 top-1/2 transform -translate-y-1/2" onClick={toggleOverlay}>
                            {Icon2 && <Icon2 size={size} />}
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default Overlay;

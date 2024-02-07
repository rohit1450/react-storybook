
import React from 'react';

export interface OverlayProps {
    content1: string;
    content2: string;
    buttonTitle1: string;
    buttonTitle2: string;
    isOverlayOpen: boolean;
    toggleOverlay: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isOverlayOpen, toggleOverlay, content1, content2, buttonTitle1, buttonTitle2 }) => {
    return (
        <div className='flex'>
            <div className={`flex justify-between w-96 m-10 ${isOverlayOpen ? 'opacity-50' : ''}`}>
                <div>
                    <h1>{content1}</h1>
                </div>
                {!isOverlayOpen && (
                    <button className="absolute right-4 border p-1" onClick={toggleOverlay}>
                        {buttonTitle1}
                    </button>)}
            </div>

            {
                isOverlayOpen && (
                    <div className="shadow-md h-screen w-1/2 p-10">
                        <h2>{content2}</h2>
                        <button className="border p-1 mt-8" onClick={toggleOverlay}>
                            {buttonTitle2}
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default Overlay;

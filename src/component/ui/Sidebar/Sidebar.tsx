import { Bars3Icon, ChartBarIcon } from '@heroicons/react/20/solid';
import React, { useState, useEffect, ReactElement, useRef } from 'react';

interface Post {
    title: string,
    link: string,
    icon: React.ReactNode,
}

interface IconProps {
    iconName?: string;
}

const ImportIcon: React.FC<IconProps> = ({ iconName }) => {
    const [IconComponent, setIconComponent] = useState<ReactElement | null>(null);

    useEffect(() => {
        const loadIcon = async () => {
            const { default: Icon } = await import(`@heroicons/react/20/solid/${iconName}`);
            setIconComponent(<Icon className={`w-10 h-10 text-gray mx-auto `} />);
        };

        loadIcon();
    }, [iconName]);

    return IconComponent;
};

export interface SidebarProps {
    pages: Post[],
    width: string,
    textWidth: string,
    iconSize: string,
    imgURL: string,
    imgHeight: string,
    imgWidth: string,
    colorPrimary: string,
    isOverlayOpen: boolean;
    toggleOverlay: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOverlayOpen, toggleOverlay, pages, width, iconSize, textWidth, imgURL, imgHeight, imgWidth, colorPrimary }) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isTablet, setIsTablet] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth >= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);

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


    console.log(isOverlayOpen, isTablet);


    return (
        <div className='w-30 min-h-screen'>
            {!isOverlayOpen &&
                <button
                    onClick={toggleOverlay}
                    className="inline-flex items-center p-2 mt-2 ms-3  text-gray rounded-lg sm:hidden ">
                    <Bars3Icon className='w-10 h-10 text-black' />
                </button>
            }
            {(isOverlayOpen || isTablet) && <div ref={overlayRef} className={`fixed top-0 left-0 z-40  h-screen transition-transform transition-translate-x-full sm:translate-x-0`} style={{ width: width }}>
                <div className={`h-screen px-3 py-4 overflow-y-auto bg-gray-dark block  sm:block`} style={{ background: colorPrimary }}>
                    <img className="w-50 h-20 mx-auto" src={imgURL} alt='logo' style={{ width: imgWidth, height: imgHeight }} ></img>
                    <ul className="space-y-2 font-medium mt-4">
                        {pages.map((page, index) => (
                            <li key={index}>
                                <a href={page.link}>
                                    <div className='w-full mb-2 flex flex-col items-center '>
                                        {/* <ImportIcon iconName={page.icon} /> */}
                                        <div className=' text-gray' style={{ width: iconSize, height: iconSize }} >
                                            {page.icon}
                                        </div>
                                        <p className="text-gray" style={{ fontSize: textWidth }}>{page.title} </p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>}
            <footer className="fixed bottom-5 bg-black z-10 w-full   ">
                <div className="flex justify-center">
                    <p className="text-gray py-3">All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Sidebar;

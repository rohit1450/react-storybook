
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import React, { useState, useEffect, ReactElement, useRef } from 'react';

interface Sub {
    title: string,
    link: string,
}
interface Post {
    title: string,
    link: string,
    icon: React.ReactNode,
    sub?: Sub[];
}

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
    children: ReactElement;
}

const Sidebar: React.FC<SidebarProps> = ({ isOverlayOpen, toggleOverlay, pages, width, iconSize, textWidth, imgURL, imgHeight, imgWidth, colorPrimary, children }) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isTablet, setIsTablet] = useState<boolean>(false);
    const [isSlim, setIsSlim] = useState<boolean>(true);
    const handleSlimToggle = () => {
        setIsSlim(!isSlim);
    };
    console.log(pages, "pages");

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


    return (
        <div className=''>

            {/* {!isOverlayOpen &&
                <button
                    onClick={toggleOverlay}
                    className="inline-flex items-center p-2 mt-2 ms-3 text-gray rounded-lg sm:hidden ">
                    <Bars3Icon className='w-10 h-10 text-black' />
                </button>
            } */}

            {(isOverlayOpen || isTablet) && (
                <div
                    ref={overlayRef}
                    className={`fixed top-0 left-0 z-40 h-screen transition-transform transition-translate-x-full sm:translate-x-0`}
                    style={{ width: width }}
                >
                    <div
                        className={`h-screen px-3 py-4 overflow-y-auto bg-gray-dark block  sm:block`}
                        style={{ background: colorPrimary }}
                    >
                        <div className='flex'>
                            {isSlim === false &&
                                <img
                                    className='w-50 h-20 mx-auto'
                                    src={imgURL}
                                    alt='logo'
                                    style={{ width: imgWidth, height: imgHeight }}
                                ></img>
                            }
                            <button
                                className="inline-block rounded text-white "
                                onClick={handleSlimToggle}
                            >
                                {isSlim === false ?
                                    (<ArrowLeftIcon className='h-6 w-6' />) : (<ArrowRightIcon className='h-6 w-6' />)
                                }
                            </button>
                        </div>
                        <ul className='space-y-12 font-medium mt-10'>
                            {pages.map((page, index) => {
                                return (
                                    <li key={index}>
                                        <a href={page.link}>
                                            <div className='w-full mb-2 flex flex-row items-center space-x-2'>
                                                <div className=' text-white' style={{ width: iconSize, height: iconSize }}>
                                                    {page.icon}
                                                </div>
                                                {isSlim === false &&
                                                    <p className='text-white' style={{ fontSize: textWidth }}>
                                                        {page.title}
                                                    </p>
                                                }

                                                {page.sub && isSlim === false && (

                                                    <div className='flex flex-col text-sm m-5'>
                                                        {/* <button className='text-white'>
                                                            <ArrowDownIcon className='h-10 w-10' />
                                                        </button> */}

                                                        <ul className='absolute list-item left-0 mt-2 bg-transparent p-2 ml-10 space-y-2'>
                                                            {page.sub.map((subLink, subIndex) => {
                                                                return (
                                                                    <li key={subIndex}>
                                                                        <a href={subLink.link} className='text-white'>
                                                                            <p className='text-white'>{subLink.title}</p>
                                                                        </a>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
            }

            {children}

            <footer
                className={`mt-5 -mb-12 sm:ml-4 bg-black z-10 w-full h-full ${isOverlayOpen && 'opacity-30 sm:opacity-100'}`}
            >
                <div className='flex justify-center'>
                    <p className='text-gray py-3'>All rights reserved.</p>
                </div>
            </footer>
        </div >
    );
};

export default Sidebar;

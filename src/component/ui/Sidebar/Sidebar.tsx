
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import React, { useState, useEffect, ReactElement, useRef } from 'react';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
interface Sub {
    title: string,
    link: string,
    icon: React.ReactNode,
}
interface Post {
    title: string,
    link: string,
    icon: React.ReactNode,
    sub?: Sub[];
}

export interface SidebarProps {
    pages: Post[],
    width?: string,
    textWidth?: string,
    iconSize?: string,
    imgURL?: string,
    imgHeight?: string,
    imgWidth?: string,
    isOverlayOpen?: boolean;
    toggleOverlay: () => void;
    children?: ReactElement;
    containerClass?: string;
    childClass?: string;
    logoClass?: string;
    parentListClass?: string;
    childListClass?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOverlayOpen, childListClass, parentListClass, childClass, logoClass, containerClass, toggleOverlay, pages, width, iconSize, textWidth, imgURL, imgHeight, imgWidth, children }) => {

    const overlayRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [isTablet, setIsTablet] = useState<boolean>(false);
    const [isSlim, setIsSlim] = useState<boolean>(false);
    const [isDown, setDown] = useState<boolean>(false);
    const [isActive, setActive] = useState<number | undefined>(-1);
    const [activeSubIndex, setActiveSubIndex] = useState<number | undefined>(-1);

    const handleActive = (index: number, subIndex?: number) => {
        setActive(index === isActive ? isActive : index);
        setActiveSubIndex(subIndex === activeSubIndex ? isActive : subIndex);
    };

    const handleDown = () => {
        setDown(!isDown)
    }
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
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    setDown(false);
                }
                toggleOverlay();
            }
        };

        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleOverlay]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDown(false);


                if (isActive !== -1) {
                    setDown(false);
                }
            }
        };

        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isActive, setDown, dropdownRef]);


    return (
        <Router>
            <div className=''>

                {/* {!isOverlayOpen &&
                    <button
                        onClick={toggleOverlay}
                        className="inline-flex items-center p-2 mt-2 ms-3 text-gray rounded-lg">
                        <Bars3Icon className='w-10 h-10 text-black' />
                    </button>
                } */}

                {(isOverlayOpen || isTablet) && (
                    <div
                        ref={overlayRef}
                        className={`fixed top-0 left-0 z-40 h-screen transition-transform transition-translate-x-full `}
                        style={{ width: width }}
                    >
                        <div ref={dropdownRef}
                            className={twMerge(`h-screen overflow-y-auto border border-white border-y-0 border-l-0 bg-Primary block sm:block`, containerClass)}

                        >
                            <div className={twMerge('flex h-16', logoClass)}>
                                {imgURL && isSlim === false &&
                                    <img
                                        className='w-20 h-20 '
                                        src={imgURL}
                                        alt='logo'
                                        style={{ width: imgWidth, height: imgHeight }}
                                    ></img>
                                }
                                <button
                                    className="inline-block rounded text-white "
                                    onClick={handleSlimToggle}
                                >
                                    {/* {isSlim === false ?
                                        (<ArrowLeftIcon className='h-6 w-6'/>) : (<ArrowRightIcon className='h-6 w-6'/>)
                                    } */}
                                </button>
                            </div>

                            <ul className={`space-y-2 font-medium p-4`} >
                                {pages.map((page, index) => {
                                    return (
                                        <li key={index} className={twMerge(`hover:bg-blue-light p-2 rounded-md ${index === isActive && 'bg-blue-light'}`, parentListClass)} onClick={() => handleActive(index)}>
                                            <div className='flex flex-col'>
                                                {page.sub ? (
                                                    <div className='w-full flex flex-row justify-start items-center space-x-2' onClick={handleDown}>
                                                        <div className='w-full flex space-x-2'>

                                                            <div className='pt-2 text-white' style={{ width: iconSize, height: iconSize, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                {page.icon}
                                                            </div>
                                                            {isSlim === false && (
                                                                <div className='text-white' style={{ fontSize: textWidth }} >
                                                                    {page.title}
                                                                </div>
                                                            )}
                                                        </div>
                                                        {isSlim === false && (
                                                            <button className='text-white'>
                                                                {isDown === true ? <ChevronUpIcon className='h-5 w-5' /> : <ChevronDownIcon className='h-5 w-5' />}
                                                            </button>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <Link to={page.link} className={`${index === isActive && 'bg-blue-light'}`}>
                                                        <div className='w-full flex flex-row justify-start space-x-2'>
                                                            <div className='pt-2 text-white' style={{ width: iconSize, height: iconSize, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                {page.icon}
                                                            </div>
                                                            {isSlim === false &&
                                                                <p className='text-white' style={{ fontSize: textWidth }}>
                                                                    {page.title}
                                                                </p>
                                                            }
                                                        </div>
                                                    </Link>
                                                )}
                                                {page.sub && isSlim === false && (
                                                    <div className='flex flex-col '>
                                                        {isDown === true &&
                                                            <ul className='mt-4'>
                                                                {page.sub.map((subLink, subIndex) => {
                                                                    return (
                                                                        <li key={subIndex} className={twMerge(`flex space-x-2 hover:bg-Primary p-2 pl-6 rounded-md  justify-start items-center ${subIndex === activeSubIndex && 'bg-Primary'}`, childListClass)} onClick={() => handleActive(subIndex)}>
                                                                            <div className='text-white h-5 w-5 flex justify-center items-center'>{subLink.icon}</div>
                                                                            <Link to={subLink.link} className='text-white'>
                                                                                <p className='text-white'>{subLink.title}</p>
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                })}
                                                            </ul>}
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
                }
                <div className={twMerge('flex w-full h-full', childClass)}>
                    {children}
                    <div >
                        <Routes>

                        </Routes>
                    </div>
                </div>

                {/* <footer
                    className={`mt-5 -mb-12 bg-black w-full sticky  sm:absolute sm:bottom-0 ${isOverlayOpen && 'opacity-30 sm:opacity-100'}`}
                >
                    <div className='flex justify-center'>
                        <p className='text-gray py-3'>All rights reserved.</p>
                    </div>
                </footer> */}
            </div >
        </Router>
    );
};

export default Sidebar;

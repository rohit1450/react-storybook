import React, { useCallback, useEffect, useRef, useState } from "react";
import Avatars from "../Avatar/Avatar";
import Switch from "../Switch/Switch";
import { twMerge } from "tailwind-merge";
import { Bars3Icon } from "@heroicons/react/20/solid";

export interface NavProps {
    title: string;
    name: string;
    round: boolean;
    size: string;
    src: string;
    maxInitials: number;
    bgColor: string;
    icon?: () => JSX.Element;
    loginIcon?: () => JSX.Element;
    signUpIcon?: () => JSX.Element;
    padding: string;
    onToggle: () => void;
    toggleOverlay: () => void;
    isOn: boolean;
    isOverlayOpen: boolean;
    menuClass: string;
    smallScreenMenuClass: string;
    containerSize?: 'small' | 'medium' | 'large';
    thumbSize?: 'small' | 'medium' | 'large';
}

const Navbar: React.FC<NavProps> = ({
    title,
    name,
    round,
    size,
    src,
    icon,
    loginIcon,
    signUpIcon,
    maxInitials,
    bgColor,
    padding,
    containerSize,
    thumbSize,
    menuClass,
    smallScreenMenuClass,
    onToggle,
    isOn,
    isOverlayOpen,
    toggleOverlay,
}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = useCallback(() => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    }, [])

    const overlayRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
                toggleMenu();
            }
        };

        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleMenu]);

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
        <>
            <div className={`p-${padding} ${isOverlayOpen && 'opacity-30 sm:opacity-100'} z-10 fixed -ml-4 top-0 sm:px-14 px-4 w-full`} style={{ backgroundColor: `${isOn ? 'black' : `${bgColor}`}` }}>
                <div className="container flex flex-col sm:flex-row justify-between pr-6">
                    <div className="text-white flex items-center space-x-2">
                        <button
                            onClick={toggleOverlay}
                            className="inline-flex items-center text-gray rounded-lg sm:hidden ">
                            <Bars3Icon className={`w-8 h-8 ${isOn ? 'text-white' : 'text-black'}`} />
                        </button>

                        <span className="h-8 w-8 text-white">{icon && icon()}</span>
                        <a className="text-lg font-bold" href="#">
                            {title}
                        </a>
                    </div>
                    {menuOpen && (
                        <div ref={overlayRef} className="hidden sm:flex">
                            <ul className={twMerge(`${isOn ? 'bg-black' : 'bg-white'} shadow-2xl rounded-md list-none absolute top-16 right-6 flex flex-col p-4`, menuClass)}>
                                <li>
                                    <a href="#" className={`${isOn ? 'text-white' : 'text-black'} flex flex-row items-center space-x-2`}>
                                        <span className="h-4 w-4">{signUpIcon && signUpIcon()}</span>
                                        <span>
                                            Sign Up
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={`${isOn ? 'text-white' : 'text-black'} flex flex-row items-center space-x-2`}>
                                        <span className="h-4 w-4">{loginIcon && loginIcon() }</span>
                                        <span>Login</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    )}
                    <ul className="hidden sm:flex items-center fixed right-6 top-3 space-x-3">
                        <li>
                            <Switch isOn={isOn} onToggle={onToggle} switchClass={`mt-2 bg-white`} thumbClass={` ${isOn ? 'bg-black' : 'bg-warning/[0.8]'}`} thumbSize={thumbSize} containerSize={containerSize} />
                        </li>
                        <li>
                            <button
                                onClick={toggleMenu}
                                className="focus:outline-none text-white"
                            >
                                <Avatars
                                    name={name}
                                    round={round}
                                    size={size}
                                    src={src}
                                    maxInitials={maxInitials}
                                />
                            </button>
                        </li>
                    </ul>
                    <div className="sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none fixed right-4 top-4 text-white"
                        >
                            <Avatars
                                name={name}
                                round={round}
                                size={size}
                                src={src}
                                maxInitials={maxInitials}
                            />
                        </button>
                        {menuOpen && (
                            <div ref={overlayRef}>

                                <ul className={twMerge(`${isOn ? 'bg-black' : 'bg-white'} shadow-2xl rounded-md list-none absolute top-16 right-4 flex flex-col items-left space-y-2 p-4`, smallScreenMenuClass)}>
                                    <div className="flex justify-center">
                                        <li>
                                            <Switch isOn={isOn} onToggle={onToggle} switchClass={`mt-2 ${isOn ? 'bg-white' : 'bg-gray/[0.2]'}`} thumbClass={`${isOn ? 'bg-black' : 'bg-warning/[0.8]'}`} thumbSize={thumbSize} containerSize={containerSize} />
                                        </li>
                                    </div>
                                    <li>
                                        <a href="#" className={`${isOn ? 'text-white' : 'text-black'} flex flex-row items-center space-x-2`}>
                                            <span className="h-4 w-4">{signUpIcon && signUpIcon()}</span>
                                            <span>
                                                Sign Up
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className={`${isOn ? 'text-white' : 'text-black'} flex flex-row items-center space-x-2`}>
                                            <span className="h-4 w-4 pl-0">{loginIcon && loginIcon()}</span>
                                            <span>Login</span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div >
        </>
    );
};

export default Navbar;

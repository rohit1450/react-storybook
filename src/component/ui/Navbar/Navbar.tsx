import React, { ReactElement, useState } from "react";
import Pop, { Solution } from "../Popover/Popover";
import Avatars from "../Avatar/Avatar";

export interface NavProps {
    title: string;
    name: string;
    round: boolean;
    size: string;
    src: string;
    maxInitials: number;
    bgColor: string;
    icon?: React.ReactNode;
    btnTitle: ReactElement;
    footerTitle?: string;
    footerText?: string;
    solutions: Solution[];
    padding: string;
}

const Navbar: React.FC<NavProps> = ({
    title,
    name,
    round,
    size,
    src,
    icon,
    maxInitials,
    bgColor,
    footerTitle,
    footerText,
    solutions,
    padding
}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const btnTitle = (
        <Avatars
            name={name}
            round={round}
            size={size}
            src={src}
            maxInitials={maxInitials}
        />
    );

    return (
        <div className={`p-${padding} px-14 mx-auto lg:w-full`} style={{ backgroundColor: `${bgColor}` }}>
            <div className="container flex flex-col sm:flex-row items-center justify-between pr-6">
                <div className="text-white flex items-center space-x-2">
                    <span className="h-8 w-8 text-white">{icon}</span>
                    <a className="text-lg font-bold" href="#">
                        {title}
                    </a>
                </div>
                <div className="hidden sm:flex items-center space-x-5 ml-auto">
                    <ul className="absolute -right-60 flex items-center space-x-5 ml-auto">
                        <li>
                            <a href="#" className="text-white">
                                Sign Up
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white">
                                Login
                            </a>
                        </li>
                        <li>
                            <Pop
                                solutions={solutions}
                                footerTitle={footerTitle}
                                footerText={footerText}
                                btnTitle={btnTitle}
                                className="flex focus-outline-none relative h-0 w-0 p-0 m-0 px-0 py-0 rounded-full shadow-none"
                                panelClass="absolute top-12 -left-40 m-auto"
                                arrowClass="h-0 w-0 opacity-0"
                            />
                        </li>
                    </ul>
                </div>

                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        className=" focus:outline-none fixed right-10 top-7 text-black"
                    >
                        ☰
                    </button>
                    {menuOpen && (
                        <ul className={`bg-white shadow list-none absolute top-16 right-4 flex flex-col items-center space-y-2 bg-gray-800 p-4`}>
                            <li>
                                <a href="#" className="text-black">
                                    Sign Up
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-black">
                                    Login
                                </a>
                            </li>
                            <li>
                                <Pop
                                    solutions={solutions}
                                    footerTitle={footerTitle}
                                    footerText={footerText}
                                    btnTitle={btnTitle}
                                    className="flex focus-outline-none relative w-0 top-2 right-4  m-0 px-0 py-0 rounded-full shadow-none"
                                    panelClass="h-60 w-80 absolute -top-20 -left-24 mr-auto"
                                    arrowClass="h-0 w-0 opacity-0"
                                />
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import React, { useEffect, useState } from "react"
import Sidebar, { SidebarProps } from "../Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Navbar, { NavProps } from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";

export interface webProps {
    sideBar: SidebarProps;
    nav: NavProps;
    heading: string;
    content: string;
    iconSize: string;
    width: string;
    onToggle: () => void;
    isOn: boolean;
    toggleOverlay: () => void;
}

const Webpage: React.FC<webProps> = ({ sideBar, nav, heading, content, iconSize = '18px', isOn, onToggle }) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };

    const { imgURL, imgWidth, imgHeight, textWidth, pages, width, children } = sideBar;
    const { title, name, round, size, src, loginIcon, signUpIcon, maxInitials, bgColor, padding, menuClass, smallScreenMenuClass } = nav;


    useEffect(() => {
        if (isOn) {
            document.body.classList.add('bg-gray-dark')
        } else (
            document.body.classList.remove('bg-gray-dark')
        )
    }, [isOn])

    return (

        <>
            <div>
                <Navbar
                    title={title}
                    name={name}
                    round={round}
                    size={size}
                    src={src}
                    loginIcon={loginIcon}
                    signUpIcon={signUpIcon}
                    maxInitials={maxInitials}
                    bgColor={bgColor}
                    padding={padding}
                    menuClass={menuClass}
                    smallScreenMenuClass={smallScreenMenuClass}
                    onToggle={onToggle}
                    isOn={isOn}
                    isOverlayOpen={isOverlayOpen}
                    toggleOverlay={toggleOverlay}
                />

                <Sidebar
                    width={width}
                    imgURL={imgURL}
                    imgWidth={imgWidth}
                    imgHeight={imgHeight}
                    textWidth={textWidth}
                    iconSize={iconSize}
                    pages={pages}
                    isOverlayOpen={isOverlayOpen}
                    toggleOverlay={toggleOverlay}
                    containerClass={`${isOn === true && 'bg-black'}`}
                    childClass={`${isOn === true && 'bg-gray-dark'}`}
                >
                    <div className={`pt-16 w-full  ${isOverlayOpen && 'opacity-50 sm:opacity-90'}`}>
                        {children}

                        <div className={`sm:pl-60 w-full  ${isOverlayOpen && 'opacity-50 sm:opacity-90'}`}>
                            <Routes>
                                <Route
                                    path="/dashboard"
                                    element={<Dashboard
                                        heading={heading}
                                        content={content}
                                        dashClass={`${isOn === true && 'bg-gray-dark text-white'}`}
                                    />}
                                />

                                <Route
                                    path="/services"
                                    element={<Dashboard
                                        heading='Services page'
                                        content={content}
                                        dashClass={`${isOn === true && 'bg-gray-dark text-white'}`}
                                    />}
                                />
                                <Route
                                    path="/contact"
                                    element={<Dashboard
                                        heading='Contact page'
                                        content={content}
                                        dashClass={`${isOn === true && 'bg-gray-dark text-white'}`}
                                    />}
                                />

                            </Routes>
                        </div>

                    </div>
                </Sidebar >
            </div >
        </>

    )
}

export default Webpage
import React, { useEffect, useState } from "react"
import Sidebar, { SidebarProps } from "../Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Navbar, { NavProps } from "../Navbar/Navbar";

export interface webProps {
    sideBar: SidebarProps;
    nav: NavProps;
    heading: string;
    content: string;
    loginIcon?: () => JSX.Element;
    signUpIcon?: () => JSX.Element;
    iconSize: string;
    width: string;
    onToggle: () => void;
    isOn: boolean;
    toggleOverlay: () => void;
}

const Webpage: React.FC<webProps> = ({ sideBar, loginIcon, signUpIcon, nav, iconSize = '22px', isOn, onToggle }) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };

    const { imgURL, imgWidth, imgHeight, textWidth, pages, width, children } = sideBar;
    const { title, name, round, size, src, maxInitials, bgColor, padding, menuClass, smallScreenMenuClass } = nav;


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
                    // logoClass={`${isOn === true && 'bg-black-light'}`}
                    parentListClass={`${isOn === true && 'hover:bg-gray-dark'}`}
                    childListClass={`${isOn === true && 'hover:bg-black'}`}
                >
                    <div>
                        {children}

                        <div>
                            <Routes>
                                {pages.map((page, index) => (
                                    <Route
                                        key={index}
                                        path={page.link}
                                        element={<p className={`text-black`}>{`Hello from ${page.title}`}</p>}
                                    />
                                ))}
                            </Routes>
                        </div>

                    </div>
                </Sidebar >
            </div >
        </>

    )
}

export default Webpage
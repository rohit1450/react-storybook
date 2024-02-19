import React, { useState } from "react"
import Sidebar, { SidebarProps } from "../Sidebar/Sidebar";
import Navbar, { NavProps } from "../Navbar/Navbar";
import Dashboard from "../Dashboard";

export interface webProps {
    sideBar: SidebarProps;
    nav: NavProps;
}

const Webpage: React.FC<webProps> = ({ sideBar, nav }) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isOn, setIsOn] = useState<boolean>(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };

    const { width, imgURL, colorPrimary, imgWidth, imgHeight, textWidth, iconSize, pages } = sideBar;
    const { title, name, round, size, src, loginIcon, signUpIcon, maxInitials, bgColor, padding, menuClass, smallScreenMenuClass } = nav;

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
                    onToggle={handleToggle}
                    isOn={isOn}
                    isOverlayOpen={isOverlayOpen}
                    toggleOverlay={toggleOverlay}
                />

                <Sidebar
                    width={width}
                    imgURL={imgURL}
                    colorPrimary={colorPrimary}
                    imgWidth={imgWidth}
                    imgHeight={imgHeight}
                    textWidth={textWidth}
                    iconSize={iconSize}
                    pages={pages}
                    isOverlayOpen={isOverlayOpen}
                    toggleOverlay={toggleOverlay}
                >
                    <div className="flex items-center absolute top-20 left-40 text-justify w-96">
                        <Dashboard />
                    </div>
                </Sidebar>
            </div>
        </>
    )
}

export default Webpage
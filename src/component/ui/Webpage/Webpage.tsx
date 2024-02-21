import React, { useState } from "react"
import Sidebar, { SidebarProps } from "../Sidebar/Sidebar";
import Navbar, { NavProps } from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";

export interface webProps {
    sideBar: SidebarProps;
    nav: NavProps;
    heading: string;
    content: string;
    iconSize: string;
    width: string;
    onToggle: () => void
}

const Webpage: React.FC<webProps> = ({ sideBar, nav, heading, content, iconSize = '25px', width }) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isOn, setIsOn] = useState<boolean>(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };

    const { imgURL, colorPrimary, imgWidth, imgHeight, textWidth, pages, children } = sideBar;
    const { title, name, round, size, src, loginIcon, signUpIcon, maxInitials, bgColor, padding, menuClass, smallScreenMenuClass } = nav;


    // useEffect(() => {
    //     if (isOverlayOpen) {
    //         document.body.classList.add('overflow-hidden')
    //     } else (
    //         document.body.classList.remove('overflow-hidden')
    //     )
    // }, [isOverlayOpen])

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
                    <div className={`sm:pl-12 pt-16 w-full ${isOverlayOpen && 'opacity-50 sm:opacity-90'}`}>
                        {children}
                        {pages.map((page, index) => (
                            <div key={index}>
                                {page.link === '/dashboard' &&
                                    <Dashboard
                                        heading={heading}
                                        content={content}
                                    />
                                }
                            </div>
                        ))}
                    </div>
                </Sidebar >
            </div >
        </>
    )
}

export default Webpage
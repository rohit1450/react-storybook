import React, { useEffect, useState } from "react"
import Sidebar, { SidebarProps } from "../Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Navbar, { NavProps } from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Contact from "../ContactUs/ContactUs";

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

const Webpage: React.FC<webProps> = ({ sideBar, nav, heading, content, iconSize = '25px', width, isOn, onToggle }) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };

    const { imgURL, imgWidth, imgHeight, textWidth, pages, children } = sideBar;
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

                        <div className={`sm:pl-12 w-full  ${isOverlayOpen && 'opacity-50 sm:opacity-90'}`}>
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
                                    path="/about"
                                    element={<AboutUs
                                        heading='About Us'
                                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id neque auctor tellus mattis accumsan.Curabitur vestibulum mauris sit amet velit fermentum consequat.Vivamus vehicula eu felis vitae dictum.'
                                        aboutClass={`${isOn === true && 'bg-gray-dark text-white'}`}
                                    />}
                                />
                                <Route
                                    path="/services"
                                    element={<Services
                                        heading='Our Services'
                                        service1='Lorem ipsum dolor sit amet'
                                        service2='Consectetur adipiscing elit'
                                        service3='Aenean id neque auctor tellus mattis accumsan'
                                        servClass={`${isOn === true && 'bg-gray-dark text-white'}`}
                                    />}
                                />
                                <Route
                                    path="/contact"
                                    element={<Contact
                                        heading='Contact Us'
                                        content='If you have any questions or inquiries, please feel free to contact us using the information below:'
                                        contactClass={`${isOn === true && 'bg-gray-dark text-white'}`}
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
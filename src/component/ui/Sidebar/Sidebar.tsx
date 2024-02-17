import { Bars3Icon, ChartBarIcon } from '@heroicons/react/20/solid';
import React, { useState, useEffect, ReactElement, useRef } from 'react';

interface Post {
    title: string,
    link: string,
    icon: string,
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
    width:string,
    textWidth:string,
    iconSize:string,
    imgURL:string,
    imgHeight:string,
    imgWidth:string,
    colorPrimary:string,
    isOverlayOpen: boolean;
    toggleOverlay: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOverlayOpen, toggleOverlay ,pages,width,iconSize,textWidth,imgURL,imgHeight,imgWidth,colorPrimary }) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isLaptopSize, setIsLaptopSize] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLaptopSize(window.innerWidth > 1024);
        };

        handleResize(); 

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log(isOverlayOpen);
    

    return (
        <div className='w-30 min-h-[60vh]'>
            {!isOverlayOpen&&
            <button
            onClick={toggleOverlay} 
            className="inline-flex items-center p-2 mt-2 ms-3  text-gray rounded-lg sm:hidden ">
           <Bars3Icon className='w-10 h-10 text-black'/>
           </button>
            }
            {isOverlayOpen||isLaptopSize&&<div ref={overlayRef} className={`fixed top-0 left-0 z-40  h-screen transition-transform transition-translate-x-full sm:translate-x-0`} style={{width:width}}>
                <div className={`h-full px-3 py-4 overflow-y-auto bg-gray-dark ${isOverlayOpen?"block":"hidden"}  sm:block`} style={{background:colorPrimary}}>
                    <img className="w-50 h-20 mx-auto" src={imgURL} alt='logo'style={{width:imgWidth,height:imgHeight}} ></img>
                    <ul className="space-y-2 font-medium mt-4">
                        {pages.map((page, index) => (
                            <li key={index}>
                                <a href={page.link}>
                                    <div className='w-full  flex flex-col items-center '>
                                        {/* <ImportIcon iconName={page.icon} /> */}
                                        <ChartBarIcon className=' text-gray' style={{width:iconSize,height:iconSize}}/>
                                        <p className="text-gray" style={{fontSize:textWidth}}>{page.title} </p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>}
        </div>
    );
};

export default Sidebar;

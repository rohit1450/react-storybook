import React, { ReactElement } from "react"
import Avatar from "react-avatar";
import Pop, { Solution } from "../Popover/Popover";

export interface NavProps {
    title: string;
    name: string;
    round?: boolean;
    size?: string;
    src?: string;
    maxInitials: number;
    bgColor: string
    icon?: React.ReactNode;
    btnTitle: ReactElement;
    footerTitle?: string;
    footerText?: string;
    solutions: Solution[];
}

const Navbar: React.FC<NavProps> = ({ title, name, round, size, src, icon, maxInitials, bgColor, footerTitle, footerText, solutions }) => {
    const btnTitle = <Avatar name={name} round={round} size={size} src={src} maxInitials={maxInitials} />
    const className = `realtive bg-red/[0] flex focus-outline-none absolute right-20 text-opacity-0 hover:text-opacity-0 hover:shadow-none h-0 w-0 top-3 p-0 m-0 rounded-full shandow-none`
    const panelClass = 'top-12 m-auto'
    const arrowClass = 'h-0 w-0'
    return (
        <div className='p-4 ' style={{ backgroundColor: `${bgColor}` }} >
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                <div className="text-white flex space-x-2">
                    <span className="h-8 w-8 text-white">
                        {icon}
                    </span>
                    <a className="text-lg font-bold" href="#">{title}</a>
                </div>
                <ul className="flex space-x-5 mr-36">
                    <li><a href="#" className="text-white">Sign Up</a></li>
                    <li><a href="#" className="text-white">Login</a></li>
                    <li className="absolute right-20">
                        <Pop solutions={solutions} footerTitle={footerTitle} footerText={footerText} btnTitle={btnTitle} className={className} panelClass={panelClass} arrowClass={arrowClass} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
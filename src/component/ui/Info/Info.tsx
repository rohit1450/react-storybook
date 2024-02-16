import React from "react";
// import { Tooltip } from "@material-tailwind/react";
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

export interface InfoProps {
    title: string;
    color?: string;
    size?: string;
    icon?: React.ElementType;
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
}

const Info: React.FC<InfoProps> = ({ icon: Icon, title, color, size, tooltipPosition }) => {
    return (
        <div>
            {Icon && (
                <Tooltip overlay={title}
                    placement={tooltipPosition}>
                    <button disabled>
                        <Icon color={color} size={size} />
                    </button>
                </Tooltip>
            )}
        </div>
    );
}

export default Info;

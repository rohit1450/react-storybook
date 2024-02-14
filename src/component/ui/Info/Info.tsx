import React from "react";
import { Tooltip } from "@material-tailwind/react";

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
                <Tooltip content={title}
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

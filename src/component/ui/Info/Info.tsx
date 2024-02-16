import React from "react";
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

export interface InfoProps {
    title: string;
    color?: string;
    bgColor?: string;
    size?: string;
    icon?: React.ElementType;
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
}

const Info: React.FC<InfoProps> = ({ icon: Icon, title, color, bgColor, size, tooltipPosition }) => {
    return (
        <div>
            {Icon && (
                <Tooltip overlayInnerStyle={{ backgroundColor: `${bgColor}` }} overlay={title}
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

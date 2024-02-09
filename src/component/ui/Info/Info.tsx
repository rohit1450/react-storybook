import React from "react";

export interface InfoProps {
    title: string;
    color?: string;
    size?: number;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Info: React.FC<InfoProps> = ({ icon: Icon, title, color, size }) => {
    return (
        <div className="py-16">
            {Icon &&
                <Icon title={title} color={color} size={size} />
            }
        </div>
    );
}

export default Info;

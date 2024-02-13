import React from 'react';
import Avatar from 'react-avatar';

export interface avatarProps {
    name: string,
    round: boolean,
    size: number,
    src: string,
    maxInitials: number,
}

const Avatars: React.FC<avatarProps> = ({ name, round, size, src, maxInitials }) => {
    return (
        <div>
            <Avatar name={name} round={round} size={size} src={src} maxInitials={maxInitials} />
        </div>
    )
}

export default Avatars;
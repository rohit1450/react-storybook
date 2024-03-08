import React from "react";
import Avatar from "react-avatar";

export interface avatarProps {
  name: string;
  round: boolean;
  size: string;
  src: string;
  maxInitials: number;
}

const Avatars: React.FC<avatarProps> = ({
  name,
  round,
  size,
  src,
  maxInitials,
}) => {
  return (
    <Avatar
      name={name}
      round={round}
      size={size}
      src={src}
      maxInitials={maxInitials}
    />
  );
};

export default Avatars;

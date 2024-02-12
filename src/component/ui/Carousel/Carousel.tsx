import { useState } from "react";
import { ReactNode } from "react";

export interface CarouselProps {
  size?: string;
  height?: string;
  width?: string;
  images: string[];
  dotColor: string;
  arrowIcon?: {
    left: ReactNode;
    right: ReactNode;
  };
  showText?: boolean;
}

const Carousel = ({
  size,
  images,
  dotColor,
  arrowIcon,
  showText,
}: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const small = size === "small" && `h-40 w-60`;
  const medium = size === "medium" && `h-56 w-128`;
  const large = size === "large" && `h-80 w-144`;

  const smallArrow = size === "small" && `h-12 w-12`;
  const mediumArrow = size === "medium" && `h-14 w-14`;
  const largeArrow = size === "large" && `h-16 w-16`;

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`carousel ${small || medium || large} shadow-2xl`}>
      <div className="relative">
        <div
          className={`${size === "small" && "hidden"} absolute ${size === "large" && "top-16"} ${size === "medium" && "top-8"} left-1/2 transform -translate-x-1/2 ${showText && "hidden"}`}
        >
          <div className="text-center text-white">
            <h1
              className={`${size === "large" && "text-2xl"} ${size === "medium" && "text-lg"}`}
            >
              The Beauty of Nature
            </h1>
            <br />
            <p className={`${size === "medium" && "text-xs"}`}>
              It is not so much for its beauty that the forest makes a claim
              upon men's hearts, as for that subtle something, that quality of
              air that emanation from old trees, that so wonderfully changes
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className={`${small || medium || large} object-cover`}
          />
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {images.map((_, index) => (
            <span
              key={index}
              className={`${size === "small" ? "w-1 h-1" : "w-2 h-2"} mx-1 rounded-full hover:cursor-pointer hover:bg-red ${
                index === currentImageIndex ? `bg-${dotColor}` : "bg-black"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            ></span>
          ))}
        </div>
        <div
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 text-white px-4 py-2 rounded-full transition duration-500  hover:cursor-pointer ${smallArrow || mediumArrow || largeArrow}`}
          onClick={prevImage}
        >
          {arrowIcon?.left}
        </div>
        <div
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 text-white px-4 py-2 rounded-full transition duration-500 hover:cursor-pointer ${smallArrow || mediumArrow || largeArrow}`}
          onClick={nextImage}
        >
          {arrowIcon?.right}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

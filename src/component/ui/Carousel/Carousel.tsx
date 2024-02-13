import { useState, ReactNode } from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";

export interface CarouselProps {
  size: string;
  height?: string;
  width?: string;
  images: string[];
  dotColor?: string;
  hasDot: boolean;
  arrowIcon?: {
    left: ReactNode;
    right: ReactNode;
  };
  fullWidth?: boolean;
}

const Carousel = ({
  size,
  images,
  dotColor,
  arrowIcon,
  height,
  width,
  fullWidth,
  hasDot,
}: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const customHeightWidth = () => {
    if (fullWidth) {
      return { height: "100%", width: "100%" };
    }
    if (size === "small") {
      return height === undefined || width === undefined
        ? { height: "10rem", width: "15rem" }
        : { height, width };
    } else if (size === "medium") {
      return height === undefined || width === undefined
        ? { height: "14rem", width: "25rem" }
        : { height, width };
    } else if (size === "large") {
      return height === undefined || width === undefined
        ? { height: "20rem", width: "36rem" }
        : { height, width };
    }
  };

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

  const noDots = () => {
    return hasDot ? {} : { display: "none" };
  };

  const dotColorFn = (index: number) => {
    return index === currentImageIndex
      ? { backgroundColor: dotColor }
      : { backgroundColor: "black" };
  };

  return (
    <div className={`carousel shadow-2xl`} style={customHeightWidth()}>
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className={`object-cover`}
            style={customHeightWidth()}
          />
        </div>
        <div
          className="absolute bottom-4 left-0 right-0 flex justify-center"
          style={noDots()}
        >
          {images.map((_, index) => (
            <span
              key={index}
              className={`${size === "small" ? "w-1 h-1" : "w-2 h-2"} mx-1 rounded-full hover:cursor-pointer ${
                index === currentImageIndex ? `bg-${dotColor}` : "bg-black"
              }`}
              style={dotColorFn(index)}
              onClick={() => setCurrentImageIndex(index)}
            ></span>
          ))}
        </div>
        <div
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 text-white px-4 py-2 rounded-full transition duration-500  hover:cursor-pointer ${smallArrow || mediumArrow || largeArrow}`}
          onClick={prevImage}
        >
          {arrowIcon === undefined ? <ArrowLeftCircleIcon /> : arrowIcon.left}
        </div>
        <div
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 text-white px-4 py-2 rounded-full transition duration-500 hover:cursor-pointer ${smallArrow || mediumArrow || largeArrow}`}
          onClick={nextImage}
        >
          {arrowIcon === undefined ? <ArrowRightCircleIcon /> : arrowIcon.right}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

import { useState, useRef } from "react";
import Slider from "react-slick";
import { CardProps } from "./Carousel.stories";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface CarouselProps {
  type: "image" | "custom";
  dots?: boolean;
  size: string;
  height?: string;
  width?: string;
  images: string[];
  dotColor?: string;
  hasDot: boolean;
  arrowIcon?: {
    left: React.ElementType;
    right: React.ElementType;
  };
  fullWidth?: boolean;
  arrowPoistion: "top" | "middle" | "bottom";
  CardStructure: (props: CardProps) => JSX.Element;
  cardText: {
    heading: string;
    content: string;
  }[];
  NextArrow: (props: any) => JSX.Element;
  PrevArrow: (props: any) => JSX.Element;
  slidesToScroll: number;
  slidesToShow: number;
  customPaging: any;
  arrows: boolean;
  hasButtons?: boolean;
}

const Carousel = ({
  type,
  size,
  images,
  dotColor,
  arrowIcon,
  height,
  width,
  fullWidth,
  hasDot,
  arrowPoistion,
  cardText,
  CardStructure,
  NextArrow,
  PrevArrow,
  slidesToShow,
  slidesToScroll,
  customPaging,
  dots,
  arrows = true,
  hasButtons = false,
}: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let sliderRef = useRef<HTMLInputElement | null>(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  let settings = {
    dots: dots,
    infinite: true,
    speed: 1000,
    slidesToShow,
    slidesToScroll,
    initialSlide: 0,
    dotsClass: "slick-dots",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: arrows,
    customPaging: customPaging,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          fade: true,
          autoplay: false,
        },
      },
    ],
  };

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

  let leftArrowPosition = "";
  let rightArrowPosition = "";

  switch (arrowPoistion) {
    case "top":
      leftArrowPosition = "absolute top-1 left-0";
      rightArrowPosition = "absolute top-1 right-0";
      break;
    case "middle":
      leftArrowPosition = "absolute top-1/2 left-0 transform -translate-y-1/2";
      rightArrowPosition =
        "absolute top-1/2 right-0 transform -translate-y-1/2";
      break;
    case "bottom":
      leftArrowPosition = "absolute bottom-1 left-0";
      rightArrowPosition = "absolute bottom-1 right-0";
      break;
  }

  if (type === "custom") {
    return (
      <>
        <div className="slider-container px-4 relative">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {cardText.map((card, index) => {
              return (
                <CardStructure
                  key={index + 1}
                  heading={card.heading}
                  content={card.content}
                  img={images[index]}
                />
              );
            })}
          </Slider>
          {hasButtons && (
            <div className="flex gap-2">
              <button
                className="button px-2 py-1 rounded bg-Primary"
                onClick={previous}
              >
                Previous
              </button>
              <button
                className="button px-2 py-1 rounded bg-Primary"
                onClick={next}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </>
    );
  }

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
          className={`${leftArrowPosition} ${arrowPoistion ?? "absolute top-1/2 left-0 transform -translate-y-1/2"} text-white px-4 py-2 rounded-full transition duration-500  hover:cursor-pointer ${smallArrow || mediumArrow || largeArrow}`}
          onClick={prevImage}
        >
          {arrowIcon === undefined ? (
            <ArrowLeftCircleIcon />
          ) : (
            <arrowIcon.left />
          )}
        </div>
        <div
          className={`${rightArrowPosition} ${arrowPoistion ?? "absolute top-1/2 right-0 transform -translate-y-1/2"} text-white px-4 py-2 rounded-full transition duration-500 hover:cursor-pointer ${smallArrow || mediumArrow || largeArrow}`}
          onClick={nextImage}
        >
          {arrowIcon === undefined ? (
            <ArrowRightCircleIcon />
          ) : (
            <arrowIcon.right />
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

import { CardProps } from "./Carousel.stories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export interface CarouselProps {
  CardStructure: (props: CardProps) => JSX.Element;
  slidesPerView: number;
  spaceBetween: number;
  navigation: boolean;
  loop: boolean;
  containerClassName: string;
  content: { image: string; text: string }[];
  breakpoints: any;
  customArrow: boolean;
  arrows: {
    leftArrow: () => JSX.Element;
    rightArrow: () => JSX.Element;
  };
  direction: "vertical" | "horizontal";
  autoplay: boolean;
  defaultPagination: boolean;
  customDots: (index: number, className: string) => string;
}

const Carousel = ({
  content,
  CardStructure,
  slidesPerView = 1,
  spaceBetween = 0,
  loop = true,
  navigation,
  containerClassName,
  breakpoints,
  customArrow = false,
  arrows,
  direction = "horizontal",
  autoplay = false,
  defaultPagination = true,
  customDots,
}: CarouselProps) => {
  const options = {
    direction,
    slidesPerView,
    spaceBetween,
    loop,
    breakpoints,
    navigation: navigation
      ? true
      : { nextEl: ".arrow-right", prevEl: ".arrow-left" },
  };
  const pagination1 = {
    clickable: true,
    renderBullet: customDots,
  };
  const pagination2 = {
    clickable: true,
  };

  return (
    <div>
      <Swiper
        {...options}
        autoplay={autoplay}
        pagination={defaultPagination ? pagination2 : pagination1}
        modules={[Pagination, Navigation, Autoplay]}
        className={containerClassName}
      >
        {content.map((card) => {
          return (
            <SwiperSlide>
              <CardStructure text={card.text} image={card.image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {customArrow && (
        <div className="flex gap-2 mt-2">
          {arrows.leftArrow()}
          {arrows.rightArrow()}
        </div>
      )}
    </div>
  );
};

export default Carousel;

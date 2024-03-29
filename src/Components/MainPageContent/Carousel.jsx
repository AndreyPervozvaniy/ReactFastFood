import { Flex } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselData } from "../../Utills/CarouselContent";

const CarouselTemplate = () => {
  return (
    <Flex color="white">
      <Carousel
        infiniteLoop
        showArrows={false}
        autoPlay
        interval={5000}
        emulateTouch
        showThumbs={false}
        showStatus={false}
      >
        {CarouselData.map((slide) => {
          return (
            <Image
              key={slide.id}
              src={slide.image}
              height="auto"
              width="100%"
              loading="eager"
            />
          );
        })}
      </Carousel>
    </Flex>
  );
};

export default CarouselTemplate;

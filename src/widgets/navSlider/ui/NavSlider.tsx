"use client";

import { Settings } from "react-slick";
import SliderContainer from "@/shared/ui/slider/ui/SliderContainer";
import { NAV_SLIDER_CONTENT } from "../consts/navSliderContent";
import { NavSliderItem } from "./NavSliderItem";

export const NavSlider = () => {

  return (
    <SliderContainer
      className="nav-slider h-[110px] md:h-[48vh] my-4 ml-4 mr-0 md:ml-[3vw] md:mt-[30px] md:mb-[25px]"
      customSettings={navSliderSettings}
    >
      {NAV_SLIDER_CONTENT.map(item => <NavSliderItem key={item.href} {...item} />)}
    </SliderContainer>
  );
};

const navSliderSettings: Settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  dots: false,
  draggable: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        variableWidth: true,
        swipeToSlide: true,
        arrows: false,
      },
    },
  ],
};

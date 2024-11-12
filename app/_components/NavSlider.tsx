"use client";

import Link from "next/link";
import SliderContainer from "./SliderContainer";
import { Settings } from "react-slick";
import Image from "next/image";

const NavSlider = () => {
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
  const nav = [
    {
      text: "",
      src: "/assets/sagro/cover.jpg",
      to: "/works/sagro",
      alt: "Sagro project",
    },
    {
      text: "",
      src: "/assets/pr_gisc/cover.jpg",
      to: "/works/prgisc",
      alt: "PR GISC project",
    },
    {
      text: "",
      src: "/assets/mancomm/img3.jpg",
      to: "/works/mancomm",
      alt: "Mancomm project",
    },
    {
      text: "",
      src: "/assets/saula/img6.jpg",
      to: "/works/saula",
      alt: "Saula project",
    },
  ];
  const navItems = nav.map(({ text, src, to, alt }) => (
    <div className="sliderPortofolio__nav-item" key={text}>
      <Link href={to} className="sliderPortofolio__nav-text" aria-label={alt}>
        {text}
      </Link>
      <div className="sliderPortofolio__nav-img">
        {src && (
          <Image width={900} height={900} alt={alt} loading="lazy" src={src} />
        )}
      </div>
    </div>
  ));

  let startX = 0;

  const swipeAction = (event: React.TouchEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const { type } = event;
    const { screenX } = event.changedTouches[0];
    const threshold = 20;

    if (type === "touchstart") {
      startX = screenX;
    } else if (type === "touchmove") {
      if (screenX > startX + threshold || screenX < startX - threshold) {
        // moved more than 20px left or right
        document.body.classList.add("prevent-scroll");
      }
    } else if (type === "touchend") {
      document.body.classList.remove("prevent-scroll");
      startX = 0;
    }
  };

  return (
    <div
      className="custom-slider"
      onTouchEnd={swipeAction}
      onTouchMove={swipeAction}
      onTouchStart={swipeAction}
    >
      <SliderContainer
        className="sliderPortofolio__nav"
        customSettings={navSliderSettings}
      >
        {navItems}
      </SliderContainer>
    </div>
  );
};

export default NavSlider;

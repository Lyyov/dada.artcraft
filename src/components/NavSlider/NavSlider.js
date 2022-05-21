import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../containers/Slider/Slider";

const NavSlider = () => {
  const navSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    arrows: 0,
    draggable: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          variableWidth: true,
          variableHeight: true,
          swipeToSlide: true,
        },
      },
    ],
  };
  const nav = [
    {
      text: "",
      src: process.env.PUBLIC_URL + "/assets/sagro/cover.jpg",
      to: "/sagro",
    },
    {
      text: "",
      src: process.env.PUBLIC_URL + "/assets/pr_gisc/cover.jpg",
      to: "/prgisc",
    },
    {
      text: "",
      src: process.env.PUBLIC_URL + "/assets/mancomm/cover.jpg",
      to: "/mancomm",
    },
    {
      text: "",
      src: process.env.PUBLIC_URL + "/assets/saula/cover.jpg",
      to: "/saula",
    },
  ];
  const navItems = nav.map(({ text, src, to }) => (
    <div className="sliderPortofolio__nav-item" key={text}>
      <Link to={to} className="sliderPortofolio__nav-text">
        {text}
      </Link>
      <div className="sliderPortofolio__nav-img">
        {src && <img loading="lazy" src={src} />}
      </div>
    </div>
  ));

  let startX = 0;

  const swipeAction = (event) => {
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
      <Slider
        className="sliderPortofolio__nav"
        customSettings={navSliderSettings}
      >
        {navItems}
      </Slider>
    </div>
  );
};

export default NavSlider;

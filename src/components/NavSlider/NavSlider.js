import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../containers/Slider/Slider";

const NavSlider = () => {
  const navSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
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

  return (
    <Slider
      className="sliderPortofolio__nav"
      customSettings={navSliderSettings}
    >
      {navItems}
    </Slider>
  );
};

export default NavSlider;

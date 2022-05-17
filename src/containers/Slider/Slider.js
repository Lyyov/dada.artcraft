import Slider from "react-slick";
import react from "react";

// import SliderItem from "./SliderItem";

import "./_slick.scss";
import "./_slick_theme.scss";

import "./slider.scss";

function arrow(classNameNav, onClick) {
  return (
    <div onClick={onClick} className={`slider__custom-nav ${classNameNav}`}>
      <svg
        width="16px"
        height="28px"
        viewBox="0 0 16 28"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Path</title>
        <g
          id="Services"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g
            id="Desktop-HD"
            transform="translate(-1368.000000, -2801.000000)"
            stroke="#ffffff"
            strokeWidth="1.5"
          >
            <path
              d="M1369,2828 L1382.81524,2815.42283 C1382.93273,2815.31547 1383,2815.16163 1383,2815 C1383,2814.83837 1382.93273,2814.68453 1382.81524,2814.57717 L1369,2802"
              id="Path"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return arrow("slider__custom-nav-next", onClick);
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return arrow("slider__custom-nav-prev", onClick);
}

class SliderContainer extends react.Component {
  state = {
    settings: {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    },
  };
  render() {
    const { customSettings, className, children } = this.props;

    let settings = {
      ...this.state.settings,
      ...customSettings,
    };

    console.log(settings);

    return (
      <Slider {...settings} className={`slider ${className}`}>
        {children}
      </Slider>
    );
  }
}

export default SliderContainer;

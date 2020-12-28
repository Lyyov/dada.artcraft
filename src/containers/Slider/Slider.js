import Slider from "react-slick";

import SliderItem from './SliderItem';



import "./_slick.scss";
import "./_slick_theme.scss";

import "./slider.scss";

function arrow (classNameNav, onClick) {
  return (
    <div onClick={onClick} className={`slider__custom-nav ${classNameNav}`}>
        <svg width="11px" height="9px" viewBox="0 0 11 9" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Left-arrow" transform="translate(-11.000000, -14.000000)">
                    <g>
                        <circle className="custom-nav-arrow" fill="#1E1E23" cx="18" cy="18" r="18"></circle>
                        <path id="Line-2" d="M20,14 L20,18 L22,18 L22,19 L20,19 L20,23 L11,18.5 L20,14 Z" fill="#979797" fillRule="nonzero"></path>
                    </g>
                </g>
            </g>
        </svg>
    </div>
  )
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    arrow("slider__custom-nav-next", onClick)
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    arrow("slider__custom-nav-prev",
    onClick)
  );
}

const slider = (props) => {
  const { className, customSettings } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    ...customSettings
  };

  return (
    <Slider {...settings} className={`slider ${className}`}>
      { props.children }
    </Slider>
  )
}



export default slider;
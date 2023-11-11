import React from "react";

import Aux from "../../../hoc/Auxjs";
import Slider from "../../../containers/Slider/Slider";
import NavSlider from "../../NavSlider/NavSlider";

const heroItems = [
  {
    text2: "Logo",
  },
  {
    text1: "Brand",
    text2: "Identities",
  },

  {
    text1: "Social Media",
    text2: "Visuals",
  },
  {
    text2: "Printables",
  },
  {
    text1: "Art",
    text2: "Direction",
  },
];

const Home = () => {
  const mainSliderImg = process.env.PUBLIC_URL + "/assets/dada-banner11.gif";
  const mainSliderSettings = {
    fade: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    dots: false,
  };

  return (
    <Aux>
      <div className="slider-container">
        <div className="sliderPortofolio__image-container image-container">
          {/* <img loading="lazy" className="imgage-container_image" src={process.env.PUBLIC_URL + '/assets/home/portofolio/branding1.jpg'}  alt="" />  */}
          <img loading="lazy" src={mainSliderImg} alt="" />
        </div>
        <Slider
          className="sliderPortofolio"
          customSettings={mainSliderSettings}
        >
          {heroItems.map(({ text1, text2 }) => (
            <div key={text1} className="sliderPortofolio__item">
              <div className={`sliderPortofolio__content`}>
                <div className={`sliderPortofolio__text`}>
                  {text1 && ( // if text1 is not empty
                    <span className={`sliderPortofolio__subTitle`}>
                      {text1}
                    </span>
                  )}
                  <span className={`sliderPortofolio__title`}>{text2}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <NavSlider />
    </Aux>
  );
};

export default Home;

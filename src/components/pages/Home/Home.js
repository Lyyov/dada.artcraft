import React from "react";

import Aux from "../../../hoc/Auxjs";
import Slider from "../../../containers/Slider/Slider";
import NavSlider from "../../NavSlider/NavSlider";

const heroItems = [
  {
    text1: "Design",
    text2: "Logo",
  },
  {
    text1: "Full Guide",
    text2: "Identities",
  },
  {
    text1: "Design",
    text2: "Digital Marketing",
  },
  {
    text1: "Visuals",
    text2: "Social Media",
  },
  {
    text1: "Print",
    text2: "Design",
  },
  {
    text1: "Visualization",
    text2: "Infographics and Data",
  },
  {
    text1: "Consultation",
    text2: "Art Direction",
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
                  <small className={`sliderPortofolio__subTitle`}>
                    {text1}
                  </small>{" "}
                  <br />
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

import React from "react";

import Aux from "../../../hoc/Auxjs";
import Slider from "../../../containers/Slider/Slider";
import NavSlider from "../../NavSlider/NavSlider";

const Home = () => {
  const mainSliderImg = process.env.PUBLIC_URL + "/assets/home/homepage.jpg";
  const mainSliderSettings = {
    fade: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
        },
      },
    ],
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
          <div className="sliderPortofolio__item">
            <div className={`sliderPortofolio__content`}>
              <div className={`sliderPortofolio__text`}>
                <small className={`sliderPortofolio__subTitle`}>
                  We Create
                </small>{" "}
                <br />
                <span className={`sliderPortofolio__title`}>Brands</span>
              </div>
            </div>
          </div>
          <div className="sliderPortofolio__item">
            {/* <div className="sliderPortofolio__image-container image-container">
              <img loading="lazy" className="imgage-container_image" src={process.env.PUBLIC_URL + '/assets/home/portofolio/branding2.jpg'}  alt="" /> 
            </div> */}
            <div className={`sliderPortofolio__content`}>
              <div className={`sliderPortofolio__text`}>
                <small className={`sliderPortofolio__subTitle`}>
                  Full Guides
                </small>{" "}
                <br />
                <span className={`sliderPortofolio__title`}>Identities</span>
              </div>
            </div>
          </div>
          <div className="sliderPortofolio__item">
            {/* <div className="sliderPortofolio__image-container image-container">
              <img loading="lazy" className="imgage-container_image" src={process.env.PUBLIC_URL + '/assets/home/portofolio/branding3.jpg'}  alt="" /> 
            </div> */}
            <div className={`sliderPortofolio__content`}>
              <div className={`sliderPortofolio__text`}>
                <small className={`sliderPortofolio__subTitle`}>
                  Full Guides
                </small>{" "}
                <br />
                <span className={`sliderPortofolio__title`}>Identities</span>
              </div>
            </div>
          </div>
          <div className="sliderPortofolio__item">
            {/* <div className="sliderPortofolio__image-container image-container">
              <img loading="lazy" className="imgage-container_image" src={process.env.PUBLIC_URL + '/assets/home/portofolio/web1.jpg'}  alt="" /> 
            </div> */}
            <div className={`sliderPortofolio__content`}>
              <div className={`sliderPortofolio__text`}>
                <small className={`sliderPortofolio__subTitle`}>
                  Developing
                </small>{" "}
                <br />
                <span className={`sliderPortofolio__title`}>Websites</span>
              </div>
            </div>
          </div>
          <div className="sliderPortofolio__item">
            {/* <div className="sliderPortofolio__image-container image-container">
              <img loading="lazy" className="imgage-container_image" src={process.env.PUBLIC_URL + '/assets/home/portofolio/web2.jpg'}  alt="" /> 
            </div> */}
            <div className={`sliderPortofolio__content`}>
              <div className={`sliderPortofolio__text`}>
                <small className={`sliderPortofolio__subTitle`}>Online</small>{" "}
                <br />
                <span className={`sliderPortofolio__title`}>Stores</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <NavSlider />
    </Aux>
  );
};

export default Home;

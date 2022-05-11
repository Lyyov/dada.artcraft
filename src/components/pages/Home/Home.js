import React from "react";
import { Link } from "react-router-dom";

import Aux from "../../../hoc/Auxjs";
import Slider from "../../../containers/Slider/Slider";

const Home = () => {
  const mainSliderImg = process.env.PUBLIC_URL + "/assets/home/homepage.jpg";
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
    <Aux>
      <div className="slider-container">
        <div className="sliderPortofolio__image-container image-container">
          {/* <img loading="lazy" className="imgage-container_image" src={process.env.PUBLIC_URL + '/assets/home/portofolio/branding1.jpg'}  alt="" />  */}
          <img loading="lazy" src={mainSliderImg} alt="" />
        </div>
        <Slider
          className="sliderPortofolio"
          customSettings={{
            fade: true,
            speed: 2500,
            autoplay: true,
            autoplaySpeed: 10000,
            pauseOnHover: false,
          }}
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
        <Slider
          className="sliderPortofolio__nav"
          customSettings={{
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
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                },
              },
            ],
          }}
        >
          {navItems}
        </Slider>
      </div>
    </Aux>
  );
};

export default Home;

import React from "react";

import Aux from "../../../hoc/Auxjs";
import Slider from "../../../containers/Slider/Slider";
// import Modal from "../../UI/Modal/Modal";

import poorgif from "../../../assets/svg/pour-gif.gif";
// import sagro from "../../../assets/sagro/banner.jpg";
// import prciscLogo from "../../../assets/prcisc/logo.svg";

// import sculpture from "../../../assets/production/slider-portofolio/sculpture.png";
import dadastationare from "../../../assets/blog/DaDaStationary011.jpg";

const Home = () => {
  const nav = [
    {
      text: "Bloc 1",
    },
    {
      text: "Bloc 2",
    },
    {
      text: "Bloc 3",
      src: poorgif,
    },
    {
      text: "Bloc 4",
    },
  ];
  const navItems = nav.map(({ text, src }) => (
    <div className="sliderPortofolio__nav-item" key={text}>
      <p className="sliderPortofolio__nav-text">{text}</p>
      <div className="sliderPortofolio__nav-img">
        {src && <img src={src} />}
      </div>
    </div>
  ));

  return (
    <Aux>
      <div className="slider-container">
        <div className="sliderPortofolio__image-container image-container">
          {/* <img className="imgage-container_image" src={process.env.PUBLIC_URL + '/assets/home/portofolio/branding1.jpg'}  alt="" />  */}
          <img src={dadastationare} alt="" />
        </div>

        <Slider
          className="sliderPortofolio__nav"
          customSettings={{
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 3,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 3,
                },
              },
            ],
          }}
        >
          {navItems}
        </Slider>
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
              <img className="imgage-container_image" src={process.env.PUBLIC_URL + '/assets/home/portofolio/branding2.jpg'}  alt="" /> 
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
              <img className="imgage-container_image" src={process.env.PUBLIC_URL + '/assets/home/portofolio/branding3.jpg'}  alt="" /> 
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
              <img className="imgage-container_image" src={process.env.PUBLIC_URL + '/assets/home/portofolio/web1.jpg'}  alt="" /> 
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
              <img className="imgage-container_image" src={process.env.PUBLIC_URL + '/assets/home/portofolio/web2.jpg'}  alt="" /> 
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
      {/* <div className="slider-container">
        
        <Slider className="sliderServices">
          <div className="sliderServices__item">
            <div className="sliderServices__image-container image-container">
              <img className="imgage-container_image" src={sculpture} alt="" /> 
            </div>
            <div className={`sliderServices__content`}>
              <div className={`sliderServices__text`}>
                <ul className="borders">
                  <li className="borders__line borders-left"></li>
                  <li className="borders__line borders-top"></li>
                  <li className="borders__line borders-right"></li>
                  <li className="borders__line borders-bottom"></li>
                </ul>
                <h3 className="sliderServices__title-absolute">
                  Portofolio
                </h3>
                <div className={`sliderServices__title`}>Branding projects</div>
                <Link to="/branding">
                  <button className="button sliderServices__button">
                    <span>See full projects</span>
                  </button>
                </Link>
                
              </div>
            </div>
          </div>
          <div className="sliderServices__item sliderServices__item-sagro">
            <div className="sliderServices__image-container image-container">
              <img className="imgage-container_image" src={sagro} alt="" /> 
            </div>
            <div className={`sliderServices__content`}>
              <div className={`sliderServices__text`}>
                <ul className="borders">
                  <li className="borders__line borders-left"></li>
                  <li className="borders__line borders-top"></li>
                  <li className="borders__line borders-right"></li>
                  <li className="borders__line borders-bottom"></li>
                </ul>
                <h3 className="sliderServices__title-absolute">
                  <img src="https://sagro.md/wp-content/uploads/2020/04/Sagro-svg4.svg" alt=""/>
                </h3>
                <div className={`sliderServices__title`}>Agriculture</div>
                <button className="button sliderServices__button">
                  <span>Checkout</span>
                </button>
              </div>
            </div>
          </div>
          <div className="sliderServices__item">
            <div className="sliderServices__image-container image-container">
              <img className="imgage-container_image" src={process.env.PUBLIC_URL + '/assets/saula/saula1.jpg'} alt="" /> 
            </div>
            <div className={`sliderServices__content`}>
              <div className={`sliderServices__text`}>
                <ul className="borders">
                  <li className="borders__line borders-left"></li>
                  <li className="borders__line borders-top"></li>
                  <li className="borders__line borders-right"></li>
                  <li className="borders__line borders-bottom"></li>
                </ul>
                <h3 className="sliderServices__title-absolute">
                  <img src={process.env.PUBLIC_URL + '/assets/saula/logo.svg'} alt=""/>
                </h3>
                <div className={`sliderServices__title`}>Coffee Shop</div>
                <button className="button sliderServices__button">
                  <span>Checkout</span>
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div> */}
    </Aux>
  );
};

export default Home;

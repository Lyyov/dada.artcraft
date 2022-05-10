import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Slider from "../../../containers/Slider/Slider";

import headerbanner from "../../../assets/services-header.png";
import service1 from "../../../assets/services/service1.png";
import service2 from "../../../assets/services/service2.png";
import service3 from "../../../assets/services/service3.png";
import service4 from "../../../assets/services/service4.png";
import goodToKnow from "../../../assets/services/good-to-know.png";
import "./services.scss";

const Services = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const servicesApi = [
    {
      title: "Visual Identity",
      text: "We skilfully create layouts for all types of visual media, to support your brand's communication, from business cards to catalogs, roll-ups or whatever else you may think of.",
      img: service1,
    },
    {
      title: "Brand Guidelines",
      text: "If you are a business owner or you run any kind of organisation, you will definitely need a powerful visual presence, your company’s unique identity.",
      img: service2,
    },
    {
      title: "Web Development",
      text: " “Responsive” is our second name. Whether you need a simple static website or a complex e-commerce solution we put in the same level of commitment to fine details. ",
      img: service3,
    },
    {
      title: "Web Design",
      text: "Delighting users with a simple and memorable experience is just as important as having good code. We strive to make sure every moment your customer spends with your product is pleasing and engaging.",
      img: service4,
    },
  ];
  const howItWorkApi = [
    {
      title: "application",
      text: "Please send your brief, and we will check in a call if we're a good match for your project.",
    },
    {
      title: "guidance",
      text: "We're here to listen and to help our customers succeed by providing efficient and creative solutions.",
    },
    {
      title: "solution",
      text: "Based on your target goals, we will develop strategies to achieve what is suitable for your business.",
    },
    {
      title: "execution",
      text: "We will produce competitive content and will deliver approved promotional materials on time.",
    },
  ];
  const services = servicesApi.map((item) => (
    <div className="col-md-3" key={item.title}>
      <div className="services__list-item">
        <img src={item.img} alt="service" />
        <div className="services__list-content">
          <div className="services__list-title">{item.title}</div>
          <p className="services__list-text">{item.text}</p>
        </div>
      </div>
    </div>
  ));
  const howItwork = howItWorkApi.map((item) => (
    <div className="col-lg-3 col-md-8 col-sm-12" key={item.title}>
      <div className="howWork__item">
        <h5 className="howWork__item-title">{item.title}</h5>
        <p className="howWork__item-text">{item.text}</p>
      </div>
    </div>
  ));
  const goodToKnowApi = [
    {
      title: "WHAT’S THE INVESTMENT?",
      text: "Our packages are fully customized because each person/company has its own requirements. After the consultation stage, once we understand your needs, we'll match the best solutions for your business to make sure that you get the most out of your investment.",
    },
    {
      title: "WHEN CAN WE START?",
      text: "Usually, each project is crafted for about 3-6 weeks. Our practice shows that it is best to schedule the project in advance, but it all depends on the time of the year. If you need to launch in no time, feel free to call us to find a solution.",
    },
    {
      title: "WHAT IF WE NEED JUST A LOGO?",
      text: "We are open to the exclusive logo service, although the logo is just one element of the brand, and we think it is better if all the elements are built around a unique strategy so that you have a consistent presence everywhere.",
    },
  ];
  const knowItems = goodToKnowApi.map((item) => (
    <div className="know__item" key={item.title}>
      <h5 className="know__item-title">{item.title}</h5>
      <p className="know__item-text">{item.text}</p>
    </div>
  ));
  return (
    <div className="services" id="services">
      <section className="services__relative">
        <img className="services__banner" src={headerbanner} alt="banner" />
        <div className={`services__text`}>
          {/* <h3 className="services__title title">Services</h3> */}
          <p className="services__paragraph">
            We imagine and explore possibilities. Our projects start with
            observing and analyzing the essence and uniqueness of the brand we
            need to create, the story behind and the focal points.
          </p>
          <p className="services__paragraph">
            When we create a brand, we focus on finding the values and
            characteristics that help people feel what the brand means and why
            it needs to stand out. We create points of contact and facilitate
            the connection between your service and customers because brands are
            made for people and are about people.
          </p>
          <p className="services__mark">
            Design is a second chance to <br /> make a first impression
          </p>
        </div>
      </section>
      <section className="services__do">
        <div className="container">
          <div className="services__do-content">
            <div className="row">
              <div className="col-md-12">
                <h3 className="services__title title">What We Do</h3>
              </div>
            </div>
            <div className="services__list row">{services}</div>
          </div>
        </div>
      </section>
      <section className="howWork">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="howWork__title title">How it Works</h3>
            </div>
          </div>
          <div className="row howWork__row">{howItwork}</div>
          <div className="text-center">
            <a href="#" className="howWork__button button">
              <span>Apply</span>
              <span className="button__icon">
                <svg
                  width="8px"
                  height="13px"
                  viewBox="0 0 8 13"
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
                  >
                    <g
                      id="Desktop-HD"
                      transform="translate(-759.000000, -2190.000000)"
                    >
                      <g
                        id="HOW-IT-WORKS"
                        transform="translate(60.000000, 1797.000000)"
                      >
                        <g
                          id="buton"
                          transform="translate(528.000000, 363.000000)"
                        >
                          <text
                            id="Apply"
                            fontFamily="OpenSans-SemiBold, Open Sans"
                            fontSize="21"
                            fontWeight="500"
                            fill="#312F35"
                          >
                            <tspan x="102" y="43">
                              Apply
                            </tspan>
                          </text>
                          <path
                            d="M172,42 L177.920817,36.6788875 C177.971169,36.6334667 178,36.5683833 178,36.5 C178,36.4316167 177.971169,36.3665333 177.920817,36.3211125 L172,31"
                            id="Path"
                            stroke="#3A3A3A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="know">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="know__title title">Good to Know</h3>
            </div>
          </div>
          <div className="row know__row">
            <div className="col-md-6 col-sm-12">
              <img className="know__image" src={goodToKnow} alt="" />
            </div>
            <div className="col-md-6 col-sm-12">
              <Slider
                className="know__slider"
                customSettings={{
                  fade: true,
                  speed: 1000,
                  autoplay: true,
                  autoplaySpeed: 5000,
                  pauseOnHover: false,
                }}
              >
                {knowItems}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

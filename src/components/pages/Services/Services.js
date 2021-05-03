import React, { useEffect } from 'react';

import Slider from '../../../containers/Slider/Slider'

import headerbanner from '../../../assets/services-header.png'
import service1 from '../../../assets/services/service1.png'
import service2 from '../../../assets/services/service2.png'
import service3 from '../../../assets/services/service3.png'
import service4 from '../../../assets/services/service4.png'
import goodToKnow from '../../../assets/services/good-to-know.png'
import './services.scss'

const Services = () => {
  
  useEffect(() => {
    let borders = document.getElementById('borders');
    borders.classList.add("animate")
  })

  const servicesApi = [
    {
      title: "Visual Identity",
      text: "We skilfully create layouts for all types of visual media, to support your brand's communication, from business cards to catalogs, roll-ups or whatever else you may think of.",
      img: service1
    },
    {
      title: "Brand Guidelines",
      text: "If you are a business owner or you run any kind of organisation, you will definitely need a powerful visual presence, your company’s unique identity.",
      img: service2
    },
    {
      title: "Web Development",
      text: " “Responsive” is our second name. Whether you need a simple static website or a complex e-commerce solution we put in the same level of commitment to fine details. ",
      img: service3
    },
    {
      title: "Web Design",
      text: "Delighting users with a simple and memorable experience is just as important as having good code. We strive to make sure every moment your customer spends with your product is pleasing and engaging.",
      img: service4
    }
  ]
  const howItWorkApi = [
    {
      title: "consulting",
      text: "Your story and your dreams are all the things we need to know! Send in your application then we'll hop on a call too see if we're a good fit."
    },
    {
      title: "solution",
      text: "Based on market research and your input, we’ll create a strategy to meet your business goals"
    },
    {
      title: "execution",
      text: "We’ll craft compelling marketing materials and execute the approved design strategy."
    },
    {
      title: "support",
      text: "We take a comprehensive approach to help our clients succeed, providing effective creative solutions."
    }
  ]
  const services = servicesApi.map(item => (
    <div className="col-md-3" key={item.title}>
      <div className="services__list-item">
        <img src={item.img} alt="service"/>
        <div className="services__list-content">
          <div className="services__list-title">
            {item.title}
          </div>
          <p className="services__list-text">
            {item.text}
          </p>
        </div>
      </div>
    </div>
  ))
  const howItwork = howItWorkApi.map(item => (
    <div className="col-lg-3 col-md-3">
      <div className="howWork__item">
        <h5 className="howWork__item-title">
          {item.title}
        </h5>
        <p className="howWork__item-text">
          {item.text}
        </p>
      </div>
    </div>
  ))
  const goodToKnowApi = [
    {
      title: "WHAT'S THE INVESTMENT?",
      text: "Our packages are highly custom because every business has a different set of needs. In the consultation call, we'll uncover the best branding solutions for you to make sure you get the most out of your investment."
    },
    {
      title: "title 2",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sapiente. "
    },
    {
      title: "title 3",
      text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae similique exercitationem dolorem suscipit! Ut, unde delectus ex expedita eaque debitis. "
    }
  ]
  const knowItems = goodToKnowApi.map(item => (
    <div className="know__item">
      <h5 className="know__item-title">
        {item.title}
      </h5>
      <p className="know__item-text">
        {item.text}
      </p>
    </div>
  ))
  return (
    <div className="services" id="services">
      <section className="services__relative">
        <img className="services__banner" src={headerbanner} alt="banner"/>
        <div className={`services__text`}>
          <ul className="borders" id="borders">
            <li className="borders__line borders-left"></li>
            <li className="borders__line borders-top"></li>
            <li className="borders__line borders-right"></li>
            <li className="borders__line borders-bottom"></li>
          </ul>
          <h3 className="services__title title">Services</h3>
          <p className="services__paragraph">
          We are imagining and exploring possibilities. Our projects starts with observing and analyzing, the core of our projects. 
          </p>
          <p className="services__paragraph">
          When designing a brand we focus on finding its unique values and features. It helps people feel and understand what the brand is about. It creates touchpoints and facilitates bonds with the customers.
          </p>
        </div>
      </section>
      <section className="services__do">
        <div className="container">
          <div className="services__do-content">
            <div className="row">
              <div className="col-12">
                <h3 className="services__title title">What We Do</h3>
              </div>
            </div>
            <div className="services__list row">
              {
                services
              }
            </div>
          </div>
        </div>
      </section>
      <section className="howWork">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="howWork__title title">
                How it Works
              </h3>
            </div>
          </div>
          <div className="row howWork__row">
            {
              howItwork
            }
          </div>
          <div className="text-center">
          <a href="#" className="howWork__button button">
                <span>Apply</span>
                <span className="button__icon">
                  <svg width="8px" height="13px" viewBox="0 0 8 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>Path</title>
                      <g id="Services" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="Desktop-HD" transform="translate(-759.000000, -2190.000000)">
                              <g id="HOW-IT-WORKS" transform="translate(60.000000, 1797.000000)">
                                  <g id="buton" transform="translate(528.000000, 363.000000)">
                                      <text id="Apply" font-family="OpenSans-SemiBold, Open Sans" fontSize="21" font-weight="500" fill="#312F35">
                                          <tspan x="102" y="43">Apply</tspan>
                                      </text>
                                      <path d="M172,42 L177.920817,36.6788875 C177.971169,36.6334667 178,36.5683833 178,36.5 C178,36.4316167 177.971169,36.3665333 177.920817,36.3211125 L172,31" id="Path" stroke="#3A3A3A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
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
            <div className="col-12">
              <h3 className="know__title title">
                Good to Know
              </h3>
            </div>
          </div>
          <div className="row know__row">
            <div className="col-md-6">
              <img className="know__image" src={goodToKnow} alt=""/>
            </div>
            <div className="col-md-6">
              <Slider className="know__slider" customSettings={{
                fade: true,
                speed: 1000,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: false
              }}>
                {
                  knowItems
                }
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Services;

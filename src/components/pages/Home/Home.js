import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../../hoc/Aux';
import Slider from '../../../containers/Slider/Slider';
import Modal from '../../UI/Modal/Modal'

import poorgif from '../../../assets/svg/pour-gif.gif';
import sagro from "../../../assets/sagro/banner.jpg";
import prciscLogo from "../../../assets/prcisc/logo.svg";
import map from '../../../assets/production/map/map.jpg';

const Home = () => {

  return (
    <Aux>
      <div className="slider-container">
        <div className="sliderPortofolio__image-container image-container">
          {/* <img className="imgage-container_image" src={process.env.PUBLIC_URL + '/assets/home/portofolio/branding1.jpg'}  alt="" />  */}
          <img src={poorgif} alt=""/>
        </div>
        <Slider className="sliderPortofolio" customSettings={{
          fade: true,
          speed: 2500,
          autoplay: true,
          autoplaySpeed: 10000,
          pauseOnHover: false
        }}>
          <div className="sliderPortofolio__item">
            <div className={`sliderPortofolio__content`}>
              <div className={`sliderPortofolio__text`}>
                <ul className="borders">
                  <li className="borders__line borders-left"></li>
                  <li className="borders__line borders-top"></li>
                  <li className="borders__line borders-right"></li>
                  <li className="borders__line borders-bottom"></li>
                </ul>
                <small className={`sliderPortofolio__subTitle`}>We Create</small> <br />
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
                <ul className="borders">
                  <li className="borders__line borders-left"></li>
                  <li className="borders__line borders-top"></li>
                  <li className="borders__line borders-right"></li>
                  <li className="borders__line borders-bottom"></li>
                </ul>
                <small className={`sliderPortofolio__subTitle`}>Full Guides</small> <br />
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
                <ul className="borders">
                  <li className="borders__line borders-left"></li>
                  <li className="borders__line borders-top"></li>
                  <li className="borders__line borders-right"></li>
                  <li className="borders__line borders-bottom"></li>
                </ul>
                <small className={`sliderPortofolio__subTitle`}>Full Guides</small> <br />
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
                <ul className="borders">
                  <li className="borders__line borders-left"></li>
                  <li className="borders__line borders-top"></li>
                  <li className="borders__line borders-right"></li>
                  <li className="borders__line borders-bottom"></li>
                </ul>
                <small className={`sliderPortofolio__subTitle`}>Developing</small> <br />
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
                <ul className="borders">
                  <li className="borders__line borders-left"></li>
                  <li className="borders__line borders-top"></li>
                  <li className="borders__line borders-right"></li>
                  <li className="borders__line borders-bottom"></li>
                </ul>
                <small className={`sliderPortofolio__subTitle`}>Online</small> <br />
                <span className={`sliderPortofolio__title`}>Stores</span>
              </div>
            </div>
          </div>

        </Slider>
      </div>
      <div className="slider-container">
        
        <Slider className="sliderServices">
          <div className="sliderServices__item">
            <div className="sliderServices__image-container image-container">
              <img className="imgage-container_image" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c88974103080103.5f4cf302e9a7f.jpg" alt="" /> 
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
                  <img src={prciscLogo} alt=""/>
                </h3>
                <div className={`sliderServices__title`}>Recruitment / Accounting Agency</div>
                <Link to="/branding">
                  <button className="button sliderServices__button">
                    <span>Checkout</span>
                  </button>
                </Link>
                
              </div>
            </div>
          </div>
          <div className="sliderServices__item">
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
      </div>
      <section className="whyUs">
        <div className="container">
          <h3 className="whyUs__title">Why us</h3>
          <div className="grid whyUs__grid">
            <div className="whyUs__item">
              <div className="whyUs__point">consulting</div>
              <p className="whyUs__text">
                Schedule an appointment to discuss your goals and we will 
              </p>
            </div>
            <div className="whyUs__item">
              <div className="whyUs__point">solution</div>
              <p className="whyUs__text">
                Schedule an appointment to discuss your goals and we will 
              </p>
            </div>
            <div className="whyUs__item">
              <div className="whyUs__point">execution</div>
              <p className="whyUs__text">
                Schedule an appointment to discuss your goals and we will 
              </p>
            </div>
            <div className="whyUs__item">
              <div className="whyUs__point">support</div>
              <p className="whyUs__text">
                Schedule an appointment to discuss your goals and we will 
              </p>
            </div>
          </div>
          <p className="whyUs__subtext">
            Last but not least. Because this is our passion an we do it with love.
          </p>
          <button className="button whyUs__button">
            <span>Book a consultation</span>
            <span className="button__icon">
              <svg viewBox="0 0 15 9" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Desktop-HD" transform="translate(-294.000000, -27.000000)" stroke="currentColor">
                          <polyline points="294.522684 31.4244555 308.564634 31.4244555 305.202477 34.7371691 308.861295 31.1772381 305.202477 28.3589594"></polyline>
                      </g>
                  </g>
              </svg>
            </span>
          </button>
        </div>
      </section>
      <section className="map">
        <img src={map} alt=""/>
      </section>
    </Aux>
  )
};

export default Home;

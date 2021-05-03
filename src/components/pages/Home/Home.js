import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../../hoc/Aux';
import Slider from '../../../containers/Slider/Slider';
import Modal from '../../UI/Modal/Modal'

import poorgif from '../../../assets/svg/pour-gif.gif';
import sagro from "../../../assets/sagro/banner.jpg";
import prciscLogo from "../../../assets/prcisc/logo.svg";

import sculpture from '../../../assets/production/slider-portofolio/sculpture.png'

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
  )
};

export default Home;

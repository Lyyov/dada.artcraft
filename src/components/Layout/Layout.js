import React, { useState } from 'react';

import Aux from '../../hoc/Aux';
import Slider from '../../containers/Slider/Slider';
import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';
import Modal from '../UI/Modal/Modal'

import imgSliderPortofolio from '../../assets/production/slider-portofolio/branding.jpg';
import imgSliderServices from '../../assets/production/slider-services/slider1.png';
import map from '../../assets/production/map/map.jpg';

const Layout = ( props ) => {

  const [show, setShow] = useState(false);

  return (
    <Aux>
      <Header />
      <main>
        {
          props.children
        }
      </main>
      <div className="slider-container">
        <Slider className="sliderPortofolio">
          <div className="sliderPortofolio__item">
            <div className="sliderPortofolio__image-container image-container">
              <img className="imgage-container_image" src={imgSliderPortofolio} alt="" /> 
            </div>
            <div className={`sliderPortofolio__content`}>
              <div className={`sliderPortofolio__text`}>
                <ul className="borders">
                  <li className="borders__line borders-left"></li>
                  <li className="borders__line borders-top"></li>
                  <li className="borders__line borders-right"></li>
                  <li className="borders__line borders-bottom"></li>
                </ul>
                <small className={`sliderPortofolio__subTitle`}>We are doing</small> <br />
                <span className={`sliderPortofolio__title`}>Branding</span>
              </div>
            </div>
          </div>
          <div className="sliderPortofolio__item">
            <div className="sliderPortofolio__image-container image-container">
              <img className="imgage-container_image" src={imgSliderPortofolio} alt="" /> 
            </div>
            <div className={`sliderPortofolio__content`}>
              <div className={`sliderPortofolio__text`}>
                <ul className="borders">
                  <li className="borders__line borders-left"></li>
                  <li className="borders__line borders-top"></li>
                  <li className="borders__line borders-right"></li>
                  <li className="borders__line borders-bottom"></li>
                </ul>
                <small className={`sliderPortofolio__subTitle`}>We are doing</small> <br />
                <span className={`sliderPortofolio__title`}>Branding</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="slider-container">
        <h3 className="sliderServices__title-absolute">Portofolio</h3>
        <Slider className="sliderServices">
          <div className="sliderServices__item">
            <div className="sliderServices__image-container image-container">
              <img className="imgage-container_image" src={imgSliderServices} alt="" /> 
            </div>
            <div className={`sliderServices__content`}>
              <div className={`sliderServices__text`}>
                <ul className="borders">
                  <li className="borders__line borders-left"></li>
                  <li className="borders__line borders-top"></li>
                  <li className="borders__line borders-right"></li>
                  <li className="borders__line borders-bottom"></li>
                </ul>
                <div className={`sliderServices__title`}>Branding Projects</div>
                <button className="button sliderServices__button">
                  <span>See full projects</span>
                </button>
              </div>
            </div>
          </div>
          <div className="sliderServices__item">
            <div className="sliderServices__image-container image-container">
              <img className="imgage-container_image" src={imgSliderServices} alt="" /> 
            </div>
            <div className={`sliderServices__content`}>
              <div className={`sliderServices__text`}>
                <ul className="borders">
                  <li className="borders__line borders-left"></li>
                  <li className="borders__line borders-top"></li>
                  <li className="borders__line borders-right"></li>
                  <li className="borders__line borders-bottom"></li>
                </ul>
                <div className={`sliderServices__title`}>Branding Projects</div>
                <button className="button sliderServices__button">
                  <span>See full projects</span>
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
            <span>Let’s talk about your project</span>
          </button>
        </div>
      </section>
      <section className="map">
        <img src={map} alt=""/>
      </section>
      <Footer></Footer>
      {/* <button onClick={() => setShow(true)}>ok</button>
      <Modal title="Request" show={show}>
        <h1>hi</h1>
      </Modal> */}
    </Aux>
  )
};

export default Layout;
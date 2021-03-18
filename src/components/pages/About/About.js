import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";

import map from '../../../assets/production/map/map.jpg';

import './about.scss'

const About = () => {

  const [elementTop, setElementTop] = useState(0);
  const imgRef = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 3], [0, -1], {
    clamp: false
  });

  useLayoutEffect(() => {
    const element = imgRef.current;
    setElementTop(element.offsetTop);
  }, [imgRef]);
  
  useEffect(() => {
    let borders = document.getElementById('borders');
    let title = document.getElementById('title');
    borders.classList.add('animate');
    title.classList.add('animate');
  })

  return (
    <div className="about" id="about">
      <section className="about__banner">
        <div ref={imgRef} className="about__image-container-banner about__image-container">
          <motion.img src={process.env.PUBLIC_URL + '/assets/about/banner.jpg'} alt="" style={{ y }} />
        </div>
        <div className={`about__banner-content`}>
          <div className={`about__text`}>
            <ul className="borders" id="borders">
              <li className="borders__line borders-left"></li>
              <li className="borders__line borders-top"></li>
              <li className="borders__line borders-right"></li>
              <li className="borders__line borders-bottom"></li>
            </ul>
            <h1 className="about__title" id="title">Follow your own dream.</h1>
          </div>
        </div>
      </section>
      <section className="about__hello">
        
      </section>
    </div>
  )
};

export default About;

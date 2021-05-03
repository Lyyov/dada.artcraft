import React, { useEffect } from 'react';

import './about.scss'

const About = () => {
  
  useEffect(() => {
    let borders = document.getElementById('borders');
    borders.classList.add("animate")
  })

  return (
    <div className="about" id="about">
          <div className={`about__text`}>
            <ul className="borders" id="borders">
              <li className="borders__line borders-left"></li>
              <li className="borders__line borders-top"></li>
              <li className="borders__line borders-right"></li>
              <li className="borders__line borders-bottom"></li>
            </ul>
            <h3 className="about__title title">Our Story</h3>
            <p className="about__paragraph">
            We are DaDa.Art Craft team, and we’re in love with everything needs to be designed. We are committed to helping businesses grow and succeed through outstanding design. Our mission is to help you achieve a powerful brand that supports the purpose that you stand for.
            </p>
            <p className="about__paragraph">
            Whether you're in need of a rebrand, new website, or a social media revamp, we'll create a custom package suited to your needs, designed just for you so you can make the right kind of impact. So, using purpose and esthetics, we can help you move faster from idea to action and bring your sustainable business a step closer to its purpose.
            </p>
            <p className="about__paragraph">
            Schedule an appointment to discuss your goals and we will create a personalized proposal to cover your needs, we’re free enough to challenge what’s expected, and bold enough to conjure up something new. 
            </p>
          </div>
    </div>
  )
};

export default About;

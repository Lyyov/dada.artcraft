import React, { useState } from 'react';

import ImgContainer from '../../ImgContainer/ImgContainer'; // use className prop, alt, src
import Section from './section'; // use className prop

import withProjectContainer from '../../../hoc/OneProjectContainer';

const Mancomm = (props) => {
  const {images, name, info, text} = props.project;
  const { zoomHandler } = props;

  return (
    <div className="project">
      <div className="project__container">
        <ImgContainer zoomHandler={zoomHandler} src={`${process.env.PUBLIC_URL}${images[0].src}`} id={images[0].id} alt={images[0].alt} />
        <Section>
          <h1 className="project__title saula__title title"> {name} </h1>
          <h2 className="project__title-sub saula__title-sub"> {info} </h2>
          <p className="project__text saula__text text">
            {text[0]}
          </p>
          <p className="project__text saula__text text">
            {text[1]}
          </p>
        </Section>
        {
          images.slice(1).map(item => (
            <Section key={item.id}>
              <ImgContainer zoomHandler={zoomHandler} src={`${process.env.PUBLIC_URL}${item.src}`} id={item.id} alt={item.alt} />
            </Section>
          ))
        }
      </div>
    </div>
  )
}

export default withProjectContainer(Mancomm, 'Mancomm');
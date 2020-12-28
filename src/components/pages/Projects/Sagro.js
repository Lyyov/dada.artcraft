import React from 'react';

import ImgContainer from '../../ImgContainer/ImgContainer'; // use className prop, alt, src
import Section from './section'; // use className prop

import withProjectContainer from '../../../hoc/OneProjectContainer';

const Sagro = (props) => {
  const {img, title, subtitle, text} = props.project;
  const { zoomHandler } = props;

  return (
    <div className="project sagro">
      <div className="project__container">
        <ImgContainer zoomHandler={zoomHandler} src={img.img1.src} id={img.img1.id} alt={img.img1.alt} />
        <Section>
          <h1 className="project__title saula__title title"> {title} </h1>
          <h2 className="project__title-sub saula__title-sub"> {subtitle} </h2>
          <p className="project__text saula__text text">
            {text.paragraph1}
          </p>
          <p className="project__text saula__text text">
            {text.paragraph2}
          </p>
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img2.src} id={img.img2.id} alt={img.img2.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img3.src} id={img.img3.id} alt={img.img3.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img4.src} id={img.img4.id} alt={img.img4.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img5.src} id={img.img5.id} alt={img.img5.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img6.src} id={img.img6.id} alt={img.img6.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img7.src} id={img.img7.id} alt={img.img7.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img8.src} id={img.img8.id} alt={img.img8.alt} />
        </Section>
      </div>
    </div>
  )
}

export default withProjectContainer(Sagro, 'sagro');
import React from 'react';

import ImgContainer from '../../ImgContainer/ImgContainer'; // use className prop, alt, src
import Section from './section'; // use className prop

import withProjectContainer from '../../../hoc/OneProjectContainer';


const Saula = (props) => {
  const {img, title, subtitle, text} = props.project;
  const { zoomHandler } = props;

  return (
    <div className="project saula">
      <div className="project__container">
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img1.src} id={img.img1.id} alt={img.img1.alt} />
        </Section>
        <Section className="project__section-pad0">
          <h1 className="project__title saula__title title">{title}</h1>
          <h2 className="project__title-sub saula__title-sub">{subtitle}</h2>
        </Section>
        <Section className="project__section-pad0">
          <p className="project__text saula__text text">
            { text.paragraph1 }
          </p>
          <p className="project__text saula__text text">
            { text.paragraph2 }
          </p>
        </Section>
        <Section>
          <div className="saula__container-flex">
            <ImgContainer zoomHandler={zoomHandler} src={img.img2.src} id={img.img2.id} alt={img.img2.alt} />
            <ImgContainer zoomHandler={zoomHandler} src={img.img3.src} id={img.img3.id} alt={img.img3.alt} />
          </div>
        </Section>
        <Section className="project__section-pad0">
            <p className="project__text saula__text text">
              { text.paragraph3 }
            </p>
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img4.src}
          id={img.img4.id} alt={img.img4.alt}/>
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img5.src} id={img.img5.id} alt={img.img5.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img6.src} id={img.img6.id} alt={img.img6.alt} />
        </Section>
        <Section>
          <div className="saula__container-flex">
            <ImgContainer zoomHandler={zoomHandler} src={img.img7.src} id={img.img7.id} alt={img.img7.alt} />
            <ImgContainer zoomHandler={zoomHandler} src={img.img8.src} id={img.img8.id} alt={img.img8.alt} />
          </div>
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img9.src} id={img.img9.id} alt={img.img9.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img10.src} id={img.img10.id} alt={img.img10.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img11.src} id={img.img11.id} alt={img.img11.alt} />
        </Section>
        <Section>
          <div className="saula__container-flex"  style={{gridTemplateColumns: "1.4fr 1fr"}}>
            <ImgContainer zoomHandler={zoomHandler} src={img.img12.src} id={img.img12.id} alt={img.img12.alt} />
            <ImgContainer zoomHandler={zoomHandler} src={img.img13.src} id={img.img13.id} alt={img.img13.alt} />
          </div>
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img14.src} id={img.img14.id} alt={img.img14.alt} />
        </Section>
        <Section>
          <div className="saula__container-flex"  style={{gridTemplateColumns: "1fr 1.1fr"}}>
            <ImgContainer zoomHandler={zoomHandler} src={img.img15.src} id={img.img15.id} alt={img.img15.alt} />
            <ImgContainer zoomHandler={zoomHandler} src={img.img16.src} id={img.img16.id} alt={img.img16.alt} />
          </div>
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img17.src} id={img.img17.id} alt={img.img17.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img18.src} id={img.img18.id} alt={img.img18.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img19.src} id={img.img19.id} alt={img.img19.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img20.src} id={img.img20.id} alt={img.img20.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img21.src} id={img.img21.id} alt={img.img21.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img22.src} id={img.img22.id} alt={img.img22.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img23.src} id={img.img23.id} alt={img.img23.alt} />
        </Section>
        <Section>
          <ImgContainer zoomHandler={zoomHandler} src={img.img24.src} id={img.img24.id} alt={img.img24.alt} />
        </Section>
      </div>
    </div>
  )
}

export default withProjectContainer(Saula, 'saula');

import React from "react";

import ImgContainer from "../../ImgContainer/ImgContainer"; // use className prop, alt, src
import Section from "./section"; // use className prop

import withProjectContainer from "../../../hoc/OneProjectContainer";

const Saula = (props) => {
  const { images, name, info, text } = props.project;
  const { zoomHandler } = props;

  return (
    <div className="project saula">
      <div className="project__container">
        <Section>
          <ImgContainer
            zoomHandler={zoomHandler}
            src={`${process.env.PUBLIC_URL}${images[0].src}`}
            id={images[0].id}
            alt={images[0].alt}
          />
        </Section>
        <Section className="project__section-pad0">
          <h1 className="project__title saula__title title">{name}</h1>
          <h2 className="project__title-sub saula__title-sub">{info}</h2>
        </Section>
        <Section className="project__section-pad0">
          <p className="project__text saula__text text">{text[0]}</p>
          <p className="project__text saula__text text">{text[1]}</p>
        </Section>
        <Section>
          <div className="saula__container-flex">
            <ImgContainer
              zoomHandler={zoomHandler}
              src={`${process.env.PUBLIC_URL}${images[1].src}`}
              id={images[1].id}
              alt={images[1].alt}
            />
            <ImgContainer
              zoomHandler={zoomHandler}
              src={`${process.env.PUBLIC_URL}${images[2].src}`}
              id={images[2].id}
              alt={images[2].alt}
            />
          </div>
        </Section>
        <Section className="project__section-pad0">
          <p className="project__text saula__text text">{text[2]}</p>
        </Section>
        {images.slice(3, 6).map((item) => (
          <Section key={item.id}>
            <ImgContainer
              zoomHandler={zoomHandler}
              src={`${process.env.PUBLIC_URL}${item.src}`}
              id={item.id}
              alt={item.alt}
            />
          </Section>
        ))}
        <Section>
          <div className="saula__container-flex">
            <ImgContainer
              zoomHandler={zoomHandler}
              src={`${process.env.PUBLIC_URL}${images[6].src}`}
              id={images[6].id}
              alt={images[6].alt}
            />
            <ImgContainer
              zoomHandler={zoomHandler}
              src={`${process.env.PUBLIC_URL}${images[7].src}`}
              id={images[7].id}
              alt={images[7].alt}
            />
          </div>
        </Section>
        {images.slice(8, 11).map((item) => (
          <Section key={item.id}>
            <ImgContainer
              zoomHandler={zoomHandler}
              src={`${process.env.PUBLIC_URL}${item.src}`}
              id={item.id}
              alt={item.alt}
            />
          </Section>
        ))}
        <Section>
          <div
            className="saula__container-flex"
            style={{ gridTemplateColumns: "1.4fr 1fr" }}
          >
            <ImgContainer
              zoomHandler={zoomHandler}
              src={`${process.env.PUBLIC_URL}${images[11].src}`}
              id={images[11].id}
              alt={images[11].alt}
            />
            <ImgContainer
              zoomHandler={zoomHandler}
              src={`${process.env.PUBLIC_URL}${images[12].src}`}
              id={images[12].id}
              alt={images[12].alt}
            />
          </div>
        </Section>
        <Section>
          <ImgContainer
            zoomHandler={zoomHandler}
            src={`${process.env.PUBLIC_URL}${images[13].src}`}
            id={images[13].id}
            alt={images[13].alt}
          />
        </Section>
        <Section>
          <div
            className="saula__container-flex"
            style={{ gridTemplateColumns: "1fr 1.1fr" }}
          >
            <ImgContainer
              zoomHandler={zoomHandler}
              src={`${process.env.PUBLIC_URL}${images[14].src}`}
              id={images[14].id}
              alt={images[14].alt}
            />
            <ImgContainer
              zoomHandler={zoomHandler}
              src={`${process.env.PUBLIC_URL}${images[15].src}`}
              id={images[15].id}
              alt={images[15].alt}
            />
          </div>
        </Section>
        {images.slice(16, 22).map((item) => (
          <Section key={item.id}>
            <ImgContainer
              zoomHandler={zoomHandler}
              src={`${process.env.PUBLIC_URL}${item.src}`}
              id={item.id}
              alt={item.alt}
            />
          </Section>
        ))}
        {/* <Section>
          <ImgContainer zoomHandler={zoomHandler} src={images[23]} id={images[23]} alt={images[23].alt} />
        </Section> */}
      </div>
    </div>
  );
};

export default withProjectContainer(Saula, "Saula");

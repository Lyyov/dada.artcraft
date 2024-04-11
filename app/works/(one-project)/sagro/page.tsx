"use client";

import { useEffect } from "react";
import { projects } from "../../_utils";
import ImgContainer from "../_components/ImgContainer";
import { useModal } from "../_components/ModalContext";
import Section from "../_components/Section";

const sagroProject = projects[0];
const Sagro = () => {
  const { images, name, info, text } = sagroProject;
  const { zoomHandler, setProject } = useModal();

  useEffect(() => {
    setProject(sagroProject);
  }, []);

  return (
    <div className="project sagro">
      <div className="project__container">
        <ImgContainer
          zoomHandler={zoomHandler}
          src={images[0].src}
          id={images[0].id}
          alt={images[0].alt}
        />
        <Section>
          <h3 className="project__title saula__title title"> {name} </h3>
          <h2 className="project__title-sub saula__title-sub"> {info} </h2>
          <p className="project__text saula__text text">{text[0]}</p>
          <p className="project__text saula__text text">{text[1]}</p>
        </Section>
        <Section>
          <ImgContainer
            zoomHandler={zoomHandler}
            src={images[1].src}
            id={images[1].id}
            alt={images[1].alt}
          />
        </Section>
        <Section>
          <p className="project__text saula__text text">{text[2]}</p>
          <p className="project__text saula__text text">{text[3]}</p>
        </Section>
        {images.slice(2).map((item) => (
          <Section key={item.id}>
            <ImgContainer
              zoomHandler={zoomHandler}
              src={item.src}
              id={item.id}
              alt={item.alt}
            />
          </Section>
        ))}
      </div>
    </div>
  );
};

export default Sagro;

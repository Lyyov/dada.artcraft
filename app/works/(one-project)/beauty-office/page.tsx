"use client";

import { useEffect } from "react";
import { projects } from "../../_utils";
import ImgContainer from "../_components/ImgContainer";
import { useModal } from "../_components/ModalContext";
import Section from "../_components/Section";

const BeautyOfficeProject = projects[1];

const BeautyOffice = () => {
  const { images, name, info, text } = BeautyOfficeProject;
  const { zoomHandler, setProject } = useModal();

  useEffect(() => {
    setProject(BeautyOfficeProject);
  }, []);

  return (
    <div className="project">
      <div className="project__container">
        <ImgContainer
          zoomHandler={zoomHandler}
          src={images[0].src}
          id={images[0].id}
          alt={images[0].alt}
        />
        <Section>
          <h1 className="project__title saula__title title"> {name} </h1>
          <h2 className="project__title-sub saula__title-sub"> {info} </h2>
          <p className="project__text saula__text text">{text[0]}</p>
          <p className="project__text saula__text text">{text[1]}</p>
        </Section>
        {images.slice(1).map((item) => (
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

export default BeautyOffice;

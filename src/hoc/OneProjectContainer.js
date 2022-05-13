import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Slider from "../containers/Slider/Slider";
import Modal from "../components/UI/Modal/Modal";
import Aux from "../hoc/Auxjs";

import { projects } from "../api/api-projects.js";

import "../components/pages/Projects/oneProject.scss";

const withProjectContainer = (ThisComponent, name) => (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const project = projects.find((proj) => proj.name === name);

  const [show, setShow] = useState(false);
  const [initialSlide, setInitialSlide] = useState(2);

  const closeModal = () => {
    setShow(false);
    body.setAttribute("style", "height:auto;overflow:visible;");
  };

  const body = document.getElementsByTagName("body")[0];

  const zoomHandler = (e) => {
    setShow(true);
    setInitialSlide(e);
    body.setAttribute("style", "height:100vh;overflow:hidden;");
  };

  const zoomItems = project.images.map((item, key) => {
    return (
      <div key={key}>
        <img
          loading="lazy"
          src={`${process.env.PUBLIC_URL}${item.src}`}
          alt={item.alt}
        />
      </div>
    );
  });

  return (
    <Aux>
      {show ? (
        <Modal show={show} closeModal={closeModal}>
          <Slider
            customSettings={{
              fade: true,
              initialSlide: initialSlide,
              speed: 500,
            }}
          >
            {zoomItems}
          </Slider>
        </Modal>
      ) : null}
      <ThisComponent project={project} zoomHandler={zoomHandler} {...props} />
    </Aux>
  );
};

export default withProjectContainer;

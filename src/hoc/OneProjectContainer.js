import React, { useState } from 'react';

import Slider from '../containers/Slider/Slider'
import Modal from '../components/UI/Modal/Modal';
import Aux from '../hoc/Aux';

import proj from '../database/projects';

import '../components/pages/Projects/oneProject.scss';

const withProjectContainer = (ThisComponent, name) => (props) => {

  
  const project = proj[name];

  const [show, setShow] = useState(false);
  const [initialSlide, setInitialSlide] = useState(2);

  const closeModal = () => {
    setShow(false);
    body.setAttribute('style', 'height:auto;overflow:visible;')
  }

  const body = document.getElementsByTagName('body')[0];

  const zoomHandler = (e) => {
    console.log(e)
    setShow(true);
    setInitialSlide(e)
    body.setAttribute('style', 'height:100vh;overflow:hidden;')
  }

  console.log(zoomHandler)

  const zoomItems = Object.entries(project.img).map((item, key) => {
    return <div key={key}><img src={item[1].src} alt={item[1].alt} /></div>
  });

  return (
      <Aux>
        {
          show ? <Modal show={show} closeModal={closeModal}>
              <Slider customSettings={{fade:true,initialSlide:initialSlide,speed:500}} >
                {zoomItems}
              </Slider>
            </Modal>
          : null
        }
        <ThisComponent
          project={project}
          zoomHandler={zoomHandler}
          {...props} />
      </Aux>
    )
  }

  export default withProjectContainer;
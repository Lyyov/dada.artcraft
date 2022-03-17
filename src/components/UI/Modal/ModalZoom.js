
import React, { useState } from "react";

import Aux from "../../../hoc/Auxjs";

import "./modal.scss";

const ModalZoom = ( {src, show, closeModal } ) => {

  return (
    <Aux>
      <div className={show ? `modal show` : 'modal'}>
        <div className="modal__header">
          <div className="modal__title">
            
          </div>
          <div onClick={closeModal} className="modal__close" >
            &times;
          </div>
        </div>
        <div className="modal__body">
          <img src={src} alt=""/>
        </div>
      </div>
      <div className="backdrop" onClick={closeModal}></div>
    </Aux>
  )
};

export default ModalZoom

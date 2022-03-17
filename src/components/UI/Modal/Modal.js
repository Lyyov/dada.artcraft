
import React, { useState } from "react";

import Aux from "../../../hoc/Auxjs";

import "./modal.scss";

const Modal = ( props ) => {

  return (
    <Aux>
      <div className={props.show ? `modal show` : 'modal'}>
        <div className="modal__header">
          {/* <div className="modal__title">
            {title}
          </div> */}
          <div onClick={props.closeModal} className="modal__close" >
            &times;
          </div>
        </div>
        <div className="modal__body">
          {props.children}
        </div>
      </div>
      <div className="backdrop" onClick={props.closeModal}></div>
    </Aux>
  )
};

export default Modal

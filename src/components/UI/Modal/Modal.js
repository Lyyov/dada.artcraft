
import React, { useState } from "react";

import Aux from "../../../hoc/Aux";

import "./modal.scss";

const Modal = ( {title, children, show } ) => {
  // const [show, setShow] = useState(true);
  return (
    <Aux>
      <div className={show ? `modal show` : 'modal'}>
      <div className="modal__header">
        <div className="modal__title">
          {title}
        </div>
        <div className="modal__close" >
          &times;
        </div>
      </div>
      <div className="modal__body">
        { children }
      </div>
    </div>
    {show ? <div className="backdrop" ></div> : null}
    </Aux>
  )
};

export default Modal
import React from "react";

const SliderItem = ( props ) => {

  return (
    <div className={`slider__item ${props.className}__item`}>
      { props.children }
    </div>
  )
};

export default SliderItem;
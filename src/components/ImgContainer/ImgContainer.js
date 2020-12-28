import { Fragment } from "react";

const ImgContainer = ({id, src, className, alt, zoomHandler}) => {
  const cls = 'image-container';
  
  return (
    <Fragment>
      <div className={!className ? cls : `${cls} ${className}`}>
        <img
          src={src} 
          className="image-container__image"  
          alt={alt} 
          onClick={zoomHandler ? () => zoomHandler(id) : null} />
      </div>
      
    </Fragment>
  )
}

export default ImgContainer;
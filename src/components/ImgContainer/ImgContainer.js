import { Fragment } from "react";
import ProgressiveImage from "react-progressive-graceful-image";

const ImgContainer = ({ id, src, className, alt, zoomHandler }) => {
  const cls = "image-container";

  const dominantImageColor = "#b5e2d2";

  const placeholder = (
    <div
      style={{ backgroundColor: dominantImageColor, height: 500, opacity: 0.2 }}
    />
  );

  return (
    <Fragment>
      <div className={!className ? cls : `${cls} ${className}`}>
        <ProgressiveImage src={src} placeholder="">
          {(src, loading) => {
            return loading ? (
              placeholder
            ) : (
              <img
                className="image-container__image"
                src={src}
                alt={alt}
                onClick={zoomHandler ? () => zoomHandler(id) : null}
              />
            );
          }}
        </ProgressiveImage>
      </div>
    </Fragment>
  );
};

export default ImgContainer;

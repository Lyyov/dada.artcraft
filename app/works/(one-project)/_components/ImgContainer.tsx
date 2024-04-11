import Image from "next/image";

export type TImgContainer = {
  id: number;
  src: string;
  className?: string;
  alt: string;
  zoomHandler?: (id: number) => void;
};

const ImgContainer = ({
  id,
  src,
  className,
  alt,
  zoomHandler,
}: TImgContainer) => {
  const cls = "image-container";

  return (
    <div className={!className ? cls : `${cls} ${className}`}>
      <Image
        className="image-container__image"
        src={src}
        alt={alt}
        onClick={() => zoomHandler?.(id)}
        height={500}
        width={500}
      />
    </div>
  );
};

export default ImgContainer;

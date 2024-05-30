import Image from "next/image";

export type TService = {
  img: string;
  title: string;
  text: string;
};
export default function Service({ title, img, text }: TService) {
  return (
    <div className="col-md-3" key={title}>
      <div className="services__list-item">
        <Image
          loading="lazy"
          src={img}
          alt={`Service ${title}`}
          width={305}
          height={376}
        />
        <div className="services__list-content">
          <div className="services__list-title">{title}</div>
          <p className="services__list-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

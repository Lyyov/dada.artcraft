export type TService = {
  img: string;
  title: string;
  text: string;
};
export default function Service({ title, img, text }: TService) {
  return (
    <div className="col-md-3" key={title}>
      <div className="services__list-item">
        <img loading="lazy" src={img} alt="service" />
        <div className="services__list-content">
          <div className="services__list-title">{title}</div>
          <p className="services__list-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

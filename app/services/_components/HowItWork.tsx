export type THowItWork = {
  title: string;
  text: string;
};
export default function HowItWork({ title, text }: THowItWork) {
  return (
    <div className="col-lg-3 col-md-8 col-sm-12" key={title}>
      <div className="howWork__item">
        <h3 className="howWork__item-title">{title}</h3>
        <p className="howWork__item-text">{text}</p>
      </div>
    </div>
  );
}

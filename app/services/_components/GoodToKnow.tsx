export type TGoodToKnow = {
  title: string;
  text: string;
};

export default function GoodToKnow({ title, text }: TGoodToKnow) {
  return (
    <div className="know__item">
      <h5 className="know__item-title">{title}</h5>
      <p className="know__item-text">{text}</p>
    </div>
  );
}

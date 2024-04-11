import SliderContainer from "./_components/SliderContainer";
import Image from "next/image";
import NavSlider from "./_components/NavSlider";

const heroItems = [
  {
    text2: "Logo",
  },
  {
    text1: "Brand",
    text2: "Identities",
  },

  {
    text1: "Social Media",
    text2: "Visuals",
  },
  {
    text2: "Printables",
  },
  {
    text1: "Art",
    text2: "Direction",
  },
];

const Home = () => {
  const mainSliderImg = "/assets/dada-banner11.gif";
  const mainSliderSettings = {
    fade: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    dots: false,
  };

  return (
    <>
      <div className="slider-container">
        <div className="sliderPortofolio__image-container image-container">
          <Image
            width={1000}
            height={1000}
            loading="lazy"
            src={mainSliderImg}
            alt=""
          />
        </div>
        <SliderContainer
          className="sliderPortofolio"
          customSettings={mainSliderSettings}
        >
          {heroItems.map(({ text1, text2 }) => (
            <div key={text1 + text2} className="sliderPortofolio__item">
              <div className={`sliderPortofolio__content`}>
                <div className={`sliderPortofolio__text`}>
                  {text1 && ( // if text1 is not empty
                    <span className={`sliderPortofolio__subTitle`}>
                      {text1}
                    </span>
                  )}
                  <span className={`sliderPortofolio__title`}>{text2}</span>
                </div>
              </div>
            </div>
          ))}
        </SliderContainer>
      </div>
      <NavSlider />
    </>
  );
};

export default Home;

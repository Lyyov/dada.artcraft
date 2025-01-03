import Link from "next/link";
import SliderContainer from "../_components/SliderContainer";
import { goodToKnowApi, howItWorkApi, servicesApi } from "./_api";
import Service from "./_components/Service";
import HowItWork from "./_components/HowItWork";
import GoodToKnow from "./_components/GoodToKnow";
import Image from "next/image";

const Services = () => {
  return (
    <div className="services" id="services">
      <section className="services__relative">
        <Image
          loading="lazy"
          className="services__banner"
          src={`/assets/pour-gif-min.gif`}
          alt="banner"
          width={1000}
          height={700}
        />
        <div className={`services__text`}>
          {/* <h3 className="services__title title">Services</h3> */}
          <p className="services__paragraph">
            We imagine and explore possibilities. Our projects start with
            observing and analyzing the essence and uniqueness of the brand we
            need to create, the story behind and the focal points.
          </p>
          <p className="services__paragraph">
            When we create a brand, we focus on finding the values and
            characteristics that help people feel what the brand means and why
            it needs to stand out. We create points of contact and facilitate
            the connection between your service and customers because brands are
            made for people and are about people.
          </p>
          <p className="services__mark">
            Design is a second chance to <br /> make a first impression
          </p>
        </div>
      </section>
      <section className="services__do">
        <div className="container">
          <div className="services__do-content">
            <div className="row">
              <div className="col-md-12">
                <h3 className="services__title title">What we do</h3>
              </div>
            </div>
            <div className="services__list row">
              {servicesApi.map((item) => (
                <Service key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="howWork">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="howWork__title title">How it Works</h3>
            </div>
          </div>
          <div className="row howWork__row">
            {howItWorkApi.map((item) => (
              <HowItWork key={item.title} {...item} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/contacts" className="howWork__button button">
              <span>Apply</span>
              <span className="button__icon">
                <svg
                  width="8px"
                  height="13px"
                  viewBox="0 0 8 13"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Path</title>
                  <g
                    id="Services"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Desktop-HD"
                      transform="translate(-759.000000, -2190.000000)"
                    >
                      <g
                        id="HOW-IT-WORKS"
                        transform="translate(60.000000, 1797.000000)"
                      >
                        <g
                          id="buton"
                          transform="translate(528.000000, 363.000000)"
                        >
                          <path
                            d="M172,42 L177.920817,36.6788875 C177.971169,36.6334667 178,36.5683833 178,36.5 C178,36.4316167 177.971169,36.3665333 177.920817,36.3211125 L172,31"
                            id="Path"
                            stroke="#3A3A3A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="know">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="know__title title">Good to Know</h3>
            </div>
          </div>
          <div className="row know__row">
            <div className="col-md-6 col-sm-12">
              <Image
                loading="lazy"
                className="know__image"
                src={"/assets/services/good-to-know.png"}
                width={600}
                height={600}
                alt=""
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <SliderContainer
                className="know__slider"
                arrowBackground="#000000"
                customSettings={{
                  fade: true,
                  speed: 1000,
                  autoplay: true,
                  autoplaySpeed: 5000,
                  pauseOnHover: false,
                }}
              >
                {goodToKnowApi.map(({ title, text }) => (
                  <GoodToKnow key={title} title={title} text={text} />
                ))}
              </SliderContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

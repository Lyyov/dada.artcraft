import Link from "next/link";
import ContactForm from "./_components/ContactForm";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h3 className="contact__title title">Let’s Talk</h3>
        <div className="row contact__row">
          <div className="col-lg-5 col-md-6 col-12">
            <h5 className="contact__subtitle subtitle">
              How can we assist you?
            </h5>
            <p className="contact__text">
              Tell us more about your project or just say hello.
            </p>
            <ContactForm />
          </div>
          <div className="col-lg-5 col-md-6 col-12">
            <h5 className="contact__subtitle right">You can find us at:</h5>
            {/* <p className="contact__text">
              Our motivation helps to craft meaningful experiences for the
              people around us, this mission inspires us each day and guides
              every aspect of what we do.
            </p> */}
            <p className="contact__address">
              <span>REPUBLICA MOLDOVA</span>
              <br />
              Chișinău, Roguleni 6.
            </p>
            <p className="contact__phone">
              <span>Tel</span>
              <span>
                <a href="tel:+37367200165">(373) 67-200-165</a> <br />
              </span>
            </p>
            <p className="contact__email">
              <span>Email</span> <br />
              <a href="mailto:dada.artcraft@gmail.com">
                dada.artcraft@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link href="/contacts/brief" className="contact__button button">
            <span>Complete the Brief</span>
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
                        <text
                          id="Apply"
                          fontFamily="OpenSans-SemiBold, Open Sans"
                          fontSize="21"
                          fontWeight="500"
                          fill="#312F35"
                        >
                          <tspan x="102" y="43">
                            Apply
                          </tspan>
                        </text>
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
    </div>
  );
};

export default Contact;

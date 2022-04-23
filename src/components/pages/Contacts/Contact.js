import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./contact.scss";

const Contact = () => {
  const [data, setData] = useState({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    }),
    handleChangeFirstname = (e) =>
      setData({ ...data, firstname: e.target.value }),
    handleChangeLastname = (e) =>
      setData({ ...data, lastname: e.target.value }),
    handleChangeEmail = (e) => setData({ ...data, email: e.target.value }),
    handleChangeMessage = (e) => setData({ ...data, message: e.target.value });

  return (
    <div className="contact" id="contact">
      <div className="container">
        <h3 className="contact__title title">Let’s Talk</h3>
        <div className="row contact__row">
          <div className="col-lg-5 col-md-6">
            <h5 className="contact__subtitle subtitle">
              How can we assist you?
            </h5>
            <p className="contact__text">
              Tell us more about your project or just say hello.
            </p>
            <form
              name="contact"
              method="post"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* need this for netlify bots form deploy */}
              <input type="hidden" name="form-name" value="contact" />
              <div className="row">
                <div className="col-md-6">
                  <div
                    className={
                      data.firstname !== ""
                        ? `input-container focused`
                        : `input-container`
                    }
                  >
                    <input
                      onChange={handleChangeFirstname}
                      className="input-container__input"
                      type="text"
                      name="first_name"
                      id="first_name"
                    />
                    <label className="input-container__label" for="first_name">
                      first name
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className={
                      data.lastname !== ""
                        ? `input-container focused`
                        : `input-container`
                    }
                  >
                    <input
                      onChange={handleChangeLastname}
                      className="input-container__input"
                      type="text"
                      name="last_name"
                      id="last_name"
                    />
                    <label className="input-container__label" for="last_name">
                      last name
                    </label>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div
                    className={
                      data.email !== ""
                        ? `input-container focused`
                        : `input-container`
                    }
                  >
                    <input
                      onChange={handleChangeEmail}
                      className="input-container__input"
                      type="email"
                      name="email"
                      id="email"
                    />
                    <label className="input-container__label" for="email">
                      Email
                    </label>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div
                    className={
                      data.message !== ""
                        ? `input-container focused`
                        : `input-container`
                    }
                  >
                    <textarea
                      onChange={handleChangeMessage}
                      rows="5"
                      className="input-container__input"
                      placeholder="Type the message you wish to send"
                      name="message"
                      id="message"
                    />
                    <label className="input-container__label" for="message">
                      Message
                    </label>
                  </div>
                </div>
                <div className="col-md-7">
                  <p className="contact__text">
                    I hereby certify that all the information above is true and
                    accurate.
                  </p>
                </div>
                <div className="col-md-5">
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-5 col-md-6">
            <h5 className="contact__subtitle right">You can find us at:</h5>
            <p className="contact__text">
              Our motivation helps to craft meaningful experiences for the
              people around us, this mission inspires us each day and guides
              every aspect of what we do.
            </p>
            <p className="contact__address">
              <span>REPUBLICA MOLDOVA</span>
              <br />
              Chișinău, <br />
              Roguleni 6.
            </p>
            <div className="contact__phone">
              <span>Tel</span>
              <span>
                <a href="tel:+37367200165">(373) 67-200-165</a> <br />
                <a href="tel:+37367200165">(373) 67-200-165</a>
              </span>
            </div>
            <div className="contact__email">
              <span>Email</span> <br />
              <a href="mailto:dada.artcraft@gmail.com">
                dada.artcraft@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/breaf" className="contact__button button">
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
                          font-family="OpenSans-SemiBold, Open Sans"
                          fontSize="21"
                          font-weight="500"
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
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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

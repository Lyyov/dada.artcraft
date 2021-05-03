import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

import './contact.scss'

const Breaf = () => {
  const [data, setData] = useState({
    firstname: "",
    company: "",
    phone: "",
    email: "",
    services: "",
    project: "",
    deadlines: ""
  }),
  handleChangeName = (e) => setData({...data, firstname: e.target.value}),
  handleChangeCompany = (e) => setData({...data, company: e.target.value}),
  handleChangePhone = (e) => setData({...data, phone: e.target.value}),
  handleChangeEmail = (e) => setData({...data, email: e.target.value}),
  handleChangeServices = (e) => setData({...data, services: e.target.value}),
  handleChangeProject = (e) => setData({...data, project: e.target.value}),
  handleChangeDeadlines = (e) => setData({...data, deadlines: e.target.value})

  return (
    <div className="breaf" id="breaf">
      <div className="container">
        <div className="breaf__content">
          <form action="" className="breaf__form">
            <h3 className="breaf__title title">
              Breaf
            </h3>
            <p className="breaf__text">
            This enquiry will help us to understand your needs and  be ready to discuss a potential solution to suit the requierments, so we can look forward to be involved in your project.

            </p>
            <div className={data.firstname !== "" ? `input-container focused` : `input-container`}>
              <input onChange={handleChangeName} className="input-container__input" type="text" name="firstname" id="firstname" />
              <label className="input-container__label" for="firstname">
                Your name
              </label>
            </div>
            <div className={data.company !== "" ? `input-container focused` : `input-container`}>
              <input onChange={handleChangeCompany} className="input-container__input" type="text" name="company" id="company" />
              <label className="input-container__label" for="company">
                Organization/Company
              </label>
            </div>
            <div className={data.phone !== "" ? `input-container focused` : `input-container`}>
              <input onChange={handleChangePhone} className="input-container__input" type="text" name="phone" id="phone" />
              <label className="input-container__label" for="phone">
                Phone
              </label>
            </div>
            <div className={data.email !== "" ? `input-container focused` : `input-container`}>
              <input onChange={handleChangeEmail} className="input-container__input" type="email" name="email" id="email" />
              <label className="input-container__label" for="email">
                E-mail
              </label>
            </div>
            <div className={data.services !== "" ? `input-container focused` : `input-container`}>
              <textarea rows="3" onChange={handleChangeServices} className="input-container__input" type="text" name="services" id="services" />
              <label className="input-container__label" for="services">
                What services are you interested in ?
              </label>
            </div>
            <div className={data.project !== "" ? `input-container focused` : `input-container`}>
              <textarea rows="3" onChange={handleChangeProject} className="input-container__input" type="text" name="project" id="project" />
              <label className="input-container__label" for="project">
                Describe your project.
              </label>
            </div>
            <div className={data.deadlines !== "" ? `input-container focused` : `input-container`}>
              <textarea rows="3" onChange={handleChangeDeadlines} className="input-container__input" type="text" name="deadlines" id="deadlines" />
              <label className="input-container__label" for="deadlines">
                Deadlines
              </label>
            </div>
            <p className="breaf__text">
            By clicking on, you consent to the processing of personal data and agree with the privacy policy.

            </p>
          </form>

          <div className="text-center">
            <Link to="/breaf" className="contact__button button">
              <span>Send</span>
              <span className="button__icon">
                <svg width="8px" height="13px" viewBox="0 0 8 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>Path</title>
                    <g id="Services" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Desktop-HD" transform="translate(-759.000000, -2190.000000)">
                            <g id="HOW-IT-WORKS" transform="translate(60.000000, 1797.000000)">
                                <g id="buton" transform="translate(528.000000, 363.000000)">
                                    <text id="Apply" font-family="OpenSans-SemiBold, Open Sans" fontSize="21" font-weight="500" fill="#312F35">
                                        <tspan x="102" y="43">Apply</tspan>
                                    </text>
                                    <path d="M172,42 L177.920817,36.6788875 C177.971169,36.6334667 178,36.5683833 178,36.5 C178,36.4316167 177.971169,36.3665333 177.920817,36.3211125 L172,31" id="Path" stroke="#3A3A3A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
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
    </div>
  )
};

export default Breaf;

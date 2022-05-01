import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FormSubmittedNotification from "../../UI/Notifications/FormSubmittedNotification";

import "./contact.scss";

const Brief = () => {
  const [data, setData] = useState({
    brief_first_name: "",
    company: "",
    phone: "",
    brief_email: "",
    services: "",
    project: "",
    deadlines: "",
  });

  const message = {
    ok: "Thank you for get in touch! Soon we will contact you.",
    error: "Somthing went wrong! Try again later.",
  };

  const [formStatus, setFormStatus] = useState(false); // false, ok, error

  // event handlers
  const handleChangeName = (e) =>
      setData({ ...data, brief_first_name: e.target.value }),
    handleChangeCompany = (e) => setData({ ...data, company: e.target.value }),
    handleChangePhone = (e) => setData({ ...data, phone: e.target.value }),
    handleChangeEmail = (e) => setData({ ...data, email: e.target.value }),
    handleChangeServices = (e) =>
      setData({ ...data, services: e.target.value }),
    handleChangeProject = (e) => setData({ ...data, project: e.target.value }),
    handleChangeDeadlines = (e) =>
      setData({ ...data, deadlines: e.target.value });

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "brief", ...data }),
    })
      .then(() => setFormStatus("ok"))
      .catch((error) => {
        console.log("brief submit error", error);
        setFormStatus("error");
      });

    e.preventDefault();
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleFormStatus = (status) => {
    return <FormSubmittedNotification status={status} message={message.ok} />;
  };

  return (
    <div className="brief" id="brief">
      <div className="container">
        <div className="brief__content">
          <form className="brief__form">
            <input type="hidden" name="form-name" value="brief" />
            <h3 className="brief__title title">Brief</h3>
            <p className="brief__text">
              This enquiry will help us to understand your needs and be ready to
              discuss a potential solution to suit the requierments, so we can
              look forward to be involved in your project.
            </p>
            <div
              className={
                data.brief_first_name !== ""
                  ? `input-container focused`
                  : `input-container`
              }
            >
              <input
                onChange={handleChangeName}
                className="input-container__input"
                type="text"
                name="brief_first_name"
                id="brief_first_name"
              />
              <label className="input-container__label" for="brief_first_name">
                Your name
              </label>
            </div>
            <div
              className={
                data.company !== ""
                  ? `input-container focused`
                  : `input-container`
              }
            >
              <input
                onChange={handleChangeCompany}
                className="input-container__input"
                type="text"
                name="company"
                id="company"
              />
              <label className="input-container__label" for="company">
                Organization/Company
              </label>
            </div>
            <div
              className={
                data.phone !== ""
                  ? `input-container focused`
                  : `input-container`
              }
            >
              <input
                onChange={handleChangePhone}
                className="input-container__input"
                type="text"
                name="phone"
                id="phone"
              />
              <label className="input-container__label" for="phone">
                Phone
              </label>
            </div>
            <div
              className={
                data.brief_email !== ""
                  ? `input-container focused`
                  : `input-container`
              }
            >
              <input
                onChange={handleChangeEmail}
                className="input-container__input"
                type="brief_email"
                name="brief_email"
                id="brief_email"
              />
              <label className="input-container__label" for="brief_email">
                E-mail
              </label>
            </div>
            <div
              className={
                data.services !== ""
                  ? `input-container focused`
                  : `input-container`
              }
            >
              <textarea
                rows="3"
                onChange={handleChangeServices}
                className="input-container__input"
                type="text"
                name="services"
                id="services"
              />
              <label className="input-container__label" for="services">
                What services are you interested in ?
              </label>
            </div>
            <div
              className={
                data.project !== ""
                  ? `input-container focused`
                  : `input-container`
              }
            >
              <textarea
                rows="3"
                onChange={handleChangeProject}
                className="input-container__input"
                type="text"
                name="project"
                id="project"
              />
              <label className="input-container__label" for="project">
                Describe your project.
              </label>
            </div>
            <div
              className={
                data.deadlines !== ""
                  ? `input-container focused`
                  : `input-container`
              }
            >
              <textarea
                rows="3"
                onChange={handleChangeDeadlines}
                className="input-container__input"
                type="text"
                name="deadlines"
                id="deadlines"
              />
              <label className="input-container__label" for="deadlines">
                Deadlines
              </label>
            </div>
            <p className="brief__text">
              By clicking on, you consent to the processing of personal data and
              agree with the privacy policy.
            </p>

            <div className="col-md-5">
              <div className="text-center">
                <span className="brief__button button" onClick={handleSubmit}>
                  <span>Submit</span>
                </span>
              </div>
            </div>
            <div className="col-sm-12">
              {formStatus && handleFormStatus(formStatus)}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Brief;

"use client";
import React, { useState } from "react";
import FormSubmittedNotification, {
  TStatus,
} from "../_components/FormSubmittedNotification";

type TData = {
  brief_first_name: string;
  company: string;
  phone: string;
  brief_email: string;
  services: string;
  project: string;
  deadlines: string;
};

const message = {
  ok: "Thank you for get in touch! Soon we will contact you.",
  error: "Somthing went wrong! Try again later.",
};

const Brief = () => {
  const [data, setData] = useState<TData>({
    brief_first_name: "",
    company: "",
    phone: "",
    brief_email: "",
    services: "",
    project: "",
    deadlines: "",
  });

  const [formStatus, setFormStatus] = useState<TStatus>("false"); // false, ok, error

  // event handlers
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
      setData({ ...data, brief_first_name: e.target.value }),
    handleChangeCompany = (e: React.ChangeEvent<HTMLInputElement>) =>
      setData({ ...data, company: e.target.value }),
    handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) =>
      setData({ ...data, phone: e.target.value }),
    handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
      setData({ ...data, brief_email: e.target.value }),
    handleChangeServices = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setData({ ...data, services: e.target.value }),
    handleChangeProject = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setData({ ...data, project: e.target.value }),
    handleChangeDeadlines = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setData({ ...data, deadlines: e.target.value });

  const handleSubmit = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // @ts-ignore
      body: encode({ "form-name": "brief", ...data }),
    })
      .then(() => setFormStatus("ok"))
      .catch((error) => {
        console.log("brief submit error", error);
        setFormStatus("error");
      });

    e.preventDefault();
  };

  const encode = (data: TData) => {
    return Object.keys(data)
      .map(
        // @ts-ignore
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleFormStatus = (status: TStatus) => {
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
              <label
                className="input-container__label"
                htmlFor="brief_first_name"
              >
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
              <label className="input-container__label" htmlFor="company">
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
              <label className="input-container__label" htmlFor="phone">
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
              <label className="input-container__label" htmlFor="brief_email">
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
                rows={3}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  handleChangeServices(e)
                }
                className="input-container__input"
                name="services"
                id="services"
              />
              <label className="input-container__label" htmlFor="services">
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
                rows={3}
                onChange={handleChangeProject}
                className="input-container__input"
                name="project"
                id="project"
              />
              <label className="input-container__label" htmlFor="project">
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
                rows={3}
                onChange={handleChangeDeadlines}
                className="input-container__input"
                name="deadlines"
                id="deadlines"
              />
              <label className="input-container__label" htmlFor="deadlines">
                Deadlines
              </label>
            </div>
            <p className="brief__text">
              By clicking on, you consent to the processing of personal data and
              agree with the privacy policy.
            </p>

            <div className="col-12">
              <div className="text-center">
                <span
                  className="brief__button button"
                  onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
                    handleSubmit(e)
                  }
                >
                  <span>Submit</span>
                </span>
              </div>
            </div>
            <div className="col-sm-12">
              {formStatus === "ok" && handleFormStatus(formStatus)}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Brief;

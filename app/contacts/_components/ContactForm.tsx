"use client";

import { useState } from "react";
import FormSubmittedNotification, {
  TStatus,
} from "./FormSubmittedNotification";

const message = {
  ok: "Thank you for get in touch! Soon we will contact you.",
  error: "Somthing went wrong! Try again later.",
};

type TFormData = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [data, setData] = useState<TFormData>({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<TStatus>("false"); // false, ok, error

  // change data handlers
  const handleChangeFirstname = (e: React.ChangeEvent<HTMLInputElement>) =>
      setData({ ...data, first_name: e.target.value }),
    handleChangeLastname = (e: React.ChangeEvent<HTMLInputElement>) =>
      setData({ ...data, last_name: e.target.value }),
    handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
      setData({ ...data, email: e.target.value }),
    handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setData({ ...data, message: e.target.value });

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => setFormStatus("ok"))
      .catch((error) => {
        console.log("contact submit error", error);
        setFormStatus("error");
      });

    e.preventDefault();
  };

  const handleFormStatus = (status: TStatus) => {
    return <FormSubmittedNotification status={status} message={message.ok} />;
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* need this for netlify bots form deploy */}
      <input type="hidden" name="form-name" value="contact" />
      <div className="row">
        <div className="col-md-6">
          <div
            className={
              data.first_name !== ""
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
            <label className="input-container__label" htmlFor="first_name">
              first name
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className={
              data.last_name !== ""
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
            <label className="input-container__label" htmlFor="last_name">
              last name
            </label>
          </div>
        </div>
        <div className="col-sm-12">
          <div
            className={
              data.email !== "" ? `input-container focused` : `input-container`
            }
          >
            <input
              onChange={handleChangeEmail}
              className="input-container__input"
              type="email"
              name="email"
              id="email"
            />
            <label className="input-container__label" htmlFor="email">
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
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleChangeMessage(e)
              }
              rows={5}
              className="input-container__input"
              name="message"
              id="message"
            />
            <label className="input-container__label" htmlFor="message">
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
        <div className="col-sm-12">
          {formStatus == "ok" && handleFormStatus(formStatus)}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

"use client";
import React, { useEffect, useState } from "react";
import FormSubmittedNotification, {
  TStatus,
} from "../_components/FormSubmittedNotification";
import { TEmailTemplate } from "@/app/_components/email-templates/EmailTemplate";
import { sendEmail } from "@/app/_lib/services/email";
import BriefFormFields from "../_components/BriefFormFields";

const message = {
  ok: "Thank you for get in touch! Soon we will contact you.",
  error: "Somthing went wrong! Try again later.",
};

const INITIAL_STATE = {
  firstName: "",
  company: "",
  phone: "",
  email: "",
  services: "",
  project: "",
  deadlines: "",
};
const Brief = () => {
  const [data, setData] = useState<TEmailTemplate>(INITIAL_STATE);

  const [formStatus, setFormStatus] = useState<TStatus>("false"); // false, ok, error

  useEffect(() => {
    if (formStatus === "false") return;

    const timer = setTimeout(() => {
      setFormStatus("false");
    }, 5000);

    return () => clearTimeout(timer);
  }, [formStatus]);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault();

    e.preventDefault();

    const res = await sendEmail(data);

    if (res) {
      setFormStatus("ok");

      // reset form
      setData(INITIAL_STATE);
    } else {
      setFormStatus("error");
    }
  };

  const handleFormStatus = (status: TStatus) => {
    return <FormSubmittedNotification status={status} />;
  };

  return (
    <div className="brief" id="brief">
      <div className="container">
        <div className="brief__content">
          <form className="brief__form">
            <h3 className="brief__title title">Brief</h3>
            <p className="brief__text">
              This enquiry will help us to understand your needs and be ready to
              discuss a potential solution to suit the requierments, so we can
              look forward to be involved in your project.
            </p>

            <BriefFormFields {...data} setData={setData} />

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

"use client";

import { useEffect, useState } from "react";
import FormSubmittedNotification, {
  TStatus,
} from "./FormSubmittedNotification";
import { sendEmail } from "@/app/_lib/services/email";
import ContactFormFields from "./ContactFormFields";
import { TEmailTemplate } from "@/app/_components/email-templates/EmailTemplate";
import { relative } from "path";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [data, setData] = useState<TEmailTemplate>(INITIAL_STATE);

  const [formStatus, setFormStatus] = useState<TStatus>("false"); // false, ok, error
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (formStatus === "false") return;

    const timer = setTimeout(() => {
      setFormStatus("false");
    }, 5000);

    return () => clearTimeout(timer);
  }, [formStatus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await sendEmail(data);

    if (res) {
      setFormStatus("ok");

      // reset form
      setData(INITIAL_STATE);
    } else {
      setFormStatus("error");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <ContactFormFields {...data} setData={setData} />
        <div className="col-md-5">
          <div className="row justify-center">
            <div
              className="col-auto"
              style={{
                position: "relative",
              }}
            >
              <input type="submit" value="Submit" disabled={loading} />
              {loading && <div className="loader"></div>}
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          {formStatus !== "false" && (
            <FormSubmittedNotification status={formStatus} />
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

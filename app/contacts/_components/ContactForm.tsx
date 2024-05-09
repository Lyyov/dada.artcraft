"use client";

import { useEffect, useState } from "react";
import FormSubmittedNotification, {
  TStatus,
} from "./FormSubmittedNotification";
import { sendEmail } from "@/app/_lib/services/email";
import ContactFormFields from "./ContactFormFields";
import { TEmailTemplate } from "@/app/_components/email-templates/EmailTemplate";
import SubmitButton from "@/app/_components/Buttons/SubmitButton";

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

  const handleFormStatus = (status: TStatus) => {
    return <FormSubmittedNotification status={status} />;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <ContactFormFields {...data} setData={setData} />
        <div className="col-md-5">
          <input type="submit" value="Submit" disabled={loading} />
          <SubmitButton text="Submit" />
        </div>
        <div className="col-sm-12">
          {formStatus == "ok" && handleFormStatus(formStatus)}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

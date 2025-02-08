"use client";

import { useEffect, useState } from "react";
import { ContactFormFields } from "./ContactFormFields";
import { TContactFormConfig, TContactFormStatus } from "../types";
import { sendEmail } from "../utils/email";
import { FormSubmittedNotification } from "./FormSubmittedNotification";
import clsx from "clsx";

interface IInitialStateContactForm<T> {
  config: TContactFormConfig<T>;
  initialData: T;
  agreement?: string;
  mode?: "dark" | "light";
}

export const ContactForm = <T,>({
  config,
  initialData,
  agreement,
  mode,
}: IInitialStateContactForm<T>) => {
  const [data, setData] = useState(initialData);

  const [formStatus, setFormStatus] = useState<TContactFormStatus>("false"); // false, ok, error
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
      setData(initialData);
    } else {
      setFormStatus("error");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-7 grid grid-cols-12 gap-4">
      <ContactFormFields
        mode={mode}
        data={data}
        setData={setData}
        contactFormConfig={config}
      />
      <div className="col-span-12">
        <span className="relative inline-flex justify-center items-center mb-2">
          <input
            className={clsx(
              "btn",
              mode === "dark" && "btn bg-accent text-foreground-primary"
            )}
            type="submit"
            value="Submit"
            disabled={loading}
          />
          {loading && <div className="loader"></div>}
        </span>
        {agreement && (
          <p
            className={clsx(
              "paragraph text-[15px] leading-[25px] mt-0",
              mode === "dark" && "text-foreground-accent-hover"
            )}
          >
            {agreement}
          </p>
        )}
      </div>
      <div className="col-span-6">
        {formStatus !== "false" && (
          <FormSubmittedNotification status={formStatus} />
        )}
      </div>
    </form>
  );
};

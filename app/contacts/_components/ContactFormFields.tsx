import { TEmailTemplate } from "@/app/_components/email-templates/EmailTemplate";

export default function ContactFormFields({
  firstName,
  lastName,
  message,
  email,
  setData,
}: TEmailTemplate & {
  setData: React.Dispatch<React.SetStateAction<TEmailTemplate>>;
}) {
  return (
    <>
      <div className="col-md-6">
        <div
          className={
            firstName !== "" ? `input-container focused` : `input-container`
          }
        >
          <input
            className="input-container__input"
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) =>
              setData((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
          <label className="input-container__label" htmlFor="firstName">
            first name
          </label>
        </div>
      </div>
      <div className="col-md-6">
        <div
          className={
            lastName !== "" ? `input-container focused` : `input-container`
          }
        >
          <input
            className="input-container__input"
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) =>
              setData((prev) => ({ ...prev, lastName: e.target.value }))
            }
            value={lastName}
          />
          <label className="input-container__label" htmlFor="lastName">
            last name
          </label>
        </div>
      </div>
      <div className="col-sm-12">
        <div
          className={
            email !== "" ? `input-container focused` : `input-container`
          }
        >
          <input
            className="input-container__input"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <label className="input-container__label" htmlFor="email">
            Email
          </label>
        </div>
      </div>
      <div className="col-sm-12">
        <div
          className={
            message !== "" ? `input-container focused` : `input-container`
          }
        >
          <textarea
            rows={5}
            className="input-container__input"
            name="message"
            id="message"
            value={message}
            onChange={(e) =>
              setData((prev) => ({ ...prev, message: e.target.value }))
            }
          />
          <label className="input-container__label" htmlFor="message">
            Message
          </label>
        </div>
      </div>
      <div className="col-md-7">
        <p className="contact__text">
          I hereby certify that all the information above is true and accurate.
        </p>
      </div>
    </>
  );
}

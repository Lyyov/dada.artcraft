import { TEmailTemplate } from "@/app/_components/email-templates/EmailTemplate";

export default function BriefFormFields({
  firstName,
  email,
  company,
  phone,
  services,
  project,
  deadlines,
  setData,
}: TEmailTemplate & {
  setData: React.Dispatch<React.SetStateAction<TEmailTemplate>>;
}) {
  return (
    <>
      <div
        className={
          firstName !== "" ? `input-container focused` : `input-container`
        }
      >
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, firstName: e.target.value }))
          }
          className="input-container__input"
          type="text"
          name="brief_first_name"
          id="brief_first_name"
          value={firstName}
        />
        <label className="input-container__label" htmlFor="brief_first_name">
          Your name
        </label>
      </div>
      <div
        className={
          company !== "" ? `input-container focused` : `input-container`
        }
      >
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, company: e.target.value }))
          }
          className="input-container__input"
          type="text"
          name="company"
          id="company"
          value={company}
        />
        <label className="input-container__label" htmlFor="company">
          Organization/Company
        </label>
      </div>
      <div
        className={phone !== "" ? `input-container focused` : `input-container`}
      >
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, phone: e.target.value }))
          }
          className="input-container__input"
          type="text"
          name="phone"
          id="phone"
          value={phone}
        />
        <label className="input-container__label" htmlFor="phone">
          Phone
        </label>
      </div>
      <div
        className={email !== "" ? `input-container focused` : `input-container`}
      >
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
          className="input-container__input"
          type="brief_email"
          name="brief_email"
          id="brief_email"
          value={email}
        />
        <label className="input-container__label" htmlFor="brief_email">
          E-mail
        </label>
      </div>
      <div
        className={
          services !== "" ? `input-container focused` : `input-container`
        }
      >
        <textarea
          rows={3}
          onChange={(e) =>
            setData((prev) => ({ ...prev, services: e.target.value }))
          }
          className="input-container__input"
          name="services"
          id="services"
          value={services}
        />
        <label className="input-container__label" htmlFor="services">
          What services are you interested in ?
        </label>
      </div>
      <div
        className={
          project !== "" ? `input-container focused` : `input-container`
        }
      >
        <textarea
          rows={3}
          onChange={(e) =>
            setData((prev) => ({ ...prev, project: e.target.value }))
          }
          className="input-container__input"
          name="project"
          id="project"
          value={project}
        />
        <label className="input-container__label" htmlFor="project">
          Describe your project.
        </label>
      </div>
      <div
        className={
          deadlines !== "" ? `input-container focused` : `input-container`
        }
      >
        <textarea
          rows={3}
          onChange={(e) =>
            setData((prev) => ({ ...prev, deadlines: e.target.value }))
          }
          className="input-container__input"
          name="deadlines"
          id="deadlines"
          value={deadlines}
        />
        <label className="input-container__label" htmlFor="deadlines">
          Deadlines
        </label>
      </div>
    </>
  );
}

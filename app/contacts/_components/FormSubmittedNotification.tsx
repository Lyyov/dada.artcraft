import { messageOnSendEmail } from "../_utlis";

type TNotification = {
  status: TStatus;
};

export type TStatus = "false" | "error" | "ok";
const FormSubmittedNotification = ({ status }: TNotification) => {
  return (
    <div className={`notification ${status !== "ok" && "error"}`}>
      <p className="notification_text">{messageOnSendEmail[status] || ""}</p>
    </div>
  );
};

export default FormSubmittedNotification;

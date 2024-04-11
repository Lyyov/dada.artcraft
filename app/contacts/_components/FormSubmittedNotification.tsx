type TNotification = {
  status: TStatus;
  message: string;
};

export type TStatus = "false" | "error" | "ok";
const FormSubmittedNotification = ({ status, message }: TNotification) => {
  return (
    <div className={`notification ${status === "ok" ? "succes" : "error"}`}>
      <p className="notification_text">{message}</p>
    </div>
  );
};

export default FormSubmittedNotification;

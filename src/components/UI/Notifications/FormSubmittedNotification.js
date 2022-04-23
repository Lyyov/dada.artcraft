const FormSubmittedNotification = ({ status, message }) => {
  return (
    <div className={`notification ${status != "error" ? "succes" : "error"}`}>
      <p className="notification_text">{message}</p>
    </div>
  );
};

export default FormSubmittedNotification;

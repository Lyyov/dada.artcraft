import clsx from "clsx";
import { messageOnSendEmail } from "../consts/notificationMessage";
import { TContactFormStatus } from "../types";

export const FormSubmittedNotification = ({ status }: { status: TContactFormStatus }) => {
    return (
        <div className={clsx(
            "p-4 bg-[#aeffae] rounded-[3px]",
            status !== "ok" && "bg-[#f38a8a]"
        )}>
            <p className="notification_text">{messageOnSendEmail[status] || ""}</p>
        </div>
    );
};
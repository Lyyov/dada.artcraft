'use server'
import { Resend } from "resend";
import { ContactEmailTemplate } from "./EmailTemplate";

export const sendEmail = async <T,>(payload: T) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data: _data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [`${process.env.EMAIL_TO_RECEIVE}`],
        subject: "DaDa contact request",
        // @ts-expect-error - template is awaiting Record<string,string>
        react: ContactEmailTemplate(payload),
    });

    if (error) {
        return false;
    }

    return true;
};
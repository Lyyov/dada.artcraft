"use server";

import ContactEmailTemplate, {
  TEmailTemplate,
} from "@/app/_components/email-templates/EmailTemplate";
import { Resend } from "resend";

export const sendEmail = async (payload: TEmailTemplate) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data: _data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [`${process.env.EMAIL_TO_RECEIVE}`],
    subject: "DaDa contact request",
    react: ContactEmailTemplate(payload),
  });

  if (error) {
    return false;
  }

  return true;
};

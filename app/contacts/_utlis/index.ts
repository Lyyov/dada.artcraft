type TMessageOnSendEmail = {
  ok: string;
  error: string;
  false?: string;
};

export const messageOnSendEmail: TMessageOnSendEmail = {
  ok: "Thank you for get in touch! Soon we will contact you.",
  error: "Something went wrong! Try again later.",
};

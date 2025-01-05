"use server";

import { cookies } from "next/headers";
import type { ContactFormState } from "@/types";

import { sendEmail } from "@lib/send-email";
import { emailTemplate } from "@utils/email-template";

export const sendMessage = async (
  _state: ContactFormState,
  formData: FormData
): Promise<ContactFormState> => {
  // send-message-count cookie value is used to
  // prevent the sending of over two emails in a day.
  const msgCount = Number(cookies().get("SEND_MESSAGE_COUNT")?.value ?? 0);
  if (msgCount >= 2) {
    return { error: "You can only send two messages in a day." };
  }

  const formValues = Object.fromEntries(formData.entries());
  const { name, email, message: msg } = formValues as { [key: string]: string };
  if (!name || !email || !msg) {
    return { error: "You must fill out all the fields." };
  }

  try {
    // Send email to my email account with message
    const subject = `A new message from <${email}>`;
    const message = emailTemplate(name, email, msg);
    await sendEmail({ subject, message });

    // Send cookie for update the send-message-count value
    cookies().set({
      name: "SEND_MESSAGE_COUNT",
      value: msgCount + 1 + "",
      maxAge: 24 * 60 * 60, // 1 day
      secure: true,
      httpOnly: true,
      sameSite: "strict",
    });
    return { message: "Your message is successfully sent." };
  } catch (error) {
    return { error: "Something went wrong! Please try again later." };
  }
};

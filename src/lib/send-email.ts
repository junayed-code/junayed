import { transporter } from "@lib/nodemailer";

type SendEmailOptions = {
  subject: string;
  message: string;
};

export const sendEmail = async (options: SendEmailOptions) => {
  return await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: options.subject,
    html: options.message,
  });
};

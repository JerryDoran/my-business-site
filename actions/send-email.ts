"use server";

import { Resend } from "resend";
import { contactSchema } from "@/schemas/contact";
import { ContactFormState } from "@/types/contact";
import { convertZodErrors } from "@/lib/errors";
import React from "react";
import ContactFormEmail from "@/components/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(
  formData: FormData,
): Promise<ContactFormState<undefined>> {
  const unvalidatedContactInfo = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  const validated = contactSchema.safeParse(unvalidatedContactInfo);

  if (!validated.success) {
    const errors = convertZodErrors(validated.error);
    console.log(errors);
    return { errors };
  } else {
    await resend.emails.send({
      from: `${validated.data.name} <onboarding@resend.dev>`,
      to: "thewebarchitech@gmail.com",
      replyTo: validated.data.email,
      subject: "Message from Contact Form",
      // text: validated.data.message,
      // react: <ContactFormEmail message={message} email={email} />,
      react: React.createElement(ContactFormEmail, {
        message: validated.data.message,
        senderEmail: validated.data.email,
      }),
    });
  }

  return {
    successMessage: "Information successfully submitted!",
    errors: {},
  };
}

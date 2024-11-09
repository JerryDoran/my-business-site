import { z } from "zod";

export const contactSchema = z.object({
  name: z.string({ message: "Name is required" }),
  email: z
    .string({ message: "Please enter a valid email" })
    .email("A valid email is required"),
  phone: z.string(),
  message: z.string({ message: "Please enter your message" }),
});

export type Contact = z.infer<typeof contactSchema>;

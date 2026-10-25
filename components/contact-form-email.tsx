import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactEmailFormProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactEmailFormProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from The Web Architech site</Preview>
      <Tailwind>
        <Body className="bg-gray-800">
          <Container>
            <Section className="my-10 rounded-md border-black bg-white px-10 py-4">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

import Section from "@components/section";
import Container from "@components/container";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <Section id="contact">
      <Container className="flex flex-col gap-x-14 gap-y-10 md:flex-row">
        <div className="text-center md:basis-1/2 md:text-left">
          <h2>
            get in touch <span className="text-primary-500">with me</span>
          </h2>
          <p className="mx-auto md:text-lg">
            Have any questions or proposals? Or perhaps you just want to say
            hello? Go ahead. Or shoot me an email directly to{" "}
            <a
              href="mailto:junayedakbour@gmail.com"
              className="font-medium text-neutral-100 hover:text-primary-500"
            >
              junayedakbour@gmail.com
            </a>
          </p>
        </div>
        <ContactForm />
      </Container>
    </Section>
  );
}

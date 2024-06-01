import Section from "@components/section";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="flex flex-col md:flex-row gap-x-14 gap-y-10">
        <div className="text-center md:text-left md:basis-1/2">
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-primary-foreground mb-4">
            get in touch with me
          </h2>
          <p className="mx-auto md:text-lg">
            Have any questions or proposals? Or perhaps you just want to say
            hello? Go ahead. Or shoot me an email directly to{" "}
            <a
              href="mailto:junayedakbour@gmail.com"
              className="font-medium text-primary-foreground"
            >
              junayedakbour@gmail.com
            </a>
          </p>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}

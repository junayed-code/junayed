"use client";

import type { ContactFormState } from "@/types";

import React from "react";
import toast from "react-hot-toast";
import { useFormState, useFormStatus } from "react-dom";

import { Input } from "@ui/input";
import { Button } from "@ui/button";
import { Textarea } from "@ui/textarea";
import { Loading } from "@ui/loading";

import { sendMessage } from "@/actions";

const initialState: ContactFormState = { message: "" };

const FormSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="h-11" disabled={pending}>
      {pending ? <Loading size="sm" /> : "Say hello!"}
    </Button>
  );
};

function ContactForm() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [formState, formAction] = useFormState(sendMessage, initialState);

  // Respond to the user according to formState
  React.useEffect(() => {
    if (!formState.message) {
      if (formState.error) toast.error(formState.error);
      return;
    }
    toast.success(formState.message);
    formRef.current?.reset();
  }, [formState]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col gap-y-5 max-w-2xl mx-auto w-full md:basis-1/2"
    >
      <Input
        id="name"
        name="name"
        type="text"
        minLength={3}
        maxLength={20}
        placeholder="Name"
        required
      />
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        required
      />
      <Textarea
        id="message"
        name="message"
        placeholder="Write your message"
        minLength={15}
        maxLength={1000}
        required
      />
      <FormSubmitButton />
    </form>
  );
}

export default ContactForm;

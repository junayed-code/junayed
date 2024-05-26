"use client";

import React from "react";
import Link from "next/link";
import Section from "../section";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;

const defaultCount = { count: 0, date: new Date() };
const today = new Date();

export default function Contact() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(defaultCount);

  useEffect(() => {
    const value = localStorage.getItem("_Submit_Count");
    const submitCount = value !== null ? JSON.parse(value) : defaultCount;

    submitCount.date = new Date(submitCount.date);
    const { date } = submitCount;

    if (
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear()
    ) {
      if (today.getDate() > date.getDate()) {
        localStorage.setItem("_Submit_Count", JSON.stringify(defaultCount));
      } else {
        setSubmitCount(submitCount);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(form.entries());
    if (!formValues.name || !formValues.email || !formValues.message) return;

    if (!(submitCount.count < 2)) {
      return toast.error("You can only send two emails each day.");
    }

    setSubmitting(true);
    const toastID = toast.loading("Loading", { duration: Infinity });
    try {
      // Send email through emailjs library
      await emailjs.send(serviceID, templateID, formValues, publicKey);
      setSubmitCount((prev) => {
        const newCount = { ...prev, count: prev.count + 1 };
        localStorage.setItem("_Submit_Count", JSON.stringify(newCount));
        return newCount;
      });
      toast.dismiss(toastID);
      toast.success("Email sent successfully!", { duration: 3200 });
    } catch (error: any) {
      toast.dismiss(toastID);
      toast.error(error.message, { duration: 3200 });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <h2 className="text-3xl md:text-4xl font-bold font-secondary text-center text-slate-100 mb-4">
        get in touch with me
      </h2>
      <p className="max-w-2xl mx-auto sm:text-lg text-center">
        Have any questions or proposals? Or perhaps you just want to say hello?
        Go ahead. Or shoot me an email directly to{" "}
        <Link
          href="mailto:junayedakbour@gmail.com"
          className="font-medium text-slate-100"
        >
          junayedakbour@gmail.com
        </Link>
      </p>

      <div className="mt-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-5 max-w-2xl mx-auto"
        >
          <input
            className="bg-transparent text-slate-400 outline-none px-4 py-3 border border-slate-600 focus:border-emerald-400 rounded-md"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            minLength={3}
            maxLength={20}
          />
          <input
            className="bg-transparent text-slate-400 outline-none px-4 py-3 border border-slate-600 focus:border-emerald-400 rounded-md"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Write your message"
            className="bg-transparent text-slate-400 outline-none px-4 py-3 border border-slate-600 focus:border-emerald-400 rounded-md"
            required
            minLength={7}
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="self-start font-medium border border-slate-600 bg-slate-900 py-3 px-5 text-lg enabled:hover:text-emerald-400 enabled:hover:border-emerald-400 enabled:hover:shadow-[3px_3px_rgb(52,211,153)] enabled:hover:-translate-x-0.5 enabled:hover:-translate-y-0.5 disabled:opacity-40 duration-200"
          >
            send message
          </button>
        </form>
      </div>
    </Section>
  );
}

"use client";

import Link from "next/link";
import Section from "../section";
import toast from "react-hot-toast";

export default function Contact() {
  const handleSubmit = e => {
    e.preventDefault();
    setTimeout(() => {
      toast.success("Email sent successfully!", { duration: 3200 });
      e.target?.reset();
    }, 1200);
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
            rows="5"
            placeholder="Write your message"
            className="bg-transparent text-slate-400 outline-none px-4 py-3 border border-slate-600 focus:border-emerald-400 rounded-md"
            required
            minLength={7}
          ></textarea>

          <button
            type="submit"
            className="self-start font-medium border border-slate-600 bg-slate-900 py-3 px-5 text-lg hover:text-emerald-400 hover:border-emerald-400 hover:shadow-[3px_3px_rgb(52,211,153)] hover:-translate-x-0.5 hover:-translate-y-0.5 duration-200"
          >
            send message
          </button>
        </form>
      </div>
    </Section>
  );
}

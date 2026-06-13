"use client";
import Link from "next/link";
import { useState } from "react";
// icons
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosPin } from "react-icons/io";
// api
import { contactFormSubmit } from "../api/email";

export default function ContactPage() {
  const [contactData, setContactData] = useState({});

  const contactFormChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-8 text-slate-700">
      <h2 className="mb-4 text-center text-2xl font-bold text-purple-900 md:text-3xl">
        Contact Me
      </h2>

      <p className="mx-auto max-w-3xl text-center">
        Thank you for taking the time to learn more about me and my work.
      </p>

      <p className="mx-auto mt-2 max-w-3xl text-center">
        {`Please feel free to contact me if you have any questions or if you're interested in working together! I look forward to hearing from you.`}
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
        <form
          id="contact-form"
          autoComplete="off"
          onSubmit={contactFormSubmit}
          onChange={contactFormChange}
          aria-live="assertive"
          className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <input
            id="contact-name"
            name="name"
            defaultValue=""
            required
            placeholder="MY NAME"
            className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            id="contact-email"
            name="email"
            type="email"
            defaultValue=""
            required
            placeholder="MY EMAIL"
            className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            id="contact-msg"
            name="message"
            defaultValue=""
            required
            placeholder="MESSAGE"
            className="min-h-36 w-full resize-y rounded-md border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-purple-700 px-4 py-3 font-semibold text-white transition hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Send
          </button>
        </form>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <IoIosPin className="text-purple-700" aria-hidden="true" />
              <span>United States</span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-700" aria-hidden="true" />
              <a
                href="tel:1-215-779-8590"
                title="call me"
                className="hover:text-purple-700 hover:underline"
              >
                (215) 779-8590
              </a>
            </li>

            <li className="flex items-center gap-3">
              <MdEmail className="text-purple-700" aria-hidden="true" />
              <Link
                href="mailto:miaciasullo@gmail.com"
                title="email me"
                className="hover:text-purple-700 hover:underline"
              >
                miaciasullo@gmail.com
              </Link>
            </li>
          </ul>

          <hr className="my-6 border-slate-200" />

          <ul className="flex items-center gap-5">
            <p className="font-medium text-purple-900">Connect with me:</p>

            <li>
              <Link
                href="https://www.github.com/miacias"
                target="_blank"
                rel="noreferrer"
                className="text-slate-700 transition hover:text-purple-700"
              >
                <FaGithub className="fa-2xl" aria-hidden="true" />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/in/miaciasullo"
                target="_blank"
                rel="noreferrer"
                className="text-slate-700 transition hover:text-purple-700"
              >
                <FaLinkedin className="fa-2xl" aria-hidden="true" />
              </Link>
            </li>
          </ul>

          <hr className="my-6 border-slate-200" />

          <p className="font-medium text-purple-900">Thank You!</p>
        </div>
      </div>
    </section>
  );
}

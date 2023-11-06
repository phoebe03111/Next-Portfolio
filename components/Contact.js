"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch("/api/send", options);

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT */}
        <div className="flex flex-col gap-4 md:w-1/2 md:pr-10">
          <h3 className="text-2xl font-bold">Let's Connect</h3>
          <p className="text-base leading-8">
            Feel free to reach out - Whether you have a project in mind, want to
            collaborate, or just want to say hello. I'm always open to new
            opportunities and conversations. Looking forward to hearing from
            you!
          </p>
          <p className="text-primary underline">phoebe03111@gmail.com</p>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/phoebe03111" target="_blank">
              <Image
                src="/icons/github.svg"
                alt="github"
                width={50}
                height={50}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/phoebe--chang/"
              target="_blank"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="linkedin"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:flex-1">
          {emailSubmitted ? (
            <p className="text-green-500">Email sent successfully!</p>
          ) : (
            <form
              className="flex flex-col items-center gap-6"
              onSubmit={handleSubmit}
            >
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="contact-form-input"
                  placeholder="jacob@google.com"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="subject"
                  className="block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="contact-form-input"
                  placeholder="Hello!"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="contact-form-input"
                  placeholder="Let's talk about..."
                  rows={5}
                />
              </div>
              <Button type="submit" title="Send Message" />
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

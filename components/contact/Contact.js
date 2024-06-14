"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { SectionHeader } from "../section-header";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail } from "lucide-react";
import Reveal from "../Reveal";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

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
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pb-8">
      <SectionHeader title="Contact" />

      <div className="flex flex-col md:flex-row w-full gap-12 md:gap-20">
        {/* LEFT */}
        <Reveal>
          <div className="flex flex-col items-center justify-center gap-6">
            <Image src="/contact.svg" alt="Contact" width={250} height={250} />
            <p className="flex items-center gap-2 text-zinc-600">
              <Mail className="text-primary" />
              phoebe03111@gmail.com
            </p>
            <div className="flex items-center gap-2">
              <Link href="https://github.com/phoebe03111" target="_blank">
                <Image
                  src="/icons/github.svg"
                  alt="github"
                  width={40}
                  height={40}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/phoebe--chang/"
                target="_blank"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="linkedin"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* RIGHT */}
        <div className="flex-1">
          {emailSubmitted ? (
            <p className="text-green-500">Thank you for the message!</p>
          ) : (
            <Reveal width="full" delay={0.5}>
              <form
                className="flex flex-col items-center gap-4"
                onSubmit={handleSubmit}
              >
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm mb-1 font-medium"
                  >
                    Your email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    id="email"
                    required
                    placeholder="johndoe@google.com"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="subject"
                    className="block text-sm mb-1 font-medium"
                  >
                    Subject
                  </label>
                  <Input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    placeholder="Hello!"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="block text-sm mb-1 font-medium"
                  >
                    Message
                  </label>
                  <Textarea
                    name="message"
                    id="message"
                    placeholder="Let's talk about..."
                    rows={5}
                  />
                </div>
                <Button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

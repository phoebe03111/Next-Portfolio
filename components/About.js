"use client";

import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { ABOUT_DATA } from "@/constants";
import Image from "next/image";
import { CodeBracketIcon } from "@heroicons/react/24/solid";

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT */}
        <Image src="/about.svg" alt="about image" width={500} height={500} />

        {/* RIGHT */}
        <div className="mt-8 md:mt-0 flex flex-col h-full flex-1 lg:pl-10">
          <h2 className="section-title">About Me</h2>
          <p className="text-base lg:text-lg leading-8">
            I discovered a love for software engineering 3 years ago when I was
            exploring new career paths after moving to Canada during Covid. I
            joined a bootcamp as a student, transitioned into a role as a
            teaching assistant, and later worked as a full-stack developer at a
            startup for 1.5 years. With hands-on experience in building
            real-world web applications, I am eager to pivot towards new
            opportunities and thrive in a dynamic and collaborative environment.
          </p>

          <div className="mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>

          <div className="mt-8">
            {ABOUT_DATA.find((data) => data.id === tab).content.map((item) => (
              <ul key={item}>
                <li className="flex items-center gap-2 mb-2">
                  <CodeBracketIcon width={20} className="text-primary" /> {item}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

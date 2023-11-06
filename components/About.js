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
        <Image src="/about.svg" alt='about image' width={500} height={500} />

        {/* RIGHT */}
        <div className="mt-8 md:mt-0 flex flex-col h-full">
          <h2 className="section-title">About Me</h2>
          <p className="text-base lg:text-lg leading-8">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, MySQL,
            MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>

          <div className="mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>

          <div className="mt-8">
            {ABOUT_DATA.find((data) => data.id === tab).content.map((item) => (
              <ul key={item.id}>
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

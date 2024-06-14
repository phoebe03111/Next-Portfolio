import Reveal from "../Reveal";
import { SectionHeader } from "../section-header";
import { Skills } from "./Skills";

export const About = () => {
  return (
    <section id="about">
      <SectionHeader title="About" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4 text-lg">
          <Reveal>
            <p className="leading-relaxed">
              I discovered a love for software engineering in 2021 while
              exploring new career paths after moving to Canada during the
              COVID-19 pandemic.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed">
              After several months of self-teaching, I enrolled in a bootcamp
              and eventually transitioned into a role as a teaching assistant.
              Upon graduation, I worked as a full-stack developer at a marketing
              startup, where I honed my skills and had a blast turning ideas
              into code.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed">
              Outside of work, I enjoy hip-hop dancing, hiking, and traveling to
              new places (and find the best coffee shops in town ☕️)
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed">
              With a passion for front-end engineering, I am eager to pivot
              towards new opportunities and thrive in a dynamic and
              collaborative environment. If you think you&apos;ve got an opening
              that I might like, let&apos;s connect! 🔗
            </p>
          </Reveal>
        </div>
        <Skills />
      </div>
    </section>
  );
};

export default About;

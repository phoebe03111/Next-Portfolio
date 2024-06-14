import { Notebook, PenTool, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Reveal from "../Reveal";

const languages = ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"];

const libraries = [
  "React",
  "NextJs",
  "Vite",
  "NodeJS",
  "Express",
  "Redux",
  "TailwindCSS",
  "Shadcn UI",
  "Jest",
  "Testing Library",
  "Prisma",
];

const technologies = [
  "Rest API",
  "GraphQL",
  "AWS",
  "Firebase",
  "MongoDB",
  "PostgreSQL",
];

export const Skills = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <Terminal className="text-primary text-2xl" />
            <span className="font-bold ml-2">Languages</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            {languages.map((lang) => (
              <Badge key={lang}>{lang}</Badge>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <Notebook className="text-primary text-2xl" />
            <span className="font-bold ml-2">Libraries</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            {libraries.map((library) => (
              <Badge key={library}>{library}</Badge>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <PenTool className="text-primary text-2xl" />
            <span className="font-bold ml-2">Technologies</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            {technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

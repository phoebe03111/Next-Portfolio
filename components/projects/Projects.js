import { PROJECTS_DATA } from "@/constants";
import { SectionHeader } from "../section-header";
import { Project } from "./Project";

const Projects = () => {
  return (
    <section id="projects">
      <SectionHeader title="Projects" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {PROJECTS_DATA.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;

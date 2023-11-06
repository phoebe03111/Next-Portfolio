"use client";

import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "@/constants";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">My Projects</h2>

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;

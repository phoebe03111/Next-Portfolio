"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "@/constants";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">My Projects</h2>

      <motion.ul
        className="grid md:grid-cols-3 gap-8 md:gap-12"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.25 } },
        }}
        initial="hidden"
        animate="show"
      >
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </motion.ul>
    </section>
  );
};

export default Projects;

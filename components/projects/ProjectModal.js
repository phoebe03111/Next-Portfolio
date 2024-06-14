"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CodeXml, DoorClosed, SquareArrowOutUpRight } from "lucide-react";

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  title,
  code,
  tech,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 px-4 py-12 bg-zinc-950/50 backdrop-blur overflow-y-scroll flex justify-center cursor-pointer"
      onClick={() => setIsOpen(false)}
    >
      <button className="absolute top-4 md:top-6 text-xl right-4">
        <DoorClosed />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-lg cursor-auto"
      >
        <img
          className="w-full"
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        />
        <div className="p-8">
          <h4 className="text-3xl font-bold mb-2">{title}</h4>
          <div className="flex flex-wrap gap-2 text-sm text-primary">
            {tech.join(" - ")}
          </div>

          <div className="space-y-4 my-6 leading-relaxed">
            {modalContent}
          </div>

          <div>
            <p className="font-bold mb-2 text-xl">
              Project Links<span className="text-indigo-500">.</span>
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link
                target="_blank"
                rel="nofollow"
                className="text-primary hover:text-zinc-400 transition-colors flex items-center gap-1"
                href={code}
              >
                <CodeXml /> Source Code
              </Link>
              <Link
                target="_blank"
                rel="nofollow"
                className="text-primary hover:text-zinc-400 transition-colors flex items-center gap-1"
                href={projectLink}
              >
                <SquareArrowOutUpRight /> Live Demo
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

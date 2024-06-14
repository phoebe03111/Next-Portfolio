"use client";

import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ProjectModal } from "./ProjectModal";
import { CodeXml, SquareArrowOutUpRight } from "lucide-react";
import Reveal from "../Reveal";

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="w-full aspect-video bg-zinc-100 cursor-pointer relative rounded-lg overflow-hidden"
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
            className="w-[85%] absolute top-20 left-1/2 -translate-x-1/2 transition-all rounded"
          />
        </div>
        <div className="mt-6">
          <Reveal>
            <div className="flex items-center gap-2 w-full">
              <h4 className="font-bold text-lg">{title}</h4>
              <div className="w-20 h-[1px] bg-zinc-600" />

              <Link
                href={code}
                target="_blank"
                rel="nofollow"
                className="cursor-pointer"
              >
                <CodeXml />
              </Link>

              <Link
                href={projectLink}
                target="_blank"
                rel="nofollow"
                className="cursor-pointer"
              >
                <SquareArrowOutUpRight />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4 text-sm text-primary my-2">
              {tech.join(" - ")}
            </div>
          </Reveal>
          <Reveal>
            <p className="text-zinc-600 leading-relaxed">
              {description}{" "}
              <span
                className="inline-block text-sm text-primary cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Learn more {">"}
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      {isOpen && (
        <ProjectModal
          modalContent={modalContent}
          projectLink={projectLink}
          setIsOpen={setIsOpen}
          imgSrc={imgSrc}
          title={title}
          code={code}
          tech={tech}
        />
      )}
    </>
  );
};

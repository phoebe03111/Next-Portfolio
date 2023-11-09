import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({
  title,
  description,
  techStack,
  imgUrl,
  gitUrl,
  previewUrl,
}) => {
  return (
    <article>
      {/* IMAGE */}
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        {/* LINKS OVERLAY */}
        <div className="hidden items-center justify-center gap-8 absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 group-hover:rounded-t-xl transition-all duration-500 ">
          <Link href={gitUrl} target="_blank" className="project-link">
            <CodeBracketIcon className="project-icon" />
          </Link>
          <Link href={previewUrl} target="_blank" className="project-link">
            <EyeIcon className="project-icon" />
          </Link>
        </div>
      </div>

      {/* TEXT */}
      <div className="rounded-b-xl mt-1  bg-secondary py-6 px-4">
        <h5 className="text-lg text-primary font-semibold mb-2">{title}</h5>
        <p className="flex items-center gap-2 mb-2 text-sm">
          {techStack.map((item) => (
            <span key={item} className="border border-gray-400 rounded-lg px-2 py-1 text-gray-400">{item}</span>
          ))}
        </p>
        <p className="text-base">{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;

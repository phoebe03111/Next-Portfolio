import { Reveal } from "./Reveal";

export const SectionHeader = ({ title }) => {
  return (
    <div className="flex items-center gap-8 mb-12">
      <h2>
        <Reveal>
          <span className="text-3xl md:text-5xl font-extrabold">
            {title}
            <span className="text-primary">.</span>
          </span>
        </Reveal>
      </h2>
      <div className="w-full h-[1px] bg-zinc-700" />
    </div>
  );
};

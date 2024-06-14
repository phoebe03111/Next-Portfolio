import Image from "next/image";
import DownloadCVBtn from "../download-CV-btn";
import Reveal from "../Reveal";

const Hero = () => {
  return (
    <section className="h-[80vh] flex flex-col justify-center space-y-4 md:space-y-0 md:flex-row md:justify-between items-center">
      {/* LEFT */}
      <div className="order-2 md:order-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6">
        <Reveal>
          <h1 className="text-5xl lg:text-7xl leading-normal font-extrabold md:mb-3">
            Hi, I'm Phoebe
          </h1>
          <p className="text-lg lg:text-xl">
            A full-stack developer based in Vancouver, Canada.
          </p>
        </Reveal>
        <Reveal>
          <DownloadCVBtn />
        </Reveal>
      </div>

      {/* RIGHT */}
      <div className="order-1 md:order-2 flex justify-center items-center">
        <Reveal delay={0.5}>
          <Image
            src="/programmer.svg"
            alt="hero image"
            width={350}
            height={350}
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;

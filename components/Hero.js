import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center text-center md:text-left">
      {/* LEFT */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-5xl lg:text-6xl leading-normal font-extrabold mb-4">
          Hi, I'm Phoebe
        </h1>
        <p className="text-lg lg:text-2xl">
          A full-stack developer based in Vancouver, Canada.
        </p>
        <a href="/Phoebe_Chang_Resume.pdf" download="Phoebe_Chang_Resume">
          <Button title="Download CV" />
        </a>
      </div>

      {/* RIGHT */}
      <div className="flex justify-center items-center md:w-1/2">
        <Image
          src="/web_developer.svg"
          alt="hero image"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Hero;

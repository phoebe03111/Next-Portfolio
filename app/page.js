import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main className="max-w-[1100px] mx-auto px-12 py-4 space-y-24">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="container mt-28 mx-auto px-12 py-4 space-y-24">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="container mt-24 mx-auto px-12 py-4 space-y-8">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}

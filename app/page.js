import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="container mt-24 mx-auto px-12 py-4 space-y-8">
      <Hero />
      <About />
    </main>
  );
}

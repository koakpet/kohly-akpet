import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="my-9 mx-3 md:mx-33">
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

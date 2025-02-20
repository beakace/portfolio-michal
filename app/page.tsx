import About from "@/components/about";
import Contact from "@/components/contact";
import SectionDivider from "@/components/section-divider";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import ProjectsSection from "@/app/sections/projects-section";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Skills />
      <ProjectsSection />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}

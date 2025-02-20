import Projects from "@/components/projects";
import { getProjects } from "@/lib/data";

export default async function ProjectsSection() {
  const projects = await getProjects();
  return <Projects projects={projects} />;
}

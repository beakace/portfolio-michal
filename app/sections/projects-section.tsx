import Projects from "@/components/projects";
import { getProjects } from "@/lib/data";

export default async function ProjectsSection() {
  const projects = await getProjects();

  if (!projects.length) {
    console.log("No projects found in Sanity"); // Debug log
  }

  return <Projects projects={projects} />;
}

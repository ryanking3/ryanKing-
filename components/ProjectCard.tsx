import type { Project } from "@/lib/projects";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.href ? Link : "div"; // Use Link if href exists

  return (
    <Wrapper
      href={project.href || "#"}
      className="block p-4 border border-blue-600 hover:border-blue-400 
                 rounded-sm transition-all duration-150 cursor-pointer"
      target={project.href?.startsWith("http") ? "_blank" : undefined}
      rel={project.href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <h3 className="font-bold text-lg mb-1">{project.title}</h3>
      <p className="subtle text-sm mb-1">{project.description}</p>
      <div className="text-xs subtle">{project.tech?.join(" · ")}</div>
    </Wrapper>
  );
}

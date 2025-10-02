"use client";

import { useState, ReactNode } from "react";
import Section from "@/components/Section";
import { projects } from "@/lib/projects";
import { essays } from "@/lib/essays";
import ProjectCard from "@/components/ProjectCard";
import ChaosEncryptor from "@/components/ChaosEncryptor";

import ReactMarkdown, { Components } from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export default function ProjectsPage() {
  const [activeEssay, setActiveEssay] = useState<string | null>(null);

  if (activeEssay) {
    const essay = essays.find((e) => e.slug === activeEssay);

    const markdownComponents: Components = {
      h1: ({ node, ...props }) => (
        <h1 className="text-3xl font-bold mb-4" {...props} />
      ),
      h2: ({ node, ...props }) => (
        <h2 className="text-2xl font-bold mb-3" {...props} />
      ),
      p: ({ node, ...props }) => <p className="subtle mb-2" {...props} />,
      code: ({ inline, className, children, ...props }) => (
        <code
          className={`bg-black px-1 py-0.5 rounded text-[#46A0E0] ${
            inline ? "text-sm" : "block overflow-x-auto p-2"
          }`}
          {...props}
        >
          {children as ReactNode}
        </code>
      ),
    };

    return (
      <Section>
        <button
          onClick={() => setActiveEssay(null)}
          className="mb-4 text-sm text-[#267CB6] hover:text-[#46A0E0] transition-colors"
        >
          ←
        </button>

        <h1 className="text-3xl font-bold mb-4">{essay?.title}</h1>

        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={markdownComponents}
          >
            {essay?.content || ""}
          </ReactMarkdown>

          {essay?.slug === "chaos-encryption" && <ChaosEncryptor />}
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section>
        <h2 className="text-2xl font-bold mb-4">Essays</h2>
        <ul className="list-disc list-inside subtle">
          {essays.map((essay) => (
            <li key={essay.slug}>
              <button
                className="hover:text-[#46A0E0] transition-colors"
                onClick={() => setActiveEssay(essay.slug)}
              >
                {essay.title}
              </button>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Section>
    </>
  );
}

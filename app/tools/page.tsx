"use client";

import Section from "@/components/Section";

export default function ToolsPage() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Tools</h2>
      <p className="subtle mb-6">
        This is a living document of the tools, software, and hardware I use
      </p>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Editor / Terminal</h3>

        <h4 className="font-semibold mt-2">Editor</h4>
        <ul className="list-disc list-inside subtle mb-2">
          <li>Neovim - Check out my config in the projects section if you are interested</li>
        </ul>

        <h4 className="font-semibold mt-2">Terminal</h4>
        <ul className="list-disc list-inside subtle mb-2">
          <li>Iterm2 - idk I should probably get something cooler</li>
        </ul>

        <h4 className="font-semibold mt-2">Font</h4>
        <ul className="list-disc list-inside subtle">
          <li>JetBrainsMono - Simple nerd font 8|</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Software</h3>

        <h4 className="font-semibold mt-2">Productivity</h4>
        <ul className="list-disc list-inside subtle mb-2">
          <li>Alfred - Pretty nice Mac management plugin a coworker showed me</li>
          <li>Chromium - Open source lol</li>
          <li>Trello - I'm back in uni so no more kanban boards</li>
          <li>Notepad - Usually a physical one</li>
        </ul>

        <h4 className="font-semibold mt-2">Development Tools</h4>
        <ul className="list-disc list-inside subtle mb-2">
          <li>Postman - Good for testing api requests, probably should find a lighter alternative</li>
          <li>MongoDB Compass - Used this in my placement job and want to utilise it more</li>
          <li>Docker - It's docker</li>
        </ul>

      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Tech Stack</h3>

        <h4 className="font-semibold mt-2">Languages & Frameworks</h4>
        <ul className="list-disc list-inside subtle mb-2">
          <li>TypeScript - My go-to language. Type safety is essential</li>
          <li>Node.js - Server-side runtime</li>
          <li>React - Front-end framework that everyone uses</li>
          <li>Nextjs - Made this site</li>
        </ul>

        <h4 className="font-semibold mt-2">Tools & Services</h4>
        <ul className="list-disc list-inside subtle mb-2">
          <li>Vercel - Best deployment platform for serverless/static sites</li>
          <li>Tailwind CSS - Makes you forget how CSS works</li>
          <li>Prettier - Opinionated code formatter</li>
        </ul>

        
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Hardware</h3>

        <h4 className="font-semibold mt-2">Computer</h4>
        <ul className="list-disc list-inside subtle mb-2">
          <li>MacBook Pro 16&quot; 2019 - Intel chip, 16GB RAM</li>
          <li>Desktop - 2060ti, 32GB RAM, i7</li>
        </ul>
      </div>
    </Section>
  );
}

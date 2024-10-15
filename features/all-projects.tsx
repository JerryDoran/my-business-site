import Link from "next/link";

import { projects } from "@/data/siteData";
import Image from "next/image";

export default function AllProjects() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      <div className="hero-heading">
        <h1 className="hero-heading text-balance text-4xl font-semibold sm:text-7xl">
          My <span className="heading-gradient">projects</span>
        </h1>
      </div>
      <div className="mt-4 max-w-xl sm:align-baseline md:text-xl" id="projects">
        <p className="prose prose-invert text-center text-xl md:text-2xl">
          My goal is to be the one-stop shop solution for all my clients
          whenever they need anything done to their websites.
        </p>
      </div>
      <div className="relative mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
        <div className="absolute inset-0 -z-10 bg-blue-500/10 blur-2xl filter" />
        {projects.map(
          (project) =>
            project && (
              <div
                key={project.slug}
                className="glass-container inset-0 overflow-hidden rounded-lg p-2 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100"
              >
                <h3 className="mb-2 sm:text-xl">{project.title}</h3>
                <Link
                  href={`/project/${project.slug}`}
                  className="after:absolute after:inset-0 hover:underline"
                >
                  <Image
                    src={project.img}
                    alt="project image"
                    className="duration-[700ms] max-h-[200px] rounded-lg object-cover transition group-hover:scale-105"
                  />
                </Link>
              </div>
            ),
        )}
      </div>
    </div>
  );
}

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
          My goal is to be the one-stop shop solution for all my clients.
        </p>
      </div>
      <div className="relative mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
        <div className="absolute inset-0 -z-10 bg-blue-500/15 blur-2xl filter" />
        {projects.map(
          (project) =>
            project && (
              <div
                key={project.slug}
                className="glass-container group inset-0 overflow-hidden rounded-lg p-2 opacity-100 transition duration-300 hover:cursor-pointer hover:opacity-85"
              >
                <h3 className="mb-2 text-sm sm:text-xl">{project.title}</h3>
                <Link href={`/project/${project.slug}`}>
                  <Image
                    src={project.img}
                    alt="project image"
                    width={300}
                    height={200}
                    className="h-[100px] rounded-lg object-cover transition duration-300 group-hover:scale-105 sm:h-[200px]"
                  />
                </Link>
              </div>
            ),
        )}
      </div>
    </div>
  );
}

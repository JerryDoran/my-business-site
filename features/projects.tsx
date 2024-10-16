import Bounded from "@/components/bounded";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import { projects } from "@/data/siteData";
import Image from "next/image";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <Bounded>
      <div className="hero-heading">
        <h1 className="hero-heading text-balance text-4xl font-semibold sm:text-7xl">
          <span className="heading-gradient">My</span> recent projects
        </h1>
      </div>
      <div className="mt-4 max-w-xl sm:align-baseline md:text-xl" id="projects">
        <p className="prose prose-invert text-xl md:text-2xl">
          My goal is to be the one-stop shop solution for all my clients
          whenever they need anything done to their websites.
        </p>
      </div>
      <div className="relative mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
        <div className="absolute inset-0 -z-10 bg-blue-500/15 blur-2xl filter" />
        {featuredProjects.map(
          (project) =>
            project && (
              <div
                key={project.slug}
                className="glass-container group inset-0 overflow-hidden rounded-lg p-2 opacity-100 transition duration-300 hover:cursor-pointer hover:opacity-85"
              >
                <h3 className="mb-2 text-sm sm:text-xl">{project.title}</h3>
                <Link
                  href={`/project/${project.slug}`}
                  className="after:absolute after:inset-0 hover:underline"
                >
                  <Image
                    src={project.img}
                    alt="project image"
                    className="h-[100px] rounded-lg object-cover transition duration-300 group-hover:scale-105 sm:h-[250px]"
                  />
                </Link>
              </div>
            ),
        )}
      </div>

      <Link
        href="/projects"
        className="mt-6 inline-flex h-fit w-fit items-center gap-2 rounded-xl border border-violet-200/40 bg-violet-100/20 px-4 py-3 text-sm tracking-wider text-violet-100 outline-none ring-violet-300 transition-colors after:absolute hover:border-violet-200/40 hover:bg-violet-500/10 hover:text-violet-400 focus:ring-2 md:px-4"
      >
        See all projects
        <PiArrowRight className="size-4 font-bold" />
      </Link>
    </Bounded>
  );
}

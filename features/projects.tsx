import Bounded from "@/components/bounded";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

export default function Projects() {
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
        <div className="absolute inset-0 -z-10 bg-blue-500/10 blur-2xl filter" />
        {/* {projects.map(
          (project, index) =>
            project && (
              <div
                key={project.id}
                className="glass-container inset-0 overflow-hidden rounded-lg p-2 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100"
              >
                <h3 className="mb-2 sm:text-xl">
                  <PrismicText field={project.data.project} />
                </h3>
                <PrismicNextLink
                  document={project}
                  className="after:absolute after:inset-0 hover:underline"
                >
                  <PrismicNextImage
                    field={project.data.project_image}
                    className="max-h-[200px] rounded-lg object-cover transition duration-[700ms] group-hover:scale-105"
                  />
                </PrismicNextLink>
              </div>
            ),
        )} */}
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

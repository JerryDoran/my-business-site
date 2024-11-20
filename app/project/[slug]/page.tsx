"use client";

import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/siteData";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const [project] = projects.filter((project) => project.slug === params.slug);
  return {
    title: `${project.title} | Project by TheWebArchitech`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Project by TheWebArchitech`,
      description: project.description,
      images: [
        { url: project.img.src, width: 1200, height: 630, alt: project.title },
      ],
    },
  };
}

export default function Page({ params }: { params: Params }) {
  const [project] = projects.filter((project) => project.slug === params.slug);
  const router = useRouter();

  return (
    <Bounded as="article" className="p-6">
      <div className="relative grid-cols-2 max-md:grid max-md:grid-cols-1 max-md:place-items-center max-md:text-center">
        <StarGrid />
        <div className="p-8">
          <h1 className="text-7xl font-medium">
            <p className="mb-4 text-lg text-violet-500">Project</p>
            {project.title}
          </h1>
          <p className="mb-8 mt-6 max-w-lg text-[17px] text-slate-300 md:text-lg">
            {project.description}
          </p>
          <div className="flex flex-col justify-start lg:flex-row lg:gap-12">
            <div className="glass-container flex-2 relative max-w-[600px]">
              <div className="absolute inset-0 -z-10 bg-blue-500/10 blur-2xl filter" />
              <Image
                src={project.img}
                alt="project image"
                className="max-h-[300px] w-full rounded-lg object-cover"
              />
            </div>
            <div className="sm:flex-1">
              <p className="mb-10 mt-10">{project.summary}</p>
              <div className="flex flex-col gap-6 max-sm:items-center">
                <Link
                  href={project.demoLink}
                  className="w-fit rounded-xl border border-violet-200/40 bg-violet-100/20 px-3 py-2 text-sm font-semibold tracking-wider text-violet-100 outline-none ring-violet-300 transition-colors hover:border-violet-200/40 hover:bg-violet-500/10 hover:text-violet-400 focus:ring-2 max-sm:text-center lg:flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </Link>
                <button
                  onClick={() => router.back()}
                  className="w-fit px-2 py-2 text-sm transition hover:text-violet-400 hover:underline max-sm:text-center"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `${project.title} | Project by TheWebArchitech`,
            description: project.description,
            url: `https://www.thewebarchitech.com/projects/${project.slug}`,
            image: project.img,
            mainEntity: {
              "@type": "CreativeWork",
              name: project.title,
              description: project.description,
              image: project.img,
              url: project.demoLink,
              creator: {
                "@type": "Organization",
                name: "The Web Architech",
              },
            },
          }),
        }}
      />
    </Bounded>
  );
}

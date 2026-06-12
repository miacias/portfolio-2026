import type { ProjectDetails } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export const Project = ({ project }: { project: ProjectDetails }) => {
  const imageClasses =
    "h-48 lg:h-auto lg:w-52 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden";
  const imageStyle = { backgroundImage: `url('/images/${project.name}.png')` };

  return (
    <div
      className={`project-card max-w-sm w-full lg:w-[56rem] lg:max-w-[56rem] lg:flex ${project.isFeatured ? "h-96" : ""}`}
    >
      {project.homepageUrl ? (
        <Link
          href={project.homepageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${imageClasses} block cursor-pointer`}
          style={imageStyle}
          title={`Open ${project.formattedName}`}
          aria-label={`Open ${project.formattedName} website`}
        >
          <span className="sr-only">{project.formattedName}</span>
        </Link>
      ) : (
        <div
          className={imageClasses}
          style={imageStyle}
          title={`${project.formattedName} project image`}
        />
      )}

      <div className="flex-1 min-w-0 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="details-container mb-8">
          <div className="formatted-name text-gray-900 font-bold text-xl mb-2">
            {project.formattedName}
          </div>

          <div className="project-description text-sm text-gray-600 flex items-center">
            <div className="project-links flex space-x-2 mb-6">
              {project.homepageUrl && (
                <div className="w-16 h-6 rounded-lg bg-fuchsia-700">
                  <a
                    href={project.homepageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full text-center leading-6 text-white font-medium"
                  >
                    Site
                  </a>
                </div>
              )}

              {project.demoLink && (
                <div className="w-16 h-6 rounded-lg bg-purple-600">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full text-center leading-6 text-white font-medium"
                  >
                    Demo
                  </a>
                </div>
              )}

              {project.url && (
                <div className="w-16 h-6 rounded-lg bg-purple-300">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full text-center leading-6 text-white font-medium"
                  >
                    GitHub
                  </a>
                </div>
              )}
            </div>
          </div>

          <p className="text-gray-700 text-base">{project.description}</p>
        </div>

        <div className="tools-container flex items-center">
          <Image
            className="w-10 h-10 mr-4"
            src={`/tools.png`}
            alt={project.formattedName}
            width={40}
            height={40}
          />

          <div className="text-sm">
            <p className="text-gray-900 font-bold leading-none">Tools Used</p>

            <p className="text-gray-600">
              {project.repositoryTopics &&
                project.repositoryTopics.nodes
                  .map((node) => node.topic.name)
                  .join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

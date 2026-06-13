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

          {project.isFreelance && (
            <div className="freelance-indicator flex items-center mb-2">
              <svg
                fill="#065F46"
                height="1em"
                width="1em"
                viewBox="0 0 36 36"
                version="1.1"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>dollar-solid</title>
                <path
                  className="clr-i-solid clr-i-solid-path-1"
                  d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.65,21.59c-1,3-3.61,3.84-5.9,4v2a1.25,1.25,0,0,1-2.5,0V27.59A11.47,11.47,0,0,1,11,25a1.25,1.25,0,1,1,1.71-1.83,9.11,9.11,0,0,0,4.55,1.94V18.83a9.63,9.63,0,0,1-3.73-1.41,4.8,4.8,0,0,1-1.91-5.84c.59-1.51,2.42-3.23,5.64-3.51V6.25a1.25,1.25,0,0,1,2.5,0V8.11a9.67,9.67,0,0,1,4.9,2A1.25,1.25,0,0,1,23,11.95a7.14,7.14,0,0,0-3.24-1.31v6.13c.6.13,1.24.27,1.91.48a5.85,5.85,0,0,1,3.69,2.82A4.64,4.64,0,0,1,25.65,23.59Z"
                ></path>
                <path
                  className="clr-i-solid clr-i-solid-path-2"
                  d="M20.92,19.64c-.4-.12-.79-.22-1.17-.3v5.76c2-.2,3.07-.9,3.53-2.3a2.15,2.15,0,0,0-.15-1.58A3.49,3.49,0,0,0,20.92,19.64Z"
                ></path>
                <path
                  className="clr-i-solid clr-i-solid-path-3"
                  d="M13.94,12.48a2.31,2.31,0,0,0,1,2.87,6.53,6.53,0,0,0,2.32.92V10.55C15.16,10.8,14.19,11.84,13.94,12.48Z"
                ></path>
                <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
              </svg>
              <span className="ml-1 text-sm text-green-700 font-medium">Freelance</span>
            </div>
          )}

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

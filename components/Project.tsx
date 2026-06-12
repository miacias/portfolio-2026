import type { ProjectDetails } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export const Project = ({ project }: { project: ProjectDetails }) => {
  const imageClasses =
    "h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden";
  const imageStyle = { backgroundImage: `url('/images/${project.name}.png')` };
  // console.log(project)
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
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

        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-sm text-gray-600 flex items-center">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-gray-500 w-3 h-3 mr-2"
              >
                <path
                  fill="#000000"
                  d="M8,2 C14,2 16,8 16,8 C16,8 14,14 8,14 C2,14 0,8 0,8 C0,8 2,2 8,2 Z M8,4 C5.76219,4 4.27954,5.08865 3.28644,6.28037 C2.78373,6.88363 2.42604,7.49505 2.1951,7.95693 L2.17372,8 L2.1951,8.04307 C2.42604,8.50495 2.78373,9.11637 3.28644,9.71963 C4.27954,10.9113 5.76219,12 8,12 C10.2378,12 11.7205,10.9113 12.7136,9.71963 C13.2163,9.11637 13.574,8.50495 13.8049,8.04307 L13.8263,8 L13.8049,7.95693 C13.574,7.49505 13.2163,6.88363 12.7136,6.28037 C11.7205,5.08865 10.2378,4 8,4 Z M8,5 C8.30747,5 8.60413,5.04625 8.88341,5.13218 C8.36251,5.36736 8,5.89135 8,6.5 C8,7.32843 8.67157,8 9.5,8 C10.1087,8 10.6326,7.63749 10.8678,7.11659 C10.9537,7.39587 11,7.69253 11,8 C11,9.65685 9.65685,11 8,11 C6.34315,11 5,9.65685 5,8 C5,6.34315 6.34315,5 8,5 Z"
                />
              </svg>

              <div className="flex space-x-2">
                {project.homepageUrl && (
                  <div className="w-16 h-6 rounded-lg bg-purple-500">
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
                  <div className="w-16 h-6 rounded-lg bg-purple-300">
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

            <div className="text-gray-900 font-bold text-xl mb-2">
              {project.formattedName}
            </div>

            <p className="text-gray-700 text-base">{project.description}</p>
          </div>

          <div className="flex items-center">
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

      {/* <div
        key={project.name}
        className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8 text-gray-700 text-center"
      >
        <div className="flex-1 flex flex-col md:flex-row justify-between items-center">
          <div className="h-6 w-48 bg-gray-300 rounded">
            {project.formattedName}
          </div>

          <div className="flex gap-5 mt-3 md:mt-0">
            {project.homepageUrl && (
              <div className="w-24 h-6 rounded-lg bg-purple-500">
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
              <div className="w-24 h-6 rounded-lg bg-purple-300">
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
              <div className="w-24 h-6 rounded-lg bg-purple-300">
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

        <div className="project-details">
          <p className="text-sm text-gray-500">{project.description}</p>

          <div className="topics border-amber-50">
            {project.topics && project.topics.join(", ")}
          </div>
        </div>
      </div> */}
    </>
  );
};

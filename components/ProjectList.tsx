"use client";

import { useEffect, useState } from "react";
import { filterRepos, setProjectDetails } from "@/utils/githubRepos";
import { Project } from "./Project";
import type { ProjectDetails } from "@/interfaces";

export const ProjectList = () => {
  const [projectData, setProjectData] = useState(
    null as ProjectDetails[] | null,
  );

  const query = `
    query {
      user(login: "miacias") {
        repositories(first: 100, privacy: PUBLIC) {
          nodes {
            name
            description
            url
            homepageUrl
            createdAt
            updatedAt
            repositoryTopics(first: 20) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  const fetchRepositories = async () => {
    try {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data.user.repositories.nodes;
    } catch (err) {
      console.error("Error fetching GitHub data:", err);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRepositories();
      if (data) {
        const filteredRepos = filterRepos(data);
        const detailedProjects = setProjectDetails(filteredRepos);
        setProjectData(detailedProjects);
        // console.log(detailedProjects);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center md:px-16 px-8">
      <div className="relative w-full max-w-lg">
        {/* <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-80 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}

        <div className="m-8 relative space-y-4">
          {/* {projectData &&
            projectData.length > 0 &&
            projectData.map((project) => {
              return (
                <div
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
                </div>
              );
            })} */}

          {projectData &&
            projectData.length > 0 &&
            projectData.map((project) => {
              return <Project key={project.name} project={project} />;
            })}
        </div>
      </div>
    </div>
  );
};

import { filterRepos, setProjectDetails } from "@/utils/githubRepos";
import { Project } from "./Project";
import type { ProjectDetails } from "@/interfaces";

export const ProjectList = async () => {
  let projectData: ProjectDetails[] | null = null;

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
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 3600 },
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

  const data = await fetchRepositories();

  if (data) {
    const filteredRepos = filterRepos(data);
    projectData = setProjectDetails(filteredRepos);
  }

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center md:px-16 px-8">
      <div className="relative w-full max-w-lg">
        {/* <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-80 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}

        <div className="m-8 relative space-y-4">
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

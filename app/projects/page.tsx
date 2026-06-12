import { filterRepos, setProjectDetails } from "@/utils/githubRepos";
import { Project } from "@/components/Project";
import type { ProjectDetails } from "@/interfaces";

export default async function ProjectsPage() {
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
    <div className="project-list-section min-h-screen flex items-center justify-center md:px-16 px-8">
        <div className="m-8 relative space-y-4">
          {projectData &&
            projectData.length > 0 &&
            projectData.map((project) => {
              return <Project key={project.name} project={project} />;
            })}
        </div>
    </div>
  );
}

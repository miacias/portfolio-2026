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
    <section className="project-page max-w-3xl mx-auto text-center text-gray-700 l px-4 py-8">
      <h2 className="section-header text-2xl md:text-3xl font-bold text-purple-900 my-4">
        My Projects
      </h2>

      <p className="intro-text max-w-3xl mx-auto text-center text-gray-700 text-lg md:text-xl px-4 py-8">
        {`Outside of NDA work for the U.S. Navy and private companies, my projects showcase a wide range of modern web technologies and full stack experience. Notably, I completed a large project for Alternate Universes LLC, which is a Next.js frontend on top of a Headless WordPress backend. Please schedule a 1:1 demo to get a glimpse of my Alternate Universes LLC work!`}
      </p>

      <div className="project-list-section min-h-screen flex items-center justify-center md:px-16 px-8">
        <div className="m-8 relative space-y-4">
          {projectData &&
            projectData.length > 0 &&
            projectData.map((project) => {
              return <Project key={project.name} project={project} />;
            })}
        </div>
      </div>
    </section>
  );
}

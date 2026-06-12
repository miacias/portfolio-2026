interface GithubRepo {
  name: string;
  description: string;
  url: string;
  homepageUrl?: string;
  createdAt: string;
  updatedAt: string;
  repositoryTopics: {
    nodes: {
      topic: {
        name: string;
      };
    }[];
  };
}

interface ProjectDetails extends GithubRepo {
  formattedName: string;
  demoLink?: string | null;
  deployedLink?: string | null;
  topics?: string[] | null;
}

export type { GithubRepo, ProjectDetails };

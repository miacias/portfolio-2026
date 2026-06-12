import type { GithubRepo, ProjectDetails } from "@/interfaces";
import { formatName } from "./format";

const projects = [
  {
    name: "alternate-universes",
    formattedName: "Alternate Universes",
    description:
      "A web app that delivers consumers the latest news and updates via a Headless WordPress that leverages React, Next.js, Apollo GraphQL, Faust.js, Mantine UI, and PHP on the WP Engine platform.",
    repositoryTopics: {
      nodes: [
        { topic: { name: "React" } },
        { topic: { name: "Next.js" } },
        { topic: { name: "Apollo GraphQL" } },
        { topic: { name: "Faust.js" } },
        { topic: { name: "Mantine UI" } },
        { topic: { name: "PHP" } },
        { topic: { name: "WP Engine" } },
      ],
    },
    homepageUrl: "https://alternateu.com",
    url: "" /*"https://github.com/miacias/alternate-universes"*/,
    createdDate: "March 25, 2024",
    updatedDate: "October 1st, 2025",
  },
  {
    name: "d3-test",
    formattedName: "D3 Test",
    description:
      "A project that explores the capabilities of D3.js for creating interactive data visualizations of maps.",
  },
  {
    name: "lees-cleaners",
    formattedName: "Lee's Cleaners",
  },
  {
    name: "state-park-excursion",
    formattedName: "State Park Excursion",
  },
  {
    name: "weather-forecast",
    formattedName: "Weather Forecast",
  },
  {
    name: "hey-boo-boo",
    formattedName: "Hey Boo Boo",
  },
  {
    name: "brew-buddies-v2",
    formattedName: "Brew Buddies v2",
  },
  {
    name: "organigramme",
    formattedName: "Organigramme",
  },
  {
    name: "e-commerce-database",
    formattedName: "E-Commerce Database",
  },
];

export const filterRepos = (repos: GithubRepo[]) => {
  const projectNames = projects.map((project) => project.name);
  return repos.filter((repo) => projectNames.includes(repo.name));
};

export const findDemoVideo = (name: string) => {
  const youtubeDemos = [
    {
      name: "Brew Buddies v2",
      link: "https://youtu.be/2a89CTdvhDI",
    },
    {
      name: "Hey Boo Boo",
      link: "https://youtu.be/Hr_MiHfB8rQ",
    },
    {
      name: "State Park Excursion",
      link: "https://youtu.be/KO30hAY_lMc",
    },
  ];
  // console.log("Finding demo video for:", name);
  const demo = youtubeDemos.find(
    (demo) => demo.name.toLowerCase() === name.toLowerCase(),
  );
  return demo ? demo.link : null;
};

export const sortReposByProjectOrder = (repos: GithubRepo[]) => {
  return repos.sort((a, b) => {
    const aIndex = projects.findIndex((project) => project.name === a.name);
    const bIndex = projects.findIndex((project) => project.name === b.name);

    // If project not found in the projects array, put it at the end
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;

    return aIndex - bIndex;
  });
};

export const setProjectDetails = (
  filteredRepos: GithubRepo[],
): ProjectDetails[] => {
  // Create map of GitHub repos for quick lookup
  const repoMap = new Map(filteredRepos.map((repo) => [repo.name, repo]));

  // Process all projects, using GitHub data when available
  const allProjects = projects.map((project) => {
    const repo = repoMap.get(project.name);

    if (repo) {
      // Use GitHub repo data as base, override with project details
      return {
        ...repo,
        formattedName: project.formattedName || formatName(repo.name),
        demoLink: findDemoVideo(project.formattedName || repo.name),
        description: project.description || repo.description,
      };
    } else {
      // Create project details from projects array only
      return {
        name: project.name,
        formattedName: project.formattedName || formatName(project.name),
        demoLink: findDemoVideo(project.formattedName || project.name),
        description: project.description || "",
        // Map to the correct interface property names
        url: project.url || "",
        homepageUrl: project.homepageUrl || "",
        createdAt: project.createdDate || "",
        updatedAt: project.updatedDate || "",
        repositoryTopics: project.repositoryTopics || { nodes: [] },
      };
    }
  });

  return allProjects;
};

import React, { useEffect, useState } from "react";

const featuredProjects = [
  {
    title: "PID Control Project",
    description: "PID control for throttle and steering in a self-driving car simulator.",
    github: "https://github.com/shuklam20/CarND-PID-Control-Project",
    image: "https://raw.githubusercontent.com/shuklam20/CarND-PID-Control-Project/master/gifs/throttle_and_steer_pid.gif",
  },
  {
    title: "Vehicle and lane Detection",
    description: "Detects vehicles on roads using HOG features and SVM.",
    github: "https://github.com/shuklam20/CarND-Vehicle-Detection-P5",
    image: "https://raw.githubusercontent.com/shuklam20/CarND-Vehicle-Detection-P5/master/output.gif",
  },
  {
    title: "Path planning",
    description: "Plans smooth driving paths for autonomous vehicles.",
    github: "https://github.com/shuklam20/CarND-Path-Planning-Project",
    image: "https://raw.githubusercontent.com/shuklam20/CarND-Path-Planning-Project/master/output1.gif",
  },
  {
    title: "F1-10 Simulator",
    description: "F1TENTH simulator for autonomous racing cars (UPenn).",
    github: "https://github.com/mlab-upenn/f1_10_sim",
    image: "https://raw.githubusercontent.com/mlab-upenn/f1_10_sim/master/output2.gif",
  },
];

const GitHubFeed = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const filtered = data.filter(repo =>
            !repo.fork && !repo.archived && repo.name !== "dotfiles" && repo.name !== "shuklam20"
          );
          setRepos(filtered);
        }
      });
  }, [username]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {repos.map(repo => (
        <div key={repo.id} className="border rounded-xl p-4 bg-white dark:bg-slate-800 shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">{repo.name}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">{repo.description}</p>
          <p className="text-xs mt-2 text-gray-500">⭐ {repo.stargazers_count} • {repo.language}</p>
          <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-blue-500 text-sm mt-2 inline-block">View on GitHub</a>
        </div>
      ))}
    </div>
  );
};

export default function ProjectsHybrid() {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <div key={index} className="rounded-xl border bg-white dark:bg-slate-800 p-4 shadow-md hover:shadow-lg transition">
            <img src={project.image} alt={project.title} className="rounded mb-3 w-full h-40 object-cover" />
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
            <a href={project.github} className="text-blue-500 inline-block mt-2" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">More Projects from GitHub</h2>
      <GitHubFeed username="shuklam20" />
      <GitHubFeed username="smanas20" />
    </section>
  );
}

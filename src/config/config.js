
import { Octokit } from '@octokit/core';


const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN
});

export default octokit;


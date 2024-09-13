// src/hooks/config.js
import { Octokit } from '@octokit/core';

// Initialize Octokit with your GitHub token from environment variables
const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN
});

export default octokit;


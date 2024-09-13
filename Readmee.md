
# GitHub Repo Finder

## Overview

GitHub Repo Finder is a React application that helps users discover random GitHub repositories based on a selected programming language. The app leverages the GitHub API to fetch and display repositories sorted by stars.

## Features

- **Select Programming Language**: Choose from various programming languages to filter repositories.
- **Random Repository Finder**: Fetch a random repository based on the selected language.
- **Repository Details**: View key details about the repository including stars, forks, issues, and language.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/github_repo_finder.git
   ```

2. **Navigate to Project Directory**

   ```bash
   cd github_repo_finder
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Create `.env` File**

   Create a `.env` file in the root directory and add your GitHub Personal Access Token:

   ```plaintext
   REACT_APP_GITHUB_TOKEN=your_github_personal_access_token
   ```

## Usage

1. **Start the Development Server**

   ```bash
   npm start
   ```

2. **Open in Browser**

   Navigate to `http://localhost:3000` to use the application.

## Components

- **`App.js`**: The main component that renders the application UI and handles state for selected language and repository fetching.
- **`GithubRepo.js`**: Displays details of the selected GitHub repository.
- **`useGithubInfo.js`**: Custom hook that handles API requests to fetch repository data based on the selected language.

## Custom Hook: `useGithubInfo`

- **`language`**: The programming language selected by the user.
- **`fetchGithubRepo`**: Function to fetch a random repository based on the selected language.
- **Returns**: `{ repo, fetchGithubRepo }` — `repo` is the repository data and `fetchGithubRepo` is the function to call.

## API Usage

- **`GET /search/repositories`**: Fetches repositories based on query parameters.
  - `q`: Search query (e.g., `language:JavaScript`).
  - `sort`: Sort by criteria (e.g., `stars`).
  - `order`: Order of results (e.g., `desc`).

# GitHub Repo Finder

Here are screenshots of the application:

<img src="images/1.png" alt="Github Repo Finder" width="400"/>
<img src="images/2.png" alt="Github Repo Finder" width="400"/>

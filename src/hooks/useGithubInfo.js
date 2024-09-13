
import { useState, useEffect, useCallback } from 'react';
import octokit from '../config/config';

export default function useGithubInfo(language) {
    const [repo, setRepo] = useState(null);

    const fetchGithubRepo = useCallback(async () => {
        try {
            const response = await octokit.request('GET /search/repositories', {
                q: `language:${language}`,
                sort: 'stars',
                order: 'desc',
              
            });

            const data = response.data;
            if (data.items && data.items.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.items.length);
                const selectedRepo = data.items[randomIndex];

                const repoDetails = await octokit.request('GET /repos/{owner}/{repo}', {
                    owner: selectedRepo.owner.login,
                    repo: selectedRepo.name
                });
                setRepo(repoDetails.data);
            } else {
                setRepo(null);
                console.log('No repositories found');
            }
        } catch (error) {
            console.log('Error fetching repositories:', error);
        }
    }, [language]);

    useEffect(() => {
        fetchGithubRepo();
    }, [fetchGithubRepo]);

    return { repo, fetchGithubRepo };
}


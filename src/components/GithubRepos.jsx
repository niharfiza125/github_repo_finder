
import React from 'react';
import { StarIcon, ForkIcon, IssueIcon } from './Icons';

function GithubRepo({ repo, fetchGithubRepo }) {
    return (
        <div>
            <button 
                onClick={fetchGithubRepo} 
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Refresh Repo
            </button>

            {repo ? (
                <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-md shadow-md">
                    <div className="flex items-center space-x-4 mb-4">
                        <img src={repo.owner.avatar_url} alt={repo.owner.login} className="w-16 h-16 rounded-full border-2 border-gray-200" />
                        <div>
                            <h2 className="text-2xl font-bold text-blue-600 hover:underline">
                                <a href={repo.html_url} target="_blank">
                                    {repo.name}
                                </a>
                            </h2>
                            <p className="text-gray-600">{repo.owner.login}</p>
                        </div>
                    </div>

                    <p className="text-gray-700 mb-4">{repo.description || 'No description available.'}</p>

                    <div className="flex justify-between items-center text-gray-600 text-sm">
                        <div className="flex items-center space-x-2">
                            <StarIcon />
                            <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <ForkIcon />
                            <span>{repo.forks_count}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <IssueIcon />
                            <span>{repo.open_issues_count}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="font-semibold">Language:</span>
                            <span>{repo.language || 'N/A'}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-gray-500 mt-6">No repository found</p>
            )}
        </div>
    );
}

export default GithubRepo;

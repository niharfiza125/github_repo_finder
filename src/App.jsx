import React, { useState } from 'react';
import GithubRepo from './components/GithubRepos';
import useGithubInfo from './hooks/useGithubInfo';
import { FaStar, FaCodeBranch, FaExclamationCircle } from 'react-icons/fa';

const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'PHP'];

function App() {
    const [language, setLanguage] = useState('JavaScript');
    const { repo, fetchGithubRepo } = useGithubInfo(language);

    return (
        <div className="min-h-screen bg-gray-100 py-8 flex items-center justify-center">
            <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-4">GitHub Repo Finder</h1>
                    <p className="text-gray-600 mb-6">
                        Discover random repositories based on the selected programming language.
                    </p>

                    <label htmlFor="language" className="block text-lg font-semibold mb-2">Select Programming Language</label>
                    <select 
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {languages.map(lang => (
                            <option key={lang} value={lang}>{lang}</option>
                        ))}
                    </select>
                </div>
                
                <GithubRepo repo={repo} fetchGithubRepo={fetchGithubRepo} />
            </div>
        </div>
    );
}

export default App;

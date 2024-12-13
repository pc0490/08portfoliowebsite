import { useLoaderData } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { githubInfoLoader } from '../../api/githubApi'

function Github() {
    const { user, repos } = useLoaderData()
    
    return (
        <div className="bg-black w-full">
            <div className='container mx-auto px-4 py-8 min-h-screen'>
                {/* Profile Section */}
                <div className='flex flex-col md:flex-row items-center justify-center gap-8 mb-12 bg-gray-900/50 rounded-lg shadow-lg p-6 animate-fadeIn'>
                    <img 
                        src={user.avatar_url} 
                        alt="Profile" 
                        className='rounded-full w-48 h-48 object-cover 
                        transition-all duration-300
                        shadow-xl shadow-orange-500/20 
                        hover:shadow-orange-500/40 
                        hover:scale-105'
                    />
                    <div className='text-center md:text-left'>
                        <h1 className='text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text'>{user.name}</h1>
                        <p className='text-gray-300 mt-2'>{user.bio}</p>
                        <div className='flex gap-6 mt-4 justify-center md:justify-start'>
                            <div className='text-center hover:scale-110 transition-transform duration-300'>
                                <span className='block text-2xl font-bold text-blue-400'>{user.followers}</span>
                                <span className='text-gray-400'>Followers</span>
                            </div>
                            <div className='text-center hover:scale-110 transition-transform duration-300'>
                                <span className='block text-2xl font-bold text-blue-400'>{user.following}</span>
                                <span className='text-gray-400'>Following</span>
                            </div>
                            <div className='text-center hover:scale-110 transition-transform duration-300'>
                                <span className='block text-2xl font-bold text-blue-400'>{user.public_repos}</span>
                                <span className='text-gray-400'>Repositories</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Section */}
                <h2 className='text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-6'>Recent Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {repos.map((repo, index) => (
                        <a 
                            key={repo.id} 
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className='block bg-gray-900/50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 hover:bg-gray-800/50 hover:scale-105 animate-fadeIn'
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <h3 className='text-xl font-semibold text-gray-100 mb-2'>{repo.name}</h3>
                            <p className='text-gray-300 text-sm mb-4'>{repo.description || 'No description available'}</p>
                            <div className='flex items-center gap-4'>
                                <span className='flex items-center text-sm text-gray-500'>
                                    <div className={`w-3 h-3 rounded-full mr-2 ${repo.language ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                                    {repo.language || 'No language specified'}
                                </span>
                                <span className='flex items-center text-sm text-gray-500'>
                                    ⭐ {repo.stargazers_count}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Github
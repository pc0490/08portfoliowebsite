import { useLoaderData } from 'react-router-dom'
import { motion } from 'framer-motion'
// eslint-disable-next-line no-unused-vars
import { githubInfoLoader } from '../../api/githubApi'

function Github() {
    const { user, repos } = useLoaderData()
    
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#0B0B0B] min-h-screen pt-24"
        >
            <div className='container mx-auto px-4 py-8'>
                {/* Profile Section with Suspense */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className='flex flex-col md:flex-row items-center gap-8 mb-16'
                >
                    {user ? (
                        <>
                            <motion.img 
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                                src={user.avatar_url} 
                                alt="Profile" 
                                className='rounded-2xl w-48 h-48 object-cover'
                            />
                            <div className='space-y-4'>
                                <h1 className='text-4xl font-medium text-white'>{user.name}</h1>
                                <p className='text-gray-400 text-lg'>{user.bio}</p>
                                <div className='flex gap-8'>
                                    <div className='space-y-1'>
                                        <span className='block text-2xl font-medium text-white'>{user.followers}</span>
                                        <span className='text-gray-400'>Followers</span>
                                    </div>
                                    <div className='space-y-1'>
                                        <span className='block text-2xl font-medium text-white'>{user.following}</span>
                                        <span className='text-gray-400'>Following</span>
                                    </div>
                                    <div className='space-y-1'>
                                        <span className='block text-2xl font-medium text-white'>{user.public_repos}</span>
                                        <span className='text-gray-400'>Repositories</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="w-full h-48 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                        </div>
                    )}
                </motion.div>

                {/* Projects Section */}
                <div className='space-y-8'>
                    <h2 className='text-2xl font-medium text-white'>Recent Projects</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {repos ? repos.map((repo, index) => (
                            <motion.a 
                                key={repo.id} 
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.3,
                                    delay: index * 0.05
                                }}
                                whileHover={{ y: -8 }}
                                className='block bg-[#1A1A1A] rounded-lg p-6 space-y-4 transition-colors hover:bg-[#222222]'
                            >
                                <h3 className='text-lg font-medium text-white'>{repo.name}</h3>
                                <p className='text-gray-400 text-sm line-clamp-2'>
                                    {repo.description || 'No description available'}
                                </p>
                                <div className='flex items-center gap-4'>
                                    {repo.language && (
                                        <span className='flex items-center text-sm text-gray-400'>
                                            <span className='w-2.5 h-2.5 rounded-full bg-cyan-400 mr-2'></span>
                                            {repo.language}
                                        </span>
                                    )}
                                    <span className='flex items-center text-sm text-gray-400'>
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                                        </svg>
                                        {repo.stargazers_count}
                                    </span>
                                </div>
                            </motion.a>
                        )) : (
                            <div className="col-span-3 h-32 flex items-center justify-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Github
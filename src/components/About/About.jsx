import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full bg-[#0B0B0B] min-h-screen pt-24"
        >
            <div className="container mx-auto px-4 py-8">
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto space-y-12"
                >
                    {/* About Me Header Section */}
                    <section className="text-center space-y-4">
                        <div className="inline-block p-3 rounded-full bg-[#161616] mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h1 className="text-5xl font-bold text-white">
                            About <span className="text-emerald-500">Me</span>
                        </h1>
                        <p className="text-gray-400 mt-2">&quot;Turning curiosity into creation&quot;</p>
                    </section>

                    {/* Profile Section */}
                    <section className="flex flex-col md:flex-row items-start gap-12">
                        <div className="relative w-[320px] h-[400px] group [perspective:1000px]">
                            {/* Card Container */}
                            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                {/* Front Image */}
                                <div className="absolute inset-0">
                                    <motion.img
                                        src="/Kodai2.jpg"
                                        alt="Profile"
                                        className="h-full w-full rounded-xl object-cover shadow-2xl [backface-visibility:hidden]"
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>

                                {/* Back Image */}
                                <div className="absolute inset-0 h-full w-full rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <motion.img
                                        src="/Kodai1.jpg"
                                        alt="AlternateProfile"
                                        className="h-full w-full rounded-xl object-cover shadow-2xl"
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 text-left flex-1">
                            <h2 className="text-5xl font-bold text-white tracking-tight">
                                Piyush Chauhan
                            </h2>
                            <p className="text-emerald-500 text-xl font-medium tracking-wide">
                                Full Stack Developer In The Making
                            </p>
                            <div className="space-y-4">
                                <p className="text-gray-300 text-lg leading-relaxed font-light">
                                    Hello! You can call me Piyush. With a strong foundation in Computer Science 
                                    and Engineering, I am passionate about creating efficient and innovative solutions.
                                </p>
                                <p className="text-gray-300 text-lg leading-relaxed font-light">
                                    I&apos;m a second-year B.Tech Computer Science student at SRM University with a passion for 
                                    exploring the world and discovering its natural wonders. Whether it&apos;s the calming sound 
                                    of rain or the thrill of visiting new places, I find joy in nature and adventure. When I&apos;m
                                    not coding or diving into tech projects, you&apos;ll likely find me wandering through lush landscapes
                                    or planning my next journey! 🌍✨
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold text-white tracking-wide">Skills & Technologies</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['React', 'JavaScript', 'Python', 'Java', 'C', 'HTML', 'CSS', 'DSA'].map((skill) => (
                                <motion.div
                                    key={skill}
                                    whileHover={{ scale: 1.05, backgroundColor: '#1A1A1A' }}
                                    className="p-4 rounded-lg bg-[#161616] text-gray-300 text-center
                                        transition-colors duration-200 font-light"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold text-white tracking-wide">More To Know</h2>
                        <div className="space-y-4 text-gray-300">
                            <p className="leading-relaxed font-light">
                                I am on a journey to master full-stack development. My expertise in C 
                                programming and DSA forms the backbone of my problem-solving skills, 
                                while my knowledge of Java, Python, and modern web technologies enables 
                                me to deliver end-to-end solutions.
                            </p>
                            <p className="leading-relaxed font-light">
                                I am committed to excellence and thrive on building efficient, impactful, 
                                and innovative software solutions. I am always eager to learn and contribute 
                                to innovative projects.
                            </p>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href="mailto:piyushchauhan0490@gmail.com"
                                className="px-6 py-3 bg-[#1A1A1A] rounded-lg text-gray-400 hover:text-white
                                    transition-colors duration-200"
                            >
                                Email Me
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href="https://github.com/pc0490"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-[#1A1A1A] rounded-lg text-gray-400 hover:text-white
                                    transition-colors duration-200"
                            >
                                GitHub Profile
                            </motion.a>
                        </div>
                    </section>
                </motion.div>
            </div>
        </motion.div>
    )
}
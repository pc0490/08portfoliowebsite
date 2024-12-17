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
                    className="max-w-4xl mx-auto space-y-12"
                >
                    {/* Profile Section */}
                    <section className="flex flex-col md:flex-row items-center gap-12">
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            src="/piyush.jpg"
                            alt="Profile"
                            className="w-64 h-64 rounded-2xl object-cover shadow-2xl"
                        />
                        <div className="space-y-4 text-center md:text-left">
                            <h1 className="text-4xl font-bold text-white">
                                Full-Stack Developer
                            </h1>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                With a strong foundation in Computer Science and Engineering, 
                                I am passionate about creating efficient and innovative solutions.
                            </p>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">Skills & Technologies</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['React', 'JavaScript', 'Python', 'Java', 'C', 'HTML/CSS', 'Node.js', 'DSA'].map((skill) => (
                                <motion.div
                                    key={skill}
                                    whileHover={{ scale: 1.05, backgroundColor: '#1A1A1A' }}
                                    className="p-4 rounded-lg bg-[#161616] text-gray-400 text-center
                                        transition-colors duration-200"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">About Me</h2>
                        <div className="space-y-4 text-gray-400">
                            <p className="leading-relaxed">
                                I am on a journey to master full-stack development. My expertise in C 
                                programming and DSA forms the backbone of my problem-solving skills, 
                                while my knowledge of Java, Python, and modern web technologies enables 
                                me to deliver end-to-end solutions.
                            </p>
                            <p className="leading-relaxed">
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
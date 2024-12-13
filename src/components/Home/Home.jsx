import { motion } from 'framer-motion';

export default function Home() {
    const coursesCertificates = [
        { id: 1, src: "/WebDev.jpg", name: "Web Development Certificate" },
        { id: 2, src: "/Nptel.jpg", name: "NPTEL Java Certificate" },
        { id: 3, src: "/C.jpg", name: "C Certificate" },
    ];

    const internshipCertificates = [
        { id: 4, src: "/Eduskills.jpg", name: "Eduskills Internship Certificate"}
    ];

    const staggerContainer = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const fadeInUp = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.5 }
    };

    const cardVariants = {
        initial: { scale: 0.9, opacity: 0 },
        animate: { 
            scale: 1, 
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <div className="w-full bg-black min-h-screen">
            <motion.aside 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative overflow-hidden text-gray-100 sm:mx-16 mx-2 sm:py-16"
            >
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto animate-fadeIn">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 animate-pulse">
                            My Portfolio Website
                            <span className="hidden sm:block text-2xl sm:text-3xl md:text-4xl text-gray-300 transition-colors duration-300 animate-pulse">~ Piyush Chauhan</span>
                        </h2>
                    </div>
                </div>
            </motion.aside>

            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ 
                    y: 0, 
                    opacity: 1,
                    transition: {
                        duration: 0.5
                    }
                }}
                whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: {
                        duration: 0.5,
                        rotate: {
                            repeat: Infinity,
                            duration: 1
                        }
                    }
                }}
                className="absolute top-40 left-16"
            >
                <img 
                    className="sm:w-96 w-48 opacity-90 
                    transition-all duration-500
                    filter hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]"
                    src="/piyush.png"
                    alt="image2-left" 
                />
            </motion.div>

            <div className="flex justify-center items-center px-4 sm:px-16">
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="grid place-items-center sm:mt-20"
                >
                    <img 
                        className="sm:w-96 w-48 opacity-90 hover:opacity-100 
                        transition-all duration-500 animate-float 
                        hover:scale-105 filter hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]
                        hover:rotate-[-2deg]"
                        src="https://i.ibb.co/2M7rtLk/Remote1.png" 
                        alt="image2-right" 
                    />
                </motion.div>
            </div>

            <motion.h1 
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-xl sm:text-4xl py-10 font-medium text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text animate-pulse hover:scale-105 transition-transform duration-300"
            >
                Transforming Ideas into Seamless Web Experiences
            </motion.h1>

            <div id="about-section" className="max-w-xl mx-auto space-y-8 text-center my-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 animate-pulse">
                    About Me
                </h2>
            </div>

            <div className="container m-auto px-6 text-gray-300 md:px-12 xl:px-6 py-8">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-12">
                    <div className="md:5/12 lg:w-4/12 animate-slideIn">
                        <img
                            className="rounded-xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
                            src="https://images.pexels.com/photos/22698026/pexels-photo-22698026/free-photo-of-wind-turbines-on-mountains-with-winding-roads.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                            alt="about image"
                            width={300}
                        />
                    </div>
                    <div className="md:7/12 lg:w-7/12 animate-fadeIn pt-0">
                        <h2 className="text-2xl text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text font-bold md:text-4xl">
                            Full-Stack Developer in the Making
                        </h2>
                        <p className="mt-4 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                            With a strong foundation in Computer Science and Engineering, I am 
                            on a journey to master full-stack development. My expertise in C 
                            programming and DSA forms the backbone of my problem-solving skills, 
                            while my knowledge of Java, Python, and modern web technologies like 
                            React.js, HTML, and CSS enables me to deliver end-to-end solutions. 
                            I am always eager to learn and contribute to innovative projects.
                        </p>
                        <p className="mt-4 text-gray-300">
                            I am committed to excellence and thrive on building efficient, impactful, 
                            and innovative software solutions.
                        </p>
                    </div>
                </div>

                <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="mt-16 space-y-8"
                >
                    <motion.h2 
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 animate-pulse mb-12"
                    >
                        Courses Certifications
                    </motion.h2>

                    <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 max-w-3xl mx-auto">
                        {coursesCertificates.map((cert) => (
                            <motion.div 
                                key={cert.id}
                                variants={cardVariants}
                                whileHover="hover"
                                className="flex flex-col items-center space-y-4 max-w-xs mx-auto w-full"
                            >
                                <div className="relative aspect-[4/3] w-full">
                                    <img
                                        className="rounded-xl shadow-xl w-full h-full object-cover transition-all duration-300"
                                        src={cert.src}
                                        alt={cert.name}
                                    />
                                </div>
                                <p className="text-gray-300 text-center font-medium">
                                    {cert.name}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.h2 
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 animate-pulse mb-12 mt-16"
                    >
                        Internship Certifications
                    </motion.h2>

                    <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 max-w-3xl mx-auto">
                        {internshipCertificates.map((cert) => (
                            <motion.div 
                                key={cert.id}
                                variants={cardVariants}
                                whileHover="hover"
                                className="flex flex-col items-center space-y-4 max-w-xs mx-auto w-full"
                            >
                                <div className="relative aspect-[4/3] w-full">
                                    <img
                                        className="rounded-xl shadow-xl w-full h-full object-cover transition-all duration-300"
                                        src={cert.src}
                                        alt={cert.name}
                                    />
                                </div>
                                <p className="text-gray-300 text-center font-medium">
                                    {cert.name}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

// Import Framer Motion for animations...
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    // Data arrays for certificates
    const coursesCertificates = [
        { id: 1, src: "/WebDev.jpg", name: "Web Development Certificate" },
        { id: 2, src: "/Nptel.jpg", name: "NPTEL Java Certificate" },
        { id: 3, src: "/C.jpg", name: "C Certificate" },
        { id: 4, src: "/DSA.jpg", name: "DSA Certificate" },
    ];

    const internshipCertificates = [
        { id: 5, src: "/Eduskills.jpg", name: "Eduskills Internship Certificate"}
    ];

    // State for modal
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    // Enhanced animation variants
    const staggerContainer = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    // Enhanced card variants with shimmer effect
    const cardVariants = {
        initial: { scale: 0.95, opacity: 0, y: 30 },
        animate: { 
            scale: 1, 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    // Enhanced Certificate Card Component
    const CertificateCard = ({ cert }) => (
        <motion.div 
            variants={cardVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCertificate(cert)}
            className="flex flex-col items-center space-y-4 max-w-xs mx-auto w-full cursor-pointer
                transform perspective-1000 transition-all duration-300"
        >
            <div className="relative aspect-[4/3] w-full group overflow-hidden rounded-xl">
                <img
                    className="rounded-xl shadow-xl w-full h-full object-cover transition-all duration-500
                        group-hover:scale-110"
                    src={cert.src}
                    alt={cert.name}
                />
                {/* Enhanced overlay with certificate name */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl 
                    flex items-center justify-center backdrop-blur-sm">
                    <p className="text-white text-center font-medium px-4 transform scale-0 group-hover:scale-100 
                        transition-all duration-300 text-lg">
                        {cert.name}
                    </p>
                </div>
            </div>
        </motion.div>
    );

    CertificateCard.propTypes = {
        cert: PropTypes.shape({
            src: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired
    };

    const goToAbout = () => {
        navigate('/about');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full bg-[#0B0B0B] min-h-screen overflow-hidden"
        >
            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 pt-32 pb-20"
            >
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Left Content */}
                    <div className="flex-1">
                        {/* Status Badge */}
                        <motion.div 
                            className="inline-flex items-center gap-2 bg-[#1A1A1A] rounded-full px-4 py-2 mb-8"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-gray-400 text-sm">Currently Working On Building My Portfolio Website</span>
                        </motion.div>

                        {/* Main Heading */}
                        <h1 className="text-7xl font-bold text-white mb-6">
                            I&apos;m Piyush 
                        </h1>

                        {/* Description */}
                        <p className="text-gray-400 text-xl max-w-2xl mb-8">
                            I am working with React Ecosystem, learning to build modern web applications 
                            with focus on user experience and performance.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex gap-4">
                            <motion.a 
                                href="https://react.dev/learn"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-6 py-3 rounded-lg font-medium inline-block"
                            >
                                Learn How
                            </motion.a>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={goToAbout}
                                className="border border-gray-700 text-white px-6 py-3 rounded-lg font-medium"
                            >
                                More about me
                            </motion.button>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 mt-12">
                            {/* Your social links remain here */}
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-[300px] h-[300px] rounded-2xl overflow-hidden">
                            <motion.img
                                src="/piyush.jpg"
                                alt="HomeProfile"
                                className="w-full h-full object-cover"
                                whileHover={{ 
                                    scale: 1.05,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* Simple gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-50"></div>
                        </div>
                        {/* Added tagline below image */}
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-white text-center mt-4 italic text-lg"
                        >
                            Exploring, learning, and creating
                        </motion.p>
                        {/* Subtle decorative element */}
                        <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 
                            rounded-2xl blur opacity-20"></div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Projects/Certificates Section */}
            <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="py-20"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12">
                        Certifications
                    </h2>
                    
                    {/* Certificate Grid with shimmer effect */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
                        {[...coursesCertificates, ...internshipCertificates].map((cert) => (
                            <motion.div
                                key={cert.id}
                                variants={cardVariants}
                                whileHover="hover"
                                className="relative group w-full max-w-[200px]"
                                onClick={() => setSelectedCertificate(cert)}
                            >
                                {/* Updated shimmer border container with new colors */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-800 via-purple-900 to-gray-800 
                                    rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 
                                    group-hover:duration-200 animate-gradient-xy"></div>
                                
                                {/* Certificate card */}
                                <div className="relative flex flex-col bg-[#1A1A1A] rounded-lg cursor-pointer">
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                                        <img
                                            src={cert.src}
                                            alt={cert.name}
                                            className="w-full h-full object-cover transition-transform duration-300 
                                                group-hover:scale-110"
                                        />
                                        {/* Overlay with name on hover */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                                            transition-opacity duration-300 flex items-center justify-center">
                                            <p className="text-white text-sm font-medium px-2 text-center 
                                                transform scale-0 group-hover:scale-100 transition-all duration-300">
                                                {cert.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div className="container mx-auto px-4">
                    
                    <section className="space-y-6">
                            <h2 className="text-2xl font-semibold text-white tracking-wide mt-16 mb-12">What I&apos;ve Used To Build This Website</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'HTML', 'CSS'].map((skill) => (
                                    <motion.div
                                        key={skill}
                                        whileHover={{ scale: 1.07, backgroundColor: '#1A1A1A' }}
                                        className="p-4 rounded-lg bg-[#161616] text-gray-300 text-center
                                            transition-colors duration-200 font-light"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                    </section>
                </div>
                

                {/* Modal for viewing certificates */}
                <AnimatePresence>
                    {selectedCertificate && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCertificate(null)}
                            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        >
                            <motion.div
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.5 }}
                                className="relative max-w-4xl max-h-[90vh]"
                                onClick={e => e.stopPropagation()}
                            >
                                <img
                                    src={selectedCertificate.src}
                                    alt={selectedCertificate.name}
                                    className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg"
                                />
                                <button
                                    onClick={() => setSelectedCertificate(null)}
                                    className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 
                                        transition-colors duration-200"
                                >
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
                
            </motion.div>
        </motion.div>
    );
}

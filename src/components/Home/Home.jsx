// Import Framer Motion for animations...
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Home() {
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
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const fadeInUp = {
        initial: { y: 60, opacity: 0 },
        animate: { 
            y: 0, 
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        initial: { scale: 0.9, opacity: 0, y: 50 },
        animate: { 
            scale: 1, 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 0 20px rgba(168,85,247,0.4)",
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    // Modal Component
    const CertificateModal = ({ certificate, onClose }) => {
        if (!certificate) return null;

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            >
                <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.5 }}
                    className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center"
                    onClick={e => e.stopPropagation()}
                >
                    <img
                        src={certificate.src}
                        alt={certificate.name}
                        className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
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
        );
    };

    CertificateModal.propTypes = {
        certificate: PropTypes.shape({
            src: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }),
        onClose: PropTypes.func.isRequired
    };

    // Certificate Card Component
    const CertificateCard = ({ cert }) => (
        <motion.div 
            variants={cardVariants}
            whileHover="hover"
            onClick={() => setSelectedCertificate(cert)}
            className="flex flex-col items-center space-y-4 max-w-xs mx-auto w-full cursor-pointer"
        >
            <div className="relative aspect-[4/3] w-full group">
                <img
                    className="rounded-xl shadow-xl w-full h-full object-cover transition-all duration-300"
                    src={cert.src}
                    alt={cert.name}
                />
                {/* Overlay with certificate name */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 rounded-xl flex items-center justify-center">
                    <p className="text-white text-center font-medium px-4 transform scale-0 group-hover:scale-100 
                        transition-transform duration-300">
                        {cert.name}
                    </p>
                </div>
            </div>
            <p className="text-gray-300 text-center font-medium">
                {cert.name}
            </p>
            <p className="text-gray-300 text-center font-medium">
                {cert.name}
            </p>
        </motion.div>
    );

    CertificateCard.propTypes = {
        cert: PropTypes.shape({
            src: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full bg-black min-h-screen overflow-hidden"
        >
            {/* Header Section with Title */}
            <motion.aside 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative overflow-hidden text-gray-100 sm:mx-16 mx-2 sm:py-16"
            >
                {/* Portfolio title and name */}
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto animate-fadeIn">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 animate-pulse">
                            My Portfolio Website
                            <span className="hidden sm:block text-2xl sm:text-3xl md:text-4xl text-gray-300 transition-colors duration-300 animate-pulse">~ Piyush Chauhan</span>
                        </h2>
                    </div>
                </div>
            </motion.aside>

            {/* Profile Image with Enhanced Animation */}
            <motion.div 
                initial={{ y: 50, opacity: 0, rotate: -5 }}
                animate={{ 
                    y: 0, 
                    opacity: 1,
                    rotate: 0,
                    transition: {
                        duration: 0.8,
                        ease: "easeOut"
                    }
                }}
                whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -3, 3, -3, 0],
                    transition: {
                        duration: 0.5,
                        rotate: {
                            repeat: Infinity,
                            duration: 2
                        }
                    }
                }}
                className="absolute top-40 left-16 transition-all duration-300"
            >
                <img 
                    className="sm:w-96 w-48 opacity-90 
                    transition-all duration-500
                    filter hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]"
                    src="/piyush.jpg"
                    alt="image2-left" 
                />
            </motion.div>

            {/* Decorative Image Section with Enhanced Animation */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
            >
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
            </motion.div>

            {/* Enhanced Tagline Section */}
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center text-xl sm:text-4xl py-10 font-medium 
                text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 
                bg-clip-text animate-pulse hover:scale-105 transition-transform duration-300"
            >
                Transforming Ideas into Seamless Web Experiences
            </motion.h1>

            {/* About Section with Enhanced Animation */}
            <motion.div
                id="about-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-xl mx-auto space-y-8 text-center my-12"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 animate-pulse">
                    About Me
                </h2>
            </motion.div>

            {/* About Content with Image */}
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

                {/* Certificates Section with Enhanced Animations */}
                <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="mt-16 space-y-12"
                >
                    {/* Course Certificates */}
                    <motion.h2 
                        variants={fadeInUp}
                        whileHover={{ 
                            scale: 1.05,
                            textShadow: "0 0 8px rgb(168,85,247,0.4)",
                            transition: {i 
                                duration: 0.2,
                                yoyo: Infinity 
                            }
                        }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8
                        bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent
                        transition-all duration-300 transform
                        cursor-pointer select-none
                        filter drop-shadow-lg
                        animate-pulse"
                    >
                        Courses Certifications
                    </motion.h2>
                    <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 max-w-3xl mx-auto">
                        {coursesCertificates.map((cert) => (
                            <CertificateCard key={cert.id} cert={cert} />
                            <CertificateCard key={cert.id} cert={cert} />
                        ))}
                    </motion.div>

                    {/* Internship Certificates */}
                    <motion.h2 
                        variants={fadeInUp}
                        whileHover={{ 
                            scale: 1.05,
                            textShadow: "0 0 8px rgb(168,85,247,0.4)",
                            transition: { 
                                duration: 0.2,
                                yoyo: Infinity 
                            }
                        }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 mt-16
                        bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent
                        transition-all duration-300 transform
                        cursor-pointer select-none
                        filter drop-shadow-lg
                        animate-pulse"
                    >
                        Internship Certifications
                    </motion.h2>
                    <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 max-w-3xl mx-auto">
                        {internshipCertificates.map((cert) => (
                            <CertificateCard key={cert.id} cert={cert} />
                            <CertificateCard key={cert.id} cert={cert} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence mode="wait">
                {selectedCertificate && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 
                        backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedCertificate(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative w-full h-full flex items-center justify-center p-4"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={selectedCertificate.src}
                                alt={selectedCertificate.name}
                                className="w-auto h-auto max-w-[90%] max-h-[85vh] object-contain rounded-lg"
                            />
                            <button
                                onClick={() => setSelectedCertificate(null)}
                                className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
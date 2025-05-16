import { motion } from 'framer-motion';
import videoFile1 from '../assets/game1.mp4';
import videoFile2 from '../assets/game2.mp4';
import videoFile3 from '../assets/game3.mp4';
import articale from '../assets/articale.jpg';
import cv from '../assets/Charles Aaron CV.pdf';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import AboutSection from '../components/AboutSection ';

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="inline-block">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
);
const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="inline-block">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const DownloadIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="inline-block">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
    </svg>
);
const VideoPlayer = ({ src }: { src: string }) => (
    <video
        className="w-full h-full object-cover rounded-lg"
        controls
        muted
        loop
    >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
);
// Loader Component
const Loader = () => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative">
                <motion.div
                    className="w-20 h-20 border-4 border-purple-500 rounded-full"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl"
                    animate={{
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    🚀
                </motion.div>
            </div>
            <motion.p
                className="absolute bottom-10 text-purple-500 text-lg"
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                Loading awesome stuff...
            </motion.p>
        </motion.div>
    );
};
// Mobile Menu Button Component

interface MenuButtonProps {
    isOpen: boolean;
    toggle: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, toggle }) => (
    <button
        onClick={toggle}
        className="sm:hidden p-2 text-gray-200 hover:text-purple-500 transition-colors"
    >
        <motion.div
            className="w-6 h-5 flex flex-col justify-between"
            initial={false}
            animate={isOpen ? "open" : "closed"}
        >
            <motion.span
                className="w-full h-0.5 bg-current transform origin-left"
                variants={{
                    open: { rotate: 45 },
                    closed: { rotate: 0 },
                }}
            />
            <motion.span
                className="w-full h-0.5 bg-current"
                variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 },
                }}
            />
            <motion.span
                className="w-full h-0.5 bg-current transform origin-left"
                variants={{
                    open: { rotate: -45 },
                    closed: { rotate: 0 },
                }}
            />
        </motion.div>
    </button>
);
interface SkillCategoryProps {
    title: string;
    skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
    <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-purple-500">{title}</h3>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
                <span
                    key={index}
                    className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-purple-900 transition-colors"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Portfolio = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Add smooth scrolling behavior
        const handleNavClick = (e: MouseEvent) => {
            const target = e.target as HTMLAnchorElement;
            if (target.hash) {
                e.preventDefault();
                const element = document.querySelector(target.hash);
                if (element) {
                    // Account for the fixed header height (adjust 80 to match your header height)
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
                // Close mobile menu after clicking
                setIsMobileMenuOpen(false);
            }
        };

        // Add click event listeners to all navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick as EventListener);
        });

        // Cleanup
        return () => {
            clearTimeout(timer);
            navLinks.forEach(link => {
                link.removeEventListener('click', handleNavClick as EventListener);
            });
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    if (isLoading) {
        return <Loader />;
    }

    // Create a reusable navigation links component
    const NavigationLinks = ({ className = "", onClick = () => {} }) => (
        <>
            {["About", "Projects", "Skills", "Contact"].map((item) => (
                <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ scale: 1.1 }}
                    className={`hover:text-purple-500 transition-colors ${className}`}
                    onClick={onClick}
                >
                    {item}
                </motion.a>
            ))}
        </>
    );

    return (
        <div className="min-h-screen bg-black text-gray-200">
            <nav className="fixed w-full bg-black/50 backdrop-blur-sm z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                        >
                            Charles Aaron
                        </motion.h1>

                        <MenuButton isOpen={isMobileMenuOpen} toggle={toggleMobileMenu} />

                        {/* Desktop Menu */}
                        <div className="hidden sm:flex gap-6">
                            <NavigationLinks />
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="sm:hidden overflow-hidden"
                            >
                                <div className="py-4 flex flex-col gap-4">
                                    <NavigationLinks 
                                        className="text-center"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-4">
                <div className="container mx-auto py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Existing hero content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-left"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                                Software Engineer & Game Developer
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-400 mb-8">
                                Building impactful solutions through code, from ERP systems to engaging games
                                reaching 200,000+ players worldwide.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://github.com/arrondavide"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-colors"
                                >
                                    <GitHubIcon />
                                    View My Work
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/aaron-david-4a3156170/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors"
                                >
                                    <LinkedInIcon />
                                    Connect on LinkedIn
                                </a>
                                <a
                                    href={cv}
                                    download
                                    className="inline-flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full transition-colors"
                                >
                                    <DownloadIcon />
                                    Download CV
                                </a>
                            </div>
                        </motion.div>

                        {/* Right side - Featured Article */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-md mx-auto w-full"
                        >
                            <div className="bg-gray-900/50 backdrop-blur rounded-xl overflow-hidden shadow-2xl">
                                <div className="w-full max-w-[300px] mx-auto pt-6">
                                    <img
                                        src={articale}
                                        alt="Featured Article"
                                        className="w-full object-contain rounded-lg"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                        </svg>
                                        Featured Publication
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">From Gamer to Game-Changing Developer</h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        Featured in Ceylon Today - A journey of transformation from gaming enthusiast to innovative game developer.
                                    </p>
                                    <a
                                        href="https://ceylontoday.lk/wp-content/uploads/2024/02/Teen-Inc-18-2-2024-Teen-Inc.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                                    >
                                        Read Article
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* <section id="about" className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl font-bold mb-8">About Me</h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            I’m a Game Developer/Software Engineer with 2+ years of experience. I’ve made over 100 games, including Web3 games and apps. In my current company, I also worked on ERP systems to help businesses run their operations smoothly (basically, I made their work easier). I co-founded Jedi Studio with my friends, where we help businesses around the world go digital with our software solutions.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I also teamed up with a friend to create mWallet, a data security app (because keeping data safe is important). I’ve even spoken at international Web3 conferences. I love building games, solving problems, and helping businesses with cool tech ideas.
                        </p>
                    </motion.div>
                </div>
            </section> */}

            <AboutSection />


            <section id="projects" className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Featured Games</h2>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {games.map((game, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gray-900 rounded-lg overflow-hidden"
                            >
                                <div className="aspect-video bg-gray-800">
                                    <VideoPlayer src={game.videoSrc} />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                                    <p className="text-gray-400 mb-4">{game.description}</p>
                                    <div className="flex flex-wrap gap-4">
                                        {/* <a
                                            href={game.playLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple-500 hover:text-purple-400 transition-colors"
                                        >
                                            Play Game →
                                        </a>
                                        <a
                                            href={game.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple-500 hover:text-purple-400 transition-colors"
                                        >
                                            View Source →
                                        </a> */}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Applications</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {apps.map((app, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-black rounded-lg overflow-hidden p-6"
                            >
                                <h3 className="font-bold mb-2">{app.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{app.description}</p>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href={app.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-500 hover:text-purple-400 transition-colors"
                                    >
                                        Live Demo →
                                    </a>
                                    <a
                                        href={app.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-500 hover:text-purple-400 transition-colors"
                                    >
                                        View Source →
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="skills" className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
                    <div className="max-w-4xl mx-auto">
                        <SkillCategory
                            title="Software Development"
                            skills={[
                                "ERP Systems",
                                "Web Development",
                                "Android/iOS Development",
                                "React.js",
                                "Flutter",
                                "Electron"
                            ]}
                        />
                        <SkillCategory
                            title="Machine Learning & AI"
                            skills={[
                                "LSTM Models",
                                "NLP",
                                "VADER Sentiment Analysis",
                                "Keras",
                                "TensorFlow",
                                "Pandas",
                                "NumPy"
                            ]}
                        />
                        <SkillCategory
                            title="Game Development"
                            skills={[
                                "Unity",
                                "PlayCanvas",
                                "Unreal Engine",
                                "WebGL",
                                "3D Modeling",
                                "Texturing"
                            ]}
                        />
                        <SkillCategory
                            title="Database & Project Management"
                            skills={[
                                "MySQL",
                                "Firebase",
                                "Supabase",
                                "Jira",
                                "ClickUp",
                                "Agile/Scrum",
                                "DevOps"
                            ]}
                        />
                    </div>
                </div>
            </section>
            <section id="contact" className="py-20 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                    <div className="max-w-md mx-auto bg-gray-900 p-6 rounded-lg">
                        <p className="mb-4">
                            <span className="text-purple-500">Email:</span> charlesaaron577@gmail.com
                        </p>
                        <p className="mb-4">
                            <span className="text-purple-500">Phone:</span> (+94)706622302
                        </p>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

const games = [
    {
        title: "Last Star Farers(LSF)",
        description: "A Game to travel,Explorer,Transact and Progress",
        videoSrc: videoFile1,
        playLink: "https://dungeoncrawler.game",
        githubLink: "https://github.com/arrondavid/dungeon-crawler"
    },
    {
        title: "Rusties",
        description: "A Game which as a unique art style",
        videoSrc: videoFile2,
        playLink: "https://puzzlequest.game",
        githubLink: "https://github.com/arrondavid/puzzle-quest"
    },
    {
        title: "Interactive Augmented Reality with WhackMole game",
        description: "AR INteractive Game",
        videoSrc: videoFile3,
        playLink: "https://puzzlequest.game",
        githubLink: "https://github.com/arrondavid/puzzle-quest"
    }
];

const apps = [
    {
        title: "Pimpanans decentralized",
        description: "Pimpananas is a unique crypto-powered marketplace for buying and selling rare collectibles, gaming assets, NFTs, and luxury items. Users authenticate with their wallets and list products, while transactions are secured through escrow. Buyers and sellers connect via WhatsApp, Telegram, or personal sites, with a seamless admin panel for managing listings. With a techy, edgy vibe and the motto Just Pimp it, Pimpananas brings a fun, secure, and decentralized experience to the world of rare item trading.",
        demoLink: "https://pimpananas.vercel.app/",
        githubLink: "https://pimpananas.vercel.app/"
    },
    {
        title: "Palm Payment System",
        description: "This Flutter app demonstrates a basic palm recognition system using a mobile device's camera. It captures an image of the user's palm, processes the image to generate a unique hash by converting it to grayscale and resizing it, and compares the generated hash with a pre-stored hash to verify if the palm matches. The app uses the camera package for real-time camera feed, and a floating action button allows users to capture and process their palm scan. This concept showcases a simple approach to biometric identification, which can be expanded with more advanced image processing techniques in the future.",
        demoLink: "",
        githubLink: "https://github.com/arrondavide/palmdetection"
    },
    {
        title: "Badminton Shot Recognition Using Pose Estimation and PySimpleGUI",
        description: "Developed an innovative Python-based application that accurately detects and classifies badminton shots in real-time using pose estimation techniques. Leveraging OpenCV for video processing, MediaPipe for pose detection, and PySimpleGUI for creating an intuitive user interface, the project aims to assist in performance analysis and training.",
        demoLink: "https://www.linkedin.com/posts/aaron-david-4a3156170_python-deeplearning-algorithms-activity-7142538794741768193-iSAY?utm_source=social_share_send&utm_medium=member_desktop_web",
        githubLink: "https://github.com/arrondavide/BatmintonShots"
    },
    {
        title: "Stock Prediction and Market Sentiment Analyis ML",
        description: "The Stock Analysis and Prediction App is an interactive tool for analyzing and predicting stock trends using historical data, live market insights, and sentiment analysis. Built with Streamlit, it leverages an LSTM machine learning model to forecast stock prices, displays real-time market data, and analyzes news sentiment using VADER. Users can visualize trends, access buy/sell recommendations, and explore sentiment-driven insights for major energy companies, all in a user-friendly interface.",
        demoLink: "https://mintafyingstock.streamlit.app/",
        githubLink: "https://github.com/aaronzwe/mintafyingstock/blob/main/streamlit_app.py"
    },
    {
        title: "Voting App(Flutter)",
        description: "This is a voting app that helps you host or create voting sessions and also helps you get into the specific voting session using your nic and voting room id, which acts as the private key between voter and hoster. It also shows you the current stats of the election after you vote, and it also shows you what election or voting session you have visited and can help you revisit it and check the stats of the election.",
        demoLink: "https://www.linkedin.com/posts/aaron-david-4a3156170_project-voting-evoting-activity-7011362089512443904-jb0K?utm_source=social_share_send&utm_medium=member_desktop_web",
        githubLink: "https://github.com/arrondavide/votepoint"
    },
    {
        title: "Real-Time Full-Body Pose Synchronization with Unity",
        description: "This project uses OpenCV and cvzone to detect full-body poses in real time from webcam input and transmits the pose data via a UDP socket to Unity. The Unity application visualizes the data by synchronizing it with a 3D avatar, enabling interactive real-time applications such as gaming or motion-based simulations. This seamless integration bridges physical movements with digital environments for dynamic and immersive experiences.",
        demoLink: "https://www.linkedin.com/posts/aaron-david-4a3156170_unity-gamedev-indiegamedev-activity-6938050927241097216-uBbC?utm_source=social_share_send&utm_medium=member_desktop_web",
        githubLink: "https://github.com/arrondavide/bodyTracker"
    },
    {
        title: "Security Vulnerabilty Assessment (penetration testing)",
        description: "The digital security assessment for Apple Holidays covers network, application, endpoint, and data security, along with employee training and incident response. It identifies weaknesses, secures wireless networks, tests applications for vulnerabilities, and ensures proper endpoint protection. Data storage and transmission practices are reviewed for confidentiality. Employee training ensures understanding of security policies, while incident response plans are evaluated. The analysis identifies vulnerabilities and suggests improvements to stay ahead of new threats.",
        demoLink: "",
        githubLink: ""
    }
];
// Add these sections right after the hero section and before the projects section

export default Portfolio;

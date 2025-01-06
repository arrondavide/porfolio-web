
import { motion } from 'framer-motion';
import articale from '../assets/newspaper.jpg';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Decorative background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
            
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Article/Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-md mx-auto w-full"
                    >
                        <div className="bg-gray-900/50 backdrop-blur rounded-xl overflow-hidden shadow-2xl transform rotate-1">
                            {/* Restaurant table setting background */}
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/50 pointer-events-none" />
                            
                            {/* Article content */}
                            <div className="relative p-6">
                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl" />
                                <div className="absolute bottom-4 left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
                                
                                <div className="flex items-center gap-2 text-purple-400 text-sm mb-4">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                    Featured in Ceylon Today
                                </div>

                                <div className="w-full max-w-[300px] mx-auto mb-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                                    <img
                                        src={articale}
                                        alt="Featured Article"
                                        className="w-full h-full object-cover rounded-lg shadow-xl"
                                    />
                                </div>

                                <h3 className="text-lg font-bold mb-3">From Gamer to Game-Changing Developer</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Featured in Ceylon Today - A journey of transformation from gaming enthusiast to innovative game developer, showcasing the impact of passion and dedication in the tech industry.
                                </p>

                                {/* Restaurant-style decorative divider */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-4" />

                                <a
                                    href="https://ceylontoday.lk/wp-content/uploads/2024/02/Teen-Inc-18-2-2024-Teen-Inc.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm group"
                                >
                                    Read Full Article
                                    <svg 
                                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <h2 className="text-3xl font-bold mb-6">About Me</h2>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                I'm a Game Developer/Software Engineer with 2+ years of experience. I've made over 100 games, including Web3 games and apps. In my current company, I also worked on ERP systems to help businesses run their operations smoothly (basically, I made their work easier).
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                I co-founded Jedi Studio with my friends, where we help businesses around the world go digital with our software solutions.
                            </p>
                            
                            {/* Stats grid */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-purple-400">100+</div>
                                    <div className="text-sm text-gray-400">Games Created</div>
                                </div>
                                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-400">200k+</div>
                                    <div className="text-sm text-gray-400">Players Worldwide</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
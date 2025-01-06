
import { motion } from 'framer-motion';
import articale from '../assets/newspaper.jpg';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Decorative background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
            
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Main image with tilt effect */}
                        <motion.div
                            whileHover={{ scale: 1.02, rotate: -1 }}
                            className="relative z-10"
                        >
                            <img
                                src={articale}
                                alt="Profile"
                                className="rounded-2xl shadow-2xl w-full object-cover"
                            />
                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                        </motion.div>
                        
                        {/* Floating badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-6 left-6 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                        >
                            {/* <span className="text-purple-400 text-sm">🎮 Game Developer</span> */}
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                            className="absolute -top-6 right-6 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                        >
                            {/* <span className="text-blue-400 text-sm">💻 Software Engineer</span> */}
                        </motion.div>
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
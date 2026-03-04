import { motion } from "framer-motion";
import { Button } from "../components/Button";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background with slight parallax and overlay */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full bg-[url('/images/backdrop-landing.jpg')] bg-cover bg-center"
                />
                <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 px-6 mt-16 max-w-5xl mx-auto text-stone-50">
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium text-stone-200"
                    >
                        Professional Makeup Artist
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 tracking-tight"
                    >
                        Elevating Natural Beauty
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href="#portfolio">
                            <Button variant="outline" className="text-stone-50 border-stone-50 hover:bg-stone-50 hover:text-stone-900 h-14 px-10 text-sm">
                                View Work
                            </Button>
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [-10, 10, -10],
                    }}
                    transition={{
                        opacity: { duration: 1, delay: 0.8 },
                        scale: { duration: 1, delay: 0.8, ease: "easeOut" },
                        y: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.8
                        }
                    }}
                    className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-stone-50/20 shadow-2xl shrink-0"
                >
                    <img src="/images/the-artist.jpg" alt="Aqeeb - The Artist" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-stone-300">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-stone-300 to-transparent"
                />
            </motion.div>
        </section>
    );
}

import { Section } from "../components/Section";
import { motion } from "framer-motion";

export function About() {
    return (
        <Section id="about" className="bg-stone-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Image Side */}
                <motion.div
                    className="relative aspect-[4/5] overflow-hidden"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 bg-stone-200 animate-pulse" /> {/* Placeholder while loading */}
                    <img
                        src="/images/the-artist.jpg"
                        alt="Aqeeb - Professional Makeup Artist"
                        className="w-full h-full object-cover relative z-10 transition-transform duration-700 hover:scale-105"
                        onError={(e) => {
                            // Fallback if image not yet placed
                            e.currentTarget.src = "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1471&auto=format&fit=crop";
                        }}
                    />
                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">The Artist.</h2>

                    <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
                        <p>
                            With over a decade of experience in the beauty industry, I specialize in creating flawless, radiant looks that enhance natural beauty. My approach is rooted in the belief that makeup should empower and elevate, never mask.
                        </p>
                        <p>
                            Trained in both high-fashion editorial and timeless bridal styling, I bring a keen eye for detail and a meticulous technique to every face. From subtle, glowing skin to bold, conceptual artistry, my goal is to deliver a premium, personalized experience.
                        </p>
                        <p>
                            Based in the heart of the city, my portfolio spans luxury campaigns, celebrity glams, and unforgettable bridal moments.
                        </p>
                    </div>

                    <div className="mt-12">
                        <img src="/images/signature.png" alt="Signature" className="h-12 opacity-60" onError={(e) => e.currentTarget.style.display = 'none'} />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

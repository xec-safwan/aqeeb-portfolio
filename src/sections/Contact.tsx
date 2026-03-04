import { Section } from "../components/Section";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <Section id="contact" className="bg-stone-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="font-serif text-5xl md:text-6xl mb-6">Let's Create.</h2>
                    <p className="text-stone-600 mb-12 text-lg font-light leading-relaxed">
                        Available for bookings worldwide. Please fill out the form for availability, rates, and detailed consultations.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <p className="uppercase text-xs tracking-[0.2em] text-stone-400 font-medium mb-1">Email</p>
                            <a href="mailto:rautaqeeb343@gmail.com" className="text-stone-900 text-lg hover:text-stone-500 transition-colors">
                                rautaqeeb343@gmail.com
                            </a>
                        </div>
                        <div>
                            <p className="uppercase text-xs tracking-[0.2em] text-stone-400 font-medium mb-1">Instagram</p>
                            <a href="https://www.instagram.com/glam_withakib/" target="_blank" rel="noopener noreferrer" className="text-stone-900 text-lg hover:text-stone-500 transition-colors">
                                @glam_withakib
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex justify-center items-center h-full w-full bg-stone-100/50 p-8 rounded-2xl"
                >
                    <img
                        src="/images/logo.jpg"
                        alt="Aqeeb Artistry Logo"
                        className="w-64 h-64 object-cover rounded-full shadow-lg border border-stone-200 opacity-90 grayscale hover:grayscale-0 transition-all duration-700 mix-blend-multiply"
                        onError={(e) => e.currentTarget.style.display = 'none'}
                    />
                </motion.div>

            </div>
        </Section>
    );
}

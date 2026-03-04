import { Section } from "../components/Section";
import { motion } from "framer-motion";
import { Sparkles, Camera, Heart } from "lucide-react";

export function Services() {
    const services = [
        {
            title: "Bridal",
            icon: <Heart strokeWidth={1} size={32} />,
            desc: "Timeless, radiant makeup tailored to you. Ensuring you look flawless and feel your most beautiful all day and night.",
        },
        {
            title: "Editorial",
            icon: <Camera strokeWidth={1} size={32} />,
            desc: "Creative, high-fashion looks designed for photography, film, and creative campaigns. Pushing boundaries with color and texture.",
        },
        {
            title: "Events",
            icon: <Sparkles strokeWidth={1} size={32} />,
            desc: "Elevated glam for red carpets, galas, or special occasions, providing a luxury glowing finish.",
        },
    ];

    return (
        <Section id="services" className="bg-stone-900 text-stone-50">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Expertise.</h2>
                <p className="text-stone-400 text-lg font-light max-w-xl mx-auto">
                    Tailored artistry focusing on skin perfection, longevity, and your unique features.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                        className="group block p-10 border border-stone-800 hover:bg-stone-800/50 transition-colors duration-500 text-center flex flex-col items-center"
                    >
                        <div className="mb-8 p-4 bg-stone-800/50 text-stone-300 rounded-full group-hover:text-stone-100 group-hover:scale-110 transition-all duration-500">
                            {service.icon}
                        </div>
                        <h3 className="font-serif text-2xl mb-4 tracking-wide">{service.title}</h3>
                        <p className="text-stone-400 font-light leading-relaxed">
                            {service.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

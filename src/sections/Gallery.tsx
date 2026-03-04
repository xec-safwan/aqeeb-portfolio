import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Section } from "../components/Section";
import { Lightbox } from "../components/Lightbox";

// Use placeholder or actual images depending on availability
const galleryImages = [
    "/images/bridal-makeup-2.jpg",
    "/images/bride-makeup-1.jpg",
    "/images/casual-makeup.jpg",
    "/images/groom-makeu-1.jpg",
    "/images/groom-makeu-2.jpg",
    "/images/haldi-makeup.jpg",
];

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <Section id="portfolio" className="bg-white">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <h2 className="font-serif text-5xl mb-4">Selected Works.</h2>
                    <p className="text-stone-500 max-w-lg">
                        A curation of my favorite looks across editorial, bridal, and high-fashion campaigns.
                    </p>
                </div>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
            >
                {galleryImages.map((src, idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        className="relative overflow-hidden group cursor-pointer break-inside-avoid"
                        onClick={() => setSelectedImage(src)}
                    >
                        <img
                            src={src}
                            alt={`Portfolio work ${idx + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-500 group-hover:bg-stone-900/20" />

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="text-white text-sm tracking-[0.2em] font-medium uppercase drop-shadow-md">
                                View Full
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <Lightbox imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
        </Section>
    );
}

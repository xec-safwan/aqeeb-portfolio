import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LightboxProps {
    imageSrc: string | null;
    onClose: () => void;
}

export function Lightbox({ imageSrc, onClose }: LightboxProps) {
    return (
        <AnimatePresence>
            {imageSrc && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/90 backdrop-blur-sm p-4 md:p-12 cursor-pointer"
                    onClick={onClose}
                >
                    <button
                        className="absolute top-6 right-6 p-2 text-stone-400 hover:text-white transition-colors"
                        onClick={onClose}
                    >
                        <X size={32} strokeWidth={1} />
                    </button>

                    <motion.img
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        src={imageSrc}
                        alt="Fullscreen view"
                        className="max-w-full max-h-full object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

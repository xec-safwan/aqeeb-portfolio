import { type HTMLMotionProps, motion } from "framer-motion";
import { cn } from "../lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
    className?: string;
    children: React.ReactNode;
}

export function Section({ className, children, ...props }: SectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn("w-full py-24 px-6 md:px-12 lg:px-24 mx-auto max-w-7xl", className)}
            {...props}
        >
            {children}
        </motion.section>
    );
}

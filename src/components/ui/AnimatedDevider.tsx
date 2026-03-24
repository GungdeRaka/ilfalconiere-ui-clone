"use client";

import { motion } from "framer-motion";

interface AnimatedDividerProps {
    direction?: "left-to-right" | "right-to-left";
    className?: string;
}

export default function AnimatedDivider({ direction = "left-to-right", className = "" }: AnimatedDividerProps) {
    return (
        <div className={`w-full h-px bg-brand-olive-dark/20 overflow-hidden ${className}`}>
            <motion.div
                className="w-full h-full bg-brand-olive-dark"
                initial={{ scaleX: 0, originX: direction === "left-to-right" ? 0 : 1 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // Elegant, slow ease
            />
        </div>
    );
}
import { motion } from 'framer-motion'

const technologies = [
    "Python", "PyTorch", "TensorFlow", "React", "FastAPI", "Google ADK", "LangGraph", "GCP", "OpenAI", "HuggingFace", "LangChain", "PostgreSQL"
]

export default function TechMarquee() {
    return (
        <section className="py-10 overflow-hidden border-y border-border/50 bg-muted/30">
            <div className="relative flex w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25,
                    }}
                >
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={`${tech}-${index}`}
                            className="inline-flex items-center justify-center mx-8"
                        >
                            <span className="text-lg md:text-xl font-mono font-medium text-muted-foreground/80 hover:text-primary transition-colors cursor-default">
                                {tech}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

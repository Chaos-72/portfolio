import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { cn } from '../lib/utils'

const projects = [
    {
        id: 1,
        title: "Research Agents",
        description: "A Multi-Agent System built with LangChain that performs in-depth research on any topic. It orchestrates a team of specialized AI agents to gather, analyze, and synthesize information into comprehensive reports.",
        tags: ["LangChain", "Python", "Multi-Agent Systems"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop", // Abstract AI/Network
        link: "https://github.com/Chaos-72/Research-Agents",
        github: "https://github.com/Chaos-72/Research-Agents",
        size: "large" // 2x2
    },
    {
        id: 2,
        title: "Liver Cancer Detection",
        description: "AI-powered system for liver cancer diagnosis using GANs for image enhancement and Deep Learning for tumor segmentation and classification. Features a Flask web interface for medical professionals.",
        tags: ["TensorFlow", "GANs", "Flask", "Medical AI"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop", // Medical/Science
        link: "https://github.com/Chaos-72/Liver-Cancer-Detection",
        github: "https://github.com/Chaos-72/Liver-Cancer-Detection",
        size: "small" // 1x1
    },
    {
        id: 3,
        title: "Real-Time Weed Detection",
        description: "Edge AI system running on Raspberry Pi 3B+ to distinguish crops from weeds in real-time. Uses a fine-tuned YOLOv8 model exported to ONNX for efficient offline inference in the field.",
        tags: ["YOLOv8", "Raspberry Pi", "Edge AI", "ONNX"],
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop", // Agriculture/Plant
        link: "https://github.com/Chaos-72/weed-detection-yolov8",
        github: "https://github.com/Chaos-72/weed-detection-yolov8",
        size: "small" // 1x1
    },
    {
        id: 4,
        title: "LinkedIn Post Generator",
        description: "Automated content creation workflow using n8n, OpenAI, and Tavily. Generates tailored LinkedIn posts based on user topics and target audiences, streamlining personal branding.",
        tags: ["n8n", "OpenAI", "Automation", "GenAI"],
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop", // Business/Laptop
        link: "https://github.com/Chaos-72/linkedin-post-generator-n8n",
        github: "https://github.com/Chaos-72/linkedin-post-generator-n8n",
        size: "wide" // 2x1
    }
]

export default function Work() {
    return (
        <section id="work" className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
                    <p className="text-muted- max-w-xl">
                        A collection of projects exploring the frontiers of Artificial Intelligence and Machine Learning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl border border-border bg-card hover:shadow-xl transition-all duration-300",
                                project.size === "large" && "md:col-span-2 md:row-span-2",
                                project.size === "wide" && "md:col-span-2",
                                "hover:-translate-y-1"
                            )}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-40 opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground">{project.title}</h3>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <a href={project.github} className="p-2 bg-background/50 backdrop-blur-sm rounded-full hover:bg-background hover:text-primary transition-colors">
                                                <Github className="w-4 h-4" />
                                            </a>
                                            <a href={project.link} target="_blank" className="p-2 bg-background/50 backdrop-blur-sm rounded-full hover:bg-background hover:text-primary transition-colors">
                                                <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>

                                    <p className="text-muted- mb-4 line-clamp-2 group-hover:text-foreground/80 transition-colors">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/Chaos-72"
                        target="_blank"
                        className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-foreground bg-background border border-border rounded-full transition-all hover:bg-muted hover:scale-95 active:scale-90"
                    >
                        <span className="flex items-center gap-2">
                            View All Projects <ArrowUpRight className="w-4 h-4" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '../lib/utils'
import { useState } from 'react'

const projects = [
    {
        id: 1,
        title: "Liver Cancer Detection",
        description: "AI-powered system for liver cancer diagnosis using GANs for image enhancement and Deep Learning for tumor segmentation and classification. Features a Flask web interface for medical professionals.",
        tags: ["TensorFlow", "GANs", "Flask", "Medical AI"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        link: "https://github.com/Chaos-72/Liver-Cancer-Detection",
        github: "https://github.com/Chaos-72/Liver-Cancer-Detection",
        size: "large", // 2x2
        featured: true
    },
    {
        id: 2,
        title: "SQL Agent",
        description: "Intelligent database assistant that translates natural language queries into SQL. Built with LangChain and LLMs to enable non-technical users to interact with databases seamlessly.",
        tags: ["LangChain", "SQL", "LLM", "Python"],
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2072&auto=format&fit=crop",
        link: "#", // Add your GitHub link
        github: "#",
        size: "small", // 1x1
        featured: true
    },
    {
        id: 3,
        title: "Email and Calendar Automation",
        description: "End-to-end automation system that manages email workflows and calendar scheduling using AI. Integrates with Gmail API and Google Calendar for intelligent task management.",
        tags: ["Python", "Gmail API", "Automation", "AI"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        link: "#", // Add your GitHub link
        github: "#",
        size: "small", // 1x1
        featured: true
    },
    {
        id: 4,
        title: "Multimodal RAG System",
        description: "Advanced Retrieval-Augmented Generation system that processes text, images, and documents. Enables intelligent information retrieval across multiple data modalities for comprehensive question answering.",
        tags: ["RAG", "Multimodal AI", "LangChain", "Vector DB"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        link: "#", // Add your GitHub link
        github: "#",
        size: "wide", // 2x1
        featured: true
    },
    // Additional projects (hidden initially)
    {
        id: 5,
        title: "Research Agents",
        description: "A Multi-Agent System built with LangChain that performs in-depth research on any topic. It orchestrates a team of specialized AI agents to gather, analyze, and synthesize information into comprehensive reports.",
        tags: ["LangChain", "Python", "Multi-Agent Systems"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
        link: "https://github.com/Chaos-72/Research-Agents",
        github: "https://github.com/Chaos-72/Research-Agents",
        size: "small",
        featured: false
    },
    {
        id: 6,
        title: "Real-Time Weed Detection",
        description: "Edge AI system running on Raspberry Pi 3B+ to distinguish crops from weeds in real-time. Uses a fine-tuned YOLOv8 model exported to ONNX for efficient offline inference in the field.",
        tags: ["YOLOv8", "Raspberry Pi", "Edge AI", "ONNX"],
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop",
        link: "https://github.com/Chaos-72/weed-detection-yolov8",
        github: "https://github.com/Chaos-72/weed-detection-yolov8",
        size: "small",
        featured: false
    },
    {
        id: 7,
        title: "LinkedIn Post Generator",
        description: "Automated content creation workflow using n8n, OpenAI, and Tavily. Generates tailored LinkedIn posts based on user topics and target audiences, streamlining personal branding.",
        tags: ["n8n", "OpenAI", "Automation", "GenAI"],
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
        link: "https://github.com/Chaos-72/linkedin-post-generator-n8n",
        github: "https://github.com/Chaos-72/linkedin-post-generator-n8n",
        size: "small",
        featured: false
    }
]

export default function Work() {
    const [showAll, setShowAll] = useState(false)

    const featuredProjects = projects.filter(p => p.featured)
    const additionalProjects = projects.filter(p => !p.featured)
    const displayedProjects = showAll ? projects : featuredProjects

    return (
        <section id="work" className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
                    <p className="text-muted-foreground max-w-xl">
                        A collection of projects exploring the frontiers of Artificial Intelligence and Machine Learning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    <AnimatePresence>
                        {displayedProjects.map((project, index) => (
                            <motion.a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "group relative overflow-hidden rounded-3xl border border-border",
                                    "hover:border-primary/50 transition-all duration-300",
                                    project.size === "large" && "md:col-span-2 md:row-span-2",
                                    project.size === "wide" && "md:col-span-2",
                                    project.size === "small" && "md:col-span-1"
                                )}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="p-2 rounded-full bg-primary/10 text-primary">
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs font-mono bg-muted/80 text-foreground border border-border rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All / Show Less Button */}
                {additionalProjects.length > 0 && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-all duration-300 border border-primary/20"
                        >
                            <span className="font-medium">
                                {showAll ? 'Show Less' : `View All Projects (${additionalProjects.length} more)`}
                            </span>
                            {showAll ? (
                                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                            ) : (
                                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

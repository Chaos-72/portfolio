import { motion } from 'framer-motion'
import { Code2, Brain, Database, Terminal, Cpu, Globe } from 'lucide-react'

const skillCategories = [
    {
        title: "AI & Machine Learning",
        icon: <Brain className="w-6 h-6 text-primary" />,
        skills: ["Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI API", "HuggingFace", "Computer Vision", "NLP", "YOLOv8"]
    },
    {
        title: "Backend & Cloud",
        icon: <Database className="w-6 h-6 text-primary" />,
        skills: ["FastAPI", "Supabase", "Docker", "AWS", "GCP", "Google ADK"]
    },
    {
        title: "Frontend & Tools",
        icon: <Globe className="w-6 h-6 text-primary" />,
        skills: ["React", "TypeScript", "Tailwind CSS", "n8n", "LangGraph", "Git", "Raspberry Pi"]
    }
]

export default function Stack() {
    return (
        <section id="stack" className="py-24 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Stack</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        A comprehensive toolkit for building intelligent, scalable, and robust systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-border rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-primary/10 rounded-2xl">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-mono bg-background border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

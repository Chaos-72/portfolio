import { motion } from 'framer-motion'

const timeline = [
    {
        year: "Present",
        title: "AI Engineer Intern",
        company: "GenAIKit Solutions",
        description: "Developing and delivering custom AI solutions for clients. Focusing on end-to-end project execution and agentic workflows."
    },
    {
        year: "2025",
        title: "AQG Engineer Intern",
        company: "AksharaPlus (US Remote)",
        description: "Engineered Auto Question Generation (AQG) systems using SLM approaches and template-based generation techniques."
    },
    {
        year: "2024",
        title: "AI/ML Head",
        company: "GDG on Campus",
        description: "Led the AI/ML community, organizing workshops, mentoring peers, and driving technical initiatives on campus."
    },
    {
        year: "2024",
        title: "B.Tech in Computer Science",
        company: "MGM's College of Engineering",
        description: "Graduated with a focus on Artificial Intelligence and Deep Learning. Built a strong foundation in computer science principles."
    }
]

export default function About() {
    return (
        <section id="about" className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I am a recent Computer Science graduate and an aspiring AI Engineer named Ravi.
                        My journey is defined by hands-on experience in building intelligent systems,
                        from Auto Question Generation to custom client solutions.
                        I am passionate about AI & ML and currently seeking opportunities to build the brains of tomorrow.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background z-10 mt-1.5" />

                                {/* Content */}
                                <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                                    <div className={`flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                                        <span className="inline-block px-2 py-1 mb-2 text-xs font-mono font-bold text-primary bg-primary/10 rounded">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                        <p className="text-sm font-medium text-foreground/80 mb-2">{item.company}</p>
                                        <p className={`text-muted-foreground text-sm ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

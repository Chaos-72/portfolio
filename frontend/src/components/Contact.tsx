import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 overflow-hidden">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-[2.5rem] p-12 md:p-20 overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.05]" />
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Let's Build the Future.
                        </h2>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Whether you have a project in mind, a question about my work, or just want to connect—I'm always open to discussing new opportunities in AI and Engineering.
                        </p>

                        <div className="max-w-md mx-auto bg-card border border-border rounded-2xl p-8 shadow-lg text-left">
                            <form onSubmit={async (e) => {
                                e.preventDefault()
                                const form = e.target as HTMLFormElement
                                const formData = new FormData(form)
                                const data = Object.fromEntries(formData)

                                try {
                                    const res = await fetch('http://localhost:8000/api/contact', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(data),
                                    })
                                    if (res.ok) {
                                        alert('Message sent successfully!')
                                        form.reset()
                                    } else {
                                        alert('Failed to send message.')
                                    }
                                } catch (err) {
                                    alert('Error connecting to server.')
                                }
                            }}>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                                        <input required name="name" id="name" type="text" className="w-full px-3 py-2 bg-muted border border-border rounded-md focus:ring-2 focus:ring-primary/20 outline-none" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                        <input required name="email" id="email" type="email" className="w-full px-3 py-2 bg-muted border border-border rounded-md focus:ring-2 focus:ring-primary/20 outline-none" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                        <textarea required name="message" id="message" rows={4} className="w-full px-3 py-2 bg-muted border border-border rounded-md focus:ring-2 focus:ring-primary/20 outline-none" />
                                    </div>
                                    <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-colors">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="flex items-center justify-center gap-8 mt-12">
                            <a href="https://github.com/Chaos-72" target="_blank" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                                <Github className="w-8 h-8" />
                            </a>
                            <a href="https://www.linkedin.com/in/ravibhagat3108/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                                <Linkedin className="w-8 h-8" />
                            </a>
                            <a href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                                <Twitter className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

import { motion } from 'framer-motion'
import { ArrowRight, FileText } from 'lucide-react'

export default function Hero() {
    return (
        <section id="#" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-orb" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.05]" />
            </div>

            <div id="#" className="container px-4 mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="inline-block px-3 py-1 text-xs font-mono font-medium tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20 mb-6">
                        AVAILABLE FOR HIRE
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                        Building the Brains<br />of Tomorrow.
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                        Ravi <span className="text-primary/50 mx-2">/</span> AI Engineer & Computer Scientist
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#work"
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-primary rounded-full overflow-hidden transition-all hover:bg-primary/90 hover:scale-95 active:scale-90"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1BA6_bS9j39GG6PQM79FVOCX_dAu6N82I/view?usp=sharing" target="_blank"
                        className="group inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-foreground bg-background border border-border rounded-full transition-all hover:bg-muted hover:scale-95 active:scale-90"
                    >
                        <span className="flex items-center gap-2">
                            Resume <FileText className="w-4 h-4" />
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="py-12 border-t border-border bg-background">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-lg font-bold">RAVI.</p>
                    <p className="text-sm text-muted-foreground mt-1">
                        Designed by Heart, Curated by Brain.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/Chaos-72" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/ravibhagat3108/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="bhagatravi4contact@gmail.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

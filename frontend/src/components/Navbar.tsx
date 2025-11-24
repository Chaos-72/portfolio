import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from './ui/ThemeProvider'
import { cn } from '../lib/utils'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Stack', href: '#stack' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
        if (latest > 50) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    })

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-300",
                scrolled ? "pt-2" : "pt-6"
            )}
        >
            <div className={cn(
                "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-md border border-transparent",
                scrolled
                    ? "bg-background/70 border-border shadow-sm w-full max-w-5xl"
                    : "bg-transparent w-full max-w-6xl"
            )}>
                {/* Logo */}
                <a href="#" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
                    RAVI<span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label="Toggle theme"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-xl md:hidden"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium py-2 border-b border-border/50 last:border-0"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    )
}

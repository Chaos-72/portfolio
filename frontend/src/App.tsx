import { ThemeProvider } from "./components/ui/ThemeProvider"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TechMarquee from "./components/TechMarquee"
import Stack from "./components/Stack"
import Work from "./components/Work"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ChatWidget from "./components/ChatWidget"

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20 selection:text-primary">
                <Navbar />
                <main>
                    <Hero />
                    <TechMarquee />
                    <Stack />
                    <Work />
                    <About />
                    <Contact />
                </main>
                <Footer />
                <ChatWidget />
            </div>
        </ThemeProvider>
    )
}

export default App

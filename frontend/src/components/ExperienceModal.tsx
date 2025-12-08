import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { Badge } from "./ui/badge"
import { CheckCircle2 } from "lucide-react"

interface ExperienceModalProps {
    isOpen: boolean
    onClose: () => void
    experience: {
        title: string
        organization: string
        period: string
        description: string
        highlights: string[]
        technologies?: string[]
    }
}

export default function ExperienceModal({ isOpen, onClose, experience }: ExperienceModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{experience.title}</DialogTitle>
                    <DialogDescription>
                        <span className="text-lg font-medium text-foreground">{experience.organization}</span>
                        <span className="text-muted-foreground"> • {experience.period}</span>
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                    {/* Description */}
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                        {experience.description.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-muted-foreground leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Key Highlights */}
                    <div>
                        <h4 className="text-sm font-semibold mb-3 text-foreground">Key Highlights</h4>
                        <ul className="space-y-2">
                            {experience.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    {experience.technologies && experience.technologies.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold mb-3 text-foreground">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}

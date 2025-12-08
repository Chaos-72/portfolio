import { motion } from "framer-motion";
import { ExternalLink, Calendar, Lightbulb } from "lucide-react";
import { certificatesData } from "../data/experienceContent";

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Certifications
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Continuous learning and professional development in AI and Software Engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificatesData.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50"
                        >
                            {/* Certificate Image/Logo Section */}
                            <div className="relative h-40 bg-gradient-to-br from-primary/10 via-primary/5 to-background flex items-center justify-center p-6 border-b border-border">
                                <img
                                    src={cert.certificateImage}
                                    alt={`${cert.issuer} logo`}
                                    className="max-h-20 max-w-[80%] object-contain provider-logo"
                                    onError={(e) => {
                                        // Fallback to initials if image fails to load
                                        const target = e.currentTarget;
                                        target.style.display = 'none';
                                        const fallback = target.nextElementSibling as HTMLElement;
                                        if (fallback) fallback.style.display = 'block';
                                    }}
                                />
                                <div className="hidden text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                                    {cert.issuer.substring(0, 2).toUpperCase()}
                                </div>
                            </div>

                            <div className="p-6">
                                {/* Title and Issuer */}
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                    {cert.title}
                                </h3>

                                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                                    <span className="font-medium">{cert.issuer}</span>
                                    {cert.completionDate && (
                                        <>
                                            <span>•</span>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span>{cert.completionDate}</span>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Skills Gained */}
                                <div className="mb-4">
                                    <div className="flex items-center gap-1.5 mb-2">
                                        <Lightbulb className="w-3.5 h-3.5 text-primary" />
                                        <span className="text-xs font-semibold text-foreground">Skills Gained</span>
                                    </div>
                                    <ul className="space-y-1">
                                        {cert.skillsGained.slice(0, 3).map((skill, idx) => (
                                            <li key={idx} className="text-xs text-muted-foreground flex items-start">
                                                <span className="text-primary mr-1.5">•</span>
                                                <span>{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* View Certificate Link */}
                                {cert.link ? (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-2"
                                    >
                                        View Certificate <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                ) : (
                                    <span className="text-xs text-muted-foreground italic">
                                        Certificate not available
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

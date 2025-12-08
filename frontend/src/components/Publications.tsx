import { motion } from "framer-motion";
import { FileText, Quote, ArrowUpRight } from "lucide-react";

export default function Publications() {
    return (
        <section id="publications" className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Research & Publications
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Contributing to the scientific community through advanced research in Medical AI.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="group relative overflow-hidden rounded-3xl border border-border bg-card hover:shadow-xl transition-all duration-300 p-8 md:p-10">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <FileText className="w-8 h-8 text-primary" />
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="px-3 py-1 text-xs font-mono font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                                        IJRASET Vol. 13
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        Issue III, 2025
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    CT Scan Image Enhancement for Liver Cancer Detection
                                </h3>

                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Proposed a novel approach using GANs for enhancing CT scan quality combined with EfficientNetB0 for precise segmentation. The method achieved competitive performance metrics in Dice coefficient, SSIM, and PSNR, significantly improving early detection capabilities.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {["GANs", "EfficientNetB0", "Medical Imaging", "Deep Learning"].map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground border border-border rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-6 border-t border-border">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Quote className="w-4 h-4" />
                                        <span>Published Research</span>
                                    </div>
                                    <a
                                        href="https://www.ijraset.com/research-paper/ct-scan-image-enhancement-for-liver-cancer-detection"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors ml-auto"
                                    >
                                        Read Paper <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

import { useParams, useNavigate } from "react-router-dom";
import { allProjects } from "./Work";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ArticleDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = allProjects.find((p) => p.id === Number(id));

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
                <Button onClick={() => navigate("/work")}>Back to Work</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-24 sm:pt-28 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Button
                        variant="ghost"
                        className="mb-8 pl-0 hover:pl-2 transition-all"
                        onClick={() => navigate("/work")}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Articles
                    </Button>

                    <header className="mb-8">
                        <div className="flex gap-2 mb-4">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
                            {project.title}
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {project.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {project.readTime}
                            </span>
                            <span className="font-medium text-accent-dark">
                                {project.publication}
                            </span>
                        </div>
                    </header>

                    {project.image && (
                        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    )}

                    <article className="prose prose-lg max-w-none prose-headings:font-serif prose-a:text-accent-dark">
                        {/* If content exists, display it. Otherwise description. */}
                        {(project as any).content ? (
                            <div className="whitespace-pre-line text-lg text-foreground/80 leading-relaxed">
                                {(project as any).content}
                            </div>
                        ) : (
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                {project.description}
                            </p>
                        )}
                    </article>
                </div>
            </main>
            <ContactCTA />
            <Footer />
        </div>
    );
};

export default ArticleDetail;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const FeaturedWork = () => {
  const featuredProjects = [
    {
      id: 2,
      title: "Operation Sindoor: Counter-Terrorism Success",
      category: "news-reports",
      publication: "Shekunj",
      date: "Mar 2024",
      tags: ["Defense", "Security", "Women Leaders", "Military", "Terrorism"],
      description: "Exclusive coverage of historic counter-terrorism operations led by Colonel Sofiya Qureshi and Wing Commander Vyomika Singh.",
      readTime: "5 min read",
      image: "/images/operation-sindoor.png",
      link: "https://www.shekunj.com/article/news/operation-sindoor-colonel-sofiya-qureshi-and-wing-commander-vyomika-singh-lead-historic-strikes-against-terrorism"
    },
    {
      id: 5,
      title: "Women Changing Indian Bureaucracy",
      category: "feature-human-stories",
      publication: "Shekunj",
      date: "Feb 2024",
      tags: ["Women Empowerment", "Governance", "Leadership", "Bureaucracy", "India"],
      description: "Profiles of inspirational women officers like Smita Sabharwal who are redefining governance and public service in India.",
      readTime: "7 min read",
      image: "/images/women-bureaucracy.jpg",
      link: "https://www.shekunj.com/article/news/smita-sabharwal-the-inspirational-ias-officer-redefining-indian-bureaucracy"
    },
    {
      id: 4,
      title: "UPSC Toppers 2025: Shakti Dubey & Harshita Goyal",
      category: "feature-human-stories",
      publication: "Shekunj",
      date: "Jan 2025",
      tags: ["UPSC", "Success Stories", "Civil Services", "Education", "Achievers"],
      description: "In-depth profiles of UPSC toppers, exploring their preparation strategies, personal journeys, and aspirations for public service.",
      readTime: "6 min read",
      image: "/images/upsc-toppers.jpg",
      link: "https://www.shekunj.com/article/education/meet-the-upsc-toppers-2025-shakti-dubey-air-1-harshita-goyal-air-2-more"
    },
    {
      id: 3,
      title: "CBI Investigation in NEET Paper Leak Case",
      category: "neet-paper-leak",
      publication: "The Publicat",
      date: "Jul 2024",
      tags: ["NEET", "CBI", "Investigation", "Paper Leak", "Supreme Court"],
      description: "Detailed report on CBI's involvement in the NEET paper leak investigation and their findings.",
      readTime: "7 min read",
      image: "/images/neet-cbi.jpg",
      link: "https://thepublicat.com/neet-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2%e0%a5%80%e0%a4%95-%e0%a4%ae%e0%a4%be%e0%a4%ae%e0%a4%b2%e0%a5%87-%e0%a4%ae%e0%a5%87%e0%a4%82-cbi-%e0%a4%95%e0%a5%80-%e0%a4%95%e0%a4%be%e0%a4%b0/?fbclid=PAQ0xDSwKtJJ5leHRuA2FlbQIxMQABp6H6BJcQI9AU28DIFcRwXxp0QPwkbUCc8LAh3p8kcNPfC4emeX_3AtcmOPAQ_aem_x8dhhoFQRCFW68gEoiFpFQ"
    },
    {
      id: 1,
      title: "NEET 2024 Paper Leak: Maharashtra Connection",
      category: "neet-paper-leak",
      publication: "The Publicat",
      date: "Jun 2024",
      tags: ["NEET", "Paper Leak", "Education Scandal", "Supreme Court", "Students"],
      description: "Investigation into the Maharashtra connection in the NEET paper leak case, uncovering the network behind the scandal.",
      readTime: "8 min read",
      image: "/images/neet-investigation.jpg",
      link: "https://thepublicat.com/%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2%e0%a5%80%e0%a4%95-%e0%a4%ae%e0%a4%be%e0%a4%ae%e0%a4%b2%e0%a5%87-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%ae%e0%a4%b9%e0%a4%be%e0%a4%b0%e0%a4%be%e0%a4%b7/?fbclid=PAQ0xDSwKtJAdleHRuA2FlbQIxMQABp9umSzy8mvl-JvK5vlEtm0HMXoQWpkoB8Z4qclpMdGpQw50SD-bZFYHC1ZWc_aem_nO6ayOrbozdHZXcIt3Aqow"
    },
    {
      id: 6,
      title: "Narmadapuram PWD Corruption Exposé",
      category: "field-reports",
      publication: "JournalistAV",
      date: "Aug 2024",
      tags: ["Corruption", "Investigation", "Public Works", "Lok Yukta", "Madhya Pradesh"],
      description: "Field report on corruption in public works department, based on Lok Yukta's operation and ground-level investigation.",
      readTime: "6 min read",
      image: "/images/pwd-corruption.png",
      link: "https://journalistav.com/narmadapuram-pwd-engineer-was-taking-huge-amount-in-return-for-work-lok-yukta-team-caught-him-red-handed/?fbclid=PAQ0xDSwKtZG5leHRuA2FlbQIxMAABp7sJDclUVLdtHNYpcnqCzpwaCC0ren4IjdkRKiD5R_FiishDZY1ydYODCCEA_aem_tXtrJJWHiZLFJXwgYhOQRg"
    }
  ];

  const handleArticleClick = (link: string) => {
    if (link !== "#") {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">
          Featured Work
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <article 
              key={project.id}
              className={`group cursor-pointer space-y-4 border border-transparent hover:border-accent rounded-lg p-4 transition-all duration-300 hover:shadow-lg ${
                project.link === "#" ? "opacity-80" : ""
              }`}
              onClick={() => handleArticleClick(project.link)}
            >
              {/* Image Container */}
              <div className="bg-muted h-64 rounded-sm overflow-hidden relative">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                {/* Fallback Gradient */}
                <div className={`w-full h-full bg-gradient-to-br from-cream to-muted group-hover:scale-105 transition-transform duration-300 ${project.image ? 'hidden' : ''}`} />
                
                {/* External Link Icon */}
                {project.link !== "#" && (
                  <div className="absolute top-3 right-3 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-2xl leading-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="font-medium text-accent">{project.publication}</span>
                  <div className="flex items-center gap-4">
                    <span>{project.date}</span>
                    <span>{project.readTime}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-muted px-2 py-1 rounded-full hover:bg-accent hover:text-white transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                {project.link !== "#" && (
                  <div className="pt-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleArticleClick(project.link);
                      }}
                      className="text-accent hover:underline text-sm font-medium flex items-center gap-1"
                    >
                      Read full article <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="font-medium tracking-wide uppercase text-sm px-8"
          >
            <Link to="/work">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
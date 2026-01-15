import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FeaturedWork = () => {
  const featuredProjects = [
    {
      id: 2,
      title: "Operation Sindoor",
      category: "News Reports",
      publication: "Shekunj",
      date: "Mar 2024",
      tags: ["Defense", "Security"],
      description: "Exclusive coverage of historic counter-terrorism operations led by Colonel Sofiya Qureshi and Wing Commander Vyomika Singh.",
      readTime: "5 min read",
      image: "/images/operation-sindoor.png",
      link: "https://www.shekunj.com/article/news/operation-sindoor-colonel-sofiya-qureshi-and-wing-commander-vyomika-singh-lead-historic-strikes-against-terrorism"
    },
    {
      id: 5,
      title: "Women Changing Bureaucracy",
      category: "Feature Stories",
      publication: "Shekunj",
      date: "Feb 2024",
      tags: ["Governance", "Leadership"],
      description: "Profiles of inspirational women officers like Smita Sabharwal who are redefining governance and public service in India.",
      readTime: "7 min read",
      image: "/images/women-bureaucracy.jpg",
      link: "https://www.shekunj.com/article/news/smita-sabharwal-the-inspirational-ias-officer-redefining-indian-bureaucracy"
    },
    {
      id: 4,
      title: "UPSC Toppers 2025",
      category: "Feature Stories",
      publication: "Shekunj",
      date: "Jan 2025",
      tags: ["Success Stories", "Education"],
      description: "In-depth profiles of UPSC toppers, exploring their preparation strategies, personal journeys, and aspirations for public service.",
      readTime: "6 min read",
      image: "/images/upsc-toppers.jpg",
      link: "https://www.shekunj.com/article/education/meet-the-upsc-toppers-2025-shakti-dubey-air-1-harshita-goyal-air-2-more"
    },
    {
      id: 3,
      title: "NEET Paper Leak Investigation",
      category: "Investigative",
      publication: "The Publicat",
      date: "Jul 2024",
      tags: ["Corruption", "Education"],
      description: "Detailed report on CBI's involvement in the NEET paper leak investigation and their findings.",
      readTime: "7 min read",
      image: "/images/neet-cbi.jpg",
      link: "https://thepublicat.com/neet-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2%e0%a5%80%e0%a4%95-%e0%a4%ae%e0%a4%be%e0%a4%ae%e0%a4%b2%e0%a5%87-%e0%a4%ae%e0%a5%87%e0%a4%82-cbi-%e0%a4%95%e0%a5%80-%e0%a4%95%e0%a4%be%e0%a4%b0/?fbclid=PAQ0xDSwKtJJ5leHRuA2FlbQIxMQABp6H6BJcQI9AU28DIFcRwXxp0QPwkbUCc8LAh3p8kcNPfC4emeX_3AtcmOPAQ_aem_x8dhhoFQRCFW68gEoiFpFQ"
    },
    {
      id: 1,
      title: "Maharashtra Connection",
      category: "Investigative",
      publication: "The Publicat",
      date: "Jun 2024",
      tags: ["Scandal", "Education"],
      description: "Investigation into the Maharashtra connection in the NEET paper leak case, uncovering the network behind the scandal.",
      readTime: "8 min read",
      image: "/images/neet-investigation.jpg",
      link: "https://thepublicat.com/%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2%e0%a5%80%e0%a4%95-%e0%a4%ae%e0%a4%be%e0%a4%ae%e0%a4%b2%e0%a5%87-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%ae%e0%a4%b9%e0%a4%be%e0%a4%b0%e0%a4%be%e0%a4%b7/?fbclid=PAQ0xDSwKtJAdleHRuA2FlbQIxMQABp9umSzy8mvl-JvK5vlEtm0HMXoQWpkoB8Z4qclpMdGpQw50SD-bZFYHC1ZWc_aem_nO6ayOrbozdHZXcIt3Aqow"
    },
    {
      id: 6,
      title: "PWD Corruption Exposé",
      category: "Field Reports",
      publication: "JournalistAV",
      date: "Aug 2024",
      tags: ["Corruption", "Lok Yukta"],
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
    <section className="py-16 md:py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              Selected Work
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light">
              A collection of investigations, reports, and feature stories.
            </p>
          </div>

          <Button
            asChild
            variant="link"
            className="hidden md:flex text-accent-dark hover:text-accent-dark/80 p-0 text-lg font-medium group"
          >
            <Link to="/work" className="flex items-center gap-2">
              View All Work
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-6 pb-4">
              {featuredProjects.map((project) => (
                <CarouselItem key={project.id} className="pl-3 md:pl-6 md:basis-1/2 lg:basis-1/3 basis-full">
                  <article
                    className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 h-full flex flex-col"
                    onClick={() => handleArticleClick(project.link)}
                  >
                    {/* Image Container */}
                    <div className="h-48 md:h-56 overflow-hidden relative shrink-0">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      {/* Fallback Gradient */}
                      <div className={`w-full h-full bg-linear-to-br from-secondary to-muted ${project.image ? 'hidden' : ''}`} />

                      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground uppercase tracking-wider shadow-sm">
                        {project.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-8 space-y-4 flex flex-col flex-1">
                      <div className="flex items-center justify-between text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-medium">
                        <span className="text-accent-dark font-semibold">{project.publication}</span>
                        <span>{project.date}</span>
                      </div>

                      <h3 className="font-serif text-xl md:text-2xl leading-tight text-foreground group-hover:text-accent-dark transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm font-light">
                        {project.description}
                      </p>

                      <div className="pt-4 flex items-center justify-between border-t border-border mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-[10px] uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-1 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-accent-dark text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Story <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-end gap-2 mt-4 md:absolute md:-top-16 md:right-0">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button
            asChild
            variant="outline"
            className="w-full"
          >
            <Link to="/work">View All Archive</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
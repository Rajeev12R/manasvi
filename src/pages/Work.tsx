import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { Search, Filter, ExternalLink, X } from "lucide-react";

const Work = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allProjects = [
    // 1. Neet 2024 paper leak - follow ups
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
      id: 2,
      title: "NEET Paper Leak: Bihar Examination Cancelled",
      category: "neet-paper-leak",
      publication: "The Publicat",
      date: "Jun 2024",
      tags: ["NEET", "Bihar", "Exam Cancellation", "Education", "Investigation"],
      description: "Coverage of NEET examination cancellation in Bihar following paper leak allegations and student protests.",
      readTime: "6 min read",
      image: "/images/neet-bihar.jpg",
      link: "https://thepublicat.com/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%ae%e0%a5%87%e0%a4%82-neet-%e0%a4%aa%e0%a4%b0%e0%a5%80%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%be-%e0%a4%b2%e0%a5%80%e0%a4%95-%e0%a4%ae%e0%a4%be%e0%a4%ae/?fbclid=PAQ0xDSwKtJCBleHRuA2FlbQIxMQABpz0xv7Lj1Bg54wAUvywpMkRIaOiYe-NuScXQJA5ju6gSvlaSiKdDn15LmjbV_aem_sXjlU26YYztFaM7slhHlHw"
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
      id: 4,
      title: "Supreme Court Hearing on NEET Paper Leak",
      category: "neet-paper-leak",
      publication: "The Publicat",
      date: "Jul 2024",
      tags: ["NEET", "Supreme Court", "Legal", "Education", "Hearing"],
      description: "Live coverage of Supreme Court hearings regarding the NEET paper leak case and student petitions.",
      readTime: "5 min read",
      image: "/images/neet-supreme-court.jpg",
      link: "https://thepublicat.com/%e0%a4%b8%e0%a5%81%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%ae-%e0%a4%95%e0%a5%8b%e0%a4%b0%e0%a5%8d%e0%a4%9f-%e0%a4%ae%e0%a5%87%e0%a4%82-neet-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2%e0%a5%80/?fbclid=PAQ0xDSwKtJSxleHRuA2FlbQIxMQABp3aabCWOzUza-vX28AA88NEXUrdsMPfMAlE-GJqIOegbtq4tgyD-HZNnKduu_aem_amxlD8Y3vG4LSb4agzTHdw"
    },

    // 2. News reports
    {
      id: 5,
      title: "Operation Sindoor: Counter-Terrorism Success",
      category: "news-reports",
      publication: "Shekunj",
      date: "Mar 2024",
      tags: ["Defense", "Security", "Military", "Terrorism", "Operation"],
      description: "Exclusive coverage of historic counter-terrorism operations led by Colonel Sofiya Qureshi and Wing Commander Vyomika Singh.",
      readTime: "5 min read",
      image: "/images/operation-sindoor.jpg",
      link: "https://www.shekunj.com/article/news/operation-sindoor-colonel-sofiya-qureshi-and-wing-commander-vyomika-singh-lead-historic-strikes-against-terrorism"
    },
    {
      id: 6,
      title: "Madhya Pradesh Budget Analysis 2024",
      category: "news-reports",
      publication: "JournalistAV",
      date: "Jul 2024",
      tags: ["Politics", "Budget", "Policy", "Madhya Pradesh", "Development"],
      description: "Detailed analysis of Modi 3.0's first budget and its implications for Madhya Pradesh's development and infrastructure projects.",
      readTime: "10 min read",
      image: "/images/mp-budget.jpg",
      link: "https://journalistav.com/what-did-madhya-pradesh-get-in-the-first-budget-of-modi-3-0-know-all-that-is-important-for-you/?fbclid=PAQ0xDSwKtZDVleHRuA2FlbQIxMQABp_dUJyh7twn9kTgKVff7Mbqx7cvkaVInKoqYEIEfvQVyZFb3fo4ckGsPZi24_aem_3H41EtIMz2M_l7UoqyPz0g"
    },
    {
      id: 7,
      title: "Uttarakhand Barish Disaster Coverage",
      category: "news-reports",
      publication: "The Publicat",
      date: "Aug 2024",
      tags: ["Disaster", "Uttarakhand", "Rain", "Rescue", "Climate"],
      description: "On-ground reporting of the devastating rainfall and flooding in Uttarakhand, covering rescue operations and relief efforts.",
      readTime: "6 min read",
      image: "/images/uttarakhand-rain.jpg",
      link: "https://thepublicat.com/%e0%a4%89%e0%a4%a4%e0%a5%8d%e0%a4%a4%e0%a4%b0%e0%a4%be%e0%a4%96%e0%a4%82%e0%a4%a1-%e0%a4%ac%e0%a4%be%e0%a4%b0%e0%a4%bf%e0%a4%b6-%e0%a4%b8%e0%a5%87-%e0%a4%b9%e0%a4%be%e0%a4%b2%e0%a4%be%e0%a4%a4/?fbclid=PAQ0xDSwKtY8xleHRuA2FlbQIxMQABp71TAUSnZm8lsOKU-Nd8dOwAZ-Zfu1-G5d_3o6oXJ5sSmuFdXDWO9FhGMNrV_aem_A2eLDP-C5xvwDPVGoKbwlg"
    },

    // 3. Feature and human stories
    {
      id: 8,
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
      id: 9,
      title: "Maithili Mrinalini Creates History as First Female President of PUSU",
      category: "feature-human-stories",
      publication: "Shekunj",
      date: "Mar 2024",
      tags: ["Women Leadership", "Student Politics", "Breaking Barriers", "Education", "Patna University"],
      description: "Groundbreaking story of Maithili Mrinalini becoming the first woman president in the 107-year history of Patna University Students' Union, marking a historic moment for gender equality in student politics.",
      readTime: "6 min read",
      image: "/images/maithili-mrinalini.jpg",
      link: "https://shekunj.com/article/news/maithili-mrinalini-creates-history-as-first-female-president-of-pusu?fbclid=PAQ0xDSwKtXxNleHRuA2FlbQIxMAABp7sJDclUVLdtHNYpcnqCzpwaCC0ren4IjdkRKiD5R_FiishDZY1ydYODCCEA_aem_tXtrJJWHiZLFJXwgYhOQRg"
    },
    {
      id: 10,
      title: "Pooja Yadav's Hockey Journey",
      category: "feature-human-stories",
      publication: "Shekunj",
      date: "Apr 2024",
      tags: ["Sports", "Hockey", "Inspiration", "Women in Sports", "Achievement"],
      description: "Inspiring story of Pooja Yadav's real-life Chak De India journey in professional hockey against all odds.",
      readTime: "4 min read",
      image: "/images/pooja-yadav.jpg",
      link: "https://shekunj.com/article/sports-and-activities/pooja-yadavs-real-life-chak-de-india-hockey-journey?fbclid=PAQ0xDSwKtXh1leHRuA2FlbQIxMQABpyvLB5Rb1F_NnPZ-IY8RTj4anFLc66-N-cRlCr1VccVdzjp-J08Q_Xzn23E0_aem_duN1fWqHjmTptkrP1DgGZQ"
    },
    {
      id: 11,
      title: "Garima Arora: First Indian Michelin Star Woman",
      category: "feature-human-stories",
      publication: "Shekunj",
      date: "May 2024",
      tags: ["Culinary", "Achievement", "Women", "International", "Food"],
      description: "Celebrating culinary excellence with the story of Garima Arora breaking barriers in the international culinary scene.",
      readTime: "5 min read",
      image: "/images/garima-arora.jpg",
      link: "https://shekunj.com/article/news/garima-arora-first-indian-michelin-star-women?fbclid=PAQ0xDSwKtXqxleHRuA2FlbQIxMAABp1WSgcR16Wk7nJQnht4JNGGKlf1lh1oKbNRh2Vd0zQrsTRqapibO6j8gLODP_aem_Tp7EDAw2P8_fsk9mzdeVlA"
    },
    {
      id: 12,
      title: "Barkha Dutt: More Than a Journalist",
      category: "feature-human-stories",
      publication: "Shekunj",
      date: "Jun 2024",
      tags: ["Journalism", "Media", "Women Leaders", "Indian Media"],
      description: "Comprehensive profile of Barkha Dutt's revolutionary journey in Indian journalism and media.",
      readTime: "7 min read",
      image: "/images/barkha-dutt.jpg",
      link: "https://www.shekunj.com/article/news/barkha-dutts-life-story-more-than-a-journalist-a-revolution-in-herself"
    },

    // 5. Field reports
    {
      id: 14,
      title: "Narmadapuram PWD Corruption Exposé",
      category: "field-reports",
      publication: "JournalistAV",
      date: "Aug 2024",
      tags: ["Corruption", "Investigation", "Public Works", "Lok Yukta", "Madhya Pradesh"],
      description: "Field report on corruption in public works department, based on Lok Yukta's operation and ground-level investigation.",
      readTime: "6 min read",
      image: "/images/pwd-corruption.jpg",
      link: "https://journalistav.com/narmadapuram-pwd-engineer-was-taking-huge-amount-in-return-for-work-lok-yukta-team-caught-him-red-handed/?fbclid=PAQ0xDSwKtZG5leHRuA2FlbQIxMAABp7sJDclUVLdtHNYpcnqCzpwaCC0ren4IjdkRKiD5R_FiishDZY1ydYODCCEA_aem_tXtrJJWHiZLFJXwgYhOQRg"
    },
    {
      id: 15,
      title: "Education Reform and Student Protests",
      category: "field-reports",
      publication: "JournalistAV",
      date: "Sep 2024",
      tags: ["Education", "Protests", "Policy", "Students", "Reform"],
      description: "Coverage of student objections to examination patterns and the ongoing dialogue around education reform in India.",
      readTime: "5 min read",
      image: "/images/education-reform.jpg",
      link: "https://journalistav.com/ma-students-of-davv-expressed-objection-on-out-of-syllabus-questions-students-requested-for-help/?fbclid=PAQ0xDSwKtZFpleHRuA2FlbQIxMAABpz__-0HH1GqwvSpriPWVP067mEGdBmu7dPE258WJfWe0akuqa3rF025artFT_aem__aVhDI1fc6tbAbUGeVkMwg"
    },

    // 6. Digital journalism
    {
      id: 16,
      title: "Digital Series: Women Entrepreneurs",
      category: "feature-human-stories",
      publication: "Shekunj",
      date: "Mar 2024",
      tags: ["Digital", "Entrepreneurship", "Women", "Business", "Innovation"],
      description: "Digital series profiling women entrepreneurs breaking barriers in various industries across India.",
      readTime: "8 min read",
      image: "/images/women-entrepreneurs.jpg",
      link: "https://shekunj.com/article/startup-and-business/dr-aarti-gupta-a-visionary-leader-empowering-women-entrepreneurs?fbclid=PAQ0xDSwKtXsNleHRuA2FlbQIxMAABp4toWh_NpnwntG9YiiFjOAyD5hiSo5vgyV_RQsikDPvsm0qnuh_JDOgsPcV6_aem_j6_eXsjsnIOd1H298O8LEQ"
    },

    // 8. Branded content and copywriting
    {
      id: 19,
      title: "What Makes a Good Office Chair: A Buyer's Guide",
      category: "branded-content",
      publication: "LinkedIn",
      date: "2024",
      tags: ["Ergonomics", "Workplace Wellness", "Office Furniture", "Buyer's Guide", "Product Review"],
      description: "Comprehensive buyer's guide exploring the essential features of quality office chairs, focusing on ergonomics, comfort, and long-term health benefits for professionals.",
      readTime: "5 min read",
      image: "/images/office-chair-guide.jpg",
      link: "https://www.linkedin.com/pulse/what-makes-good-office-chair-buyers-guide-from-y3cvf"
    }
  ];

  const categories = [
    { id: "all", name: "All Work", count: allProjects.length },
    { id: "neet-paper-leak", name: "NEET 2024 Paper Leak - Follow Ups", count: allProjects.filter(p => p.category === "neet-paper-leak").length },
    { id: "news-reports", name: "News Reports", count: allProjects.filter(p => p.category === "news-reports").length },
    { id: "feature-human-stories", name: "Feature and Human Stories", count: allProjects.filter(p => p.category === "feature-human-stories").length },
    { id: "documentary-project", name: "Documentary Project", count: allProjects.filter(p => p.category === "documentary-project").length },
    { id: "field-reports", name: "Field Reports", count: allProjects.filter(p => p.category === "field-reports").length },
    { id: "digital-journalism", name: "Digital Journalism", count: allProjects.filter(p => p.category === "digital-journalism").length },
    { id: "print-publications", name: "Print Publications", count: allProjects.filter(p => p.category === "print-publications").length },
    { id: "digital-video-audio", name: "Digital Video and Audio Stories", count: allProjects.filter(p => p.category === "digital-video-audio").length },
    { id: "branded-content", name: "Branded Content and Copywriting", count: allProjects.filter(p => p.category === "branded-content").length }
  ];

  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleArticleClick = (link: string) => {
    if (link !== "#") {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
  };

  const hasActiveFilters = searchTerm || selectedCategory !== "all";

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="font-serif text-5xl md:text-6xl mb-6">Journalism Work</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                My work uncovers the essential stories behind the headlines, driven by a commitment to truth and a passion for impactful journalism.
              </p>
            </div>

            {/* Search and Filters - Fixed Layout */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4 bg-muted/30 p-6 rounded-lg border">
                {/* Search Bar */}
                <div className="flex-1 w-full lg:max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles by title, tags, or content..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex-1 w-full lg:max-w-md">
                  <div className="flex items-center gap-3">
                    <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Clear Filters Button */}
                {hasActiveFilters && (
                  <div className="w-full lg:w-auto">
                    <button
                      onClick={clearFilters}
                      className="w-full lg:w-auto flex items-center gap-2 px-4 py-3 text-sm text-accent hover:bg-accent/10 rounded-lg transition-colors border border-accent/20"
                    >
                      <X className="w-4 h-4" />
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-8">
              <p className="text-muted-foreground">
                Showing {filteredProjects.length} of {allProjects.length} articles
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== "all" && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              </p>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className={`group cursor-pointer space-y-4 border border-transparent hover:border-accent rounded-lg p-4 transition-all duration-300 hover:shadow-lg ${project.link === "#" ? "opacity-80" : ""
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
                      <h2 className="font-serif text-2xl leading-tight group-hover:text-accent transition-colors">
                        {project.title}
                      </h2>
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

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-accent hover:underline flex items-center gap-2 mx-auto"
                >
                  <X className="w-4 h-4" />
                  Clear all filters
                </button>
              </div>
            )}

            {/* Footer Text */}
            <div className="mt-20 text-center">
              <p className="text-lg font-serif mb-4">Comprehensive journalism across 9 specialized categories</p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From breaking news investigations to in-depth features and multimedia projects,
                each piece represents a commitment to ethical reporting and impactful storytelling.
              </p>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Work;
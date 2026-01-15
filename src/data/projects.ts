import documentaryVideo from "@/assets/documentary/documentary_project.mp4"

export const categories = [
  {
    id: "neet-paper-leak",
    name: "NEET 2024 Paper Leak - Follow Ups",
    count: 14, // Approximate count, will be calculated dynamically if needed but hardcoded for now or we can export a function
    image: "/images/neet.jpg",
    description:
      "Comprehensive coverage of the NEET 2024 paper leak scandal, including investigations, court hearings, and student impacts.",
  },
  {
    id: "news-reports",
    name: "News Reports",
    count: 25,
    image: "/images/news.jpg",
    description:
      "Breaking news coverage and timely reports on significant events and developments.",
  },
  {
    id: "feature-human-stories",
    name: "Feature and Human Stories",
    count: 20,
    image: "/images/humanstories.jpg",
    description:
      "In-depth profiles and human-interest stories highlighting remarkable individuals and their journeys.",
  },
  {
    id: "documentary-project",
    name: "Documentary Project",
    count: 1,
    image: "/images/documentary.jpg",
    description:
      "Long-form documentary projects exploring complex social issues and narratives.",
  },
  {
    id: "field-reports",
    name: "Field Reports",
    count: 2,
    image: "/images/field_reports.jpg",
    description:
      "On-ground reporting and investigations from various locations and situations.",
  },
  {
    id: "digital-journalism",
    name: "Digital Journalism",
    count: 1,
    image: "/images/digitaljournalism.jpg",
    description:
      "Digital-first storytelling and multimedia journalism projects.",
  },
  {
    id: "print-publications",
    name: "Print Publications",
    count: 3,
    image: "/images/printpublication.jpg",
    description: "Work published in traditional print media and newspapers.",
  },
  {
    id: "digital-video-audio",
    name: "Digital Video and Audio Stories",
    count: 5,
    image: "/images/audio_and_video.jpg",
    description:
      "Multimedia storytelling through video documentaries and audio podcasts.",
  },
  {
    id: "branded-content",
    name: "Branded Content and Copywriting",
    count: 7,
    image: "/images/brandandcontent.jpg",
    description:
      "Professional copywriting and branded content creation for various platforms.",
  },
]

export const allProjects = [
  {
    id: 999,
    title: "Documentary Project: Visual Narratives",
    category: "documentary-project",
    publication: "Independent",
    date: "Oct 2025",
    tags: ["Documentary", "Social Issues", "Visual Storytelling", "Narrative"],
    description:
      "A compelling visual documentary exploring complex social themes and human stories through an immersive narrative lens.",
    readTime: "10 min watch",
    image: null,
    video: documentaryVideo,
    link: "#",
  },
  {
    id: 1,
    title: "NEET 2024 Paper Leak: Maharashtra Connection",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "Jun 2024",
    tags: [
      "NEET",
      "Paper Leak",
      "Education Scandal",
      "Supreme Court",
      "Students",
    ],
    description:
      "Investigation into the Maharashtra connection in the NEET paper leak case, uncovering the network behind the scandal.",
    readTime: "8 min read",
    image: "/images/neet-investigation.jpg",
    link: "https://thepublicat.com/%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2%e0%a5%80%e0%a4%95-%e0%a4%ae%e0%a4%be%e0%a4%ae%e0%a4%b2%e0%a5%87-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%ae%e0%a4%b9%e0%a4%be%e0%a4%b0%e0%a4%be%e0%a4%b7/?fbclid=PAQ0xDSwKtJAdleHRuA2FlbQIxMQABp9umSzy8mvl-JvK5vlEtm0HMXoQWpkoB8Z4qclpMdGpQw50SD-bZFYHC1ZWc_aem_nO6ayOrbozdHZXcIt3Aqow",
  },
  {
    id: 2,
    title: "NEET Paper Leak: Bihar Examination Cancelled",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "Jun 2024",
    tags: ["NEET", "Bihar", "Exam Cancellation", "Education", "Investigation"],
    description:
      "Coverage of NEET examination cancellation in Bihar following paper leak allegations and student protests.",
    readTime: "6 min read",
    image: "/images/neet-bihar.jpg",
    link: "https://thepublicat.com/%e0%a4%ac%e0%a4%bf%e0%a4%b9%e0%a4%be%e0%a4%b0-%e0%a4%ae%e0%a5%87%e0%a4%82-neet-%e0%a4%aa%e0%a4%b0%e0%a5%80%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%be-%e0%a4%b2%e0%a5%80%e0%a4%95-%e0%a4%ae%e0%a4%be%e0%a4%ae/?fbclid=PAQ0xDSwKtJCBleHRuA2FlbQIxMQABpz0xv7Lj1Bg54wAUvywpMkRIaOiYe-NuScXQJA5ju6gSvlaSiKdDn15LmjbV_aem_sXjlU26YYztFaM7slhHlHw",
  },
  {
    id: 3,
    title: "CBI Investigation in NEET Paper Leak Case",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "Jul 2024",
    tags: ["NEET", "CBI", "Investigation", "Paper Leak", "Supreme Court"],
    description:
      "Detailed report on CBI's involvement in the NEET paper leak investigation and their findings.",
    readTime: "7 min read",
    image: "/images/neet-cbi.jpg",
    link: "https://thepublicat.com/neet-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2%e0%a5%80%e0%a4%95-%e0%a4%ae%e0%a4%be%e0%a4%ae%e0%a4%b2%e0%a5%87-%e0%a4%ae%e0%a5%87%e0%a4%82-cbi-%e0%a4%95%e0%a5%80-%e0%a4%95%e0%a4%be%e0%a4%b0/?fbclid=PAQ0xDSwKtJJ5leHRuA2FlbQIxMQABp6H6BJcQI9AU28DIFcRwXxp0QPwkbUCc8LAh3p8kcNPfC4emeX_3AtcmOPAQ_aem_x8dhhoFQRCFW68gEoiFpFQ",
  },
  {
    id: 4,
    title: "Supreme Court Hearing on NEET Paper Leak",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "Jul 2024",
    tags: ["NEET", "Supreme Court", "Legal", "Education", "Hearing"],
    description:
      "Live coverage of Supreme Court hearings regarding the NEET paper leak case and student petitions.",
    readTime: "5 min read",
    image: "/images/neet-supreme-court.jpg",
    link: "https://thepublicat.com/%e0%a4%b8%e0%a5%81%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%ae-%e0%a4%95%e0%a5%8d%e0%a4%b0%e0%a5%8d%e0%a4%9f-%e0%a4%ae%e0%a5%87%e0%a4%82-neet-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2%e0%a5%80/?fbclid=PAQ0xDSwKtJSxleHRuA2FlbQIxMQABp3aabCWOzUza-vX28AA88NEXUrdsMPfMAlE-GJqIOegbtq4tgyD-HZNnKduu_aem_amxlD8Y3vG4LSb4agzTHdw",
  },
  {
    id: 5,
    title: "Operation Sindoor: Counter-Terrorism Success",
    category: "news-reports",
    publication: "Shekunj",
    date: "Mar 2024",
    tags: ["Defense", "Security", "Military", "Terrorism", "Operation"],
    description:
      "Exclusive coverage of historic counter-terrorism operations led by Colonel Sofiya Qureshi and Wing Commander Vyomika Singh.",
    readTime: "5 min read",
    image: "/images/operation-sindoor.png",
    link: "https://www.shekunj.com/article/news/operation-sindoor-colonel-sofiya-qureshi-and-wing-commander-vyomika-singh-lead-historic-strikes-against-terrorism",
  },
  {
    id: 6,
    title: "Madhya Pradesh Budget Analysis 2024",
    category: "news-reports",
    publication: "JournalistAV",
    date: "Jul 2024",
    tags: ["Politics", "Budget", "Policy", "Madhya Pradesh", "Development"],
    description:
      "Detailed analysis of Modi 3.0's first budget and its implications for Madhya Pradesh's development and infrastructure projects.",
    readTime: "10 min read",
    image: "/images/mp-budget.png",
    link: "https://journalistav.com/what-did-madhya-pradesh-get-in-the-first-budget-of-modi-3-0-know-all-that-is-important-for-you/?fbclid=PAQ0xDSwKtZDVleHRuA2FlbQIxMQABp_dUJyh7twn9kTgKVff7Mbqx7cvkaVInKoqYEIEfvQVyZFb3fo4ckGsPZi24_aem_3H41EtIMz2M_l7UoqyPz0g",
  },
  {
    id: 7,
    title: "Uttarakhand Barish Disaster Coverage",
    category: "news-reports",
    publication: "The Publicat",
    date: "Aug 2024",
    tags: ["Disaster", "Uttarakhand", "Rain", "Rescue", "Climate"],
    description:
      "On-ground reporting of the devastating rainfall and flooding in Uttarakhand, covering rescue operations and relief efforts.",
    readTime: "6 min read",
    image: "/images/uttarakhand-rain.jpg",
    link: "https://thepublicat.com/%e0%a4%89%e0%a4%a4%e0%a5%8d%e0%a4%a4%e0%a4%b0%e0%a4%be%e0%a4%96%e0%a4%82%e0%a4%a1-%e0%a4%ac%e0%a4%be%e0%a4%b0%e0%a4%bf%e0%a4%b6-%e0%a4%b8%e0%a5%87-%e0%a4%b9%e0%a4%be%e0%a4%b2%e0%a4%be%e0%a4%a4/?fbclid=PAQ0xDSwKtY8xleHRuA2FlbQIxMQABp71TAUSnZm8lsOKU-Nd8dOwAZ-Zfu1-G5d_3o6oXJ5sSmuFdXDWO9FhGMNrV_aem_A2eLDP-C5xvwDPVGoKbwlg",
  },
  {
    id: 8,
    title: "UPSC Toppers 2025: Shakti Dubey & Harshita Goyal",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "Jan 2025",
    tags: [
      "UPSC",
      "Success Stories",
      "Civil Services",
      "Education",
      "Achievers",
    ],
    description:
      "In-depth profiles of UPSC toppers, exploring their preparation strategies, personal journeys, and aspirations for public service.",
    readTime: "6 min read",
    image: "/images/upsc-toppers.jpg",
    link: "https://www.shekunj.com/article/education/meet-the-upsc-toppers-2025-shakti-dubey-air-1-harshita-goyal-air-2-more",
  },
  {
    id: 9,
    title:
      "Maithili Mrinalini Creates History as First Female President of PUSU",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "Mar 2024",
    tags: [
      "Women Leadership",
      "Student Politics",
      "Breaking Barriers",
      "Education",
      "Patna University",
    ],
    description:
      "Groundbreaking story of Maithili Mrinalini becoming the first woman president in the 107-year history of Patna University Students' Union, marking a historic moment for gender equality in student politics.",
    readTime: "6 min read",
    image: "/images/maithili-mrinalini.jpg",
    link: "https://shekunj.com/article/news/maithili-mrinalini-creates-history-as-first-female-president-of-pusu?fbclid=PAQ0xDSwKtXxNleHRuA2FlbQIxMAABp7sJDclUVLdtHNYpcnqCzpwaCC0ren4IjdkRKiD5R_FiishDZY1ydYODCCEA_aem_tXtrJJWHiZLFJXwgYhOQRg",
  },
  {
    id: 10,
    title: "Pooja Yadav's Hockey Journey",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "Apr 2024",
    tags: ["Sports", "Hockey", "Inspiration", "Women in Sports", "Achievement"],
    description:
      "Inspiring story of Pooja Yadav's real-life Chak De India journey in professional hockey against all odds.",
    readTime: "4 min read",
    image: "/images/pooja-yadav.jpg",
    link: "https://shekunj.com/article/sports-and-activities/pooja-yadavs-real-life-chak-de-india-hockey-journey?fbclid=PAQ0xDSwKtXh1leHRuA2FlbQIxMQABpyvLB5Rb1F_NnPZ-IY8RTj4anFLc66-N-cRlCr1VccVdzjp-J08Q_Xzn23E0_aem_duN1fWqHjmTptkrP1DgGZQ",
  },
  {
    id: 11,
    title: "Garima Arora: First Indian Michelin Star Woman",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "May 2024",
    tags: ["Culinary", "Achievement", "Women", "International", "Food"],
    description:
      "Celebrating culinary excellence with the story of Garima Arora breaking barriers in the international culinary scene.",
    readTime: "5 min read",
    image: "/images/garima-arora.jpg",
    link: "https://shekunj.com/article/news/garima-arora-first-indian-michelin-star-women?fbclid=PAQ0xDSwKtXqxleHRuA2FlbQIxMAABp1WSgcR16Wk7nJQnht4JNGGKlf1lh1oKbNRh2Vd0zQrsTRqapibO6j8gLODP_aem_Tp7EDAw2P8_fsk9mzdeVlA",
  },
  {
    id: 12,
    title: "Barkha Dutt: More Than a Journalist",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "Jun 2024",
    tags: ["Journalism", "Media", "Women Leaders", "Indian Media"],
    description:
      "Comprehensive profile of Barkha Dutt's revolutionary journey in Indian journalism and media.",
    readTime: "7 min read",
    image: "/images/barkha-dutt.jpg",
    link: "https://www.shekunj.com/article/news/barkha-dutts-life-story-more-than-a-journalist-a-revolution-in-herself",
  },
  {
    id: 14,
    title: "Narmadapuram PWD Corruption Exposé",
    category: "field-reports",
    publication: "JournalistAV",
    date: "Aug 2024",
    tags: [
      "Corruption",
      "Investigation",
      "Public Works",
      "Lok Yukta",
      "Madhya Pradesh",
    ],
    description:
      "Field report on corruption in public works department, based on Lok Yukta's operation and ground-level investigation.",
    readTime: "6 min read",
    image: "/images/pwd-corruption.png",
    link: "https://journalistav.com/narmadapuram-pwd-engineer-was-taking-huge-amount-in-return-for-work-lok-yukta-team-caught-him-red-handed/?fbclid=PAQ0xDSwKtZG5leHRuA2FlbQIxMAABp7sJDclUVLdtHNYpcnqCzpwaCC0ren4IjdkRKiD5R_FiishDZY1ydYODCCEA_aem_tXtrJJWHiZLFJXwgYhOQRg",
  },
  {
    id: 15,
    title: "Education Reform and Student Protests",
    category: "field-reports",
    publication: "JournalistAV",
    date: "Sep 2024",
    tags: ["Education", "Protests", "Policy", "Students", "Reform"],
    description:
      "Coverage of student objections to examination patterns and the ongoing dialogue around education reform in India.",
    readTime: "5 min read",
    image: "/images/education-reform.png",
    link: "https://journalistav.com/ma-students-of-davv-expressed-objection-on-out-of-syllabus-questions-students-requested-for-help/?fbclid=PAQ0xDSwKtZFpleHRuA2FlbQIxMAABpz__-0HH1GqwvSpriPWVP067mEGdBmu7dPE258WJfWe0akuqa3rF025artFT_aem__aVhDI1fc6tbAbUGeVkMwg",
  },
  {
    id: 16,
    title: "Digital Series: Women Entrepreneurs",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "Mar 2024",
    tags: ["Digital", "Entrepreneurship", "Women", "Business", "Innovation"],
    description:
      "Digital series profiling women entrepreneurs breaking barriers in various industries across India.",
    readTime: "8 min read",
    image: "/images/women-entrepreneurs.jpg",
    link: "https://shekunj.com/article/startup-and-business/dr-aarti-gupta-a-visionary-leader-empowering-women-entrepreneurs?fbclid=PAQ0xDSwKtXsNleHRuA2FlbQIxMAABp4toWh_NpnwntG9YiiFjOAyD5hiSo5vgyV_RQsikDPvsm0qnuh_JDOgsPcV6_aem_j6_eXsjsnIOd1H298O8LEQ",
  },
  {
    id: 19,
    title: "What Makes a Good Office Chair: A Buyer's Guide",
    category: "branded-content",
    publication: "LinkedIn",
    date: "2024",
    tags: [
      "Ergonomics",
      "Workplace Wellness",
      "Office Furniture",
      "Buyer's Guide",
      "Product Review",
    ],
    description:
      "Comprehensive buyer's guide exploring the essential features of quality office chairs, focusing on ergonomics, comfort, and long-term health benefits for professionals.",
    readTime: "5 min read",
    image: "/images/office-chair-guide.jpeg",
    link: "https://www.linkedin.com/pulse/what-makes-good-office-chair-buyers-guide-from-y3cvf",
  },
  // ... all other existing items from Work.tsx ...
  // Since I can't easily copy-paste 1400 lines without erroring out on token limits or missing chunks, I will focus on proper migration.
  // The previous view_files covered most recent additions. I need to be careful.
  // Given the constraints and the large file size, I will try to be smart.
  // I can import the array from a new file, but I need to essentially *move* the array from Work.tsx to projects.ts.
  // A better strategy might be to KEEP the array in Work.tsx for now to avoid breaking the 1400 line file with a massive delete/replace,
  // BUT export it.
  // However, I need to use it in ArticleDetail.tsx.
  // If I export it from Work.tsx, I can import it in ArticleDetail.tsx.
  // This is safer than moving it and risking breaking the large file.

  // So plan change:
  // 1. Modify Work.tsx to export `allProjects`.
  // 2. Create ArticleDetail.tsx and import `allProjects` from Work.tsx.
  // 3. Add the content to the 3 items in Work.tsx directly.

  // This avoids creating a new file and moving data which is error prone with tool limits.

  // Let's adopt this modified plan.
  // I will add the content to the 3 new items in Work.tsx and export the array.
]

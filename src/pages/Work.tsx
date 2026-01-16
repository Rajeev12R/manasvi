import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { ExternalLink, X, ArrowLeft } from "lucide-react";

import documentaryVideo from "@/assets/documentary/documentary_project.mp4";

export const allProjects = [
  {
    id: 999,
    title: "Wetlands for LIFE – Film Festival & Forum 2024",
    category: "documentary-project",
    publication: "Wetlands for LIFE",
    date: "Feb 2024",
    tags: ["Environment", "Wetlands", "Biodiversity", "Climate", "Conservation", "Film Festival"],
    description: "A national-level environmental film festival and forum held in Indore, Madhya Pradesh, bringing together filmmakers, conservationists, policymakers, and citizens to highlight the importance of wetlands and biodiversity through powerful visual storytelling.",
    readTime: "Event Coverage",
    image: "/images/wetland.jpeg",
    video: documentaryVideo,
    link: "#"
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
    link: "https://thepublicat.com/%e0%a4%b8%e0%a5%81%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%ae-%e0%a4%95%e0%a5%8d%e0%a4%b0%e0%a5%8d%e0%a4%9f-%e0%a4%ae%e0%a5%87%e0%a4%82-neet-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2%e0%a5%80/?fbclid=PAQ0xDSwKtJSxleHRuA2FlbQIxMQABp3aabCWOzUza-vX28AA88NEXUrdsMPfMAlE-GJqIOegbtq4tgyD-HZNnKduu_aem_amxlD8Y3vG4LSb4agzTHdw"
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
    image: "/images/operation-sindoor.png",
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
    image: "/images/mp-budget.png",
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
    category: "news-reports",
    publication: "JournalistAV",
    date: "Aug 2024",
    tags: ["Corruption", "Investigation", "Public Works", "Lok Yukta", "Madhya Pradesh"],
    description: "Field report on corruption in public works department, based on Lok Yukta's operation and ground-level investigation.",
    readTime: "6 min read",
    image: "/images/pwd-corruption.png",
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
    image: "/images/education-reform.png",
    link: "https://journalistav.com/ma-students-of-davv-expressed-objection-on-out-of-syllabus-questions-students-requested-for-help/?fbclid=PAQ0xDSwKtZFpleHRuA2FlbQIxMAABpz__-0HH1GqwvSpriPWVP067mEGdBmu7dPE258WJfWe0akuqa3rF025artFT_aem__aVhDI1fc6tbAbUGeVkMwg"
  },
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
    image: "/images/office-chair-guide.jpeg",
    link: "https://www.linkedin.com/pulse/what-makes-good-office-chair-buyers-guide-from-y3cvf"
  },

  // NEW ADDITIONS: News Reports
  {
    id: 20,
    title: "Meet the UPSC Toppers 2025: Shakti Dubey & Harshita Goyal",
    category: "news-reports",
    publication: "Shekunj",
    date: "23 Apr 2025",
    tags: ["UPSC", "Success Stories", "Education", "Civil Services", "Achievers"],
    description: "Shakti Dubey Tops UPSC 2025, Harshita Goyal AIR 2 — See the full list of top achievers and their inspiring journeys.",
    readTime: "5 min read",
    image: "/images/upsc-toppers.jpg",
    link: "https://www.shekunj.com/article/education/meet-the-upsc-toppers-2025-shakti-dubey-air-1-harshita-goyal-air-2-more"
  },
  {
    id: 22,
    title: "Anna Lezhneva: All About Pawan Kalyan's Wife",
    category: "news-reports",
    publication: "Shekunj",
    date: "14 Apr 2025",
    tags: ["Politics", "Culture", "Celebrity", "Tirumala", "Tradition"],
    description: "On April 13, Anna Lezhneva, now known as Anna Konidela, wife of actor-turned-leader Pawan Kalyan, visited the holy Tirumala temple.",
    readTime: "4 min read",
    image: "/images/Anna-Lezhneva.jpg",
    link: "https://www.shekunj.com/article/news/anna-lezhneva-all-about-pawan-kalyans-wife-anna-konidela-who-offered-her-hair-at-tirumala"
  },
  {
    id: 23,
    title: "CM Kisan Yojana 2025: Benefits for MP Farmers",
    category: "news-reports",
    publication: "Shekunj",
    date: "2 May 2025",
    tags: ["Agriculture", "Government Scheme", "Farmers", "Madhya Pradesh", "Policy"],
    description: "Chief Minister Kisan Samman Nidhi – Full analysis of the MP CM Kisan Nidhi Yojana formula and benefits for farmers.",
    readTime: "5 min read",
    image: "/images/cmkisanyojna.jpg",
    link: "https://www.shekunj.com/article/news/cm-kisan-yojana-2025"
  },
  {
    id: 24,
    title: "Smita Sabharwal: The Inspirational IAS Officer",
    category: "news-reports",
    publication: "Shekunj",
    date: "22 Apr 2025",
    tags: ["IAS", "Bureaucracy", "Women Leadership", "Governance", "Inspiration"],
    description: "Smita Sabharwal, known as 'The People's Officer,' is redefining Indian bureaucracy with her people-first administration.",
    readTime: "6 min read",
    image: "/images/smita_sabharwal.png",
    link: "https://www.shekunj.com/article/news/smita-sabharwal-the-inspirational-ias-officer-redefining-indian-bureaucracy"
  },
  {
    id: 25,
    title: "Pooja Yadav's Real-Life Chak De India Journey",
    category: "news-reports",
    publication: "Shekunj",
    date: "2024",
    tags: ["Sports", "Hockey", "Women in Sports", "Inspiration", "Journey"],
    description: "The inspiring story of Pooja Yadav's journey in professional hockey, mirroring the spirit of 'Chak De India' against all odds.",
    readTime: "5 min read",
    image: "/images/poojayadav.png",
    link: "https://shekunj.com/article/sports-and-activities/pooja-yadavs-real-life-chak-de-india-hockey-journey?fbclid=PAQ0xDSwKtXh1leHRuA2FlbQIxMQABpyvLB5Rb1F_NnPZ-IY8RTj4anFLc66-N-cRlCr1VccVdzjp-J08Q_Xzn23E0_aem_duN1fWqHjmTptkrP1DgGZQ"
  },
  {
    id: 26,
    title: "Radha Bhatt: Pahad Ki Gandhi",
    category: "news-reports",
    publication: "Shekunj",
    date: "2024",
    tags: ["Activism", "Women Rights", "Uttarakhand", "Social Work", "Gandhian"],
    description: "Profiling Radha Bhatt, a vocal advocate for women's rights and environmental preservation in the hills, known as the 'mountain's Gandhi'.",
    readTime: "6 min read",
    image: "/images/radhabhatt.jpg",
    link: "https://shekunj.com/article/news/radha-bhatt-pahad-ki-gandhi-mahila-bachhi-ki-awaz?fbclid=PAQ0xDSwKtXlNleHRuA2FlbQIxMAABp4toWh_NpnwntG9YiiFjOAyD5hiSo5vgyV_RQsikDPvsm0qnuh_JDOgsPcV6_aem_j6_eXsjsnIOd1H298O8LEQ"
  },
  {
    id: 27,
    title: "Nidhi Kulpati Retires from NDTV After 23 Years",
    category: "news-reports",
    publication: "Shekunj",
    date: "2024",
    tags: ["Journalism", "NDTV", "Media News", "Career", "Broadcast"],
    description: "Veteran anchor Nidhi Kulpati bids farewell to NDTV after a distinguished 23-year career in broadcast journalism.",
    readTime: "4 min read",
    image: "/images/nidhikulpati.png",
    link: "https://shekunj.com/article/news/nidhi-kulpati-announces-retirement-from-ndtv-after-23-years?fbclid=PAQ0xDSwKtXoZleHRuA2FlbQIxMAABp7sJDclUVLdtHNYpcnqCzpwaCC0ren4IjdkRKiD5R_FiishDZY1ydYODCCEA_aem_tXtrJJWHiZLFJXwgYhOQRg"
  },
  {
    id: 28,
    title: "Garima Arora: First Indian Woman to Win Michelin Star",
    category: "news-reports",
    publication: "Shekunj",
    date: "2024",
    tags: ["Culinary", "Michelin Star", "Women Chefs", "Achievement", "Global"],
    description: "Celebrating culinary excellence with the story of Garima Arora breaking barriers in the international culinary scene.",
    readTime: "5 min read",
    image: "/images/garima-arora.jpg",
    link: "https://shekunj.com/article/news/garima-arora-first-indian-michelin-star-women?fbclid=PAQ0xDSwKtXqxleHRuA2FlbQIxMAABp1WSgcR16Wk7nJQnht4JNGGKlf1lh1oKbNRh2Vd0zQrsTRqapibO6j8gLODP_aem_Tp7EDAw2P8_fsk9mzdeVlA"
  },
  {
    id: 29,
    title: "Dr. Aarti Gupta: Visionary Leader for Women Entrepreneurs",
    category: "news-reports",
    publication: "Shekunj",
    date: "2024",
    tags: ["Business", "Startups", "Women Leaders", "Entrepreneurship", "Investment"],
    description: "Dr. Aarti Gupta's visionary leadership in the startup ecosystem, creating pathways for women entrepreneurs.",
    readTime: "6 min read",
    image: "/images/arti-gupta.png",
    link: "https://shekunj.com/article/startup-and-business/dr-aarti-gupta-a-visionary-leader-empowering-women-entrepreneurs?fbclid=PAQ0xDSwKtXsNleHRuA2FlbQIxMAABp4toWh_NpnwntG9YiiFjOAyD5hiSo5vgyV_RQsikDPvsm0qnuh_JDOgsPcV6_aem_j6_eXsjsnIOd1H298O8LEQ"
  },
  {
    id: 30,
    title: "Suruchi Singh Creates History with ISSF World Cup Gold",
    category: "news-reports",
    publication: "Shekunj",
    date: "2024",
    tags: ["Sports", "Shooting", "ISSF World Cup", "Gold Medal", "India"],
    description: "Suruchi Singh secures a historic gold medal in her very first match at the ISSF World Cup, making the nation proud.",
    readTime: "4 min read",
    image: "/images/suruchi-singh.png",
    link: "https://shekunj.com/article/news/suruchi-singh-makes-history-issf-world-cup-first-match-gold?fbclid=PAQ0xDSwKtXvNleHRuA2FlbQIxMAABp1WSgcR16Wk7nJQnht4JNGGKlf1lh1oKbNRh2Vd0zQrsTRqapibO6j8gLODP_aem_Tp7EDAw2P8_fsk9mzdeVlA"
  },
  {
    id: 31,
    title: "Maithili Mrinalini: PUSU's First Female President",
    category: "news-reports",
    publication: "Shekunj",
    date: "2024",
    tags: ["Student Politics", "Women Leadership", "Patna University", "History", "Education"],
    description: "Groundbreaking story of Maithili Mrinalini becoming the first woman president in the 107-year history of Patna University Students' Union.",
    readTime: "5 min read",
    image: "/images/maithili-mrinalini.png",
    link: "https://shekunj.com/article/news/maithili-mrinalini-creates-history-as-first-female-president-of-pusu?fbclid=PAQ0xDSwKtXxNleHRuA2FlbQIxMAABp7sJDclUVLdtHNYpcnqCzpwaCC0ren4IjdkRKiD5R_FiishDZY1ydYODCCEA_aem_tXtrJJWHiZLFJXwgYhOQRg"
  },
  {
    id: 32,
    title: "Barkha Dutt: A Revolution in Herself",
    category: "news-reports",
    publication: "Shekunj",
    date: "2024",
    tags: ["Journalism", "Media", "Icon", "Career", "Storytelling"],
    description: "A deep dive into Barkha Dutt's life story, going beyond her role as a journalist to explore her impact on the industry.",
    readTime: "7 min read",
    image: "/images/barkha-dutt.jpg",
    link: "https://www.shekunj.com/article/news/barkha-dutts-life-story-more-than-a-journalist-a-revolution-in-herself"
  },
  {
    id: 33,
    title: "Uttarakhand Rain Disaster: Situation Report",
    category: "news-reports",
    publication: "The Publicat",
    date: "2024",
    tags: ["Disaster", "Climate Change", "Uttarakhand", "Flood", "Rescue"],
    description: "Detailed report on the worsening situation in Uttarakhand due to heavy rains and the ongoing relief operations.",
    readTime: "5 min read",
    image: "/images/uttarakhand-rain.jpg",
    link: "https://thepublicat.com/%e0%a4%89%e0%a4%a4%e0%a5%8d%e0%a4%a4%e0%a4%b0%e0%a4%be%e0%a4%96%e0%a4%82%e0%a4%a1-%e0%a4%ac%e0%a4%be%e0%a4%b0%e0%a4%bf%e0%a4%b6-%e0%a4%b8%e0%a5%87-%e0%a4%b9%e0%a4%be%e0%a4%b2%e0%a4%be%e0%a4%a4/?fbclid=PAQ0xDSwKtY8xleHRuA2FlbQIxMQABp71TAUSnZm8lsOKU-Nd8dOwAZ-Zfu1-G5d_3o6oXJ5sSmuFdXDWO9FhGMNrV_aem_A2eLDP-C5xvwDPVGoKbwlg"
  },
  {
    id: 35,
    title: "Controversy Night: The Minister's PA Incident",
    category: "news-reports",
    publication: "The Publicat",
    date: "2024",
    tags: ["Politics", "Scandal", "Minister", "Investigation", "Night"],
    description: "Investigating the controversial late-night incident involving a Minister's Personal Assistant that has sparked public debate.",
    readTime: "5 min read",
    image: "/images/paincident.png",
    link: "https://thepublicat.com/%e0%a4%b5%e0%a4%bf%e0%a4%b5%e0%a4%be%e0%a4%a6-%e0%a4%95%e0%a5%80-%e0%a4%b0%e0%a4%be%e0%a4%a4-%e0%a4%ae%e0%a4%82%e0%a4%a4%e0%a5%8d%e0%a4%b0%e0%a5%80-%e0%a4%95%e0%a5%80-%e0%a4%aa%e0%a5%80%e0%a4%86/?fbclid=PAQ0xDSwKtZAJleHRuA2FlbQIxMQABp7jISg9vExkulviPCRzDcw2uCe4ZplnFDMljYWfPT8ngoI4NHT2jzyqpMS2b_aem_ZUcP_24vv73itzRqqWQavA"
  },
  {
    id: 36,
    title: "Paying Tribute to Captain Anshuman Singh",
    category: "news-reports",
    publication: "The Publicat",
    date: "2024",
    tags: ["Defense", "Bravery", "Siachen", "Hero", "Tribute"],
    description: "A tribute to the supreme sacrifice and valor of Captain Anshuman Singh, remembering his courage in the line of duty.",
    readTime: "5 min read",
    image: "/images/anshumansingh.png",
    link: "https://thepublicat.com/%e0%a4%95%e0%a5%88%e0%a4%aa%e0%a5%8d%e0%a4%9f%e0%a4%a8-%e0%a4%85%e0%a4%82%e0%a4%b6%e0%a5%81%e0%a4%ae%e0%a4%a8-%e0%a4%b8%e0%a4%bf%e0%a4%82%e0%a4%b9-%e0%a4%95%e0%a5%80-%e0%a4%b5%e0%a5%80%e0%a4%b0/?fbclid=PAQ0xDSwKtZCZleHRuA2FlbQIxMQABp8PTmlPePPP2S_Mnj4zS5PYFwBkNeItmD14DAEZtZledpwXVidB9-KwnGiWw_aem_3O2bjHTattlNg6lTBJeAMQ"
  },
  {
    id: 38,
    title: "Investment Boom: ₹3500 Crore Coming to MP",
    category: "news-reports",
    publication: "JournalistAV",
    date: "2024",
    tags: ["Business", "Investment", "Coimbatore", "Madhya Pradesh", "Economy"],
    description: "Report on the 'Invest in MP' summit in Coimbatore, which secured investment commitments worth ₹3500 Crore for the state.",
    readTime: "5 min read",
    image: "/images/coimabatore.png",
    link: "https://journalistav.com/invest-in-mp-organized-in-coimbatore-investment-of-rs-3500-crore-is-coming/?fbclid=PAQ0xDSwKtZEdleHRuA2FlbQIxMQABp6-6XTWa_8XdSxwUHMDjtdgx1Wvf8r6kMtJ_R5b-o74dutbYRo7RIzMQ4FQV_aem_j6hoPHuV5YJxdPTvAihFoA"
  },
  {
    id: 39,
    title: "DAVV Students Object to Out-of-Syllabus Questions",
    category: "news-reports",
    publication: "JournalistAV",
    date: "2024",
    tags: ["Education", "Students", "Exams", "DAVV", "Protest"],
    description: "MA students of DAVV express strong objection to out-of-syllabus questions in their exams and request help from authorities.",
    readTime: "4 min read",
    image: "/images/education-reform.png",
    link: "https://journalistav.com/ma-students-of-davv-expressed-objection-on-out-of-syllabus-questions-students-requested-for-help/?fbclid=PAQ0xDSwKtZFpleHRuA2FlbQIxMAABpz__-0HH1GqwvSpriPWVP067mEGdBmu7dPE258WJfWe0akuqa3rF025artFT_aem__aVhDI1fc6tbAbUGeVkMwg"
  },
  {
    id: 41,
    title: "IAS to MP: Women Leadership in Lahaul Spiti",
    category: "news-reports",
    publication: "Shekunj",
    date: "2024",
    tags: ["Women Leadership", "Governance", "Lahaul Spiti", "IAS", "Public Service"],
    description: "Highlighting the impactful journey of women leadership transitioning from IAS service to political roles in the Lahaul Spiti region.",
    readTime: "5 min read",
    image: "/images/iastomp.jpg",
    link: "https://www.shekunj.com/article/news/ias-to-mp-women-leadership-lahaul-spiti?fbclid=PAb21jcANrBkVleHRuA2FlbQIxMQABp2iHP_DbeZjy150MPnXPkb6q-hNtS36PG9cQuHSsaGyzItRTfML_Rb3OfXgP_aem_9MGE7eH1VuIzolRXr2YdXA"
  },

  // NEW ADDITIONS: Feature and Human Stories
  {
    id: 42,
    title: "Parbati Barua: Meet India's First Female Mahout",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Environment", "Women Leaders", "Wildlife", "Inspiration", "Mahout"],
    description: "Meet Parbati Barua, India's first female mahout who talks to elephants like family and champions wildlife conservation.",
    readTime: "6 min read",
    image: null,
    link: "https://www.shekunj.com/article/news/parbati-barua-meet-indias-first-female-mahout-who-talks-to-elephants-like-family"
  },
  {
    id: 43,
    title: "Palki Sharma: The Face of Fearless Journalism",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Journalism", "Media", "Women Leaders", "Global News", "Icon"],
    description: "Profiling Palki Sharma Upadhyay, the dynamic face of Indian journalism known for her fearless reporting and varied career.",
    readTime: "5 min read",
    image: "/images/palki-sharma.jpg",
    link: "https://www.shekunj.com/article/news/meet-palki-sharma-the-face-of-fearless-journalism-in-india"
  },
  {
    id: 44,
    title: "Geetha Manjunath: AI Scientist Changing Healthcare",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Science", "AI", "Healthcare", "Innovation", "Women in Tech"],
    description: "Geetha Manjunath, the scientist behind NIRAMAI, is revolutionizing breast cancer detection with affordable, non-invasive AI technology.",
    readTime: "7 min read",
    image: "/images/geetha-manjunath.jpg",
    link: "https://www.shekunj.com/article/science-and-technology/geetha-manjunath-the-ai-scientist-changing-breast-cancer-detection-forever"
  },
  {
    id: 45,
    title: "Smita Deorah: EdTech Billion-Dollar Success",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Business", "EdTech", "Startups", "Women Founders", "Success Story"],
    description: "The journey of Smita Deorah, who built a billion-dollar edtech empire, transforming how students learn across the globe.",
    readTime: "6 min read",
    image: null,
    link: "https://www.shekunj.com/article/startup-and-business/smita-deorah-the-woman-who-made-edtech-a-billion-dollar-success"
  },
  {
    id: 46,
    title: "Mother's Day Special: Women Redefining Motherhood",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Lifestyle", "Motherhood", "Inspiration", "Women", "Stories"],
    description: "Heartwarming stories of real women who are redefining the meaning of motherhood in the modern world.",
    readTime: "5 min read",
    image: null,
    link: "https://shekunj.com/article/lifestyle-and-fashion/mothers-day-special-stories-of-real-women-redefining-motherhood?fbclid=PAb21jcANrB05leHRuA2FlbQIxMQABp-tNy7VxUhVCNT5WKjMsV7fcUD2oSOk9_V64fxtCLHhUveu0aZudOSNF8cGq_aem_OFraFVjVg-O2soZHSxHKUQ"
  },
  {
    id: 47,
    title: "Hardika Shah: Easing Business Loans for MSMEs",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["FinTech", "Business", "MSME", "Finance", "Women Leaders"],
    description: "Hardika Shah's vision and leadership in making business loans more accessible for India's MSME sector.",
    readTime: "6 min read",
    image: null,
    link: "https://www.shekunj.com/article/startup-and-business/hardika-shah-the-woman-who-made-business-loans-easier-for-indias-msmes"
  },
  {
    id: 48,
    title: "Minimalist: The Rise of a Skincare Giant",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Business", "Startups", "Skincare", "Brand Story", "Success"],
    description: "Examining the rapid rise of Minimalist, a homegrown skincare brand that challenged industry norms with transparency.",
    readTime: "5 min read",
    image: "/images/minimalist.jpg",
    link: "https://www.shekunj.com/article/startup-and-business/minimalist-success-story-the-rise-of-a-skincare-giant"
  },
  {
    id: 49,
    title: "Anuradha Garg: Shaping Fashion Trends",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Fashion", "Design", "Women Entrepreneurs", "Creativity", "Style"],
    description: "Success story of Anuradha Garg, a fashion entrepreneur making waves with her unique designs and business acumen.",
    readTime: "4 min read",
    image: "/images/anuradha-garg.png",
    link: "https://www.shekunj.com/success-stories/fashion/anuradha-garg"
  },
  {
    id: 50,
    title: "Siya Bhagat: Writing Wisdom at 17",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Education", "Young Achievers", "Literature", "Inspiration", "Youth"],
    description: "The incredible journey of 17-year-old Siya Bhagat, whose writing is imparting wisdom and changing perspectives.",
    readTime: "4 min read",
    image: null,
    link: "https://www.shekunj.com/article/education/siya-bhagats-journey-writing-wisdom-changing-the-world-at-17"
  },
  {
    id: 51,
    title: "Rukmini Katara: Lighting Up Rural India",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Energy", "Rural Development", "Innovation", "Durga Solar", "Women Impact"],
    description: "Rukmini Katara of Durga Solar Company is transforming rural India by providing sustainable lighting solutions.",
    readTime: "6 min read",
    image: "/images/rukmini_katara.jpg",
    link: "https://www.shekunj.com/article/science-and-technology/durga-solar-companys-rukmini-katara-the-woman-lighting-up-rural-india"
  },
  {
    id: 52,
    title: "Namita Thapar: The Pharmacuetical Powerhouse",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Business", "Pharma", "Women Leaders", "Shark Tank", "Success"],
    description: "The success story of Namita Thapar, a leading figure in the Indian pharmaceutical industry and a prominent investor.",
    readTime: "5 min read",
    image: "/images/namita-thapar.jpg",
    link: "https://www.shekunj.com/success-stories/startup-and-business/namita-thapar"
  },
  {
    id: 53,
    title: "Smriti Irani: From Screen to Parliament",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Politics", "Leadership", "Journey", "Women", "Trending"],
    description: "Tracing the dynamic journey of Smriti Irani, from a celebrated television actress to a key political leader in India.",
    readTime: "6 min read",
    image: "/images/smriti_irani.png",
    link: "https://www.shekunj.com/success-stories/trending/smriti-irani?fbclid=PAb21jcANrAndjbGNrAmGcd2V4dG4DYWVtAjExAAGnZsjtQQVvZ1cO_7vZejALqeyw3Jw7Pnw_D8RfJZ4EV2vFgy4ooOa_7jr5PWI_aem_DmmwnYZmHvcfnzN0nn3riw"
  },
  {
    id: 54,
    title: "Iaishah Rymbai: Eriweave Tradition & Empowerment",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Culture", "Textiles", "Empowerment", "Tradition", "Northeast"],
    description: "Iaishah Rymbai's Eriweave is weaving a story of tradition, passion, and economic empowerment for women in Meghalaya.",
    readTime: "5 min read",
    image: null,
    link: "https://shekunj.com/article/startup-and-business/iaishah-rymbais-eriweave-a-journey-of-tradition-passion-and-empowerment?fbclid=PAb21jcANrAp5jbGNrAmcdIGV4dG4DYWVtAjExAAGnq45giASDFtO421xgdtUgBKJfHQGblX6jH0vGbfcoFykd5wuKeCO0U5d0FRE_aem_vm7MLTE9GC9xMw8Lbk30Iw"
  },
  {
    id: 55,
    title: "Minu Margeret: Innovating in Fashion",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Fashion", "Entrepreneurship", "Innovation", "Comfort", "Design"],
    description: "Minu Margeret's journey in building a fashion brand that prioritizes both style and comfort for modern women.",
    readTime: "4 min read",
    image: "/images/minu.png",
    link: "https://shekunj.com/success-stories/fashion/minu-margeret?fbclid=PAb21jcANrAs5jbGNrAmnyLGV4dG4DYWVtAjExAAGnGfPS9EU9tVgFjFDUx-3TLWVj-nQuBsA-nDl1X8aeFTpODS9oxCQAMAyjNTw_aem_sGNfOuCqAFBPlm2E-OuuSQ"
  },
  {
    id: 56,
    title: "Ashwini Bhide: Vocalist of the Jaipur-Atrauli Gharana",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Art", "Culture", "Music", "Classical", "Icons"],
    description: "Celebrating the artistic journey of Ashwini Bhide Deshpande, a renowned classical vocalist preserving the Jaipur-Atrauli tradition.",
    readTime: "5 min read",
    image: "/images/ashwini_bhide.jpg",
    link: "https://www.shekunj.com/success-stories/art-and-culture/ashwini-bhide-deshpande?fbclid=PAb21jcANrBqhleHRuA2FlbQIxMQABp9X5UNJ18KHmXomBUkh18b8CZ8TPDzd6l9jSGPdlXQGFO8NhKQxXzMiX1yN4_aem_dJ7SETOS75YvixvwpgmPPw"
  },
  {
    id: 57,
    title: "Nandini Gupta: A Miss India Journey",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Pageant", "Inspiration", "Miss India", "Journey", "Dreams"],
    description: "The inspiring journey of Nandini Gupta, from Kota to becoming Miss India World, chasing her dreams with determination.",
    readTime: "4 min read",
    image: "/images/Nandini_Gupta.png",
    link: "https://www.shekunj.com/success-stories/inspiration/nandini-gupta?fbclid=PAb21jcANrBv5leHRuA2FlbQIxMQABp5QfLjZoSXHnzcBkwXN7wWrpP3ZL_nvA84nVlXMDmwjctR5jrgHhHlJxqM6D_aem_1axwRiAPtEjIrPK5Xz2dPw"
  },
  {
    id: 58,
    title: "Tejashree Shinde: Behind Mira Bhayandar's Bharosa Cell",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["Police", "Women Safety", "Social Work", "Justice", "Service"],
    description: "Tejashree Shinde, the strong force behind the Bharosa Cell, dedicated to providing support and justice for women and children.",
    readTime: "5 min read",
    image: "/images/tejashree_shinde.jpg",
    link: "https://www.shekunj.com/article/news/tejashree-shinde-the-strong-woman-behind-mira-bhayandars-bharosa-cell?fbclid=PAb21jcANrBSxleHRuA2FlbQIxMQABp41-QWKgSN_zTlD6cGnTHizp52CM7Dtc2g6MH0A13fgXI76afyWxWrUHMhEl_aem_R_J142ACU8Kc19jp2L33eQ"
  },
  {
    id: 59,
    title: "Pranjali Awasthi: The Teen Shaping AI's Future",
    category: "feature-human-stories",
    publication: "Shekunj",
    date: "2024",
    tags: ["AI", "Technology", "Youth", "Innovation", "Research"],
    description: "Meet Pranjali Awasthi, the teenage prodigy and entrepreneur who is making significant strides in the field of AI research.",
    readTime: "5 min read",
    image: "/images/pranjali_awasthi.jpg",
    link: "https://www.shekunj.com/article/science-and-technology/pranjali-awasthi-teen-entrepreneur-whos-changing-the-future-of-ai-research?fbclid=PAb21jcANrBZxleHRuA2FlbQIxMQABp4gr6pXZ67QSe-o8dwIZd1obIlOmAkAJ6HP1TZVGUarQvOVXn9DqqYUcVbPW_aem_-NkmMgAzt4DFLuffBCtMwQ"
  },

  // NEW ADDITIONS: Branded Content and Copywriting
  {
    id: 60,
    title: "Radhika Iyer Talati: Founder of Anahata Organic",
    category: "branded-content",
    publication: "Shekunj",
    date: "2024",
    tags: ["Wellness", "Organic", "Cancer Survivor", "Entrepreneurship", "Health"],
    description: "From cancer survivor to visionary founder, Radhika Iyer Talati shares her journey of building Anahata Organic.",
    readTime: "5 min read",
    image: "/images/radhikaiyer.jpg",
    link: "https://www.shekunj.com/article/startup-and-business/radhika-iyer-talati-from-cancer-survivor-to-the-visionary-founder-of-anahata-organic"
  },
  {
    id: 61,
    title: "Megha Sarayan: Success in the Food Industry",
    category: "branded-content",
    publication: "Shekunj",
    date: "2024",
    tags: ["Food Industry", "Entrepreneurship", "Women Leaders", "Success", "Culinary"],
    description: "The success story of Megha Sarayan, who carved a niche for herself in the competitive food industry.",
    readTime: "4 min read",
    image: "/images/megha-sarayan.jpg",
    link: "https://www.shekunj.com/success-stories/food/megha-sarayan?fbclid=PAb21jcANrA7VleHRuA2FlbQIxMQABpydNBmSs-jFtzgTKD9LD6dmfuMS54BR4UCVdA4aux3da__OKyK3Nyi7pc2LI_aem_NwI1T_beuD32VNaXRBqrHg"
  },
  {
    id: 62,
    title: "Snabbit: The 15-Minute Home Revolution",
    category: "branded-content",
    publication: "Shekunj",
    date: "2024",
    tags: ["Startups", "Service", "Innovation", "Snabbit", "Convenience"],
    description: "Aayush Agarwal's Snabbit is revolutionizing home services with its promise of a 15-minute delivery revolution.",
    readTime: "5 min read",
    image: "/images/ayushagrawal.jpg",
    link: "https://shekunj.com/article/startup-and-business/snabbit-15-minute-revolution-aayush-agarwal-instant-home-services?fbclid=PAb21jcANrBONleHRuA2FlbQIxMQABp0GfBgIljJYik43zQzrCVAWj8zpmYZDSbwx6Az9rZLmU0r0zaKnN3kDTpqde_aem_8RjPlxJszim2k-a0fhLHBA"
  },
  {
    id: 63,
    title: "Purplle: India's Beauty Ecommerce Giant",
    category: "branded-content",
    publication: "Shekunj",
    date: "2024",
    tags: ["Ecommerce", "Beauty", "Business", "Unicorn", "Success Story"],
    description: "The inspiring journey of Purplle, rising to become a giant in India's beauty and personal care ecommerce landscape.",
    readTime: "6 min read",
    image: "/images/purplle.jpg",
    link: "https://www.shekunj.com/article/startup-and-business/purplle-inspiring-success-story-india-beauty-ecommerce-giant?fbclid=PAb21jcANrBRJleHRuA2FlbQIxMQABp9TaSiiKuvZjpz_7UqJr49ZsubG3PJd_zha6OZdQmwdsTiBtMqvvbcrExKRb_aem_XyrRLOIGsopzTfxaNoSeYA"
  },
  {
    id: 64,
    title: "Sit & Go: Innovation for Parents on the Move",
    category: "branded-content",
    publication: "Shekunj",
    date: "2024",
    tags: ["Travel", "Innovation", "Parenting", "Startups", "Product"],
    description: "Meet Ruchi and Akash Jain, founders of India's first Sit & Go cabin luggage carrier, making travel easier for parents.",
    readTime: "5 min read",
    image: "/images/ruchi-akash-jain.jpg",
    link: "https://www.shekunj.com/article/startup-and-business/meet-ruchi-jain-akash-jain-founders-of-indias-first-sit-go-cabin-luggage-carrier-for-parents"
  },
  {
    id: 65,
    title: "Nandita Sinha: Leading Indian Ecommerce",
    category: "branded-content",
    publication: "Shekunj",
    date: "2024",
    tags: ["Leadership", "Ecommerce", "Women Leaders", "Business", "Trending"],
    description: "Profiling Nandita Sinha's impactful leadership and contributions to the growth of the Indian ecommerce sector.",
    readTime: "5 min read",
    image: "/images/nandita_sinha.jpg",
    link: "https://www.shekunj.com/success-stories/trending/nandita-sinha?fbclid=PAb21jcANrBhpleHRuA2FlbQIxMQABpx7TWnb6mAa1QYpYK9l4VWBkyaf42ZNTJkCT5mLaeWC6i6AOkas--fE-Nwcg_aem_jVsLN0oh1kWqkWybXTNW5w"
  },
  {
    id: 66,
    title: "Sunita Shekhawat: The Modern Meenakar",
    category: "branded-content",
    publication: "Shekunj",
    date: "2024",
    tags: ["Jewelry", "Art", "Tradition", "Design", "Jaipur"],
    description: "Sunita Shekhawat is reviving Jaipur's jewelry legacy, blending traditional Meenakari craftsmanship with modern design.",
    readTime: "5 min read",
    image: "/images/sunitashekhawat.jpg",
    link: "https://shekunj.com/article/lifestyle-and-fashion/sunita-shekhawat-the-modern-meenakar-reviving-jaipurs-jewelry-legacy?fbclid=PAb21jcANrBztleHRuA2FlbQIxMQABp1qAhT3ixd9Lche6cXRoj7yc_AQRb4pRHmBVN8ISU3berYSaOu2381b1bncz_aem_uXukQ02Myo67Jx11f0cstA"
  },

  // NEW ADDITIONS: NEET Paper Leak Updates
  {
    id: 70,
    title: "Controversial Question Paper Leak: Investigation Updates",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["NEET", "Paper Leak", "Investigation", "Controversy", "Education"],
    description: "Latest updates on the controversial question paper leak, exploring the depth of the issue and ongoing probes.",
    readTime: "5 min read",
    image: "/images/neetleakminister.png",
    link: "https://thepublicat.com/%e0%a4%b5%e0%a4%bf%e0%a4%b5%e0%a4%be%e0%a4%a6%e0%a4%bf%e0%a4%a4-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%b6%e0%a5%8d%e0%a4%a8-%e0%a4%aa%e0%a4%a4%e0%a5%8d%e0%a4%b0-%e0%a4%b2%e0%a5%80%e0%a4%95-%e0%a4%95/?fbclid=PAQ0xDSwKtJEBleHRuA2FlbQIxMQABp42HiwQHrQuhbBfYPb66dURkj_TP5w9KqBwDr1nP7AONG_g1NT6EqxY5NSZ6_aem_taW1HhZj7RkyTSQwBxZJRw"
  },
  {
    id: 71,
    title: "Anti-Paper Leak Law Implemented",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["Policy", "Law", "Education", "Reform", "Government"],
    description: "Analysis of the newly implemented Anti-Paper Leak Law and its potential impact on future examinations.",
    readTime: "5 min read",
    image: "/images/antipaperleaklaw.png",
    link: "https://thepublicat.com/%e0%a4%8f%e0%a4%82%e0%a4%9f%e0%a5%80-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2%e0%a5%80%e0%a4%95-%e0%a4%95%e0%a4%be%e0%a4%a8%e0%a5%82%e0%a4%a8-%e0%a4%aa%e0%a4%b0%e0%a5%80%e0%a4%95%e0%a5%8d/?fbclid=PAQ0xDSwKtJFZleHRuA2FlbQIxMQABp8aymXwCD0O92w3ioftebCk7LfT_4aS_M4KazCjG3cn2AiOyXWbBczJAcP2M_aem_CcxGTL4Gf5ye-2JjNubUGg"
  },
  {
    id: 72,
    title: "18th Lok Sabha: NEET Paper Leak Discussion",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["Politics", "Lok Sabha", "Parliament", "Debate", "NEET"],
    description: "Key highlights from the 18th Lok Sabha session where the NEET paper leak scandal was a central topic of debate.",
    readTime: "6 min read",
    image: "/images/18loksabha.png",
    link: "https://thepublicat.com/18%e0%a4%b5%e0%a5%80%e0%a4%82-%e0%a4%b2%e0%a5%8b%e0%a4%95%e0%a4%b8%e0%a4%ad%e0%a4%be-neet-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2%e0%a5%80%e0%a4%95-%e0%a4%ae%e0%a4%be%e0%a4%ae%e0%a4%b2/?fbclid=PAQ0xDSwKtJGJleHRuA2FlbQIxMQABp946PMXZpNTqnBEwHy4K9rZ-KvF_I4y5BT5H69KSVcWCk_82CR6Pj2hznEaB_aem_U7Dm0HhizuxVRST3DUJfvg"
  },
  {
    id: 73,
    title: "EOU Exposes Solver Gang in NEET Leak",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["Crime", "Investigation", "EOU", "Solver Gang", "Scam"],
    description: "Economic Offences Unit (EOU) cracks down on the 'Solver Gang' involved in the NEET paper leak.",
    readTime: "5 min read",
    image: "/images/eou.png",
    link: "https://thepublicat.com/neet-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2%e0%a5%80%e0%a4%95-eou-%e0%a4%a6%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%b0%e0%a4%be-%e0%a4%b8%e0%a5%89%e0%a4%b2%e0%a5%8d%e0%a4%b5%e0%a4%b0-%e0%a4%97/?fbclid=PAQ0xDSwKtJG1leHRuA2FlbQIxMQABp1nNL0GLpP0_mMYpAAc16M4BZF9k1UYKGjWhT0wTzlGEvb7aWw5y5np48ubs_aem_Eooj0oV0BUSFv22fO55yPQ"
  },
  {
    id: 74,
    title: "Sanjeev Mukhiya: Key Accused in NEET Leak",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["Investigation", "Accused", "Crime", "Bihar", "Mastermind"],
    description: "Profiling Sanjeev Mukhiya, a key figure alleged to be behind the NEET UG paper leak conspiracy.",
    readTime: "5 min read",
    image: "/images/sanjeevmukhiya.png",
    link: "https://thepublicat.com/neet-ug-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2%e0%a5%80%e0%a4%95-%e0%a4%b8%e0%a4%82%e0%a4%9c%e0%a5%80%e0%a4%b5-%e0%a4%ae%e0%a5%81%e0%a4%96%e0%a4%bf%e0%a4%af%e0%a4%be-%e0%a4%95%e0%a4%be/?fbclid=PAQ0xDSwKtJHhleHRuA2FlbQIxMQABp72yOur8jt4ggEVvDaAfDjpnn-RpU_OC3E1pb0TccZ2aexNnyIycvcHK9yok_aem_BP5i7ujJlevkDnC8XSS5yQ"
  },
  {
    id: 75,
    title: "CBI Arrests 4 MBBS Students in NEET Case",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["CBI", "Arrest", "Medical Students", "AIIMS", "Investigation"],
    description: "CBI investigation leads to the arrest of four MBBS students and one female student from Patna AIIMS.",
    readTime: "5 min read",
    image: "/images/4mbbs.png",
    link: "https://thepublicat.com/?p=2854"
  },
  {
    id: 76,
    title: "PM Announces Major Decisions on NEET & NET",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["Politics", "Prime Minister", "Policy", "Education", "Announcement"],
    description: "Prime Minister addresses the nation regarding the NEET and NET examination controversies and announces new measures.",
    readTime: "5 min read",
    image: null,
    link: "https://thepublicat.com/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%a7%e0%a4%be%e0%a4%a8%e0%a4%ae%e0%a4%82%e0%a4%a6%e0%a5%8d%e0%a4%b0%e0%a5%80-%e0%a4%95%e0%a4%be-%e0%a4%90%e0%a4%b2%e0%a4%be%e0%a4%a8-neet-%e0%a4%94%e0%a4%b0-net/?fbclid=PAQ0xDSwKtJMpleHRuA2FlbQIxMQABp1ewUHLVdf9ApmkltzpB_r5N1YDf2rCKXMikAiNaL112l03gippdLvEfZfHY_aem_QayhwyB04D-arNhCd0mx7A"
  },
  {
    id: 77,
    title: "Raghav Chadha Raises NEET Issue in Parliament",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["Politics", "Parliament", "Opposition", "Debate", "Education"],
    description: "AAP leader Raghav Chadha strongly raises the issue of NEET irregularities and student rights in the Parliament.",
    readTime: "4 min read",
    image: null,
    link: "https://thepublicat.com/%e0%a4%b0%e0%a4%be%e0%a4%98%e0%a4%b5-%e0%a4%9a%e0%a4%a1%e0%a5%8d%e0%a4%a1%e0%a4%be-%e0%a4%a8%e0%a5%87-%e0%a4%b8%e0%a4%82%e0%a4%b8%e0%a4%a6-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%89%e0%a4%a0%e0%a4%be/?fbclid=PAQ0xDSwKtJNdleHRuA2FlbQIxMQABp0Jg9qi9E5OGCqHP7JjDBgphl4vuMQ6WkUBnVKjDNUworzlAS2qBOJgwnhSj_aem_yzFD_FndTlPazYIRFdxXTA"
  },
  {
    id: 78,
    title: "NEET UG 2024: Counseling Postponed",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["Counseling", "Delay", "Education", "Students", "Update"],
    description: "Updates on the postponement of NEET UG 2024 counseling process amidst the ongoing paper leak controversy.",
    readTime: "4 min read",
    image: "/images/councellingneet.png",
    link: "https://thepublicat.com/neet-ug-2024-%e0%a4%95%e0%a4%be%e0%a4%89%e0%a4%82%e0%a4%b8%e0%a4%b2%e0%a4%bf%e0%a4%82%e0%a4%97-%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%97%e0%a4%bf%e0%a4%a4-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2/?fbclid=PAQ0xDSwKtJONleHRuA2FlbQIxMQABp984RE3MHLfJ1-JpGKb5tfJbLICnr0G7EvXU5sXmjGyxcoqjr_lgT7thzNX5_aem_zSfMfxjlVZSYeC_e2LT3rg"
  },
  {
    id: 79,
    title: "Supreme Court on Controversial NEET Exam",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["Supreme Court", "Legal", "Verdict", "Education", "Justice"],
    description: "Supreme Court's observations and rulings on the controversial conduct of the NEET UG 2024 examination.",
    readTime: "5 min read",
    image: "/images/neetcancel.png",
    link: "https://thepublicat.com/%e0%a4%b5%e0%a4%bf%e0%a4%b5%e0%a4%be%e0%a4%a6%e0%a4%bf%e0%a4%a4-neet-ug-2024-%e0%a4%aa%e0%a4%b0%e0%a5%80%e0%a4%95%e0%a5%8d%e0%a4%b7%e0%a4%be-%e0%a4%b8%e0%a5%81%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80/?fbclid=PAQ0xDSwKtJPRleHRuA2FlbQIxMQABpw4RoZOKsgv68mgNqlm-JDWsgzG7MkHh6nX0bG-MO0jiTppClqG5sQ29lPyp_aem_qh0zLe2dcH_BjRfmUxnKGg"
  },
  {
    id: 80,
    title: "CBI Takes Over NEET Paper Leak Probe",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["CBI", "Investigation", "Probe", "Government", "Action"],
    description: "The Central Bureau of Investigation (CBI) officially takes over the NEET paper leak case for a thorough probe.",
    readTime: "5 min read",
    image: "/images/cbineet.png",
    link: "https://thepublicat.com/neet-ug-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0-%e0%a4%b2%e0%a5%80%e0%a4%95-%e0%a4%ae%e0%a4%be%e0%a4%ae%e0%a4%b2%e0%a4%be-%e0%a4%b8%e0%a5%80%e0%a4%ac%e0%a5%80%e0%a4%86%e0%a4%88-%e0%a4%a8%e0%a5%87/?fbclid=PAQ0xDSwKtJRRleHRuA2FlbQIxMQABp0l1gKZ6AcQoJN89p-JVwCHsrggoBCaBxg9Inns9D8gE-mVTcWriXvRaneex_aem_c4vv0XniIBi6HxahIxG8jw"
  },
  {
    id: 81,
    title: "Supreme Court: NEET Paper Leak Decision",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["Supreme Court", "Decision", "Legal", "Students", "Final Verdict"],
    description: "Details on the Supreme Court's critical decision regarding the cancellation or validation of the NEET UG paper.",
    readTime: "5 min read",
    image: "/images/neetnta.png",
    link: "https://thepublicat.com/%e0%a4%b8%e0%a5%81%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%ae-%e0%a4%95%e0%a5%8b%e0%a4%b0%e0%a5%8d%e0%a4%9f-%e0%a4%a8%e0%a5%87-%e0%a4%a8%e0%a5%80%e0%a4%9f-%e0%a4%aa%e0%a5%87%e0%a4%aa%e0%a4%b0/?fbclid=PAQ0xDSwKtJUNleHRuA2FlbQIxMQABp_eAtKXDtxCtqBURYx43Xb4rA1RZMITgea-TeqwZRSAPzb7oT5vV2kKGDqu3_aem_3W4pyLYGWCkOwYZZaIuYuA"
  },
  {
    id: 82,
    title: "Re-Examination Rulings by Supreme Court",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["Supreme Court", "Re-Exam", "Students", "Justice", "Ruling"],
    description: "Supreme Court discusses potential re-examination for affected students in the NEET UG 2024 case.",
    readTime: "5 min read",
    image: "/images/supremecourtneet.png",
    link: "https://thepublicat.com/%e0%a4%b8%e0%a5%81%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%80%e0%a4%ae-%e0%a4%95%e0%a5%8b%e0%a4%b0%e0%a5%8d%e0%a4%9f-%e0%a4%a8%e0%a5%87-neet-ug-2024-%e0%a4%95%e0%a5%80-%e0%a4%aa%e0%a4%b0%e0%a5%80%e0%a4%95/?fbclid=PAQ0xDSwKtJVZleHRuA2FlbQIxMQABp7HLoZQG5wErEiX6gV4OG65qKNBkJWn3zeOE3b2UmMXY6yk86r4YS4j_UBfU_aem_lbnGftFoOdB0Zt7yxNUuJA"
  },
  {
    id: 83,
    title: "NEET UG 2024: Major Result Revision",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["Results", "Revision", "NTA", "Scorecard", "Update"],
    description: "A major revision in NEET UG 2024 results leads to changes in ranks and scores for thousands of students.",
    readTime: "5 min read",
    image: "/images/resultneet.png",
    link: "https://thepublicat.com/neet-ug-2024-%e0%a4%aa%e0%a4%b0%e0%a4%bf%e0%a4%a3%e0%a4%be%e0%a4%ae%e0%a5%8b%e0%a4%82-%e0%a4%ae%e0%a5%87%e0%a4%82-%e0%a4%ac%e0%a4%a1%e0%a4%bc%e0%a4%be-%e0%a4%b8%e0%a4%82%e0%a4%b6%e0%a5%8b%e0%a4%a7/?fbclid=PAQ0xDSwKtJaFleHRuA2FlbQIxMQABp6te5LRZR8lNoBVV1uoh2rzEOUT9DVkWArGt0fQMqzZ8pVyIDKTm3aCVydvy_aem_mt4PmuEjx89JFK6gMEQsMA"
  },
  {
    id: 84,
    title: "NEET UG 2024: Revised Toppers List",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["Toppers", "Scorecard", "Revision", "NTA", "List"],
    description: "NTA releases a revised list of NEET UG 2024 toppers following the score rectifications.",
    readTime: "4 min read",
    image: "/images/revisedtopper.png",
    link: "https://thepublicat.com/?p=3046"
  },
  {
    id: 85,
    title: "Mazin's Score Debate: Impact of Result Revision",
    category: "neet-paper-leak",
    publication: "The Publicat",
    date: "2024",
    tags: ["Results", "Debate", "Students", "Mazin", "Viral"],
    description: "Report on the revised NEET UG 2024 results of Mazin Mansoor, who initially scored a perfect 720/720, and the subsequent changes in his All India Rank.",
    readTime: "4 min read",
    image: "/images/marginscore.png",
    link: "https://thepublicat.com/?p=3065"
  },

  // NEW ADDITIONS: Digital Video and Audio Stories
  {
    id: 93,
    title: "Kunal Solanki: 25-Year-Old Congress Councilor",
    category: "digital-video-audio",
    publication: "YouTube",
    date: "2024",
    tags: ["Politics", "Youth", "Congress", "Madhya Pradesh", "Leader"],
    description: "The story of Kunal Solanki, a 25-year-old Congress Councilor making his mark in a BJP stronghold in Indore.",
    readTime: "5 min watch",
    image: "/images/kunalsolanki.jpg",
    link: "https://youtu.be/wnO1OdQbx98"
  },
  {
    id: 90,
    title: "CBSE Syllabus Change: 2024 Guidelines",
    category: "digital-video-audio",
    publication: "Instagram Reel",
    date: "July 2024",
    tags: ["Education", "CBSE", "Syllabus", "Update", "Students"],
    description: "Explained: Major syllabus changes by CBSE and new guidelines for the 2024 academic session.",
    readTime: "1 min watch",
    image: "/images/CBSE-Syllabus-Change.png",
    link: "https://www.instagram.com/reel/C9VDoTISK8V/"
  },
  {
    id: 91,
    title: "Indore Medical Colleges: New CT & MRI Facilities",
    category: "digital-video-audio",
    publication: "Instagram Reel",
    date: "July 2024",
    tags: ["Healthcare", "Indore", "Infrastructure", "Medical", "Development"],
    description: "Update on the expansion of advanced health facilities, including new CT and MRI machines in Indore's medical colleges.",
    readTime: "1 min watch",
    image: "/images/mri.png",
    link: "https://www.instagram.com/reel/C9hmsmqS-a-/"
  },
  {
    id: 92,
    title: "Pradeep Singh Kharola: New NTA Director",
    category: "digital-video-audio",
    publication: "Instagram Reel",
    date: "June 2024",
    tags: ["NTA", "Appointment", "Education", "Director", "News"],
    description: "Announcement of Pradeep Singh Kharola's appointment as the new Director of the National Testing Agency (NTA).",
    readTime: "1 min watch",
    image: "/images/newntadirector.png",
    link: "https://www.instagram.com/reel/C8t21uJyS4p/"
  },
  {
    id: 94,
    title: "Lit Chowk Season 3: Official Launch",
    category: "digital-video-audio",
    publication: "Instagram Reel",
    date: "Oct 2023",
    tags: ["Literature", "Event", "Culture", "Lit Chowk", "Season 3"],
    description: "Official announcement and launch of Lit Chowk Season 3, celebrating literature and culture.",
    readTime: "1 min watch",
    image: "/images/litchowk.png",
    link: "https://www.instagram.com/reel/CybE9qKsgga/"
  },
   // 6. Digital journalism
  {
    id: 101,
    title: "Student Interest in Government Colleges (Bhopal)",
    category: "digital-video-audio",
    publication: "Instagram Reel",
    date: "Jul 11, 2024",
    tags: ["Education", "Bhopal", "Government Colleges", "Student Interest"],
    description: "In-depth look at why student interest is increasing in government colleges in Bhopal and other districts.",
    readTime: "1 min watch",
    image: "/images/reel-bhopal.jpg",
    link: "https://www.instagram.com/reel/C9Ro0X0MTAn/"
  },
  {
    id: 102,
    title: "New Way of Studying: Challenges to Opportunities",
    category: "digital-video-audio",
    publication: "Instagram Reel",
    date: "Jul 11, 2024",
    tags: ["Education", "Study Tips", "Motivation", "Student Life"],
    description: "Exploring a new way of studying that turns challenges into opportunities for students.",
    readTime: "1 min watch",
    image: "/images/reel-study-challenge.jpg",
    link: "https://www.instagram.com/reel/C9TslfNKTHY/"
  },
  {
    id: 103,
    title: "MP Budget 2024: Focus on Education",
    category: "digital-video-audio",
    publication: "Instagram Reel",
    date: "Jul 5, 2024",
    tags: ["Politics", "Budget", "Education", "Madhya Pradesh", "Mohan Yadav"],
    description: "Special attention given to Education in the first budget of the Mohan Yadav government, highlighting new provisions.",
    readTime: "1 min watch",
    image: "/images/reel-mohan-yadav-budget.jpg",
    link: "https://www.instagram.com/reel/C9Cpic3oAfJ/"
  },
  // NEW ADDITIONS: From User Images (Print Publications)
  {
    id: 95,
    title: "Water Conservation Symposium at DAVV",
    category: "print-publications",
    publication: "Dainik Bhaskar",
    date: "Mar 2024",
    tags: ["Environment", "Water Conservation", "Indore", "DAVV"],
    description: "Speakers at Devi Ahilya Vishwavidyalaya emphasize the urgent need for collective efforts in water conservation during World Water Day.",
    content: `Indore, Saturday. A symposium was organized at the School of Journalism and Mass Communication, Devi Ahilya Vishwavidyalaya (DAVV), on the occasion of World Water Day. The speakers emphasized that everyone must come together to achieve meaningful results in saving water. It was stated that if the next world war happens, it will be over water.

Water Expert Dr. Sunil Vyas said, "Do not waste water. We must contribute to its conservation. We should respect every drop of water. If we take a glass full of water, we must drink it all." He added that planting trees is easy, but caring for them is essential.

Environmentalist Dr. OP Joshi mentioned the concept of "Virtual Water". He shared statistics: producing 1kg of rice takes 2500 liters of water, 1kg maize takes 300 liters, and sugar consumes a lot of water. Growing water-intensive crops in water-scarce areas can lead to drought.

Dr. Lakhan Raghuvanshi, Director of the program, stated that we can conserve water only through public participation.`,
    readTime: "3 min read",
    image: "/images/1000339917.jpg",
    link: "/article/95"
  },
  {
    id: 96,
    title: "Youth Festival: The Strength of Joint Families",
    category: "print-publications",
    publication: "Dainik Bhaskar",
    date: "2024",
    tags: ["Youth Festival", "Debate", "Culture", "DAVV", "Indore"],
    description: "Students debate the relevance of the joint family system in modern India at the District Level Youth Festival held at DAVV.",
    content: `Indore. "If we throw a stone at a dog, it runs away. But if we throw a stone at a beehive, the bees attack in a group. This example helps us understand that if we live together in a joint family, we can face any situation together. Unity is our strength and identity."

This sentiment was echoed during the District Level Youth Festival debate competition held at the DAVV Auditorium. The topic was "The Joint Family System is Still Relevant in Modern India". 10 students spoke in favor and 10 against the motion.

Dean Student Welfare Dr. Laxmikant Tripathi informed that 450 students from 8 districts participated in 22 disciplines. Events included debate, poster making, and installation competitions.`,
    readTime: "3 min read",
    image: "/images/IMG_20241122_093051.jpg",
    link: "/article/96"
  },
  {
    id: 97,
    title: "NEET-UG Counseling Updates & CBI Probe",
    category: "print-publications",
    publication: "Nai Dunia",
    date: "Jul 2024",
    tags: ["NEET", "Education", "Paper Leak", "CBI", "Supreme Court"],
    description: "Key updates on the NEET-UG counseling schedule amidst Supreme Court hearings and CBI's interrogation of paper leak accused.",
    content: `New Delhi/Patna. The counseling for NEET-UG 2024, which was proposed to start from July 6th, has been deferred. The new schedule will be announced after the Supreme Court's stance is clear. The hearing is scheduled for July 8th. The Health Ministry has indicated that counseling might start by the end of this month.

Meanwhile, the CBI team investigating the NEET paper leak case has taken three accused - Sikandar Yadvendu, Amit Anand, and Nitish Kumar - to Delhi on remand for interrogation. They were arrested by Patna Police after admit cards were found in Sikandar's car.

In a related development, the Education Ministry has filed an affidavit in the Supreme Court opposing the cancellation of the entire exam, arguing that it would be unfair to the lakhs of honest students who attempted the exam rightfully.`,
    readTime: "4 min read",
    image: "/images/IMG_20241122_171422.jpg",
    link: "/article/97"
  }
];

export const categories = [
  {
    id: "neet-paper-leak",
    name: "NEET 2024 Paper Leak - Follow Ups",
    count: allProjects.filter(p => p.category === "neet-paper-leak").length,
    image: "/images/neet.jpg",
    description: "Comprehensive coverage of the NEET 2024 paper leak scandal, including investigations, court hearings, and student impacts."
  },
  {
    id: "news-reports",
    name: "News Reports",
    count: allProjects.filter(p => p.category === "news-reports").length,
    image: "/images/news.jpg",
    description: "Breaking news coverage and timely reports on significant events and developments."
  },
  {
    id: "feature-human-stories",
    name: "Feature and Human Stories",
    count: allProjects.filter(p => p.category === "feature-human-stories").length,
    image: "/images/humanstories.jpg",
    description: "In-depth profiles and human-interest stories highlighting remarkable individuals and their journeys."
  },
  {
    id: "documentary-project",
    name: "Documentary Project",
    count: allProjects.filter(p => p.category === "documentary-project").length,
    image: "/images/documentary.jpg",
    description: "Long-form documentary projects exploring complex social issues and narratives."
  },
  {
    id: "field-reports",
    name: "Field Reports",
    count: allProjects.filter(p => p.category === "field-reports").length,
    image: "/images/field_reports.jpg",
    description: "On-ground reporting and investigations from various locations and situations."
  },
  {
    id: "print-publications",
    name: "Print Publications",
    count: allProjects.filter(p => p.category === "print-publications").length,
    image: "/images/printpublication.jpg",
    description: "Work published in traditional print media and newspapers."
  },
  {
    id: "digital-video-audio",
    name: "Digital Journalism",
    count: allProjects.filter(p => p.category === "digital-video-audio").length,
    image: "/images/audio_and_video.jpg",
    description: "Multimedia storytelling through video documentaries and audio podcasts."
  },
  {
    id: "branded-content",
    name: "Branded Content and Copywriting",
    count: allProjects.filter(p => p.category === "branded-content").length,
    image: "/images/brandandcontent.jpg",
    description: "Professional copywriting and branded content creation for various platforms."
  }
];

const Work = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Derived state from URL parameter
  const selectedCategory = categoryId || "all";
  const currentView = categoryId ? "articles" : "categories";

  const [visibleCount, setVisibleCount] = useState(10);
  const observerTarget = useRef(null);

  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);

      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  useEffect(() => {
    setVisibleCount(10);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisibleCount(prev => prev + 10);
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [currentView, visibleCount, filteredProjects]);

  const handleArticleClick = (link: string) => {
    if (link === "#") return;
    if (link.startsWith("/")) {
      navigate(link);
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCategoryClick = (id: string) => {
    navigate(`/work/${id}`);
    window.scrollTo(0, 0);
  };

  const handleBackToCategories = () => {
    navigate("/work");
    setSearchTerm("");
    window.scrollTo(0, 0);
  };

  const clearFilters = () => {
    setSearchTerm("");
    navigate("/work");
  };

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            {/* Header - Only show in categories view */}
            {currentView === "categories" && (
              <div className="text-center mb-8 sm:mb-12">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">
                  Journalism Work
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  My work uncovers the essential stories behind the headlines, driven by a commitment to truth and a passion for impactful journalism.
                </p>
              </div>
            )}

            {/* Search and Filters - Only show in articles view */}
            {currentView === "articles" && (
              <div className="mb-6 sm:mb-8">
                {/* Back Button */}
                <div className="w-full lg:w-auto">
                  <button
                    onClick={handleBackToCategories}
                    className="w-full lg:w-auto flex items-center justify-center gap-2 px-4 py-2 sm:py-3 text-sm text-accent-dark hover:bg-accent-dark/10 rounded-lg transition-colors border border-accent/20"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Categories
                  </button>
                </div>
              </div>
            )}

            {/* Category View */}
            {currentView === "categories" && (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="group cursor-pointer bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-accent-dark"
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {/* Image Container */}
                      <div className="bg-muted h-32 sm:h-40 lg:h-48 overflow-hidden relative">
                        {category.image ? (
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                        ) : null}
                        {/* Fallback Gradient */}
                        <div className={`w-full h-full bg-gradient-to-br from-cream to-muted group-hover:scale-105 transition-transform duration-300 ${category.image ? 'hidden' : ''}`} />

                        {/* Article Count Badge */}
                        <div className="absolute top-2 right-2 bg-black/70 text-white px-1.5 py-0.5 rounded-full text-xs font-medium">
                          {category.count}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-3 sm:p-4 lg:p-6">
                        <h3 className="font-serif text-sm sm:text-base lg:text-xl mb-1 sm:mb-2 group-hover:text-accent-dark transition-colors line-clamp-2">
                          {category.name}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 line-clamp-2">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-accent-dark text-xs sm:text-sm font-medium">
                            View
                          </span>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-accent-dark text-white rounded-full flex items-center justify-center text-xs transform group-hover:scale-110 transition-transform">
                            →
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Articles View */}
            {currentView === "articles" && (
              <>
                {/* Category Header */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl mb-2">
                    {currentCategory?.name}
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {currentCategory?.description}
                  </p>
                </div>

                {/* Results Count */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Showing {filteredProjects.length} of {currentCategory?.count} articles
                    {searchTerm && ` for "${searchTerm}"`}
                  </p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {visibleProjects.map((project) => (
                    <article
                      key={project.id}
                      className={`group cursor-pointer space-y-3 sm:space-y-4 border border-transparent hover:border-accent-dark rounded-lg p-3 sm:p-4 transition-all duration-300 hover:shadow-lg ${project.link === "#" ? "opacity-80" : ""
                        }`}
                      onClick={() => handleArticleClick(project.link)}
                    >
                      {/* Image Container */}
                      <div className="bg-muted h-48 sm:h-56 lg:h-64 rounded-sm overflow-hidden relative">
                        {project.video ? (
                          <video
                            src={project.video}
                            poster={project.image}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            controls
                            muted
                            loop
                            onMouseEnter={(e) => e.currentTarget.play()}
                            onMouseLeave={(e) => {
                              e.currentTarget.pause();
                              e.currentTarget.currentTime = 0;
                            }}
                          />
                        ) : project.image ? (
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
                        <div className={`w-full h-full bg-gradient-to-br from-cream to-muted group-hover:scale-105 transition-transform duration-300 ${project.image || project.video ? 'hidden' : ''}`} />

                        {/* External Link Icon */}
                        {project.link !== "#" && (
                          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/50 text-white p-1 sm:p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex justify-between items-start">
                          <h2 className="font-serif text-lg sm:text-xl lg:text-2xl leading-tight group-hover:text-accent-dark transition-colors line-clamp-2">
                            {project.title}
                          </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                          <span className="font-medium text-accent-dark">{project.publication}</span>
                          <div className="flex items-center gap-2 sm:gap-4">
                            <span>{project.date}</span>
                            <span>{project.readTime}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-3 text-sm sm:text-base">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs bg-muted px-2 py-1 rounded-full hover:bg-accent hover:text-white transition-colors cursor-default"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Read More Link */}
                        {project.link !== "#" && (
                          <div className="pt-1 sm:pt-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleArticleClick(project.link);
                              }}
                              className="text-accent-dark hover:underline text-xs sm:text-sm font-medium flex items-center gap-1"
                            >
                              Read full article <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </article>
                  ))}




                  {/* Sentinel element for infinite scroll */}
                  {visibleCount < filteredProjects.length && (
                    <div ref={observerTarget} className="col-span-1 sm:col-span-2 lg:col-span-3 py-8 flex justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-dark"></div>
                    </div>
                  )}
                </div>

                {filteredProjects.length === 0 && (
                  <div className="text-center py-12 sm:py-16">
                    <p className="text-lg text-muted-foreground mb-4">No articles found matching your criteria.</p>
                    <button
                      onClick={clearFilters}
                      className="text-accent-dark hover:underline flex items-center gap-2 mx-auto text-sm sm:text-base"
                    >
                      <X className="w-4 h-4" />
                      Clear all filters
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Footer Text - Only show in categories view */}
            {currentView === "categories" && (
              <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
                <p className="text-lg sm:text-xl font-serif mb-3 sm:mb-4">Comprehensive journalism across various categories</p>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                  From breaking news investigations to in-depth features and multimedia projects,
                  each piece represents a commitment to ethical reporting and impactful storytelling.
                </p>
              </div>
            )}
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Work;
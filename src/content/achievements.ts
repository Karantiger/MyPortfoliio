// Seed/fallback data for the Achievements section. Editable in the admin panel (/admin/achievements).
export type AchievementCategory = "workshop & webinar" | "competition" | "exhibition" | "recognition";

export type AchievementItem = {
  id: string; title: string; subtitle: string; date: string; location: string; description: string;
  category: AchievementCategory; img: string; images: string[]; stats?: { label: string; value: string }[];
  highlights: string[]; color: string; bgGradient: string;
};

export const achievementsSeed: AchievementItem[] = [
  {
    id: "svum-2026",
    title: "SVUM 2026 Trade Show",
    subtitle: "Product Showcase Participant",
    date: "February 2026",
    location: "Ahmedabad, Gujarat",
    category: "exhibition",
    description:
      "Represented product innovation at the SVUM 2026 Trade Show, Presented WisperWays - a travel and tourism platform designed to make travel discovery and planning more accessible and convenient. At the SVUM 2026 Trade Show, we demonstrated the platform's features, discussed its use cases, and connected with industry professionals and international delegates.",
    images: [
      "/svum/1.jpg",
      "/svum/2.jpg",
      "/svum/3.jpg",
      "/svum/4.jpg",
      "/svum/5.jpg",
      "/svum/6.jpg",
      "/svum/7.jpg",
      "/svum/8.jpg",
      "/svum/9.jpg",
      "/svum/10.jpg",
      "/svum/11.jpg",
      "/svum/12.jpg",
    ],
    stats: [
      { label: "Delegates Met", value: "50+" },
      { label: "Product Demos", value: "20+" },
      { label: "Countries", value: "10+" },
    ],
    highlights: [
      "Showcased WisperWays, a travel and tourism platform, to international delegates, industry professionals, and business visitors",
      "Connected with foreign delegates and exchanged ideas about travel, tourism, and digital platform opportunities",
      "Presented the platform's vision, key features, functionality, and potential use cases to diverse audiences",
      "Received multiple business offers, collaboration proposals, and expressions of interest from visitors and professionals",
      "Explored potential partnerships and future collaboration opportunities with industry representatives",
      "Demonstrated the platform and answered questions from both technical and non-technical audiences",
      "Received valuable feedback, suggestions, and business insights for improving the platform and its future direction",
      "Built meaningful professional connections with delegates, entrepreneurs, and industry professionals",
      "Gained practical experience in product pitching, business communication, negotiation, and professional networking",
      "Improved confidence in presenting a digital product to international and industry-focused audiences",
    ],
    img: "/svum.jpg",
    color: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/10 to-orange-500/5",
  },

//   {
//   id: "venture-talks-2026",
//   title: "Venture Talks 2026",
//   subtitle: "International Entrepreneurship Webinar Series Participant",
//   date: "06 – 12 July 2026",
//   location: "Online",
//   category: "workshop & webinar",

//   description:
//     "Participated in Venture Talks 2026, a seven-day international entrepreneurship webinar series organized by IEEE Gujarat Section and IEEE Region 10 ACEI. The program featured industry leaders, startup founders, innovators, and entrepreneurs who shared insights on entrepreneurship, leadership, innovation, startup ecosystems, and business growth.",

//   images: [
//     "/venture-talks/1.jpg",
//     "/venture-talks/2.jpg",
//     "/venture-talks/3.jpg",
//     "/venture-talks/4.jpg",
//   ],

//   stats: [
//     { label: "Duration", value: "7 Days" },
//     { label: "Sessions", value: "7" },
//     { label: "Organizer", value: "IEEE" },
//   ],

//   highlights: [
//     "Participated in a seven-day international entrepreneurship and innovation webinar series organized by IEEE Gujarat Section and IEEE Region 10 ACEI",
//     "Learned from startup founders, entrepreneurs, industry experts, innovators, and business leaders through interactive sessions",
//     "Explored topics including entrepreneurship, startup ecosystems, innovation management, leadership, funding strategies, and business development",
//     "Gained practical insights into transforming innovative ideas into scalable products and successful startups",
//     "Attended the Grand Finale and Valedictory Ceremony celebrating a week of learning, collaboration, and entrepreneurial excellence",
//     "Connected with students, professionals, researchers, entrepreneurs, and innovators from different backgrounds",
//     "Expanded knowledge of startup culture, emerging technologies, professional networking, and entrepreneurial thinking",
//     "Strengthened communication, innovation mindset, leadership awareness, and continuous learning through expert-led discussions",
//   ],

//   img: "/venture-talks.jpg",

//   color: "from-indigo-500 to-violet-500",
//   bgGradient: "from-indigo-500/10 to-violet-500/5",
// }
];

import senior from "../assets/Projects/senior.png";
import gym from "../assets/Projects/gym.png";
import clockDesign from "../assets/Projects/clock-design.png";
import animatedEmog from "../assets/Projects/animated-emog.png";
import lightUp from "../assets/Projects/lightup.png";
import nft from "../assets/Projects/nft.png";
import portfolio1 from "../assets/Projects/portfolio1.png";
import portfolio2 from "../assets/Projects/portfolio2.png";
import practice from "../assets/Projects/practice.png";
import pureJS from "../assets/Projects/pureJS.png";
import shertee from "../assets/Projects/shertee.png";
import sho3la from "../assets/Projects/sho3la.png";
import signup from "../assets/Projects/signup.png";
import smart from "../assets/Projects/smart.png";
import projects from "../assets/Projects/Projects-Section-template.png";

/* Official product logos, taken from each product's own public source:
 *   golfsnap.png        -> Play Store icon for golfsnap.menatal.com
 *   golfsnap-portal.png -> favicon of the live admin portal, golfsnap.co.uk
 *   custvice.png        -> brand lockup from the Custvice logo pack
 *   aba-agency.png      -> apple-touch-icon from aba.ps
 *   jump.png            -> wordmark from thejumpapp.com
 */
import golfsnapLogo from "../assets/Projects/logos/golfsnap.png";
import golfsnapPortalLogo from "../assets/Projects/logos/golfsnap-portal.png";
import custviceLogo from "../assets/Projects/logos/custvice.png";
import abaLogo from "../assets/Projects/logos/aba-agency.png";
import jumpLogo from "../assets/Projects/logos/jump.png";

/**
 * Ownership labels are deliberate and must stay accurate.
 *   solo  -> sole author, built from scratch
 *   core  -> core developer / co-maintainer on a team (NOT "built it")
 *   team  -> contributed as part of a team
 *   study -> university or self-study work
 * Never upgrade a label without checking the repository's commit history first.
 */
export const OWNERSHIP = {
  solo: { label: "Built solo", tone: "solo" },
  core: { label: "Core developer", tone: "core" },
  team: { label: "Team contribution", tone: "team" },
  study: { label: "University project", tone: "study" },
};

export const ProjectsData = [
  /* ---------------------------------------------------------------------
   * Production work — the five shipped applications.
   * These are client codebases, so the cards carry a generated cover rather
   * than a screenshot; nothing confidential is shown.
   * ------------------------------------------------------------------- */
  {
    index: 1,
    title: "GolfSnap",
    subtitle: "Social golf platform · iOS + Android",
    description:
      "A cross-platform mobile app for discovering courses by GPS, organising games, and scoring them live — with real-time scoring and chat, multiple scoring formats, and PDF scorecards.",
    highlights: [
      "Real-time scoring and chat over SignalR, reconciled against a TanStack Query cache",
      "JWT silent refresh, Google/Facebook sign-in, biometric unlock, SSL certificate pinning",
      "Push notifications, device calendar, contact-based invites, golfsnap:// deep links",
      "92 Jest / React Native Testing Library test files; Firebase Analytics and Crashlytics",
    ],
    technologies: ["React Native", "Expo 54", "TypeScript", "TanStack Query", "SignalR", "Firebase"],
    ownership: OWNERSHIP.solo,
    logo: golfsnapLogo,
    logoBleed: true,
    cover: { initials: "GS", from: "#22c55e", to: "#14532d" },
    website: {
      label: "View on Google Play",
      url: "https://play.google.com/store/apps/details?id=golfsnap.menatal.com",
    },
    isPrivate: true,
    date: "2025",
    tags: ["production", "mobile"],
  },
  {
    index: 2,
    title: "GolfSnap Portal",
    subtitle: "Multi-role admin & player web portal",
    description:
      "The companion web portal for GolfSnap — Super Admin, Club Owner, and Player portals behind one React + Vite SPA, each gated by role-based routing.",
    highlights: [
      "Protected routes with session rehydration and 401 auto-logout",
      "Server-paginated tables with debounced search, multi-field filters, sorting, bulk delete",
      "Club, course, tee, and hole administration with owner assignment and credential dialogs",
      "Bulk Excel and JSON import with template download and pre-import validation",
      "~23 Vitest suites plus Playwright end-to-end coverage",
    ],
    technologies: ["React 18", "TypeScript", "Vite", "TanStack Query", "shadcn/ui", "Tailwind"],
    ownership: OWNERSHIP.solo,
    logo: golfsnapPortalLogo,
    cover: { initials: "GP", from: "#57534e", to: "#1c1917" },
    website: { label: "Visit the portal", url: "https://www.golfsnap.co.uk/" },
    isPrivate: true,
    date: "2025",
    tags: ["production", "web"],
  },
  {
    index: 3,
    title: "Custvice",
    subtitle: "My own product · customer ⇄ company marketplace",
    description:
      "My own product, built and published independently — a two-sided marketplace connecting customers with service companies. Companies publish jobs, tenders, events, ads, posts, and 24-hour stories; customers browse by category and open direct conversations.",
    highlights: [
      "Dual account types with separate signup flows, profiles, and permission-gated actions",
      "Six content types sharing one CRUD and cache-invalidation pattern across ~58 query hooks",
      "20 typed service modules and ~30 hand-built design-system components",
      "Bilingual Arabic/English, biometric app lock, offline banner, push notifications",
      "74 test files; Firebase Analytics and Crashlytics; EAS Build with OTA updates",
    ],
    technologies: ["React Native", "Expo 54", "TypeScript", "TanStack Query", "i18n-js", "Firebase"],
    ownership: OWNERSHIP.solo,
    logo: custviceLogo,
    cover: { initials: "CV", from: "#1e3a8a", to: "#0f172a" },
    /* Own product, not client work — the note must not say otherwise. */
    privateNote: "My own product — source not public",
    isPrivate: true,
    date: "2025 – 2026",
    tags: ["production", "mobile"],
  },
  {
    index: 4,
    title: "aba agency",
    subtitle: "Creative agency · internal operations app",
    description:
      "The internal operations app for aba agency, a creative and marketing agency in Ramallah. One role-based application runs every department — HR, Management, Finance, Design, Events, Printing, and Digital Production — on iOS, Android, and web.",
    highlights: [
      "Geofenced attendance check-in/out, meetings, tasks, absence requests, evaluations",
      "Department workflows: design approvals, warehouse inventory, purchase orders, sales pipeline",
      "Real-time notifications and chat over Laravel Echo and Reverb",
      "Bilingual Arabic/English with full RTL, plus four selectable themes",
      "Sentry error tracking and session replay, SSL public-key pinning, Expo OTA delivery",
    ],
    technologies: ["React Native", "Expo 54", "TypeScript", "Laravel Echo", "Sentry", "i18n-js"],
    ownership: OWNERSHIP.solo,
    logo: abaLogo,
    cover: { initials: "AB", from: "#0ea5e9", to: "#0c4a6e" },
    website: { label: "Visit aba.ps", url: "https://aba.ps/" },
    isPrivate: true,
    date: "2024 – 2025",
    tags: ["production", "mobile"],
  },
  {
    index: 5,
    title: "JUMP",
    subtitle: "Mentor–mentee marketplace · Flutter",
    description:
      "A cross-platform Flutter app where mentees discover and book sessions with mentors, with swipe-based matching, real-time messaging, and two-way reviews.",
    highlights: [
      "Swipe matching with filters by industry, skills, and interests",
      "Real-time messaging over SignalR with paginated timelines",
      "Meeting booking against mentor availability with a full status lifecycle",
      "Google, Apple, and LinkedIn sign-in, JWT refresh, biometric fallback",
      "Clean architecture with runtime-switchable Go and .NET backends",
    ],
    technologies: ["Flutter", "Dart", "Riverpod", "GoRouter", "SignalR", "Firebase"],
    ownership: OWNERSHIP.core,
    logo: jumpLogo,
    cover: { initials: "JM", from: "#4f46e5", to: "#1e1b4b" },
    website: { label: "Visit thejumpapp.com", url: "https://thejumpapp.com/" },
    isPrivate: true,
    date: "2025",
    tags: ["production", "mobile"],
  },

  /* ---------------------------------------------------------------------
   * University and early self-study work — kept for the record.
   * ------------------------------------------------------------------- */
  {
    index: 6,
    image: senior,
    alt: "Graduation project design",
    title: "MSSID — Graduation Project",
    subtitle: "Medical device · software + hardware",
    description:
      "A medical project split across software and hardware — a Flutter app driving an Arduino machine that delivers liquid drugs intravenously.",
    date: "2023",
    technologies: ["Flutter", "Arduino", "Figma", "Draw.io"],
    ownership: OWNERSHIP.study,
    links: [
      {
        text: "See Doc",
        url: "https://docs.google.com/document/d/1el_w-adDc8cdTNEVmeYEDAaunRzNXwXm/edit?rtpof=true&sd=true",
      },
      {
        text: "PPT",
        url: "https://docs.google.com/presentation/d/1yq587V2ebd8nZqrdlb--sz64VwMYG1zC-amFWFr70Ek/edit",
      },
    ],
    tags: ["academic", "mobile"],
  },
  {
    index: 7,
    image: sho3la,
    alt: "Sho3lat-Fikr website",
    title: "Sho3lat-Fikr Website",
    subtitle: "ASP.NET Core MVC",
    description:
      "An ASP.NET Core MVC site for Sho3lat-Fikr, a cultural club at the Arab American University.",
    date: "2022",
    technologies: ["ASP.NET Core MVC", "C#", "HTML5", "Bootstrap"],
    ownership: OWNERSHIP.study,
    links: [
      {
        text: "GitHub",
        url: "https://github.com/Sh0aib-Ja0allah/Sho3lat-Fikr-website-asp.net-core-MVC",
      },
      {
        text: "PPT",
        url: "https://docs.google.com/presentation/d/1xFwSjWbscWRrF2LfPgJx6_Y3WbZzLaF9/edit#slide=id.p1",
      },
    ],
    tags: ["academic", "web"],
  },
  {
    index: 8,
    image: gym,
    alt: "Black Tiger gym website",
    title: "GYM Website",
    subtitle: "ReactJS practice build",
    description: "A React practice project describing a gym and its training programmes.",
    date: "2022",
    technologies: ["ReactJS", "CSS3", "HTML5"],
    ownership: OWNERSHIP.study,
    links: [
      { text: "GitHub", url: "https://github.com/Sh0aib-Ja0allah/React-GYM-website" },
      { text: "Run", url: "https://sh0aib-ja0allah.github.io/react-gym-website/" },
    ],
    tags: ["academic", "web"],
  },
  {
    index: 9,
    image: smart,
    alt: "Smart house project",
    title: "Smart House Project",
    subtitle: "Engineering project management",
    description:
      "Prepared for an engineering project management course — planning and preparing a smart-home project end to end.",
    date: "2022",
    technologies: ["Microsoft Project", "Office"],
    ownership: OWNERSHIP.study,
    links: [
      {
        text: "See Doc",
        url: "https://docs.google.com/document/d/14bUGlzoYIyUXu3oqN27Y8p_s2DRnWRGB/edit?rtpof=true&sd=true",
      },
      {
        text: "PPT",
        url: "https://docs.google.com/presentation/d/1IqFUCvByK2Ajs1M97Cl0RkA7Rtp2j2CT/edit?usp=share_link&ouid=114413823834034757164&rtpof=true&sd=true",
      },
    ],
    tags: ["academic"],
  },
  {
    index: 10,
    image: shertee,
    alt: "SHERTEE clothes factory project",
    title: "SHERTEE — Clothes Factory",
    subtitle: "Software engineering course",
    description:
      "A software engineering course project covering how to plan and run an agile process for a clothes factory.",
    date: "2022",
    technologies: ["Draw.io", "Adobe XD", "Office"],
    ownership: OWNERSHIP.study,
    links: [
      {
        text: "See Doc",
        url: "https://drive.google.com/file/d/1pVmK8nT8LEIj9cF18FRjgjwdVfrql2RS/view",
      },
    ],
    tags: ["academic"],
  },
  {
    index: 11,
    image: lightUp,
    alt: "Light-Up website",
    title: "Light Up Website",
    subtitle: "HTML · CSS · JavaScript",
    description: "A small, simple site built with plain HTML, CSS, and JavaScript.",
    date: "2022",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    ownership: OWNERSHIP.study,
    links: [
      { text: "GitHub", url: "https://github.com/Sh0aib-Ja0allah/Light-Up-WebSite" },
      { text: "Run", url: "https://sh0aib-ja0allah.github.io/Light-Up-WebSite/" },
    ],
    tags: ["academic", "web"],
  },
  {
    index: 12,
    image: signup,
    alt: "Sign-up pages in React",
    title: "Sign-Up Pages",
    subtitle: "ReactJS practice build",
    description: "Login and sign-up section designs implemented in React as practice.",
    date: "2023",
    technologies: ["ReactJS", "HTML5", "CSS3"],
    ownership: OWNERSHIP.study,
    links: [
      { text: "GitHub", url: "https://github.com/Sh0aib-Ja0allah/SignUp-Design" },
      { text: "Run", url: "https://sh0aib-ja0allah.github.io/SignUp-Design/" },
    ],
    tags: ["academic", "web"],
  },
  {
    index: 13,
    image: pureJS,
    alt: "Pure JS cards challenge",
    title: "Pure JS Cards Challenge",
    subtitle: "Vanilla JavaScript",
    description:
      "A solution to the Elzero Web School JavaScript challenge, written in pure JavaScript.",
    date: "2023",
    technologies: ["JavaScript"],
    ownership: OWNERSHIP.study,
    links: [
      { text: "GitHub", url: "https://github.com/Sh0aib-Ja0allah/Pure-JS-Cards-Challenge" },
      { text: "Run", url: "https://sh0aib-ja0allah.github.io/Pure-JS-Cards-Page/" },
    ],
    tags: ["academic", "web"],
  },
  {
    index: 14,
    image: clockDesign,
    alt: "Front-end training part 2",
    title: "Frontend Training — Part 2",
    subtitle: "HTML · CSS",
    description: "A hover area with animation and a clock design built with HTML and CSS.",
    date: "2023",
    technologies: ["HTML5", "CSS3"],
    ownership: OWNERSHIP.study,
    links: [
      { text: "GitHub", url: "https://github.com/Sh0aib-Ja0allah/Frontend-Training-Tasks-Part-2" },
      { text: "Run", url: "https://sh0aib-ja0allah.github.io/Frontend-Training-Tasks-Part-2/" },
    ],
    tags: ["academic", "web"],
  },
  {
    index: 15,
    image: animatedEmog,
    alt: "Front-end training part 3",
    title: "Frontend Training — Part 3",
    subtitle: "HTML · CSS",
    description: "An animated emoji design, part three of the front-end training tasks.",
    date: "2023",
    technologies: ["HTML5", "CSS3"],
    ownership: OWNERSHIP.study,
    links: [
      { text: "GitHub", url: "https://github.com/Sh0aib-Ja0allah/Frontend-Training-Tasks-Part-3" },
      { text: "Run", url: "https://sh0aib-ja0allah.github.io/Frontend-Training-Tasks-Part-3/" },
    ],
    tags: ["academic", "web"],
  },
  {
    index: 16,
    image: practice,
    alt: "HTML and CSS practice templates",
    title: "HTML & CSS Practice",
    subtitle: "Template builds",
    description:
      "Templates designed with HTML and CSS after finishing the Elzero Web School courses.",
    date: "2022",
    technologies: ["HTML5", "CSS3"],
    ownership: OWNERSHIP.study,
    links: [
      {
        text: "Template 1",
        url: "https://github.com/Sh0aib-Ja0allah/CSS-HTML-Practice/tree/main/Template_1",
      },
      {
        text: "Template 2",
        url: "https://github.com/Sh0aib-Ja0allah/CSS-HTML-Practice/tree/main/HTML%20%26%20CSS%20template_2",
      },
    ],
    tags: ["academic", "web"],
  },
  {
    index: 17,
    image: nft,
    alt: "NFT preview card component",
    title: "NFT Preview Card",
    subtitle: "Frontend Mentor challenge",
    description: "A Frontend Mentor challenge solved with HTML and CSS.",
    date: "2023",
    technologies: ["HTML5", "CSS3"],
    ownership: OWNERSHIP.study,
    links: [
      { text: "GitHub", url: "https://github.com/Sh0aib-Ja0allah/nft-preview-card-component-main" },
      { text: "Run", url: "https://sh0aib-ja0allah.github.io/nft-preview-card-component-main/" },
    ],
    tags: ["academic", "web"],
  },
  {
    index: 18,
    image: portfolio1,
    alt: "First portfolio site",
    title: "Portfolio v1",
    subtitle: "HTML · CSS",
    description: "The first version of this portfolio, built as a web CV.",
    date: "2022",
    technologies: ["HTML5", "CSS3"],
    ownership: OWNERSHIP.study,
    links: [
      { text: "GitHub", url: "https://github.com/Sh0aib-Ja0allah/My-Portfolio" },
      { text: "Run", url: "https://sh0aib-ja0allah.github.io/My-Portfolio/" },
    ],
    tags: ["academic", "web"],
  },
  {
    index: 19,
    image: portfolio2,
    alt: "React portfolio site",
    title: "Portfolio v2",
    subtitle: "ReactJS",
    description: "The React rebuild of the portfolio — the site you are reading now.",
    date: "2023",
    technologies: ["ReactJS", "HTML5", "CSS3"],
    ownership: OWNERSHIP.study,
    links: [
      { text: "GitHub", url: "https://github.com/Sh0aib-Ja0allah/reactportfolio" },
      { text: "Run", url: "https://sh0aib-ja0allah.github.io/reactportfolio/" },
    ],
    tags: ["academic", "web"],
  },
  {
    index: 20,
    image: projects,
    alt: "Projects section template",
    title: "Projects Section Template",
    subtitle: "ReactJS · useState",
    description: "An interactive projects section built with React hooks as a practice exercise.",
    date: "2023",
    technologies: ["ReactJS", "HTML5", "CSS3"],
    ownership: OWNERSHIP.study,
    links: [
      { text: "GitHub", url: "https://github.com/Sh0aib-Ja0allah/Portfolio-Projects-Section-React" },
      { text: "Run", url: "https://sh0aib-ja0allah.github.io/Portfolio-Projects-Section-React/" },
    ],
    tags: ["academic", "web"],
  },
];

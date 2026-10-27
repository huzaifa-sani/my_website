export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  type: "MOBILE APP" | "MARKETPLACE" | "E-COMMERCE" | "UTILITY" | "OPEN SOURCE";
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  architecture: string;
  platforms: ("Android" | "iOS" | "Web")[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  year: string;
  status: "LIVE" | "PRODUCTION" | "FEATURED";
  role: string;
  impact: string;
}

export interface SkillCategory {
  title: string;
  code: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  status: "ACTIVE" | "COMPLETED";
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  status: "CURRENT" | "COMPLETED";
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Huzaifa Sani",
    nativeName: "হুজাইফা সানী",
    title: "Flutter Developer & Mobile App Engineer",
    subtitles: [
      "Cross-Platform Mobile Architect",
      "Flutter & Dart Specialist",
      "Android & iOS App Developer",
      "Production-Ready Performance Engineer",
    ],
    tagline: "Building high-performance, beautiful & scalable mobile experiences for Android and iOS.",
    location: "Dhaka Division, Bangladesh",
    coordinates: "23.8103° N, 90.4125° E",
    email: "huzaifa0133@gmail.com",
    phone: "+8801963999044",
    statusText: "AVAILABLE FOR PRODUCTION & CONTRACT",
    availableForHire: true,
    systemId: "HZ-SYS-01",
    cvFilename: "/huzaifa_cv.pdf",
    github: "https://github.com/huzaifa-sani",
    linkedin: "https://www.linkedin.com/in/huzaifa-sani-525b36304",
    codeforces: "https://codeforces.com/profile/huzaifa-sani",
    telegram: "https://t.me/huzaifasani",
    whatsapp: "https://wa.me/8801963999044",
  },

  stats: [
    { label: "MOBILE PROJECTS", value: "8+", detail: "Cross-platform Android & iOS apps" },
    { label: "LIVE STORE APPS", value: "4", detail: "Google Play Store & Apple App Store" },
    { label: "CODEBASE CLEANLINESS", value: "100%", detail: "GetX & Clean Architecture" },
    { label: "SYSTEM UPTIME", value: "99.9%", detail: "Reliable production performance" },
  ],

  about: {
    heading: "Engineering High-Impact Mobile Solutions",
    summary:
      "Flutter Developer with hands-on experience delivering 8+ mobile projects, including 4 live applications published on Google Play Store and Apple App Store. Proficient in Dart, GetX, Firebase, and RESTful APIs, with a strong focus on clean architecture, scalable code, and performance.",
    detailedBio:
      "I specialize in bridging the gap between elegant UI/UX design and rock-solid mobile architecture. My engineering process centers on state management best practices (GetX, Bloc), predictable data pipelines, offline persistence, and seamless native platform integrations. Having shipped production applications to both Google Play Store and Apple App Store, I understand the end-to-end lifecycle of mobile products—from initial prototyping to production debugging, App Store guidelines compliance, and performance profiling.",
    architecturalPillars: [
      {
        title: "Clean Architecture",
        desc: "Strict separation between UI layer, Domain/UseCases, and Data/Repository layers for testability and maintainability.",
      },
      {
        title: "Reactive State Management",
        desc: "Leveraging GetX and Bloc for deterministic state transitions, minimal re-renders, and rapid development.",
      },
      {
        title: "Native Performance & Profiling",
        desc: "60-120fps fluid rendering, memory leak prevention, optimized asset loading, and minimal app bundle size.",
      },
      {
        title: "Robust API & Real-time Integration",
        desc: "Type-safe RESTful API clients, Firebase Firestore real-time listeners, WebSocket synchronization, and graceful error recovery.",
      },
    ],
  },

  skills: [
    {
      title: "Core & Mobile Engineering",
      code: "CAP-01",
      description: "Primary language, UI framework and cross-platform native SDKs.",
      skills: [
        { name: "Flutter Framework", level: "Expert", highlight: true },
        { name: "Dart Language", level: "Expert", highlight: true },
        { name: "Android App Development", level: "Advanced", highlight: true },
        { name: "iOS App Development", level: "Advanced", highlight: true },
        { name: "Cross-Platform Optimization", level: "Advanced" },
        { name: "Responsive UI & Layouts", level: "Expert" },
      ],
    },
    {
      title: "State Management & Architecture",
      code: "CAP-02",
      description: "Architectural blueprints for scalable, decoupled codebases.",
      skills: [
        { name: "GetX State Management", level: "Expert", highlight: true },
        { name: "Bloc Pattern", level: "Proficient" },
        { name: "Clean Architecture", level: "Advanced", highlight: true },
        { name: "MVC / MVVM Patterns", level: "Advanced" },
        { name: "Dependency Injection", level: "Advanced" },
        { name: "Repository Pattern", level: "Advanced" },
      ],
    },
    {
      title: "Backend, APIs & Persistence",
      code: "CAP-03",
      description: "Data layer, caching, authentication and cloud backends.",
      skills: [
        { name: "RESTful APIs & JSON", level: "Expert", highlight: true },
        { name: "Firebase (Auth, Firestore, FCM)", level: "Advanced", highlight: true },
        { name: "Shared Preferences & Local DB", level: "Expert" },
        { name: "SQLite / Hive Storage", level: "Proficient" },
        { name: "Payment & Order Pipelines", level: "Advanced" },
        { name: "Real-time Push Notifications", level: "Advanced" },
      ],
    },
    {
      title: "Publishing, Tooling & DevOps",
      code: "CAP-04",
      description: "App store release pipelines, debugging and collaboration tools.",
      skills: [
        { name: "Google Play Console", level: "Advanced", highlight: true },
        { name: "Apple App Store Connect", level: "Advanced", highlight: true },
        { name: "Android Studio & Profiler", level: "Expert" },
        { name: "VS Code & Dart DevTools", level: "Expert" },
        { name: "Postman API Testing", level: "Advanced" },
        { name: "Git, GitHub & Version Control", level: "Advanced", highlight: true },
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      company: "Sparktech Agency",
      role: "Flutter Developer",
      period: "12/2025 – Present",
      location: "Dhaka, Bangladesh",
      type: "Full-Time / Engineering",
      status: "ACTIVE",
      description:
        "Leading the development, testing, and deployment of mission-critical cross-platform mobile applications for diverse global clients.",
      achievements: [
        "Developing, testing, and maintaining production-ready cross-platform mobile applications for Android and iOS platforms.",
        "Collaborating with cross-functional teams (UI/UX designers, backend engineers) to implement scalable state management (GetX) and Clean Architecture.",
        "Integrating complex RESTful APIs, payment gateways, and Firebase services for real-time order processing and telemetry.",
        "Optimized app render cycles resulting in consistent 60fps performance across budget Android hardware.",
        "Managed deployment workflows for Google Play Store and Apple App Store compliance.",
      ],
      techStack: ["Flutter", "Dart", "GetX", "RESTful APIs", "Firebase", "Clean Architecture", "Git"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "PRJ-01",
      title: "Privae",
      subtitle: "Food and Chef Hiring Marketplace Platform",
      type: "MARKETPLACE",
      description:
        "Comprehensive on-demand chef booking and culinary marketplace mobile application connecting professional chefs with fine-dining enthusiasts.",
      longDescription:
        "Privae solves the complex challenge of on-demand culinary talent booking. The application features a dynamic chef discovery engine, real-time availability calendar, geolocation radius matching, in-app scheduling, and a secure multi-tier order and payment management workflow. Built with Flutter, Clean Architecture, and GetX for rock-solid reactive state.",
      tags: ["Flutter", "Dart", "Firebase", "RESTful APIs", "GetX", "iOS App Store"],
      features: [
        "Chef Discovery & Portfolio Showcase with interactive media galleries",
        "Real-Time Booking & Scheduling Engine with dynamic conflict resolution",
        "Interactive Order & Menu Management System with live order status",
        "Push Notifications & Chat for instant client-chef coordination",
        "Multi-currency secure billing and transaction tracking",
      ],
      architecture: "Clean Architecture (Domain, Data, Presentation) + GetX Reactive Controllers",
      platforms: ["iOS", "Android"],
      appStoreUrl: "https://apps.apple.com/us/app/privae/id6756812318",
      year: "2026",
      status: "LIVE",
      role: "Lead Mobile Developer",
      impact: "Live on Apple App Store with flawless multi-user concurrency and smooth navigation.",
    },
    {
      id: "PRJ-02",
      title: "BeautyRun",
      subtitle: "E-Commerce & Fast Beauty Products Delivery",
      type: "E-COMMERCE",
      description:
        "High-performance beauty & cosmetics e-commerce application featuring real-time catalog browsing, cart operations, and instant order delivery tracking.",
      longDescription:
        "Contributed to this rapid beauty logistics platform. Spearheaded the optimization of user authentication flows, checkout pipeline, and real-time order management. Diagnosed and resolved critical runtime UI synchronization bugs, reducing crash rates and significantly boosting user retention.",
      tags: ["Flutter", "Dart", "Firebase", "RESTful APIs", "GetX", "Google Play"],
      features: [
        "Curated Beauty Catalog with fast multi-facet filter and search",
        "Streamlined User Authentication & Social Login Integration",
        "Real-Time Order Tracking with visual dispatch status milestones",
        "Persistent Local Cart with offline recovery and discount coupons",
        "Optimized memory usage for high-resolution cosmetic product imagery",
      ],
      architecture: "Feature-First Modular Architecture + GetX State Machine",
      platforms: ["Android", "iOS"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.beauty.users",
      year: "2025",
      status: "LIVE",
      role: "Core Flutter Engineer",
      impact: "Live on Google Play Store with thousands of active downloads and 4.8+ rating.",
    },
    {
      id: "PRJ-03",
      title: "Sparky Tools",
      subtitle: "Electrical Engineering & Industrial Utility Suite",
      type: "UTILITY",
      description:
        "Professional electrical engineering calculator and utility suite featuring 9 essential calculators including Ohm's Law, Voltage Drop, and Solar Sizing.",
      longDescription:
        "Built and maintained an essential utility application for professional electrical engineers, electricians, and contractors. Engineered 9 precision industry calculators with real-time reactive calculations, unit conversions, and interactive diagrams. Published and active across both Google Play Store and Apple App Store.",
      tags: ["Flutter", "Dart", "Firebase", "RESTful APIs", "GetX", "Google Play", "App Store"],
      features: [
        "9 Essential Electrical Calculators: Ohm's Law, Voltage Drop, Wire Sizing, Solar Panels, Power Factor, etc.",
        "Zero-latency Instant Calculation Engine with strict mathematical validation",
        "Responsive, high-contrast industrial UI optimized for bright outdoor daylight conditions",
        "Offline-First Capability with local calculation history export",
        "Cross-platform dual deployment for both Android phone/tablets and iOS/iPads",
      ],
      architecture: "Model-View-Controller (MVC) + Reactive State Bindings",
      platforms: ["Android", "iOS"],
      playStoreUrl: "https://play.google.com/store/apps/detailsid=com.trinfjhtechsolutions.sparkytools",
      appStoreUrl: "https://apps.apple.com/us/app/sparky-toolbox/id6782320797",
      year: "2025",
      status: "LIVE",
      role: "Sole Mobile Developer",
      impact: "Dual-published on both Google Play Store and Apple App Store.",
    },
    {
      id: "PRJ-04",
      title: "Flutter Clean Architecture Template",
      subtitle: "Production-Ready Mobile Application Boilerplate",
      type: "OPEN SOURCE",
      description:
        "An enterprise-ready Flutter starter kit demonstrating Clean Architecture principles, automated dependency injection, and network layer abstraction.",
      longDescription:
        "Created an open-source blueprint for Flutter developers looking to structure enterprise mobile applications. Includes complete separation of Domain, Data, and Presentation layers, custom error handling interceptors, and reusable design system components.",
      tags: ["Flutter", "Dart", "Clean Architecture", "GetX", "GitHub Open Source"],
      features: [
        "Strict Domain-Driven Design layout with Use Cases and Entities",
        "Comprehensive Dio HTTP client with automatic retry and token refresh",
        "Multi-theme dark/light switcher with persistence",
        "Pre-configured CI/CD workflow for automated test runs and APK builds",
      ],
      architecture: "Clean Architecture + Repository Pattern + Dependency Injection",
      platforms: ["Android", "iOS", "Web"],
      githubUrl: "https://github.com/huzaifa-sani",
      year: "2025",
      status: "FEATURED",
      role: "Architect & Creator",
      impact: "Used as base foundation across multiple client and agency applications.",
    },
  ] as ProjectItem[],

  education: [
    {
      degree: "Bachelor of Science (BSc) in Computer Science and Engineering",
      institution: "Canadian University of Bangladesh",
      period: "08/2026 – Present",
      location: "Dhaka, Bangladesh",
      status: "CURRENT",
      description:
        "Currently pursuing BSc in CSE with advanced coursework in Software Engineering, Data Structures & Algorithms, Distributed Systems, and Database Management.",
    },
    {
      degree: "Diploma in Engineering (Computer Science & Technology)",
      institution: "Narsingdi Polytechnic Institute",
      period: "2021 – 2025",
      location: "Narsingdi, Bangladesh",
      status: "COMPLETED",
      description:
        "Completed a 4-year technical diploma program. Gained foundational mastery in programming fundamentals, object-oriented concepts, computer hardware architecture, and practical software design.",
    },
  ] as EducationItem[],

  certifications: [
    {
      name: "Flutter App Development Professional Certification",
      issuer: "Ostad",
      year: "2024",
      credentialUrl: "https://ostad.app",
    },
    {
      name: "Android App Development Certification",
      issuer: "Bongo Academy",
      year: "2023",
      credentialUrl: "https://bongoacademy.com",
    },
  ] as CertificationItem[],

  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Bengali", level: "Native / Bilingual" },
  ],

  quickLinks: [
    { label: "01 // ABOUT", href: "#about" },
    { label: "02 // CAPABILITIES", href: "#skills" },
    { label: "03 // EXPERIENCE", href: "#experience" },
    { label: "04 // PROJECTS", href: "#projects" },
    { label: "05 // EDUCATION", href: "#education" },
    { label: "06 // TRANSMISSION", href: "#contact" },
  ],
};

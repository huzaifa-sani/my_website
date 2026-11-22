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

export interface ArchiveProjectItem {
  id: string;
  slug: string;
  codeName: string;
  title: string;
  subtitle: string;
  category:
    | "Fintech & Finance"
    | "On-Demand & Marketplace"
    | "E-Commerce & Delivery"
    | "Lifestyle & Wellness"
    | "Utilities & Engineering"
    | "EdTech & Education"
    | "Travel & Hospitality"
    | "Community & Spiritual"
    | "Productivity & Networking";
  overview: string;
  keyFeatures: string[];
  techStack: string[];
  architecture: string;
  platforms: string[];
  status: "LIVE ON STORE" | "CLIENT PRODUCTION" | "FEATURED ARCHIVE";
  storeUrl?: string;
  role: string;
  year: string;
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

  archiveProjects: [
    {
      id: "ARC-01",
      slug: "privae-chef-app",
      codeName: "joni project",
      title: "Privae — Private Chef & Culinary Marketplace",
      subtitle: "On-Demand Culinary Hiring & Chef Booking Ecosystem",
      category: "On-Demand & Marketplace",
      overview:
        "Comprehensive mobile marketplace connecting fine-dining clients with verified private chefs for home dining, catering events, and bespoke gastronomic experiences. Engineered with real-time availability calendars, custom menu designers, and multi-tier booking coordination.",
      keyFeatures: [
        "Interactive Chef Discovery & Portfolio Showcase with verified client ratings and culinary specialties",
        "Dynamic Real-time Availability & Booking Calendar with collision-prevention logic",
        "Multi-Course Custom Menu Builder with allergen and dietary preference tags",
        "Encrypted Direct In-App Chat and push telemetry for customer-chef event planning",
        "Secure Milestone Escrow & Multi-Currency Payment Pipeline with Apple Pay / Google Pay support",
      ],
      techStack: ["Flutter", "Dart", "GetX", "Firebase Firestore", "RESTful APIs", "Stripe API", "Google Maps"],
      architecture: "Clean Architecture (Domain, Data, Presentation) + GetX Reactive Controllers",
      platforms: ["iOS (App Store)", "Android"],
      status: "LIVE ON STORE",
      storeUrl: "https://apps.apple.com/us/app/privae/id6756812318",
      role: "Lead Mobile Developer",
      year: "2026",
    },
    {
      id: "ARC-02",
      slug: "vurabridge-fintech-app",
      codeName: "Fintech-App",
      title: "VuraBridge — Fintech & Cross-Border Banking",
      subtitle: "High-Security Digital Wallet & Telemetry Platform",
      category: "Fintech & Finance",
      overview:
        "Enterprise-grade digital banking and cross-border financial application featuring multi-currency wallets, instant peer-to-peer (P2P) transfers, real-time FX currency conversions, and automated expenditure budgeting analytics.",
      keyFeatures: [
        "Biometric Security Suite with local FaceID / Fingerprint encryption and session timeout protection",
        "Multi-Currency Digital Wallet supporting USD, EUR, GBP, and automated live conversion rates",
        "Instant P2P Micro-Transfers with QR code scanning and direct phone number lookup",
        "Visual Spending Analytics & Category Breakdown with interactive chart visualizers",
        "Automated KYC Verification & Bank-Grade Payload Encryption for high compliance standards",
      ],
      techStack: ["Flutter", "Dart", "Clean Architecture", "RESTful APIs", "GetX", "Biometric Auth", "Secure Storage"],
      architecture: "Feature-First Clean Architecture + Immutable State Handling",
      platforms: ["Android", "iOS"],
      status: "CLIENT PRODUCTION",
      role: "Mobile App Engineer",
      year: "2026",
    },
    {
      id: "ARC-03",
      slug: "lifestyle-habit-routine-app",
      codeName: "lifestyle",
      title: "Aura Lifestyle — Daily Habits & Wellness Tracker",
      subtitle: "Holistic Routine Engineering & Habit Continuity Suite",
      category: "Lifestyle & Wellness",
      overview:
        "Modern mindfulness, daily routine optimizer, and habit tracking mobile application designed to help users establish high-performance morning/evening habits, track wellness metrics, and maintain continuous productivity streaks.",
      keyFeatures: [
        "Customizable Morning & Evening Routine Engine with timed progress checklists",
        "Smart Habit Continuity Tracking with visual heatmaps, milestone badges, and streak alerts",
        "Mindfulness & Guided Audio Player with customizable soothing ambient sounds and breathwork timers",
        "Hydration, Sleep, and Mood Logs with trend correlation insights",
        "Offline-First Architecture backed by local persistent storage for uninterrupted tracking",
      ],
      techStack: ["Flutter", "Dart", "Hive DB", "GetX", "Local Notifications", "Audio Players SDK"],
      architecture: "Model-View-Controller (MVC) + Reactive Persistence Layer",
      platforms: ["Android", "iOS"],
      status: "FEATURED ARCHIVE",
      role: "Flutter Developer",
      year: "2026",
    },
    {
      id: "ARC-04",
      slug: "beautyrun-delivery-app",
      codeName: "fali beauty run",
      title: "BeautyRun — Fast Cosmetics & Skincare Delivery",
      subtitle: "Ultra-Fast Beauty Products Delivery Platform",
      category: "E-Commerce & Delivery",
      overview:
        "High-performance cosmetics e-commerce mobile application delivering beauty products in under 30 minutes. Features intelligent skin-shade recommendations, dynamic product categorization, and live GPS courier tracking.",
      keyFeatures: [
        "Multi-Facet Beauty Catalog with real-time filters by skin type, brand, and ingredient safety",
        "Interactive Shade Matcher helping users identify cosmetics suited to their skin tone",
        "Real-Time Delivery Milestone Telemetry with live rider location on Google Maps",
        "Persistent Local Cart with offline recovery, coupons, and 1-tap checkout pipelines",
        "Push Notification Campaign Engine for flash sales, restock alerts, and order milestones",
      ],
      techStack: ["Flutter", "Dart", "Firebase FCM", "Google Maps SDK", "RESTful APIs", "GetX"],
      architecture: "Clean Architecture + Domain-Driven Separation",
      platforms: ["Android (Google Play)", "iOS"],
      status: "LIVE ON STORE",
      storeUrl: "https://play.google.com/store/apps/details?id=com.beauty.users",
      role: "Core Flutter Engineer",
      year: "2025",
    },
    {
      id: "ARC-05",
      slug: "nura-flower-gift-delivery",
      codeName: "nura",
      title: "Nura / Denior — Floral & Curated Gift Delivery",
      subtitle: "Luxury Flower Arrangement & Celebration Delivery",
      category: "E-Commerce & Delivery",
      overview:
        "Bespoke floral arrangement and celebration gifting mobile application allowing users to curate handcrafted bouquets, select occasion-specific gifts, attach personalized multimedia cards, and schedule doorstep delivery.",
      keyFeatures: [
        "Custom Bouquet Visualizer enabling users to combine floral stems, wrapping paper, and ribbons",
        "Scheduled Date & Time Delivery Engine with precision delivery window guarantees",
        "Personalized Greeting Card Editor supporting custom typography and photo attachments",
        "Occasion Reminder Radar (Birthdays, Anniversaries) with automated gift suggestions",
        "Real-Time Order Preparation Status with florist verification photos before dispatch",
      ],
      techStack: ["Flutter", "Dart", "RESTful APIs", "GetX", "Payment Gateway Integration", "Cached Network Image"],
      architecture: "Modular Feature Architecture + GetX State Machine",
      platforms: ["Android", "iOS"],
      status: "CLIENT PRODUCTION",
      role: "Lead Mobile Developer",
      year: "2025",
    },
    {
      id: "ARC-06",
      slug: "diic-islamic-community-app",
      codeName: "rukiyeat",
      title: "DIIC — Islamic Community & Prayer Times Hub",
      subtitle: "Spiritual Telemetry & Community Connectivity Portal",
      category: "Community & Spiritual",
      overview:
        "Comprehensive Islamic spiritual companion and community engagement mobile platform featuring high-precision astronomical prayer timings, mosque community event streams, digital Quran reading, and charity donation channels.",
      keyFeatures: [
        "High-Precision GPS Prayer Time Engine calculating exact adhan timings with multiple juristic calculation methods",
        "Interactive Digital Quran Reader with verse bookmarking, translations, and word-by-word audio playback",
        "Mosque Event Stream & Halaqah Broadcasts with push notifications for community gatherings",
        "Qibla Direction Compass powered by internal device magnetometer sensors with visual alignment",
        "Zakat & Sadaqah Digital Donation Pipeline with instant payment verification",
      ],
      techStack: ["Flutter", "Dart", "Sensor API", "SQLite Local DB", "Audio Player", "Geolocation SDK", "GetX"],
      architecture: "Clean Architecture + Offline-First Local Data Source",
      platforms: ["Android", "iOS"],
      status: "CLIENT PRODUCTION",
      role: "Mobile App Engineer",
      year: "2025",
    },
    {
      id: "ARC-07",
      slug: "zasulehry-lifestyle-app",
      codeName: "jisan",
      title: "Zasulehry — Concierge & Exclusive Lifestyle Suite",
      subtitle: "Tailored Lifestyle Booking & Member Services",
      category: "Lifestyle & Wellness",
      overview:
        "Exclusive members-only lifestyle and concierge mobile application offering priority reservations for private dining, curated city experiences, luxury wellness appointments, and personalized assistant communication.",
      keyFeatures: [
        "Curated City Experience Catalog featuring invitation-only events and premium dining slots",
        "Direct Concierge Messaging Interface with live operator chat and ticket fulfillment",
        "Digital Member Pass with animated QR codes for seamless offline venue check-in",
        "Preference Profiling Engine customizing daily recommendations based on individual taste",
        "Integrated Booking Vault keeping all confirmations, vouchers, and tickets accessible offline",
      ],
      techStack: ["Flutter", "Dart", "Clean Architecture", "REST APIs", "GetX", "QR Code Generation"],
      architecture: "Clean Architecture + Reactive Controller Bindings",
      platforms: ["Android", "iOS"],
      status: "CLIENT PRODUCTION",
      role: "Flutter Developer",
      year: "2025",
    },
    {
      id: "ARC-08",
      slug: "sealun-beauty-services",
      codeName: "sealun apps",
      title: "Sealun — On-Demand Mobile Salon & Spa Services",
      subtitle: "Doorstep Stylist & Beauty Professional Dispatch",
      category: "On-Demand & Marketplace",
      overview:
        "On-demand doorstep salon booking application connecting clients with certified beauticians, hair stylists, and massage therapists for at-home luxury treatments.",
      keyFeatures: [
        "Service Catalog covering hair styling, facial treatments, bridal makeup, manicure, and spa",
        "Certified Stylist Profiles with verified portfolio galleries and genuine client reviews",
        "Real-Time Schedule Booking with dynamic calendar time slots and immediate confirmation",
        "In-App Geolocation Tracking showing the beautician's transit progress to the customer's home",
        "Safe & Cashless Digital In-App Checkout with transparent pricing and tipping",
      ],
      techStack: ["Flutter", "Dart", "Google Maps SDK", "Firebase Firestore", "RESTful APIs", "GetX"],
      architecture: "Feature-First Architecture + GetX State Machine",
      platforms: ["Android", "iOS"],
      status: "CLIENT PRODUCTION",
      role: "Mobile App Engineer",
      year: "2025",
    },
    {
      id: "ARC-09",
      slug: "food-buddy-dining-app",
      codeName: "first food buddy",
      title: "Food Buddy (Brian Denner) — Gourmet Dining & Delivery",
      subtitle: "Artisan Culinary Delivery & Table Reservation Suite",
      category: "E-Commerce & Delivery",
      overview:
        "Gourmet culinary food ordering and fine dining table reservation application partnering with top-rated artisan restaurants, featuring live order tracking, menu customization, and instant seating reservations.",
      keyFeatures: [
        "Visual High-Definition Menu Explorer with dietary filters (Gluten-Free, Keto, Vegan)",
        "Instant Table Reservation Engine with real-time floor plan and seating preference choice",
        "Live Kitchen-to-Doorstep Tracking with real-time WebSocket updates and courier GPS position",
        "Custom Meal Builder allowing clients to add notes, choose doneness, and adjust seasonings",
        "Repeat Order Vault and smart recommendations based on previous order history",
      ],
      techStack: ["Flutter", "Dart", "WebSockets", "Google Maps SDK", "RESTful APIs", "GetX"],
      architecture: "Clean Architecture + Reactive Data Streams",
      platforms: ["Android", "iOS"],
      status: "FEATURED ARCHIVE",
      role: "Lead Mobile Developer",
      year: "2025",
    },
    {
      id: "ARC-10",
      slug: "dhikr-daily-remembrance-app",
      codeName: "nurdin apps",
      title: "Dhikr — Daily Remembrance & Digital Tasbih",
      subtitle: "Minimalist Spiritual Companion & Azkar Tracker",
      category: "Community & Spiritual",
      overview:
        "Ad-free spiritual utility application dedicated to morning and evening daily adhkar, authentic supplications from the Sunnah, and a tactile digital tasbih counter with realistic haptic feedback.",
      keyFeatures: [
        "Tactile Digital Tasbih Counter with variable haptic vibration feedback and sound options",
        "Categorized Morning, Evening, and Post-Prayer Adhkar with Arabic script and authentic references",
        "High-Fidelity Audio Recitations for correct pronunciation and effortless memorization",
        "Daily Habit Streak and count analytics encouraging consistent daily remembrance",
        "100% Offline Capability with zero advertisements and zero tracking",
      ],
      techStack: ["Flutter", "Dart", "Haptic Engine", "SQLite Local Storage", "GetX", "Audio SDK"],
      architecture: "MVC + Local Persistent Storage",
      platforms: ["Android", "iOS"],
      status: "FEATURED ARCHIVE",
      role: "Mobile App Engineer",
      year: "2025",
    },
    {
      id: "ARC-11",
      slug: "sparky-toolbox-app",
      codeName: "sparky tool box",
      title: "Sparky Tool Box — Industrial Electrical Suite",
      subtitle: "Professional Engineering Utility & Field Calculators",
      category: "Utilities & Engineering",
      overview:
        "Precision calculation and field utility suite for electrical engineers, electricians, and contractors. Packed with 9 mission-critical calculators including Ohm's Law, Voltage Drop, Wire Sizing, Conduit Fill, and Solar PV Sizing. Published on both Google Play Store and Apple App Store.",
      keyFeatures: [
        "9 Precision Electrical Field Calculators: Voltage Drop, Ohm's Law, Wire Ampacity, Conduit Fill, Motor FLA, Solar PV Sizing, Power Factor Correction, Box Fill, and Grounding",
        "Instant Zero-Latency Reactive Recalculation as user inputs parameters",
        "High-Contrast Daylight-Readable UI optimized for harsh outdoor field conditions",
        "Calculation History & PDF Spec Sheet Export for project audits and client handoffs",
        "Adherence to National Electrical Code (NEC) and International Electrotechnical Commission (IEC) standards",
      ],
      techStack: ["Flutter", "Dart", "Clean Architecture", "GetX", "Local Storage", "PDF Generation"],
      architecture: "Model-View-Controller + Precision Math Engine",
      platforms: ["Android (Google Play)", "iOS (App Store)"],
      status: "LIVE ON STORE",
      storeUrl: "https://play.google.com/store/apps/details?id=com.trinfjhtechsolutions.sparkytools",
      role: "Sole Mobile Developer",
      year: "2025",
    },
    {
      id: "ARC-12",
      slug: "tfp-academy-edtech-app",
      codeName: "TFP-Academy-application",
      title: "TFP Academy — EdTech Learning & Skills Platform",
      subtitle: "Mobile Coursework, Video Streaming & Certification",
      category: "EdTech & Education",
      overview:
        "Interactive mobile education platform delivering structured technical video courses, chapter quizzes, student-mentor forums, and verifiable course completion certificates.",
      keyFeatures: [
        "Adaptive Bitrate Video Streaming with playback speed control and lesson bookmarking",
        "Offline Lesson Downloads allowing students to continue learning without active internet",
        "Interactive Chapter Quizzes with immediate answer explanations and grading analytics",
        "Community Discussion Q&A per lesson connecting students directly with instructors",
        "Verifiable Digital Certificate Generation with unique verification IDs and PDF export",
      ],
      techStack: ["Flutter", "Dart", "Video Player SDK", "REST APIs", "GetX", "PDF Generation", "Secure Storage"],
      architecture: "Clean Architecture + Domain-Driven Presentation",
      platforms: ["Android", "iOS"],
      status: "CLIENT PRODUCTION",
      role: "Mobile App Engineer",
      year: "2025",
    },
    {
      id: "ARC-13",
      slug: "pinlinks-digital-identity-app",
      codeName: "PinLinks-mobile-app",
      title: "PinLinks — Smart Link Hub & Digital Identity",
      subtitle: "Bio-Link Customization & Networking Telemetry",
      category: "Productivity & Networking",
      overview:
        "Modern digital business card and social link aggregator mobile application allowing creators, entrepreneurs, and professionals to create rich profile landing pages, share contacts via NFC/QR, and monitor click analytics.",
      keyFeatures: [
        "Visual Drag-and-Drop Bio-Page Builder with real-time responsive mobile preview",
        "Dynamic Social Link Integrations with 50+ service presets and custom URL redirects",
        "Instant QR Code Generator & NFC Contact Card Beam for rapid networking at conferences",
        "Click-Through Analytics Telemetry tracking visitor traffic, geographic location, and link CTR",
        "Custom Domain & Theme Styling with neon, dark, light, and brutalist color palettes",
      ],
      techStack: ["Flutter", "Dart", "QR Generator", "Dynamic Links", "RESTful APIs", "GetX"],
      architecture: "Clean Architecture + Modular State Controllers",
      platforms: ["Android", "iOS"],
      status: "CLIENT PRODUCTION",
      role: "Lead Mobile Developer",
      year: "2025",
    },
    {
      id: "ARC-14",
      slug: "mijormon-travel-application",
      codeName: "travel application",
      title: "Mijormon — All-in-One Travel Itinerary & Tours",
      subtitle: "Destination Discovery & Day-by-Day Trip Planner",
      category: "Travel & Hospitality",
      overview:
        "Comprehensive travel planning and tour booking mobile application empowering travelers to discover exotic destinations, build collaborative day-by-day itineraries, book verified accommodations, and access maps offline.",
      keyFeatures: [
        "Visual Destination Explorer with curated photo galleries, travel guides, and local tips",
        "Day-by-Day Itinerary Builder with automated route planning and activity duration estimates",
        "Integrated Hotel & Tour Booking Engine with instant confirmation vouchers",
        "Travel Expense Budget Tracker with multi-currency split and receipt uploads",
        "Offline Itinerary Vault with offline map markers and essential emergency numbers",
      ],
      techStack: ["Flutter", "Dart", "Google Places API", "Offline Caching", "Clean Architecture", "GetX"],
      architecture: "Clean Architecture + Domain-Driven UseCases",
      platforms: ["Android", "iOS"],
      status: "CLIENT PRODUCTION",
      role: "Mobile App Engineer",
      year: "2025",
    },
  ] as ArchiveProjectItem[],

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

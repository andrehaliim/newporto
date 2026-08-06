// ============================================
// EDIT DI SINI: ganti semua data placeholder
// dengan data kamu yang sebenarnya.
// ============================================

export const profile = {
  name: "Andre Haliim",
  role: "Software Engineer",
  tagline:
    "Turning ideas into working software, one clean line of code at a time.",
  location: "Bandung, Indonesia",
  email: "Email",
  photo: "/profile.jpeg",
  cvFile: "/AndreHaliim_CV.pdf",
  socials: {
    github: "https://github.com/andrehaliim",
    linkedin: "https://linkedin.com/in/andrehaliim",
    twitter: "https://twitter.com/andrehaliim",
  },
  description: {
    paragraph1: "I build robust and scalable mobile applications using Flutter. With a strong foundation in object-oriented programming and software architecture, I specialize in creating seamless user experiences with a focus on performance, clean code, and maintainability.",
    paragraph2: "My technical approach centers on understanding the core business requirements and translating them into clean, efficient code. I prioritize writing tests, maintaining modular code structures, and implementing best practices to ensure long-term project health. I am passionate about continuously improving my skills and staying updated with the latest trends in mobile development.",
    paragraph3: "I am seeking opportunities where I can leverage my technical expertise to solve complex problems and contribute to innovative products. I am a collaborative team player who thrives in fast-paced environments and is committed to delivering high-quality results.",
  }
};

export const skills = [
  "Flutter",
];

export const projects = [
  {
    id: "proj-1",
    name: "gts",
    title: "Gold Trading & Sales App",
    description:
      "An offline-first mobile app for recording gold trading transactions across a nationwide sales network.",
    image: "/projects/gts/logo.png",
    screenshots: "/projects/gts",
    screenshotCount: 7,
    screenshotDescription: [
      "Screenshot 1",
      "Screenshot 2",
      "Screenshot 3",
      "Screenshot 4",
      "Screenshot 5",
      "Screenshot 6",
      "Screenshot 7"
    ],
    descriptionPoints: [
      "Designed an offline-first architecture to support 100+ sales agents operating across Indonesia, ensuring uninterrupted transaction recording despite inconsistent connectivity in remote areas.",
      "Resolved a critical data integrity issue in the receivables system that could cause inaccurate balance reporting, by redesigning the calculation logic with an immutable base field.",
      "Eliminated rounding errors in gold weight calculations caused by a floating-point precision limitation, preventing financial discrepancies in high-value transactions."
    ],
    componentsUsed: [
      {
        name: "Objectbox",
        type: "Database",
        url: "https://pub.dev/packages/objectbox"
      },
      {
        name: "flutter_bloc",
        type: "State Management",
        url: "https://pub.dev/packages/flutter_bloc"
      },
      {
        name: "path_provider",
        type: "Storage Path",
        url: "https://pub.dev/packages/path_provider"
      }
    ],
    tech: ["Flutter", "Objectbox"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/username/project-satu",
    featured: true,
  },
  {
    id: "proj-2",
    name: "afc",
    title: "AutoFleet Capital",
    description:
      "A mobile front-end for an international car auction platform sourcing vehicles from Japan and New Zealand.",
    image: "/projects/afc/logo.png",
    screenshots: "/projects/afc",
    screenshotCount: 8,
    screenshotDescription: [
      "Screenshot 1",
      "Screenshot 2",
      "Screenshot 3",
      "Screenshot 4",
      "Screenshot 5",
      "Screenshot 6",
      "Screenshot 7",
      "Screenshot 8"
    ],
    descriptionPoints: [
      "Built a customizable field inspection platform that was successfully sold and adopted by multiple enterprise clients, following live prototype demonstrations to prospective customers.",
      "Designed a conditional, multi-format questionnaire engine — supporting photo evidence, GPS geofencing, and digital signatures — allowing flexible customization per client and industry requirements.",
      "Architected the app's core logic (Provider-based state management, dynamic form navigation) to support scalability across multiple client use cases with minimal code changes."
    ],
    componentsUsed: [
      {
        name: "cached_network_image",
        type: "Image Caching",
        url: "https://pub.dev/packages/cached_network_image"
      },
      {
        name: "web_socket_channel",
        type: "Websocket Client",
        url: "https://pub.dev/packages/web_socket_channel"
      }
    ],
    tech: ["Flutter"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/username/project-dua",
    featured: true,
  },
  {
    id: "proj-3",
    name: "fika",
    title: "Field Inspection App",
    description:
      "A customizable field inspection platform with configurable digital questionnaires.",
    image: "/projects/fika/logo.png",
    screenshots: "/projects/fika",
    screenshotCount: 6,
    screenshotDescription: [
      "Screenshot 1",
      "Screenshot 2",
      "Screenshot 3",
      "Screenshot 4",
      "Screenshot 5",
      "Screenshot 6"
    ],
    descriptionPoints: [
      "Served as the dedicated mobile developer for an international client-facing car auction platform (Philippines-based client, sourcing vehicles from Japan and New Zealand), working the entire mobile frontend while collaborating with the client's web team.",
      "Built end-to-end auction functionality covering real-time bidding, automated transaction confirmations, and user-specific activity tracking (history, saved listings, and inventory visibility) — enabling users to discover, bid, and manage vehicle auctions seamlessly from a single app.",
      "Delivered a production-ready mobile platform engineered for reliability under concurrent bidding activity, supporting live auction operations for an overseas enterprise client."
    ],
    componentsUsed: [
      {
        name: "Geolocator",
        type: "GPS Location",
        url: "https://pub.dev/packages/geolocator"
      },
      {
        name: "camera",
        type: "Camera API",
        url: "https://pub.dev/packages/camera"
      }
    ],
    tech: ["Flutter", "Geolocator"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/username/project-tiga",
    featured: false,
  },
  {
    id: "proj-4",
    name: "deenly",
    title: "Deenly — Islamic Companion App",
    description:
      "A personal, open-source Islamic companion app with prayer times, Qibla direction, and Quran features.",
    image: "/projects/deenly/logo.png",
    screenshots: "/projects/deenly",
    screenshotCount: 9,
    screenshotDescription: [
      "Screenshot 1",
      "Screenshot 2",
      "Screenshot 3",
      "Screenshot 4",
      "Screenshot 5",
      "Screenshot 6",
      "Screenshot 7",
      "Screenshot 8",
      "Screenshot 9"
    ],
    descriptionPoints: [
      "Independently designed and developed a personal Islamic companion app (Flutter) — published as an open-source project on GitHub with downloadable releases.",
      "Built core Islamic companion features including prayer time tracking with adjustable settings and custom adhan notifications, Qibla direction finder and nearby mosque locator, and Quran reader with daily hadith modules including multi-language localization support.",
      "Engineered a home screen widget with scheduled background updates via WorkManager, syncing real-time prayer data from the Al Adhan API with local SQLite caching, and implemented dark mode theming for a polished user experience."
    ],
    componentsUsed: [
      {
        name: "sqflite",
        type: "Local Database",
        url: "https://pub.dev/packages/sqflite"
      },
      {
        name: "adhan_api",
        type: "Prayer Times Calculations",
        url: "https://pub.dev/packages/adhan"
      },
      {
        name: "flutter_compass",
        type: "Device Compass",
        url: "https://pub.dev/packages/flutter_compass"
      }
    ],
    tech: ["Flutter", "sqflite", "adhan_api"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/username/project-empat",
    featured: false,
  },
];

export const experience = [
  {
    id: "exp-1",
    role: "Software Engineer",
    company: "Infonet Global Tech",
    period: "2021 — Now",
    description: "Description",
  },
  {
    id: "exp-2",
    role: "Intern",
    company: "Telkom Indonesia",
    period: "2019 - 2019",
    description: "Description",
  },
];

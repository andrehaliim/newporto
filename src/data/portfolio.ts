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
    description: "An offline-first mobile app for recording gold trading transactions across a nationwide sales network.",
    overview: [
      "Gold Trading & Sales (GTS) is a comprehensive mobile application designed to streamline gold trading operations for a nationwide sales network. The app addresses the critical need for offline-first functionality, ensuring that sales agents can record transactions, track customer balances, and manage inventory even in areas with poor or no internet connectivity. By combining robust data synchronization, accurate weight-based calculations, and a secure authentication system, GTS empowers sales teams to operate with confidence and precision."
    ],
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
    demoUrl: null,
    repoUrl: null,
    featured: true,
  },
  {
    id: "proj-2",
    name: "afc",
    title: "AutoFleet Capital",
    description:
      "A mobile front-end for an international car auction platform sourcing vehicles from Japan and New Zealand.",
    overview: [
      "AutoFleet Capital (AFC) is an international car auction platform connecting buyers with a curated selection of vehicles sourced from Japan and New Zealand. The mobile application provides a seamless and intuitive interface for users to browse auction listings, view detailed vehicle information, and participate in real-time bidding. AFC bridges the geographical gap between suppliers and buyers, offering a transparent and efficient marketplace for vehicle procurement."
    ],
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
    demoUrl: null,
    repoUrl: null,
    featured: true,
  },
  {
    id: "proj-3",
    name: "fika",
    title: "Field Inspection App",
    description:
      "A customizable field inspection platform with configurable digital questionnaires.",
    overview: [
      "Conventional field inspections often rely on paper-based or manual reporting, making them prone to human error, difficult to monitor in real time, and issues are typically only discovered by admins after the report is completed — not at the moment they occur.",
      "FIKA Mobile was built as a digital solution to this problem. Admins can create inspection questionnaires with multiple question types (multiple choice, numeric input, yes/no), then assign them to field officers. Officers must check in based on their location (via geolocator) before filling out the questionnaire on-site, and any answer falling outside the defined normal range is automatically flagged as an issue and converted into a ticket for the admin. Final validation includes a digital signature and an on-site selfie as proof of attendance.",
      "With this flow, inspections become faster, more accurate, and automatically documented — admins can act on issues as soon as they're found, without waiting for a manual report, while minimizing the risk of invalid or inaccurate field data."
    ],
    image: "/projects/fika/logo.png",
    screenshots: "/projects/fika",
    screenshotCount: 6,
    screenshotDescription: [
      "Login Page",
      "Dashboard Page",
      "Questionnaire Page",
      "Confirmation Page",
      "Issues Page",
      "Setting Page"
    ],
    descriptionPoints: [
      "Dynamic Questionnaire Engine — Inspection forms are built dynamically with 3 question types: multiple choice, numeric input, and yes/no, displayed sequentially using PageView.builder.",
      "Location based Check in/Check out — Officers must be physically present at the location (validated in real time via geolocator) before starting a questionnaire, and check out once it's completed.",
      "Automatic Issue Detection — The system automatically flags answers that fall outside the defined normal range for each question, instantly triggering an issue report form.",
      "Issue Ticketing — Issues reported in the field are converted into tickets and sent directly to the admin for follow-up.",
      "Digital Signature & Selfie Verification — Final validation includes a digital signature (Syncfusion Signature Pad) and an on-site selfie as proof of attendance.",
      "Photo Documentation — Field conditions and issues are documented through the image_picker package.",
      "Authentication — Secure login flow with session persistence using SharedPreferences, managed via Provider.",
      "Data Sync (Cache vs Fetch) — Cached issue data is separated from freshly fetched data to maintain performance and consistency.",
      "Smooth UX — Loading animations, snackbar notifications, and smooth page transitions for a better user experience.",
    ],
    componentsUsed: [
      {
        name: "cupertino_icons",
        type: "iOS Icon Set",
        url: "https://pub.dev/packages/cupertino_icons"
      },
      {
        name: "package_info_plus",
        type: "App Version Info",
        url: "https://pub.dev/packages/package_info_plus"
      },
      {
        name: "shared_preferences",
        type: "Local Storage",
        url: "https://pub.dev/packages/shared_preferences"
      },
      {
        name: "provider",
        type: "State Management",
        url: "https://pub.dev/packages/provider"
      },
      {
        name: "loading_animation_widget",
        type: "Loading Animation",
        url: "https://pub.dev/packages/loading_animation_widget"
      },
      {
        name: "page_transition",
        type: "Page Transition",
        url: "https://pub.dev/packages/page_transition"
      },
      {
        name: "syncfusion_flutter_signaturepad",
        type: "Digital Signature Pad",
        url: "https://pub.dev/packages/syncfusion_flutter_signaturepad"
      },
      {
        name: "image_picker",
        type: "Image Picker",
        url: "https://pub.dev/packages/image_picker"
      },
      {
        name: "animated_snack_bar",
        type: "Snack Bar",
        url: "https://pub.dev/packages/animated_snack_bar"
      },
      {
        name: "timer_count_down",
        type: "Countdown Timer",
        url: "https://pub.dev/packages/timer_count_down"
      },
      {
        name: "intl",
        type: "Internationalization & Date Formatting",
        url: "https://pub.dev/packages/intl"
      },
      {
        name: "geolocator",
        type: "Location Services",
        url: "https://pub.dev/packages/geolocator"
      },
      {
        name: "loading_overlay",
        type: "Loading Overlay",
        url: "https://pub.dev/packages/loading_overlay"
      },
    ],
    tech: ["Flutter", "Geolocator"],
    demoUrl: null,
    repoUrl: null,
    featured: false,
  },
  {
    id: "proj-4",
    name: "deenly",
    title: "Deenly — Islamic Companion App",
    description:
      "A Muslim companion app that combines location-aware accurate prayer times (Al Adhan API), adhan notifications, a home screen widget, and real-time Qibla direction, backed by background sync and EN/ID localization.",
    overview: [
      "Deenly is a personal project born out of a simple need: staying connected to daily prayer times without constantly checking a separate app. Built independently with Flutter, it's designed as an all-in-one Islamic companion that lives quietly in the background — syncing accurate, location-based prayer schedules, sending timely adhan reminders, and even surfacing prayer times right on the home screen. It's open-source, actively maintained, and reflects a deep dive into native platform integrations (background tasks, home screen widgets, device sensors) that go beyond typical CRUD app development."
    ],
    image: "/projects/deenly/logo.png",
    screenshots: "/projects/deenly",
    screenshotCount: 9,
    screenshotDescription: [
      "Home Page",
      "Prayer Times",
      "Qibla Direction",
      "Quran Surah List",
      "Quran Surah Detail",
      "Nearby Mosque Page",
      "Tasbeh Digital Page",
      "Settings Page",
      "Homescreen Prayer Widget"
    ],
    descriptionPoints: [
      "Location Aware Prayer Times — Fetches accurate daily and yearly prayer schedules from the Al Adhan API based on the user's GPS location, with results cached locally via SQLite for offline access.",
      "Custom Adhan Notifications — Delivers scheduled prayer notifications with custom adhan sounds and dedicated Android notification channels, fully adjustable by the user.",
      "Home Screen Widget — A native home screen widget powered by WorkManager, running scheduled background syncs to keep prayer times up to date without opening the app.",
      "Qibla Direction Finder — Uses the device's compass sensor to point users toward the Qibla in real time.",
      "Multi Language Support — Full EN/ID localization using Flutter's ARB-based system, with a custom LocaleProvider for seamless language switching.",
      "Dark Mode — A polished, theme-aware UI for comfortable use at any time of day."
    ],
    componentsUsed: [
      {
        name: "home_widget",
        type: "Home Screen Widget",
        url: "https://pub.dev/packages/home_widget"
      },
      {
        name: "workmanager",
        type: "Background Task Scheduler",
        url: "https://pub.dev/packages/workmanager"
      },
      {
        name: "flutter_compass",
        type: "Device Compass Sensor (Qibla Direction)",
        url: "https://pub.dev/packages/flutter_compass"
      },
      {
        name: "flutter_local_notifications",
        type: "Push Notifications",
        url: "https://pub.dev/packages/flutter_local_notifications"
      },
      {
        name: "geolocator",
        type: "GPS Location Services",
        url: "https://pub.dev/packages/geolocator"
      },
      {
        name: "geocoding",
        type: "Reverse Geocoding",
        url: "https://pub.dev/packages/geocoding"
      },
      {
        name: "timezone",
        type: "Timezone Calculation",
        url: "https://pub.dev/packages/timezone"
      },
      {
        name: "sqflite",
        type: "Local Database",
        url: "https://pub.dev/packages/sqflite"
      },
      {
        name: "Al Adhan API",
        type: "Prayer Times Calculations",
        url: "https://aladhan.com/prayer-times-api"
      },
      {
        name: "provider",
        type: "State Management",
        url: "https://pub.dev/packages/provider"
      }
    ],
    tech: [
      "Flutter",
      "sqflite",
      "WorkManager",
      "Al Adhan API",
      "home_widget",
      "flutter_compass"
    ],
    demoUrl: "https://api.github.com/repos/andrehaliim/deenly/releases/latest",
    repoUrl: "https://github.com/andrehaliim/deenly",
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

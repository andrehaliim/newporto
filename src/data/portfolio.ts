// ============================================
// EDIT DI SINI: ganti semua data placeholder
// dengan data kamu yang sebenarnya.
// ============================================

export const profile = {
  name: "Andre Haliim",
  role: "Software Engineer",
  tagline:
    "From idea to production, I build, lead, and ship.",
  location: "Bandung, Indonesia",
  email: "Email",
  photo: "/photo.svg",
  photo2: "/photo2.jpg",
  cvURL: "https://docs.google.com/document/d/1Yhk5RqckFqxK6kJyHU0w1hS2Bb2ffZL2nAXczlpAd3w/export?format=pdf",
  socials: {
    github: "https://github.com/andrehaliim",
    linkedin: "https://linkedin.com/in/andrehaliim",
    instagram: "https://instagram.com/andrehaliim",
    spotify: "https://open.spotify.com/user/andrehaliim",
  },
  description: {
    paragraph1:
      "I’m a Software Engineer with 5+ years of experience building production-ready mobile applications, specializing in Flutter and Dart. I enjoy turning ideas and business requirements into reliable products that are designed to work in the real world, not just in a demo.",
    paragraph2:
      "At Infonet Global Tech, I work as a Mobile Development Tech Lead and primary Flutter developer, taking ownership of projects from architecture and technical decisions through deployment. I’ve worked across different business domains, including gold trading, automotive auctions, and field inspection, where reliability, data integrity, and performance are essential to the business.",
    paragraph3:
      "My engineering background started with native Android development using Kotlin before moving into Flutter. That experience gave me a strong understanding of mobile platforms and helps me work beyond the Flutter layer when native solutions are needed.",
    paragraph4:
      "Beyond client projects, I build and maintain Deenly, an open-source Flutter application where I explore mobile architecture, offline-first data, background processing, home screen widgets, and other ideas without the constraints of a client project.",
    paragraph5:
      "I’m also expanding my skills beyond mobile development with Python and FastAPI, with the goal of becoming a more well-rounded engineer capable of building products across the stack.",
    paragraph6:
      "From idea to production, I build, lead, and ship.",
  },
};

export const skills = {
  languages: [
    "Dart",
    "Python",
    "JavaScript",
  ],
  frameworks: [
    "Flutter",
    "FastAPI",
    "Next.js",
  ],
  databases: [
    "SQLite",
    "ObjectBox",
    "PostgreSQL",
    "Firebase",
  ],
  tools: [
    "Git",
    "GitLab",
    "Android Studio",
    "VS Code",
    "Postman",
    "ADB",
    "Vercel",
  ],
  practices: [
    "REST API Integration",
    "CI/CD",
    "Riverpod",
    "Provider"
  ],
  aiTools: [
    "Claude Code",
    "Antigravity",
  ],
};

export const projects = [
  {
    id: "proj-1",
    name: "gts",
    title: "Gold Trading & Sales App",
    description: "An offline-first mobile app for recording gold trading transactions across a nationwide sales network.",
    overview: [
      "Gold trading agents and shops often rely on manual record-keeping or systems that depend entirely on a stable internet connection, even though buying and selling gold demands speed, high accuracy in weight and price calculations, and frequently happens in locations with unreliable connectivity. Multi-stage payments and receivables tracked manually are also prone to human error.",
      "GTS Mobile is an offline-first gold trading application that manages the entire transaction flow, from recording trades and payments to tracking receivables, with reliable data synchronization even when the connection drops. Gold weight and price calculations use decimal-level precision to avoid rounding discrepancies that matter in the precious metals business.",
      "The app speeds up transactions in the field, reduces the risk of human error in payment and receivables recording, keeps operating without internet access, and delivers instant reports and receipt printing via Bluetooth printer, all from a single mobile application."
    ],
    image: "/projects/gts/logo.png",
    screenshots: "/projects/gts",
    screenshotCount: 7,
    screenshotDescription: [
      "Sales Login",
      "Dashboard",
      "Download Offline Data",
      "New Sale",
      "New Payment",
      "Salesman Transaction Report",
      "App Setting"
    ],
    descriptionPoints: [
      "Gold Trading Transaction Management — records purchases and sales with high-precision weight and price calculations",
      "Payment & Receivables Module — real-time tracking of staged payments and customer balances",
      "Offline First Mode — keeps every operation running without internet, syncing automatically once back online",
      "Bluetooth Receipt Printing — instant on-site receipt printing via Bluetooth thermal printer",
      "Dashboard & Visual Reports — interactive charts for monitoring transaction performance",
      "Multi Flavor Build Support — Beta, Dev, Staging, and Live environments in a single codebase",
      "Real Time Notifications — push notifications for important transaction updates",
      "PDF Report Export — print and share transaction summaries in PDF format"
    ],
    componentsUsed: [
      {
        name: "ObjectBox",
        type: "Database",
        url: "https://pub.dev/packages/objectbox"
      },
      {
        name: "Dio",
        type: "Networking",
        url: "https://pub.dev/packages/dio"
      },
      {
        name: "Decimal",
        type: "Utility",
        url: "https://pub.dev/packages/decimal"
      },
      {
        name: "Drago Blue Printer",
        type: "Hardware Integration",
        url: "https://pub.dev/packages/drago_blue_printer"
      },
      {
        name: "Firebase Crashlytics",
        type: "Monitoring",
        url: "https://pub.dev/packages/firebase_crashlytics"
      },
      {
        name: "Firebase Messaging",
        type: "Notifications",
        url: "https://pub.dev/packages/firebase_messaging"
      },
      {
        name: "FL Chart",
        type: "Data Visualization",
        url: "https://pub.dev/packages/fl_chart"
      },
      {
        name: "PDFrx",
        type: "Document Rendering",
        url: "https://pub.dev/packages/pdfrx"
      },
      {
        name: "Currency Text Input Formatter",
        type: "UI/Formatting",
        url: "https://pub.dev/packages/currency_text_input_formatter"
      },
      {
        name: "Internet Connection Checker",
        type: "Connectivity",
        url: "https://pub.dev/packages/internet_connection_checker"
      }
    ],
    tech: ["Flutter", "ObjectBox", "Firebase", "Dio", "Provider"],
    demoUrl: null,
    repoUrl: null,
    featured: true,
    isPersonal: false
  },
  {
    id: "proj-2",
    name: "afc",
    title: "AutoFleet Capital",
    description:
      "A mobile front-end for an international car auction platform sourcing vehicles from Japan and New Zealand.",
    overview: [
      "Users across various regions in Japan who wanted to participate in car auctions often struggled to attend in person, leaving them dependent on local presence or intermediaries to bid on vehicles from auction houses. This gap made it difficult for buyers outside major auction hubs to access listings, track real-time updates, and make timely bidding decisions.",
      "AFC Mobile bridges auction houses and bidders by bringing the entire car auction experience to mobile, with continuously updated vehicle data, accurate pricing calculations, and tools that let users browse listed vehicles in detail from anywhere. The app also includes recommendation features that help users discover and share auction listings with other potential bidders.",
      "By moving the auction process to mobile, AFC removes the need for physical presence, speeds up how quickly users can act on new listings, and improves accuracy in pricing and data through real-time synchronization, making car auctions accessible to buyers regardless of location."
    ],
    image: "/projects/afc/logo.png",
    screenshots: "/projects/afc",
    screenshotCount: 7,
    screenshotDescription: [
      "User Login",
      "Dashboard",
      "Vehicle Search Filter",
      "Vehicle List",
      "Vehicle Detail",
      "Recommend Vehicle",
      "Bid Vehicle"
    ],
    descriptionPoints: [
      "Real Time Auction Listings — continuously updated vehicle data synced directly from auction houses",
      "Multi Image Vehicle Gallery — browse detailed vehicle photos with full-screen viewing and carousel sliders",
      "Accurate Price Calculation — precise currency formatting and computation for bidding and vehicle values",
      "Vehicle Recommendation & Sharing — recommend listed vehicles to other users to encourage bidding",
      "Advanced Search & Filtering — dropdown-based search to quickly find vehicles matching specific criteria",
      "Image Compression & Optimization — efficient photo uploads even under limited connectivity",
      "Document & File Handling — attach and manage auction-related files and documents",
      "Responsive Cross-Device UI — consistent layout and scaling across different screen sizes"
    ],
    componentsUsed: [
      {
        name: "Dio",
        type: "Networking",
        url: "https://pub.dev/packages/dio"
      },
      {
        name: "Flutter Image Compress",
        type: "Media Optimization",
        url: "https://pub.dev/packages/flutter_image_compress"
      },
      {
        name: "Multi Image Picker View",
        type: "Media Handling",
        url: "https://pub.dev/packages/multi_image_picker_view"
      },
      {
        name: "Image Picker",
        type: "Media Handling",
        url: "https://pub.dev/packages/image_picker"
      },
      {
        name: "Fan Carousel Image Slider",
        type: "UI/Media Display",
        url: "https://pub.dev/packages/fan_carousel_image_slider"
      },
      {
        name: "Currency Text Input Formatter",
        type: "UI/Formatting",
        url: "https://pub.dev/packages/currency_text_input_formatter"
      },
      {
        name: "Flutter ScreenUtil",
        type: "Responsive Design",
        url: "https://pub.dev/packages/flutter_screenutil"
      },
      {
        name: "Dropdown Search",
        type: "UI Component",
        url: "https://pub.dev/packages/dropdown_search"
      },
      {
        name: "File Picker",
        type: "File Handling",
        url: "https://pub.dev/packages/file_picker"
      },
      {
        name: "Provider",
        type: "State Management",
        url: "https://pub.dev/packages/provider"
      }
    ],
    tech: ["Flutter", "Dio", "Provider", "Flutter ScreenUtil", "Flutter Image Compress"],
    demoUrl: null,
    repoUrl: null,
    featured: true,
    isPersonal: false
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
      "Field Officer Login",
      "Dashboard",
      "Question Answer",
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
    ],
    tech: ["Flutter", "Geolocator"],
    demoUrl: null,
    repoUrl: null,
    featured: false,
    isPersonal: false
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
    demoUrl: "/api/download/andrehaliim/deenly",
    repoUrl: "https://github.com/andrehaliim/deenly",
    featured: false,
    isPersonal: true
  },
  {
    id: "proj-5",
    name: "laundryan",
    title: "Laundryan — Laundry Tracker App",
    description:
      "A personal laundry tracker that catalogs your wardrobe with photos, logs each laundry drop-off as a session, and checks every piece back in on pickup. Lost or swapped items get flagged right away, so nothing goes missing without you knowing.",
    overview: [
      "Laundryan is a personal project that started with a common frustration: sending clothes to a laundry service and only realizing days later that a shirt or a pair of socks never came back. Built independently with Flutter, it turns your wardrobe into a photo catalog and records each laundry trip as a session: which items went out, where, and when they should be ready. On pickup, a checklist walks you through verifying every piece, marking it as returned, lost or swapped. If anything is missing, the app writes a WhatsApp message to the laundry for you, listing exactly what didn’t come back. Everything is stored offline in a relational SQLite database, and a timezone-aware reminder lets you know before your laundry is ready."
    ],
    image: "/projects/laundryan/cover.png",
    screenshots: "/projects/laundryan",
    screenshotCount: 6,
    screenshotDescription: [
      "Active Sessions",
      "Session Detail",
      "Pickup Verification Checklist",
      "Session Archive & Lost Item Tracking",
      "Wardrobe Catalog",
      "Dark Mode"
    ],
    descriptionPoints: [
      "Wardrobe Catalog — Add clothes with a photo (camera or gallery), category, quantity and notes, then search and filter them by name or category.",
      "Laundry Sessions — Each drop-off becomes a session with the laundry’s name, address, WhatsApp number, drop-off date and estimated ready time. A live status moves on its own from Dropped → Washing → Ready for Pickup → Verified.",
      "Pickup Verification Checklist — Check items back in one by one, enter partial quantities, and mark pieces as Returned, Lost or Swapped. The wardrobe updates its available stock automatically.",
      "Lost Item Tracking — Unresolved items stay flagged in history until you mark them Found or Permanently lost, so your wardrobe count stays accurate.",
      "WhatsApp & Call Shortcuts — One tap opens WhatsApp with a pre-written message listing the missing items, or calls the laundry directly.",
      "Ready Reminders — An optional notification fires 2 hours before the estimated ready time, scheduled against the device’s local timezone. If notifications are blocked, the app says so and links to system settings.",
      "Custom Categories — Built-in categories (T-shirt, Shirt, Outerwear, Pants, Socks and more), plus your own categories with custom icons.",
      "Multi Language Support — Full EN/ID localization using Flutter’s ARB-based system, with plural-aware strings.",
      "Dark Mode — A soft, theme-aware UI with a matching native splash screen for both light and dark themes."
    ],
    componentsUsed: [
      {
        name: "drift",
        type: "Reactive SQLite Database (Type-safe ORM)",
        url: "https://pub.dev/packages/drift"
      },
      {
        name: "provider",
        type: "State Management",
        url: "https://pub.dev/packages/provider"
      },
      {
        name: "flutter_local_notifications",
        type: "Scheduled Reminder Notifications",
        url: "https://pub.dev/packages/flutter_local_notifications"
      },
      {
        name: "timezone",
        type: "Timezone-aware Scheduling",
        url: "https://pub.dev/packages/timezone"
      },
      {
        name: "flutter_timezone",
        type: "Device Timezone Detection",
        url: "https://pub.dev/packages/flutter_timezone"
      },
      {
        name: "image_picker",
        type: "Camera & Gallery Photo Capture",
        url: "https://pub.dev/packages/image_picker"
      },
      {
        name: "path_provider",
        type: "Local Photo Storage",
        url: "https://pub.dev/packages/path_provider"
      },
      {
        name: "url_launcher",
        type: "WhatsApp & Phone Call Integration",
        url: "https://pub.dev/packages/url_launcher"
      },
      {
        name: "shared_preferences",
        type: "Persistent User Settings",
        url: "https://pub.dev/packages/shared_preferences"
      },
      {
        name: "hugeicons",
        type: "Icon Library",
        url: "https://pub.dev/packages/hugeicons"
      }
    ],
    tech: [
      "Flutter",
      "Drift (SQLite)",
      "Provider",
      "flutter_local_notifications",
      "image_picker",
      "url_launcher"
    ],
    demoUrl: null,
    repoUrl: null,
    featured: false,
    isPersonal: true
  },
];

export const experience = [
  {
    id: "exp-1",
    role: "Software Engineer",
    company: "Infonet Global Tech",
    period: "2021 — Now",
    description: [
      "Served as the primary developer (Flutter) across multiple client projects, independently owning end-to-end implementation — from architecture and technical decisions through to delivery — across production-ready Android and iOS applications.",
      "Delivered mobile solutions across diverse business domains — including offline-first financial systems and real-time auction platforms — adapting architecture to each domain's unique data and connectivity requirements.",
      "Translated business development needs into functional, client-ready prototypes — providing the technical foundation that enabled the sales team to secure enterprise partnerships."
    ],
  },
];

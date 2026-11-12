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

export const company = {
  legalName: "PT Andre Haliim Studio",
  city: "Kota Tasikmalaya, Indonesia",
  email: "contact@andrehaliim.com",
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
    // Accent tone sampled from the app UI, used for icon tiles on the detail page
    tone: "#2b7fd4",
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
    tech: ["Flutter", "Dart", "ObjectBox", "Firebase", "REST API", "Bluetooth"],
    demoUrl: null,
    repoUrl: null,
    featured: true,
    isPersonal: false
  },
  {
    id: "proj-2",
    name: "afc",
    // Accent tone sampled from the app UI, used for icon tiles on the detail page
    tone: "#3b5bdb",
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
    tech: ["Flutter", "Dart", "REST API"],
    demoUrl: null,
    repoUrl: null,
    featured: true,
    isPersonal: false
  },
  {
    id: "proj-3",
    name: "fika",
    // Accent tone sampled from the app UI, used for icon tiles on the detail page
    tone: "#2f6f6b",
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
    tech: ["Flutter", "Dart", "Geolocation"],
    demoUrl: null,
    repoUrl: null,
    featured: false,
    isPersonal: false
  },
  {
    id: "proj-4",
    name: "deenly",
    // Accent tone sampled from the app UI, used for icon tiles on the detail page
    tone: "#0f5c4a",
    title: "Deenly — Islamic Companion App",
    description:
      "An all-in-one Islamic app for prayer times and tracking, the Quran with audio, Qibla, dhikr, Hijri calendar and zakat.",
    overview: [
      "Deenly started from a simple frustration: switching between separate apps every day for prayer times, the Quran and dhikr. So it was built as one calm app that brings daily worship together in one place.",
      "The real challenge wasn't the screens, it was staying reliable while the app is closed. Prayer times are cached on the device so they work offline, background jobs keep the schedule and the home screen widget up to date without opening the app, and reminders still arrive on time. Values like zakat thresholds come from a remote config, so they can change without shipping an update.",
      "Designed, built and maintained solo with Flutter, Deenly is open-source under the MIT license and released as an Android app through GitHub Releases."
    ],
    image: "/projects/deenly/logo.png",
    // Store-style preview screenshots
    screenshotStyle: "store",
    screenshots: [
      "/projects/deenly/store/01_home.png",
      "/projects/deenly/store/02_quran.png",
      "/projects/deenly/store/03_prayers.png",
      "/projects/deenly/store/04_qibla.png",
      "/projects/deenly/store/05_dzikir.png",
      "/projects/deenly/store/06_calendar.png",
      "/projects/deenly/store/07_zakat.png",
      "/projects/deenly/store/08_tasbih.png",
      "/projects/deenly/store/09_doa.png",
      "/projects/deenly/store/10_mosque.png",
      "/projects/deenly/store/11_home_dark.png",
      "/projects/deenly/store/12_widget.png"
    ],
    screenshotDescription: [
      "Your worship companion",
      "Read the Quran your way",
      "Track your daily prayers",
      "Find the Qibla anywhere",
      "Morning & evening dhikr",
      "Complete Hijri calendar",
      "Calculate zakat with ease",
      "Digital tasbih",
      "Daily duas",
      "Find nearby mosques",
      "Easy on the eyes",
      "Prayer times at a glance"
    ],
    descriptionPoints: [
      "Location Aware Prayer Times — Accurate prayer times for where you are or for any city you choose, and they still work without internet.",
      "Prayer Tracker — Tick off each prayer once it is done, right from the schedule or the reminder, and see your history.",
      "Adhan & Reminders — Hear the adhan at prayer time, with an optional heads-up 10 minutes before.",
      "Quran with Audio — Read all 114 surahs with English or Indonesian translation, listen verse by verse, and pick up where you left off.",
      "Qibla Compass & Mosque Finder — A compass that points to the Qibla, plus a list of mosques and prayer rooms near you.",
      "Daily Worship — Morning and evening dhikr, daily duas, the 99 names of Allah, a digital tasbih and a daily hadith.",
      "Hijri Calendar — See Islamic holidays and sunnah fasting days, with a reminder the night before.",
      "Zakat Calculators — Work out zakat on income, savings, gold, trade, fitrah and fidyah using today's gold and silver prices.",
      "Home Screen Widget — See the next prayer time on your home screen without opening the app.",
      "Multi Language & Dark Mode — Available in English and Indonesian, with a dark mode that is easy on the eyes at night."
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
        name: "flutter_local_notifications",
        type: "Push Notifications",
        url: "https://pub.dev/packages/flutter_local_notifications"
      },
      {
        name: "sqflite",
        type: "Local Database",
        url: "https://pub.dev/packages/sqflite"
      },
      {
        name: "provider",
        type: "State Management",
        url: "https://pub.dev/packages/provider"
      },
      {
        name: "just_audio",
        type: "Quran Audio Playback",
        url: "https://pub.dev/packages/just_audio"
      },
      {
        name: "geolocator",
        type: "GPS Location Services",
        url: "https://pub.dev/packages/geolocator"
      },
      {
        name: "flutter_compass",
        type: "Device Compass Sensor (Qibla Direction)",
        url: "https://pub.dev/packages/flutter_compass"
      },
      {
        name: "Al Adhan API",
        type: "Prayer Times Calculations",
        url: "https://aladhan.com/prayer-times-api"
      },
      {
        name: "Gold API",
        type: "Live Gold & Silver Prices",
        url: "https://gold-api.com/"
      }
    ],
    tech: ["Flutter", "Dart", "SQLite", "REST API", "Android"],
    demoUrl: "/api/download/andrehaliim/deenly",
    repoUrl: "https://github.com/andrehaliim/deenly",
    privacyUrl: "/projects/deenly/privacy",
    featured: false,
    isPersonal: true
  },
  {
    id: "proj-5",
    name: "laundryan",
    // Accent tone sampled from the app UI, used for icon tiles on the detail page
    tone: "#2b8ac0",
    title: "Laundryan — Laundry Tracker App",
    description:
      "A personal laundry tracker that catalogs your clothes and checks every item in and out, so nothing goes missing.",
    overview: [
      "Laundryan started from a simple frustration: sending clothes to the laundry and only realizing days later that a shirt or a pair of socks never came back. So it was built as a simple app that keeps track of every piece from drop-off to pickup.",
      "The real challenge wasn't the screens, it was keeping the numbers right. Each drop-off is saved as a session linked to the wardrobe in a local SQLite database, so the app always knows what is at home, in the wash or missing, and it all works offline. On pickup, a checklist marks each piece as returned, lost or swapped, and if something is missing the app writes the WhatsApp message to the laundry for you. Reminders follow the device's timezone, so they arrive before the laundry is ready.",
      "Designed, built and maintained solo with Flutter, Laundryan is open-source under the MIT license and released as an Android app through GitHub Releases."
    ],
    image: "/projects/laundryan/logo.png",
    screenshotStyle: "store",
    screenshots: [
      "/projects/laundryan/store/01_sessions.png",
      "/projects/laundryan/store/02_checklist.png",
      "/projects/laundryan/store/03_summary_whatsapp.png",
      "/projects/laundryan/store/04_session_detail.png",
      "/projects/laundryan/store/05_report_missing.png",
      "/projects/laundryan/store/06_wardrobe.png",
      "/projects/laundryan/store/07_add_item.png",
      "/projects/laundryan/store/08_add_session.png",
      "/projects/laundryan/store/09_categories.png",
      "/projects/laundryan/store/10_sessions_dark.png"
    ],
    screenshotDescription: [
      "Never lose laundry again",
      "Check items at pickup",
      "Missing items? One tap",
      "Know when it's ready",
      "Flag lost or swapped",
      "Your closet, cataloged",
      "Add clothes in seconds",
      "Never miss pickup time",
      "Categories your way",
      "Easy on the eyes at night"
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
    tech: ["Flutter", "Dart", "SQLite", "Android"],
    demoUrl: "/api/download/andrehaliim/laundryan",
    repoUrl: "https://github.com/andrehaliim/laundryan",
    privacyUrl: "/projects/laundryan/privacy",
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

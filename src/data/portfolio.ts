// ============================================
// EDIT DI SINI: ganti semua data placeholder
// dengan data kamu yang sebenarnya.
// ============================================

export const profile = {
  name: "Andre Haliim",
  role: "Flutter Developer",
  tagline:
    "Creating mobile applications that are fast, clean, and enjoyable to use — from idea to production.",
  location: "Bandung, Indonesia",
  email: "andrehaliimkurniawan@gmail.com",
  photo: "/profile.jpeg",
  cvFile: "/AndreHaliim_CV.pdf",
  socials: {
    github: "https://github.com/andrehaliim",
    linkedin: "https://linkedin.com/in/andrehaliim",
    twitter: "https://twitter.com/andrehaliim",
  },
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
    image: "/projects/project-1.png",
    screenshots: [
      "/projects/project-1.png",
      "/projects/project-2.png",
      "/projects/project-3.png"
    ],
    descriptionPoints: [
      "Mengimplementasikan sinkronisasi data offline-first dengan sinkronisasi otomatis saat mendeteksi koneksi internet.",
      "Menggunakan Objectbox untuk enkripsi database lokal berkinerja tinggi guna mengamankan data transaksi keuangan sensitif.",
      "Mendesain arsitektur manajemen state yang clean dan testable menggunakan BLoC pattern.",
      "Mendukung ekspor laporan transaksi harian dan mingguan dalam format PDF dan Excel secara lokal di perangkat pengguna."
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
    image: "/projects/project-2.png",
    screenshots: [
      "/projects/project-2.png",
      "/projects/project-1.png",
      "/projects/project-4.png"
    ],
    descriptionPoints: [
      "Mengembangkan antarmuka pencarian armada kendaraan yang real-time dengan filter kustom dinamis.",
      "Integrasi websocket untuk memperbarui harga penawaran lelang secara instan tanpa perlu reload halaman.",
      "Menerapkan caching gambar yang dioptimalkan untuk performa scrolling yang sangat mulus di perangkat low-end."
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
    image: "/projects/project-3.png",
    screenshots: [
      "/projects/project-3.png",
      "/projects/project-2.png"
    ],
    descriptionPoints: [
      "Mengintegrasikan fitur geofencing untuk memastikan inspektur berada tepat di lokasi sebelum mengisi formulir.",
      "Membuat builder kuesioner dinamis yang mendukung validasi input kompleks dan percabangan logika pertanyaan.",
      "Mengotomatiskan penandaan koordinat GPS presisi tinggi pada setiap foto bukti inspeksi."
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
    image: "/projects/project-4.png",
    screenshots: [
      "/projects/project-4.png",
      "/projects/project-3.png"
    ],
    descriptionPoints: [
      "Menyediakan kalkulasi jadwal shalat offline menggunakan koordinat GPS dan rumus astronomi standar industri.",
      "Integrasi sensor kompas internal perangkat untuk menunjukkan arah kiblat secara interaktif dan presisi.",
      "Menyajikan fitur bacaan Al-Quran offline lengkap dengan terjemahan bahasa Indonesia dan audio murattal."
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

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const APP_NAME = "Deenly";
const DEVELOPER = "Andre Haliim";
const CONTACT_EMAIL = "andrehaliimkurniawan@gmail.com";
const EFFECTIVE_DATE = { en: "October 13, 2026", id: "13 Oktober 2026" };

export const metadata: Metadata = {
  title: `${APP_NAME} — Privacy Policy`,
  description: `Privacy policy for the ${APP_NAME} Android app by ${DEVELOPER}.`,
};

interface Section {
  title: string;
  paragraphs?: string[];
  points?: string[];
  notes?: string[];
}

interface Policy {
  lang: "en" | "id";
  label: string;
  heading: string;
  effective: string;
  intro: string;
  summaryTitle: string;
  summary: string;
  sections: Section[];
  contactTitle: string;
  contactText: string;
}

const policies: Policy[] = [
  {
    lang: "en",
    label: "English",
    heading: "Privacy Policy",
    effective: `Effective date: ${EFFECTIVE_DATE.en}`,
    intro: `This policy explains how the ${APP_NAME} mobile app ("the app"), developed by ${DEVELOPER} as an individual developer, handles your information. By using the app, you agree to the practices described here.`,
    summaryTitle: "In short",
    summary:
      "Deenly uses your location only to show prayer times, the qibla direction and nearby mosques. Your settings and progress stay on your device. The app has no accounts, no analytics, no ads and no server of its own, and your data is never sold.",
    sections: [
      {
        title: "1. Location",
        paragraphs: [
          "With your permission, the app reads your device's location while you are using it. Your location is used to:",
        ],
        points: [
          "Calculate prayer times for where you are.",
          "Point the qibla compass towards the Kaaba.",
          "Find mosques near you.",
          "Show your city name on the home screen and the home screen widget.",
        ],
        notes: [
          "The app does not request background location access. Your last known coordinates and city name are saved on your device so prayer times and reminders keep working when GPS is off. You can also pick a city manually instead of using GPS.",
        ],
      },
      {
        title: "2. Information shared with third-party services",
        paragraphs: [
          "The app has no server of its own. To provide its features, it sends only the data each feature needs, directly from your device to these services:",
        ],
        points: [
          "Aladhan API (aladhan.com): your coordinates and time zone, to get the prayer schedule.",
          "OpenStreetMap Nominatim: an area of about 2 km around your location, to search for nearby mosques.",
          "Your device's geocoding service (on Android, usually provided by Google): your coordinates or the city you type, to look up a place name.",
          "jsDelivr CDN and EveryAyah.com: no personal data, only requests to download Quran text and recitation audio.",
        ],
        notes: [
          "Like any internet request, these services can see your IP address, and each of them handles data under its own privacy policy. When you open directions to a mosque, the app hands that mosque's location to Google Maps, which then works under Google's privacy policy.",
        ],
      },
      {
        title: "3. Information stored on your device",
        paragraphs: [
          "The following data is stored locally in the app's private storage on your device and is never uploaded to the developer:",
        ],
        points: [
          "Your saved location: coordinates and city name.",
          "The downloaded prayer schedule and your prayer time adjustments.",
          "Downloaded Quran text and your last-read position.",
          "Your daily prayer checklist progress.",
          "App preferences: language, theme and notification settings.",
        ],
      },
      {
        title: "4. Information we collect",
        paragraphs: [
          "We do not collect any personal information. The app contains no analytics, crash reporting, advertising or tracking SDKs, and it does not require you to create an account.",
        ],
      },
      {
        title: "5. Notifications, alarms and the home screen widget",
        paragraphs: [
          "If you allow notifications, the app schedules local adhan and reminder notifications on your device using exact alarms, and re-schedules them after your device restarts. A background task periodically refreshes the prayer schedule using your saved location. The home screen widget shows prayer times and your city name. All of this runs on your device. You can turn notifications off at any time in the app or in your system settings.",
        ],
      },
      {
        title: "6. Compass and vibration",
        paragraphs: [
          "The qibla page reads your device's compass sensor, and the tasbih counter can vibrate your device. Sensor readings are used on the device only and are never stored or sent anywhere.",
        ],
      },
      {
        title: "7. Data retention and deletion",
        paragraphs: [
          "Your data stays on your device until you remove it. You can delete all data at once by clearing the app's storage in your system settings or by uninstalling the app, and you can revoke the location and notification permissions at any time. Because we hold no copy of your data, we cannot recover it for you once it is deleted.",
        ],
      },
      {
        title: "8. Backups",
        paragraphs: [
          "If your device's system backup (for example Google backup) is turned on, the operating system may include the app's data in your personal device backup. That backup is managed by your device provider under their privacy policy, not by the developer.",
        ],
      },
      {
        title: "9. Children's privacy",
        paragraphs: [
          "The app is not directed at children under 13 and does not knowingly collect any information from them. Since the developer collects no personal data at all, no child's data is collected either.",
        ],
      },
      {
        title: "10. Changes to this policy",
        paragraphs: [
          "If this policy changes, the updated version will be published on this page with a new effective date. We encourage you to review it from time to time.",
        ],
      },
    ],
    contactTitle: "11. Contact",
    contactText:
      "If you have any questions about this privacy policy, contact the developer at",
  },
  {
    lang: "id",
    label: "Bahasa Indonesia",
    heading: "Kebijakan Privasi",
    effective: `Tanggal berlaku: ${EFFECTIVE_DATE.id}`,
    intro: `Kebijakan ini menjelaskan bagaimana aplikasi ${APP_NAME} ("aplikasi"), yang dikembangkan oleh ${DEVELOPER} sebagai developer perorangan, menangani informasi kamu. Dengan menggunakan aplikasi ini, kamu menyetujui praktik yang dijelaskan di sini.`,
    summaryTitle: "Ringkasnya",
    summary:
      "Deenly memakai lokasimu hanya untuk menampilkan jadwal sholat, arah kiblat, dan masjid terdekat. Pengaturan dan progresmu tetap ada di perangkatmu. Aplikasi ini tidak punya akun, analytics, iklan, maupun server sendiri, dan datamu tidak pernah dijual.",
    sections: [
      {
        title: "1. Lokasi",
        paragraphs: [
          "Dengan izinmu, aplikasi membaca lokasi perangkat saat aplikasi sedang digunakan. Lokasi dipakai untuk:",
        ],
        points: [
          "Menghitung jadwal sholat sesuai tempatmu berada.",
          "Mengarahkan kompas kiblat ke Ka'bah.",
          "Mencari masjid di sekitarmu.",
          "Menampilkan nama kota di beranda dan widget layar utama.",
        ],
        notes: [
          "Aplikasi tidak meminta akses lokasi di latar belakang. Koordinat dan nama kota terakhir disimpan di perangkatmu agar jadwal sholat dan pengingat tetap berjalan saat GPS mati. Kamu juga bisa memilih kota secara manual tanpa GPS.",
        ],
      },
      {
        title: "2. Informasi yang dibagikan ke layanan pihak ketiga",
        paragraphs: [
          "Aplikasi tidak punya server sendiri. Untuk menjalankan fiturnya, aplikasi hanya mengirim data yang dibutuhkan setiap fitur, langsung dari perangkatmu ke layanan berikut:",
        ],
        points: [
          "Aladhan API (aladhan.com): koordinat dan zona waktumu, untuk mengambil jadwal sholat.",
          "OpenStreetMap Nominatim: area sekitar 2 km di sekitar lokasimu, untuk mencari masjid terdekat.",
          "Layanan geocoding bawaan perangkat (di Android biasanya disediakan Google): koordinat atau nama kota yang kamu ketik, untuk mencari nama tempat.",
          "jsDelivr CDN dan EveryAyah.com: tanpa data pribadi, hanya permintaan untuk mengunduh teks Al-Qur'an dan audio murattal.",
        ],
        notes: [
          "Seperti permintaan internet pada umumnya, layanan tersebut dapat melihat alamat IP kamu, dan masing-masing menangani data sesuai kebijakan privasinya sendiri. Saat kamu membuka petunjuk arah ke masjid, aplikasi meneruskan lokasi masjid tersebut ke Google Maps, yang kemudian berjalan sesuai kebijakan privasi Google.",
        ],
      },
      {
        title: "3. Informasi yang disimpan di perangkat",
        paragraphs: [
          "Data berikut disimpan secara lokal di penyimpanan privat aplikasi pada perangkatmu dan tidak pernah diunggah ke developer:",
        ],
        points: [
          "Lokasi tersimpan: koordinat dan nama kota.",
          "Jadwal sholat yang diunduh dan penyesuaian waktu sholat milikmu.",
          "Teks Al-Qur'an yang diunduh dan posisi terakhir membaca.",
          "Progres checklist sholat harian.",
          "Preferensi aplikasi: bahasa, tema, dan pengaturan notifikasi.",
        ],
      },
      {
        title: "4. Informasi yang kami kumpulkan",
        paragraphs: [
          "Kami tidak mengumpulkan informasi pribadi apa pun. Aplikasi ini tidak berisi SDK analytics, crash reporting, iklan, atau pelacakan, dan tidak mengharuskan kamu membuat akun.",
        ],
      },
      {
        title: "5. Notifikasi, alarm, dan widget layar utama",
        paragraphs: [
          "Jika kamu mengizinkan notifikasi, aplikasi menjadwalkan notifikasi adzan dan pengingat secara lokal di perangkat menggunakan alarm tepat waktu, dan menjadwalkannya ulang setelah perangkat dinyalakan ulang. Sebuah tugas latar belakang memperbarui jadwal sholat secara berkala menggunakan lokasi tersimpan. Widget layar utama menampilkan jadwal sholat dan nama kotamu. Semua ini berjalan di perangkatmu. Kamu bisa mematikan notifikasi kapan saja dari aplikasi atau pengaturan sistem.",
        ],
      },
      {
        title: "6. Kompas dan getaran",
        paragraphs: [
          "Halaman kiblat membaca sensor kompas perangkat, dan penghitung tasbih dapat menggetarkan perangkat. Data sensor hanya dipakai di perangkat dan tidak pernah disimpan atau dikirim ke mana pun.",
        ],
      },
      {
        title: "7. Penyimpanan dan penghapusan data",
        paragraphs: [
          "Datamu tetap ada di perangkat sampai kamu menghapusnya. Kamu bisa menghapus semua data sekaligus dengan membersihkan penyimpanan aplikasi di pengaturan sistem atau meng-uninstall aplikasi, dan kamu bisa mencabut izin lokasi dan notifikasi kapan saja. Karena kami tidak menyimpan salinan datamu, data yang sudah dihapus tidak bisa kami pulihkan.",
        ],
      },
      {
        title: "8. Cadangan (backup)",
        paragraphs: [
          "Jika backup sistem di perangkatmu (misalnya Google backup) aktif, sistem operasi dapat menyertakan data aplikasi dalam backup pribadi perangkatmu. Backup tersebut dikelola oleh penyedia perangkatmu sesuai kebijakan privasinya, bukan oleh developer.",
        ],
      },
      {
        title: "9. Privasi anak",
        paragraphs: [
          "Aplikasi ini tidak ditujukan untuk anak di bawah 13 tahun dan tidak dengan sengaja mengumpulkan informasi dari mereka. Karena developer sama sekali tidak mengumpulkan data pribadi, data anak juga tidak dikumpulkan.",
        ],
      },
      {
        title: "10. Perubahan kebijakan",
        paragraphs: [
          "Jika kebijakan ini berubah, versi terbarunya akan dipublikasikan di halaman ini dengan tanggal berlaku yang baru. Kami menyarankan kamu memeriksanya secara berkala.",
        ],
      },
    ],
    contactTitle: "11. Kontak",
    contactText:
      "Jika ada pertanyaan tentang kebijakan privasi ini, hubungi developer di",
  },
];

export default function DeenlyPrivacyPage() {
  return (
    <div className="w-full">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full h-16 border-b border-border bg-canvas/90 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-6 h-full">
          <div className="flex h-full items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-1.5 font-sans text-base font-semibold tracking-tight text-text hover:opacity-80"
            >
              <span>{DEVELOPER}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-sig-coral" />
            </Link>

            <Link
              href="/projects/deenly"
              className="flex items-center gap-2 font-sans text-[14px] font-medium text-text-muted hover:text-text transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to {APP_NAME}</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="bg-canvas">
        {/* Hero — white canvas header */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-12 w-full">
            <div className="font-mono text-[12px] text-text-muted">
              LEGAL // {APP_NAME.toUpperCase()}
            </div>
            <h1 className="mt-3 font-sans text-[40px] font-normal leading-[1.2] text-text break-words">
              {APP_NAME} Privacy Policy
            </h1>
            <p className="mt-4 text-[18px] font-normal leading-[1.4] text-text-muted max-w-3xl break-words">
              How the {APP_NAME} app handles your data, in English and Bahasa
              Indonesia.
            </p>

            {/* Language switcher */}
            <div className="mt-8 flex flex-wrap gap-4">
              {policies.map((policy, i) => (
                <a
                  key={policy.lang}
                  href={`#${policy.lang}`}
                  className={
                    i === 0
                      ? "inline-flex items-center justify-center rounded-[12px] bg-accent px-6 py-3.5 font-sans text-[16px] font-medium text-white transition hover:bg-accent/90"
                      : "inline-flex items-center justify-center rounded-[12px] border border-border bg-canvas px-6 py-3.5 font-sans text-[16px] font-medium text-text transition hover:bg-surface-soft"
                  }
                >
                  {policy.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {policies.map((policy) => (
          <section
            key={policy.lang}
            id={policy.lang}
            lang={policy.lang}
            className="scroll-mt-16 border-b border-border last:border-b-0"
          >
            <div className="mx-auto max-w-3xl px-6 py-12">
              <h2 className="font-sans text-[32px] font-normal leading-[1.2] text-text">
                {policy.heading}
              </h2>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-text-muted">
                {policy.effective}
              </p>
              <p className="mt-6 text-[14px] leading-relaxed text-text-muted break-words">
                {policy.intro}
              </p>

              {/* Summary callout */}
              <div className="mt-8 rounded-[10px] bg-sig-cream p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  {policy.summaryTitle}
                </h3>
                <p className="mt-3 text-[18px] leading-[1.4] text-text break-words">
                  {policy.summary}
                </p>
              </div>

              <div className="mt-10 space-y-8">
                {policy.sections.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <h3 className="font-sans text-[18px] font-medium leading-[1.4] text-text">
                      {section.title}
                    </h3>
                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[14px] leading-relaxed text-text-muted break-words"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.points && (
                      <ul className="space-y-2 list-disc pl-5">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="text-[14px] leading-relaxed text-text-muted marker:text-sig-coral break-words"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.notes?.map((note) => (
                      <p
                        key={note}
                        className="text-[14px] leading-relaxed text-text-muted break-words"
                      >
                        {note}
                      </p>
                    ))}
                  </div>
                ))}

                <div className="space-y-3">
                  <h3 className="font-sans text-[18px] font-medium leading-[1.4] text-text">
                    {policy.contactTitle}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-text-muted break-words">
                    {policy.contactText}{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-accent-2 hover:underline break-all"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Light CTA band at bottom */}
      <div className="w-full bg-surface-strong border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-sans text-[24px] font-normal text-text">
              About {APP_NAME}
            </p>
            <p className="mt-1 text-[14px] text-text-muted">
              Features, screenshots and download link.
            </p>
          </div>
          <Link
            href="/projects/deenly"
            className="inline-flex items-center gap-2 rounded-[12px] bg-accent px-6 py-3.5 font-sans text-[16px] font-medium text-white transition hover:bg-accent/90"
          >
            <ArrowLeft size={16} /> View Project
          </Link>
        </div>
      </div>
    </div>
  );
}

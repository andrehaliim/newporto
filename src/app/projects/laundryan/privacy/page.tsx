import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const APP_NAME = "Laundryan";
const DEVELOPER = "Andre Haliim";
const CONTACT_EMAIL = "andrehaliimkurniawan@gmail.com";
const EFFECTIVE_DATE = { en: "October 12, 2026", id: "12 Oktober 2026" };

export const metadata: Metadata = {
  title: `${APP_NAME} — Privacy Policy`,
  description: `Privacy policy for the ${APP_NAME} Android app by ${DEVELOPER}.`,
};

interface Section {
  title: string;
  paragraphs?: string[];
  points?: string[];
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
      "Everything you enter into Laundryan stays on your device. The app has no accounts, no analytics, no ads and no server. Your data is never collected, sold or shared with anyone.",
    sections: [
      {
        title: "1. Information stored on your device",
        paragraphs: [
          "To work as a laundry tracker, the app stores the following information locally in a private database on your device:",
        ],
        points: [
          "Wardrobe items: name, category, quantity, notes and an optional photo.",
          "Laundry sessions: the laundry's name, address and phone/WhatsApp number, drop-off date, estimated ready time and the items you sent.",
          "Pickup checklist results: which items were returned, lost or swapped.",
          "App preferences: language, theme and notification settings.",
        ],
      },
      {
        title: "2. Information we collect",
        paragraphs: [
          "We do not collect any personal information. The data listed above is never uploaded to the developer or any third party. The app contains no analytics, crash reporting, advertising or tracking SDKs, and it does not require you to create an account.",
        ],
      },
      {
        title: "3. Photos, camera and gallery",
        paragraphs: [
          "When you choose to add a photo to a wardrobe item, the app opens your device's camera or photo picker. Only the photo you select or take is copied into the app's private storage. The app does not access any other photos on your device.",
        ],
      },
      {
        title: "4. Notifications",
        paragraphs: [
          "If you allow notifications, the app schedules local reminders on your device before your laundry is ready. These reminders are created and delivered entirely on your device. The app also re-schedules pending reminders after your device restarts. You can turn notifications off at any time in the app or in your system settings.",
        ],
      },
      {
        title: "5. WhatsApp and phone calls",
        paragraphs: [
          "When you tap the WhatsApp or call button, the app hands a pre-written message or the phone number over to WhatsApp or your phone app. Nothing is sent until you confirm it there. Any message you send is then handled by that app under its own privacy policy.",
        ],
      },
      {
        title: "6. Data retention and deletion",
        paragraphs: [
          "Your data stays on your device until you delete it. You can delete wardrobe items and categories inside the app, or remove all data at once by clearing the app's storage in your system settings or uninstalling the app. Because we hold no copy of your data, we cannot recover it for you once it is deleted.",
        ],
      },
      {
        title: "7. Backups",
        paragraphs: [
          "If your device's system backup (for example Google backup) is turned on, the operating system may include the app's data in your personal device backup. That backup is managed by your device provider under their privacy policy, not by the developer.",
        ],
      },
      {
        title: "8. Children's privacy",
        paragraphs: [
          "The app is not directed at children under 13 and does not knowingly collect any information from them. Since the app collects no personal data at all, no child's data is collected either.",
        ],
      },
      {
        title: "9. Changes to this policy",
        paragraphs: [
          "If this policy changes, the updated version will be published on this page with a new effective date. We encourage you to review it from time to time.",
        ],
      },
    ],
    contactTitle: "10. Contact",
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
      "Semua yang kamu masukkan ke Laundryan tetap ada di perangkatmu. Aplikasi ini tidak punya akun, analytics, iklan, maupun server. Datamu tidak pernah dikumpulkan, dijual, atau dibagikan kepada siapa pun.",
    sections: [
      {
        title: "1. Informasi yang disimpan di perangkat",
        paragraphs: [
          "Agar bisa berfungsi sebagai pencatat laundry, aplikasi menyimpan informasi berikut secara lokal di database privat pada perangkatmu:",
        ],
        points: [
          "Item lemari: nama, kategori, jumlah, catatan, dan foto (opsional).",
          "Sesi laundry: nama, alamat, dan nomor telepon/WhatsApp laundry, tanggal antar, perkiraan waktu selesai, serta item yang dikirim.",
          "Hasil checklist pengambilan: item yang kembali, hilang, atau tertukar.",
          "Preferensi aplikasi: bahasa, tema, dan pengaturan notifikasi.",
        ],
      },
      {
        title: "2. Informasi yang kami kumpulkan",
        paragraphs: [
          "Kami tidak mengumpulkan informasi pribadi apa pun. Data di atas tidak pernah diunggah ke developer maupun pihak ketiga. Aplikasi ini tidak berisi SDK analytics, crash reporting, iklan, atau pelacakan, dan tidak mengharuskan kamu membuat akun.",
        ],
      },
      {
        title: "3. Foto, kamera, dan galeri",
        paragraphs: [
          "Saat kamu menambahkan foto ke item lemari, aplikasi membuka kamera atau pemilih foto bawaan perangkat. Hanya foto yang kamu pilih atau ambil yang disalin ke penyimpanan privat aplikasi. Aplikasi tidak mengakses foto lain di perangkatmu.",
        ],
      },
      {
        title: "4. Notifikasi",
        paragraphs: [
          "Jika kamu mengizinkan notifikasi, aplikasi menjadwalkan pengingat lokal di perangkat sebelum laundry kamu selesai. Pengingat ini dibuat dan ditampilkan sepenuhnya di perangkatmu. Aplikasi juga menjadwalkan ulang pengingat yang tertunda setelah perangkat dinyalakan ulang. Kamu bisa mematikan notifikasi kapan saja dari aplikasi atau pengaturan sistem.",
        ],
      },
      {
        title: "5. WhatsApp dan panggilan telepon",
        paragraphs: [
          "Saat kamu menekan tombol WhatsApp atau telepon, aplikasi meneruskan pesan yang sudah disiapkan atau nomor telepon ke WhatsApp atau aplikasi telepon. Tidak ada yang terkirim sampai kamu mengonfirmasinya di sana. Pesan yang kamu kirim kemudian ditangani oleh aplikasi tersebut sesuai kebijakan privasinya sendiri.",
        ],
      },
      {
        title: "6. Penyimpanan dan penghapusan data",
        paragraphs: [
          "Datamu tetap ada di perangkat sampai kamu menghapusnya. Kamu bisa menghapus item lemari dan kategori di dalam aplikasi, atau menghapus semua data sekaligus dengan membersihkan penyimpanan aplikasi di pengaturan sistem atau meng-uninstall aplikasi. Karena kami tidak menyimpan salinan datamu, data yang sudah dihapus tidak bisa kami pulihkan.",
        ],
      },
      {
        title: "7. Cadangan (backup)",
        paragraphs: [
          "Jika backup sistem di perangkatmu (misalnya Google backup) aktif, sistem operasi dapat menyertakan data aplikasi dalam backup pribadi perangkatmu. Backup tersebut dikelola oleh penyedia perangkatmu sesuai kebijakan privasinya, bukan oleh developer.",
        ],
      },
      {
        title: "8. Privasi anak",
        paragraphs: [
          "Aplikasi ini tidak ditujukan untuk anak di bawah 13 tahun dan tidak dengan sengaja mengumpulkan informasi dari mereka. Karena aplikasi sama sekali tidak mengumpulkan data pribadi, data anak juga tidak dikumpulkan.",
        ],
      },
      {
        title: "9. Perubahan kebijakan",
        paragraphs: [
          "Jika kebijakan ini berubah, versi terbarunya akan dipublikasikan di halaman ini dengan tanggal berlaku yang baru. Kami menyarankan kamu memeriksanya secara berkala.",
        ],
      },
    ],
    contactTitle: "10. Kontak",
    contactText:
      "Jika ada pertanyaan tentang kebijakan privasi ini, hubungi developer di",
  },
];

export default function LaundryanPrivacyPage() {
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
              href="/projects/laundryan"
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
            href="/projects/laundryan"
            className="inline-flex items-center gap-2 rounded-[12px] bg-accent px-6 py-3.5 font-sans text-[16px] font-medium text-white transition hover:bg-accent/90"
          >
            <ArrowLeft size={16} /> View Project
          </Link>
        </div>
      </div>
    </div>
  );
}

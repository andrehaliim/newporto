# Portfolio — Next.js + Tailwind CSS

Portfolio developer dengan tema **dark/modern** bergaya "code editor" —
hero, nav, dan card project didesain menyerupai tampilan file kode di
VS Code.

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur penting

```
src/
  app/
    layout.tsx        -> metadata (judul tab browser)
    page.tsx           -> susunan section halaman
    globals.css         -> warna & tema (edit di sini kalau mau ganti palet)
  data/
    portfolio.ts         -> SEMUA KONTEN KAMU (nama, project, CV, dll)
  components/
    Hero.tsx, About.tsx, Projects.tsx, Experience.tsx, Contact.tsx, ...
public/
  profile.jpg            -> ganti dengan foto kamu
  cv.pdf                  -> taruh CV kamu di sini (nama file harus cv.pdf)
  projects/project-1.png ... project-4.png -> ganti dengan screenshot asli
```

## Yang perlu kamu ganti

1. **`src/data/portfolio.ts`** — edit semua teks: nama, role, tagline, email,
   link sosial media, daftar skill, daftar project, dan pengalaman kerja.
2. **`public/profile.jpg`** — ganti dengan foto kamu (masih pakai nama file
   yang sama, atau ganti path-nya di `portfolio.ts`).
3. **`public/cv.pdf`** — taruh file CV asli kamu di sini.
4. **`public/projects/project-1.png`** dst — ganti dengan screenshot project
   asli kamu (disarankan rasio 16:9, misal 1200x750px).

Semua gambar saat ini masih placeholder abu-abu bertuliskan "FOTO KAMU" /
"SCREENSHOT PROJECT" — tinggal timpa file dengan nama yang sama.

## Deploy gratis

Cara tercepat: push ke GitHub, lalu import repo-nya di
[vercel.com](https://vercel.com) — otomatis ter-deploy tiap kali kamu push.

## Kustomisasi warna

Warna diatur lewat CSS variable di `src/app/globals.css`:

- `--bg` — warna background utama
- `--accent` — warna aksen kuning (dipakai untuk "string" di hero, tag skill)
- `--accent-2` — warna aksen teal (dipakai untuk link, tombol utama)

Ganti nilai hex-nya sesuai selera.

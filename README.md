# cikgukhairan.my

Laman portfolio / kad nama digital peribadi — Khairan Hadafi (pendidik &amp; pembina penyelesaian digital).

## Teknologi
Laman **HTML statik** berbilang halaman. Tiada PHP, database, atau langkah build.
CSS + token dikongsi, sedikit JS untuk nav mobile & animasi reveal.

## Struktur fail
- `index.html` — **Utama** (hero + demo kod + projek utama + CTA)
- `projek.html` — **Projek** (kad projek, tambah dengan salin blok `.project`)
- `hubungi.html` — **Hubungi** (Telegram, e-mel, pautan projek)
- `css/tokens.css` — sistem reka bentuk (palet OKLCH Cobalt, font, spacing)
- `css/style.css` — layout + komponen
- `js/site.js` — nav mobile, reveal on scroll, type-in hero, tahun footer

## Reka bentuk
Tema **Cobalt** (Hallmark) — modern-minimal, register dev-tool. Kertas putih-sejuk,
aksen biru elektrik, font Space Grotesk + Inter + JetBrains Mono. Responsif penuh
(320–1920px). Untuk tambah/tukar warna, edit token dalam `css/tokens.css` sahaja.

## Pembangunan tempatan
Buka `http://cikgukhairan.test` (Laragon auto-detect folder), atau buka `index.html` terus dalam browser.

## Deploy
Host di VPS OVH (nginx statik) pada domain `cikgukhairan.my`. Upload semua fail
(`*.html`, `css/`, `js/`) ke folder laman di server + konfigurasi nginx server
block + SSL.

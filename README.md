# cikgukhairan.my

Laman portfolio / kad nama digital peribadi — Khairan Hadafi (pendidik &amp; pembina penyelesaian digital).

## Teknologi
Laman **HTML statik** ringkas — satu fail `index.html` self-contained (CSS + sedikit JS inline). Tiada PHP, database, atau langkah build.

## Struktur
- **Hero** — nama, tagline, bio, butang hubungi/projek
- **Projek** — kad projek (iHadir.my), boleh tambah dengan salin blok `.project`
- **Hubungi** — Telegram + e-mel
- Tema gelap moden, aksen biru langit.

## Pembangunan tempatan
Buka `http://cikgukhairan.test` (Laragon auto-detect folder), atau buka `index.html` terus dalam browser.

## Deploy
Host di VPS OVH (nginx statik) pada domain `cikgukhairan.my`. Upload `index.html` ke folder laman di server + konfigurasi nginx server block + SSL.

# SAMBUNG — Jejak TP Sejarah (Tingkatan 1)

Dikemas kini: 9 Okt 2026 (malam).

## Permintaan Hasfi
"buat jejak tp sejarah t1". T1 ditafsir sebagai **Tingkatan 1**. Mata pelajaran Sejarah KSSR hanya bermula pada Tahun 4, jadi tiada Sejarah Tahun 1.

## Status: SIAP SETEMPAT, BELUM DEPLOY, BELUM GIT
- Cabang daripada Jejak TP Matematik (commit d5a305b, tanpa kerja T5 yang belum di-commit). Tukaran dibuat oleh `python tools/tampal-sejarah.py`.
- Id bab `s1b1` hingga `s1b8`. `JUMLAH_BAB={1:8}`. Bab 1-2 percuma (`bebasBab`), manakala Bab 3-8 dikunci di bawah Premium menengah rendah.
- DSKP rasmi: `dskp/sejarah-t1.pdf` (BPK 2015, terbitan 2016, daripada Google Drive KPM) + `.txt`. Standard Prestasi disalin kata demi kata dalam `sumber/_k.js` (SPI ikut Standard Kandungan 1.1, 2.1, 3.1, 4.1, 4.2, 4.3).

| Bab | Tajuk buku teks | SK | Nama dunia |
|---|---|---|---|
| s1b1 | Mengenali Sejarah | 1.1 | Penyiasat Masa Silam |
| s1b2 | Zaman Air Batu | 2.1 | Ekspedisi Ais |
| s1b3 | Zaman Prasejarah | 3.1 | Jejak Gua Purba |
| s1b4 | Mengenali Tamadun | 4.1 | Kota Tamadun |
| s1b5 | Tamadun Awal Dunia | 4.1 | Empat Sungai Tamadun |
| s1b6 | Peningkatan Tamadun Yunani dan Rom | 4.2 | Athens dan Rom |
| s1b7 | Peningkatan Tamadun India dan China | 4.2 | Empayar dan Akademi |
| s1b8 | Tamadun Islam dan Sumbangannya | 4.3 | Cahaya Madinah |

- 8 bab x 54 = **432 soalan**: 6 hentian (TP1-6) x 8 soalan + bos. Bos TP6 ialah tugasan bertulis (`buka`, dihantar kepada cikgu).
- Lampiran baharu: `tools/lukis/garismasa.js` (garis masa menegak, `sorok` untuk "?") dan `petikan()`/`duaPetikan()` dalam `sumber/_k.js`. Petikan dipapar hanya pada soalan yang menyebut "Petikan" (`lampiranUntuk` dalam index.html dan semak.html).
- Petikan rekaan dilabel "Contoh latihan" supaya tidak disangka dokumen sebenar.

## Audit (semua lulus 9 Okt)
- `node bina.js`: 8 bab bersih (petunjuk panjang jawapan, kedudukan A-D seimbang, rajah, teks pendua).
- `node tools/semak-gaya.js`: tiada isyarat.
- `node tools/panjang.js <bab>`: alat baharu untuk melihat jawapan betul paling panjang/pendek.
- `node tools/uji-penuh.js s1bN`: 54/54 untuk setiap bab (jalankan satu demi satu; 8 bab serentak menyebabkan Chromium ranap).
- Tangkapan skrin peta murid + demo guru: tiada ralat konsol.
- Pelayan ujian: `python -m http.server 8822` (8811 dipakai oleh Matematik). Playwright: `NODE_PATH=C:\Users\Hasfi\jejaktpmath\node_modules`.

## KEPUTUSAN HASFI DIPERLUKAN sebelum deploy
1. **Pangkalan data**: `konfig.js` sengaja dikosongkan (mod tanpa awan). Perlu projek Supabase baharu (jalankan `skema.sql` + migrasi) ATAU keputusan lain. Jangan guna kunci Matematik.
2. **Harga**: kini mewarisi RM23 perintis menengah rendah. Adakah Sejarah dijual berasingan atau digabung dengan Matematik/Sains?
3. **Domain**: CNAME ditetapkan `jejaktpsejarah.naikgred.com`, tetapi DNS dan repo GitHub belum dibuat.
4. **landing.html** masih landing Matematik. Perlu ditulis semula sebelum promosi.
5. **Semakan guru Sejarah sebenar**: semua soalan ditulis berdasarkan DSKP dan buku teks KSSM, tetapi belum disemak oleh guru. Item yang perlu disemak dengan buku teks semasa: tempoh epok (Bab 2), "civitas" sebagai istilah (Bab 4), dan asal-usul peperiksaan awam pada zaman Han (Bab 7).

## Fail warisan Matematik yang belum dibersihkan
`math-ext.css` (nama sahaja), `muzik.js`, `tools/uji-db.js`, `uji-e2e.js` dan `uji-tingkatan.js` (memerlukan `.env` serta projek Supabase), serta `terma.html` (semak teks Matematik).

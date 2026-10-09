"""Tampalan (9 Okt 2026): tukar salinan app Jejak TP Matematik (commit d5a305b) kepada Jejak TP Sejarah.
Id bab s{tingkatan}b{bab}. Boleh dijalankan berulang kali; setiap ganti hanya berlaku jika teks asal masih ada.
Jalankan dari akar repo: python tools/tampal-sejarah.py"""
import re, os, sys, glob

def baca(p): return open(p, encoding='utf-8').read()
def tulis(p, s): open(p, 'w', encoding='utf-8', newline='\n').write(s)

DUNIA = r'''var DUNIA={
  s1b1:{warna:"#8A5A2B",lembut:"#F6EADC",gelap:"#5E3C1A",ikon:"\u{1F4DC}",
        hentian:["\u{1F4D6}","\u{23F3}","\u{1F3FA}","\u{1F50D}","\u{2696}\u{FE0F}","\u{1F4A1}"],
        misi:"Jadi penyiasat sejarah: kenali sumber, kaji bukti dan tafsir masa silam dengan adil."},
  s1b2:{warna:"#1B6E9C",lembut:"#DCEEF8",gelap:"#124B6B",ikon:"\u{1F9CA}",
        hentian:["\u{1F30D}","\u{2744}\u{FE0F}","\u{1F9AD}","\u{1F321}\u{FE0F}","\u{1F30A}","\u{1F331}"],
        misi:"Kembara ke Zaman Air Batu dan saksikan bagaimana Pentas Sunda timbul dan tenggelam."},
  s1b3:{warna:"#9C4A1A",lembut:"#FAE6D9",gelap:"#6B3110",ikon:"\u{1FAA8}",
        hentian:["\u{1FAA8}","\u{1F5FA}\u{FE0F}","\u{1F525}","\u{1F33E}","\u{1F3DB}\u{FE0F}","\u{1F3A8}"],
        misi:"Telusuri gua dan tapak purba, dari Lenggong hingga Ban Chiang, untuk memahami manusia awal."},
  s1b4:{warna:"#6B4BB0",lembut:"#EBE5F8",gelap:"#4A337A",ikon:"\u{1F3DB}\u{FE0F}",
        hentian:["\u{1F4DA}","\u{1F54C}","\u{1F3D9}\u{FE0F}","\u{1F50E}","\u{2696}\u{FE0F}","\u{1F4A1}"],
        misi:"Fahami maksud tamadun dan ciri-ciri yang membezakan masyarakat bertamadun."},
  s1b5:{warna:"#B07A10",lembut:"#FBF0D6",gelap:"#7A540A",ikon:"\u{1F3FA}",
        hentian:["\u{1F5FA}\u{FE0F}","\u{1F33E}","\u{1F3D7}\u{FE0F}","\u{1F4CA}","\u{2696}\u{FE0F}","\u{1F4A1}"],
        misi:"Belayar di sepanjang Tigris, Nil, Indus dan Huang He untuk menemui empat tamadun awal."},
  s1b6:{warna:"#1F5FBF",lembut:"#DFE8FA",gelap:"#154285",ikon:"\u{1F3DB}\u{FE0F}",
        hentian:["\u{1F3FA}","\u{1F5F3}\u{FE0F}","\u{1F3DF}\u{FE0F}","\u{1F309}","\u{2696}\u{FE0F}","\u{1F4A1}"],
        misi:"Hadiri perhimpunan di Athens dan berjalan di bawah gerbang Rom yang megah."},
  s1b7:{warna:"#B3261E",lembut:"#FBE2E0",gelap:"#7D1A15",ikon:"\u{1F3EF}",
        hentian:["\u{1F418}","\u{1F451}","\u{1F4DC}","\u{1F393}","\u{2696}\u{FE0F}","\u{1F4A1}"],
        misi:"Ikuti perluasan kuasa empayar India dan sistem peperiksaan awam China."},
  s1b8:{warna:"#0F7B5F",lembut:"#D8F2EA",gelap:"#0A5442",ikon:"\u{1F54C}",
        hentian:["\u{1F3DC}\u{FE0F}","\u{1F319}","\u{1F91D}","\u{1F4DA}","\u{2696}\u{FE0F}","\u{1F4A1}"],
        misi:"Telusuri kemunculan Islam, ketokohan Nabi Muhammad s.a.w. dan sumbangan tamadun Islam kepada dunia."}
};'''

GANTI = [
 ('<meta name="description" content="Jejak TP Matematik: pentaksiran bilik darjah untuk Matematik KSSM Tingkatan 1 hingga 4. Setiap bidang pembelajaran menjadi satu perjalanan enam hentian yang dipetakan kepada Tahap Penguasaan 1 hingga 6.">',
  '<meta name="description" content="Jejak TP Sejarah: pentaksiran bilik darjah untuk Sejarah KSSM Tingkatan 1. Setiap bab menjadi satu perjalanan enam hentian yang dipetakan kepada Tahap Penguasaan 1 hingga 6.">'),
 ('/* ---- Rajah interaktif (Matematik) ---- */', '/* ---- Rajah interaktif (warisan Matematik; Sejarah tidak memakainya) ---- */'),
 ('<script src="interaktif.js?v=3"></script>\n', ''),
 ('<script src="conteng.js?v=1"></script>\n', ''),
 ('var JUMLAH_BAB={1:13,2:13,3:9,4:10};', 'var JUMLAH_BAB={1:8};'),
 ('/* Semua 51 bab (Tingkatan 1-5) sedia dimainkan.', '/* Sejarah Tingkatan 1 (8 bab) sedia dimainkan.'),
 ('BAB_TERSEDIA.push("m"+t+"b"+i)', 'BAB_TERSEDIA.push("s"+t+"b"+i)'),
 ('var m=/^m(\\d)b/.exec(id||""); return m?+m[1]:3;', 'var m=/^s(\\d)b/.exec(id||""); return m?+m[1]:1;'),
 ('BAB_TERSEDIA.indexOf("m"+t+"b1")', 'BAB_TERSEDIA.indexOf("s"+t+"b1")'),
 ('pasangBabMuat("m"+', 'pasangBabMuat("s"+'),
 ('tukarBabGuru("m"+', 'tukarBabGuru("s"+'),
 ('"m3b1"', '"s1b1"'),
 ('<span>Matematik Menengah Rendah</span>', '<span>Sejarah Menengah Rendah</span>'),
 ('"45 bab Matematik Tingkatan 1 hingga 4 (Bab 1-2 setiap tingkatan percuma; Premium Tingkatan 1-3 pada harga perintis RM23/tahun hingga 31 Dis 2026)"',
  '"8 bab Sejarah Tingkatan 1 (Bab 1-2 percuma; Premium menengah rendah pada harga perintis RM23/tahun hingga 31 Dis 2026)"'),
 ('Jejak TP Matematik', 'Jejak TP Sejarah'),
 ('DSKP KSSM Matematik', 'DSKP KSSM Sejarah'),
 ('Pentaksiran bilik darjah · Matematik KSSM', 'Pentaksiran bilik darjah · Sejarah KSSM'),
 ('Rekod PBD Matematik', 'Rekod PBD Sejarah'),
 ('Jom mula jejak Matematik!', 'Jom mula jejak Sejarah!'),
 ('"Matematik · Tingkatan "', '"Sejarah · Tingkatan "'),
 ('"Kelas Matematik "', '"Kelas Sejarah "'),
 ('&middot; Matematik</h1>', '&middot; Sejarah</h1>'),
 ('k.nama,"Matematik",BAB.kod', 'k.nama,"Sejarah",BAB.kod'),
 ('id="guruEyebrow">Matematik</p>', 'id="guruEyebrow">Sejarah</p>'),
]

s = baca('index.html')
for a, b in GANTI:
    s = s.replace(a, b)
# DUNIA: ganti seluruh objek
m = re.search(r'var DUNIA=\{\n.*?\n\};', s, re.S)
if not m: sys.exit('DUNIA tidak dijumpai')
s = s[:m.start()] + DUNIA + s[m.end():]
s = s.replace('var DUNIA_ASAS={warna:"#6D3BFF",lembut:"#ECE5FF",gelap:"#4B22C9",ikon:"🔢"',
              'var DUNIA_ASAS={warna:"#8A5A2B",lembut:"#F6EADC",gelap:"#5E3C1A",ikon:"\\u{1F4DC}"')
# Lampiran Sejarah: petikan sumber (figure.petikan) dipapar jika soalan menyebut "Petikan".
s = s.replace('return /\\brajah\\b/i.test(teks) ? lam : "";', 'return /\\b(rajah|petikan)\\b/i.test(teks) ? lam : "";')
tulis('index.html', s)
baki = [l for l in s.split('\n') if 'Matematik' in l]
print('index.html: baris yang masih sebut Matematik:', len(baki))
for l in baki: print('   ', l.strip()[:140])

# semak.html dan sw.js
for p in ('semak.html',):
    t = baca(p).replace('Jejak TP Matematik', 'Jejak TP Sejarah').replace('"m3b1"', '"s1b1"')
    t = t.replace('return /\\brajah\\b/i.test(teks) ? lam : "";', 'return /\\b(rajah|petikan)\\b/i.test(teks) ? lam : "";')
    tulis(p, t)
t = baca('sw.js').replace('"bank-m3b1.js?v=1"', '"bank-s1b1.js?v=1"').replace('"interaktif.js?v=3", ', '').replace('"conteng.js?v=1", ', '')
t = re.sub(r'(VERSI\s*=\s*")[^"]*(")', r'\1js-2026-10-09a\2', t)
tulis('sw.js', t)

# alat: corak id fail sumber
for p in glob.glob('tools/*.js') + ['bina.js']:
    t = baca(p)
    t2 = t.replace('/^m\\db\\d+\\.js$/', '/^s\\db\\d+\\.js$/').replace('"m3b1"', '"s1b1"').replace('m3b1', 's1b1')
    t2 = t2.replace('DSKP KSSM Matematik', 'DSKP KSSM Sejarah')
    if t2 != t: tulis(p, t2); print('dikemas kini:', p)

# manifest
t = baca('manifest.webmanifest').replace('Jejak TP Matematik', 'Jejak TP Sejarah').replace('Matematik', 'Sejarah')
tulis('manifest.webmanifest', t)
print('siap')
